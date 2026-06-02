import type { PendingSyncItem, ProgressMap, SyncMode, SyncSnapshot, UserStats, WordProgress } from "../types";
import { getProgress, getUserStats, saveProgress, saveUserStats } from "../utils/storage";
import { downloadWordProgress, hasCloudProgress, uploadWordProgress } from "./cloudProgressService";
import { downloadUserStats, hasCloudStats, uploadUserStats } from "./cloudStatsService";

const PENDING_SYNC_KEY = "reword-pending-sync-v1";
const SYNC_META_KEY = "reword-sync-meta-v1";

export type SyncMetadata = {
  userId?: string;
  lastSyncAt?: string;
  lastMode?: SyncMode;
  lastError?: string;
};

function canUseStorage() {
  return typeof window !== "undefined" && "localStorage" in window;
}

function createId(prefix: string) {
  const random = typeof crypto !== "undefined" && "randomUUID" in crypto ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
  return `${prefix}-${random}`;
}

function readJson<T>(key: string, fallback: T): T {
  if (!canUseStorage()) return fallback;
  const raw = window.localStorage.getItem(key);
  if (!raw) return fallback;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

function writeJson(key: string, value: unknown) {
  if (!canUseStorage()) return;
  window.localStorage.setItem(key, JSON.stringify(value));
}

export function getPendingSyncQueue() {
  return readJson<PendingSyncItem[]>(PENDING_SYNC_KEY, []);
}

export function enqueuePendingSync(type: PendingSyncItem["type"], payload: unknown = {}) {
  const queue = getPendingSyncQueue();
  const next = [
    ...queue,
    {
      id: createId("sync"),
      type,
      payload,
      createdAt: new Date().toISOString(),
      retryCount: 0,
    },
  ].slice(-100);
  writeJson(PENDING_SYNC_KEY, next);
  return next;
}

export function clearPendingSyncQueue() {
  writeJson(PENDING_SYNC_KEY, []);
}

export function getSyncMetadata() {
  return readJson<SyncMetadata>(SYNC_META_KEY, {});
}

function saveSyncMetadata(metadata: SyncMetadata) {
  writeJson(SYNC_META_KEY, metadata);
}

export function getLocalSyncSnapshot(): SyncSnapshot {
  return {
    progress: getProgress(),
    userStats: getUserStats(),
    exportedAt: new Date().toISOString(),
    schemaVersion: 1,
  };
}

export function applyLocalSyncSnapshot(snapshot: SyncSnapshot) {
  saveProgress(snapshot.progress);
  saveUserStats(snapshot.userStats);
}

export function hasLocalLearningData(snapshot = getLocalSyncSnapshot()) {
  const stats = snapshot.userStats;
  return (
    Object.keys(snapshot.progress).length > 0 ||
    stats.totalWordsLearned > 0 ||
    stats.totalWordsReviewed > 0 ||
    stats.totalQuizCount > 0 ||
    stats.totalStudyMinutes > 0 ||
    stats.rewardHistory.length > 0 ||
    stats.studySessions.length > 0 ||
    stats.checkInHistory.length > 0
  );
}

export async function hasCloudLearningData(userId: string) {
  const [progress, stats] = await Promise.all([hasCloudProgress(userId), hasCloudStats(userId)]);
  return progress || stats;
}

export async function uploadLocalSnapshot(userId: string, snapshot = getLocalSyncSnapshot()) {
  await uploadWordProgress(userId, snapshot.progress);
  await uploadUserStats(userId, snapshot.userStats);
  const metadata = { userId, lastSyncAt: new Date().toISOString(), lastMode: "upload" as const };
  saveSyncMetadata(metadata);
  clearPendingSyncQueue();
  return metadata;
}

export async function downloadCloudSnapshot(userId: string): Promise<SyncSnapshot> {
  const [progress, userStats] = await Promise.all([downloadWordProgress(userId), downloadUserStats(userId)]);
  return {
    progress,
    userStats,
    exportedAt: new Date().toISOString(),
    schemaVersion: 1,
  };
}

function progressTime(progress?: WordProgress) {
  if (!progress) return 0;
  const historyTime = progress.reviewHistory.reduce((max, item) => Math.max(max, new Date(item.at).getTime()), 0);
  return Math.max(
    historyTime,
    progress.lastReviewedAt ? new Date(progress.lastReviewedAt).getTime() : 0,
    progress.nextReviewAt ? new Date(progress.nextReviewAt).getTime() : 0,
    progress.firstLearnedAt ? new Date(progress.firstLearnedAt).getTime() : 0
  );
}

function mergeProgress(local: ProgressMap, cloud: ProgressMap): ProgressMap {
  const wordIds = new Set([...Object.keys(local), ...Object.keys(cloud)]);
  const merged: ProgressMap = {};
  wordIds.forEach((wordId) => {
    const localProgress = local[wordId];
    const cloudProgress = cloud[wordId];
    if (!localProgress) {
      merged[wordId] = cloudProgress;
      return;
    }
    if (!cloudProgress) {
      merged[wordId] = localProgress;
      return;
    }
    const selected = progressTime(localProgress) >= progressTime(cloudProgress) ? localProgress : cloudProgress;
    const reviewHistory = [...localProgress.reviewHistory, ...cloudProgress.reviewHistory]
      .sort((a, b) => new Date(a.at).getTime() - new Date(b.at).getTime())
      .filter((item, index, list) => index === 0 || `${item.action}-${item.at}-${item.stage}` !== `${list[index - 1].action}-${list[index - 1].at}-${list[index - 1].stage}`)
      .slice(-200);
    merged[wordId] = { ...selected, reviewHistory };
  });
  return merged;
}

function uniqueBy<T>(items: T[], key: (item: T) => string) {
  const map = new Map<string, T>();
  items.forEach((item) => {
    map.set(key(item), item);
  });
  return Array.from(map.values());
}

function latestDateValue(...values: Array<string | null | undefined>) {
  const sorted = values.filter((value): value is string => Boolean(value)).sort();
  return sorted.length ? sorted[sorted.length - 1] : null;
}

function mergeStats(local: UserStats, cloud: UserStats): UserStats {
  const dailyRewardCaps = { ...cloud.dailyRewardCaps };
  Object.entries(local.dailyRewardCaps).forEach(([date, cap]) => {
    const current = dailyRewardCaps[date] || { xp: 0, coins: 0, monsterPoints: 0 };
    dailyRewardCaps[date] = {
      xp: Math.max(current.xp, cap.xp),
      coins: Math.max(current.coins, cap.coins),
      monsterPoints: Math.max(current.monsterPoints, cap.monsterPoints),
    };
  });

  return {
    ...local,
    totalStudyDays: Math.max(local.totalStudyDays, cloud.totalStudyDays),
    currentStreak: Math.max(local.currentStreak, cloud.currentStreak),
    longestStreak: Math.max(local.longestStreak, cloud.longestStreak),
    signInStreak: Math.max(local.signInStreak, cloud.signInStreak),
    lastSignInDate: latestDateValue(local.lastSignInDate, cloud.lastSignInDate),
    lastCheckInDate: latestDateValue(local.lastCheckInDate, cloud.lastCheckInDate),
    totalStudyMinutes: Math.max(local.totalStudyMinutes, cloud.totalStudyMinutes),
    totalWordsLearned: Math.max(local.totalWordsLearned, cloud.totalWordsLearned),
    totalWordsReviewed: Math.max(local.totalWordsReviewed, cloud.totalWordsReviewed),
    totalQuizCount: Math.max(local.totalQuizCount, cloud.totalQuizCount),
    totalCorrectCount: Math.max(local.totalCorrectCount, cloud.totalCorrectCount),
    totalWrongCount: Math.max(local.totalWrongCount, cloud.totalWrongCount),
    totalXp: Math.max(local.totalXp, cloud.totalXp),
    level: Math.max(local.level, cloud.level),
    coins: Math.max(local.coins, cloud.coins),
    diamonds: Math.max(local.diamonds, cloud.diamonds),
    monsterPoints: Math.max(local.monsterPoints, cloud.monsterPoints),
    defeatedMonsters: Math.max(local.defeatedMonsters, cloud.defeatedMonsters),
    unlockedItems: Array.from(new Set([...local.unlockedItems, ...cloud.unlockedItems])),
    checkedAchievementIds: Array.from(new Set([...local.checkedAchievementIds, ...cloud.checkedAchievementIds])),
    defeatedWordIds: Array.from(new Set([...local.defeatedWordIds, ...cloud.defeatedWordIds])),
    defeatedBossIds: Array.from(new Set([...local.defeatedBossIds, ...cloud.defeatedBossIds])),
    dailyRewardCaps,
    checkInHistory: uniqueBy([...local.checkInHistory, ...cloud.checkInHistory], (item) => item.date).sort((a, b) => b.date.localeCompare(a.date)).slice(0, 365),
    studySessions: uniqueBy([...local.studySessions, ...cloud.studySessions], (item) => `${item.startedAt}-${item.mode}-${item.unitId || ""}`).slice(0, 500),
    rewardHistory: uniqueBy([...local.rewardHistory, ...cloud.rewardHistory], (item) => `${item.createdAt}-${item.title}`).sort((a, b) => b.createdAt.localeCompare(a.createdAt)).slice(0, 200),
    inventory: uniqueBy([...local.inventory, ...cloud.inventory], (item) => item.itemId).map((item) => {
      const localItem = local.inventory.find((value) => value.itemId === item.itemId);
      const cloudItem = cloud.inventory.find((value) => value.itemId === item.itemId);
      return {
        ...item,
        count: (localItem?.count || 0) + (cloudItem?.count || 0),
        obtainedAt: [localItem?.obtainedAt, cloudItem?.obtainedAt].filter(Boolean).sort()[0] || item.obtainedAt,
      };
    }),
    audioSettings: cloud.audioSettings,
    equippedTheme: cloud.equippedTheme || local.equippedTheme,
    equippedAvatar: cloud.equippedAvatar || local.equippedAvatar,
  };
}

export function mergeSnapshots(local: SyncSnapshot, cloud: SyncSnapshot): SyncSnapshot {
  return {
    progress: mergeProgress(local.progress, cloud.progress),
    userStats: mergeStats(local.userStats, cloud.userStats),
    exportedAt: new Date().toISOString(),
    schemaVersion: 1,
  };
}

export async function runCloudSync(userId: string, mode: SyncMode, snapshot = getLocalSyncSnapshot()) {
  try {
    if (mode === "upload") {
      await uploadLocalSnapshot(userId, snapshot);
      return snapshot;
    }

    const cloudSnapshot = await downloadCloudSnapshot(userId);
    if (mode === "download") {
      applyLocalSyncSnapshot(cloudSnapshot);
      saveSyncMetadata({ userId, lastSyncAt: new Date().toISOString(), lastMode: "download" });
      clearPendingSyncQueue();
      return cloudSnapshot;
    }

    const merged = mergeSnapshots(snapshot, cloudSnapshot);
    applyLocalSyncSnapshot(merged);
    await uploadLocalSnapshot(userId, merged);
    saveSyncMetadata({ userId, lastSyncAt: new Date().toISOString(), lastMode: "merge" });
    return merged;
  } catch (error) {
    saveSyncMetadata({ ...getSyncMetadata(), lastError: error instanceof Error ? error.message : "同步失败" });
    throw error;
  }
}
