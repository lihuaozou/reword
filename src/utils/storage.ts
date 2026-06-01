import type { ProgressMap, ReviewAction, UserStats, WordProgress } from "../types";
import { toLocalDateKey } from "./date";

const STORAGE_KEY = "reword-progress-v1";
const USER_STATS_KEY = "reword-user-stats-v1";

export function createEmptyProgress(wordId: string): WordProgress {
  return {
    wordId,
    learned: false,
    stage: 0,
    knownCount: 0,
    fuzzyCount: 0,
    forgottenCount: 0,
    correctCount: 0,
    wrongCount: 0,
    reviewHistory: [],
  };
}

export function appendHistory(progress: WordProgress, action: ReviewAction, at = new Date()) {
  return {
    ...progress,
    reviewHistory: [
      ...progress.reviewHistory,
      {
        action,
        at: at.toISOString(),
        stage: progress.stage,
      },
    ].slice(-200),
  };
}

function canUseStorage() {
  return typeof window !== "undefined" && "localStorage" in window;
}

export function getProgress(): ProgressMap {
  if (!canUseStorage()) return {};
  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) return {};
  try {
    const parsed = JSON.parse(raw) as ProgressMap;
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

export function saveProgress(progress: ProgressMap) {
  if (!canUseStorage()) return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

export function updateWordProgress(wordId: string, updater: (progress: WordProgress) => WordProgress) {
  const progressMap = getProgress();
  const current = progressMap[wordId] || createEmptyProgress(wordId);
  const next = updater(current);
  const updated = { ...progressMap, [wordId]: next };
  saveProgress(updated);
  return updated;
}

export function resetAllProgress() {
  if (!canUseStorage()) return;
  window.localStorage.removeItem(STORAGE_KEY);
  window.localStorage.removeItem(USER_STATS_KEY);
}

export function exportProgressToJson() {
  return JSON.stringify({ progress: getProgress(), userStats: getUserStats() }, null, 2);
}

export function importProgressFromJson(json: string) {
  const parsed = JSON.parse(json) as ProgressMap;
  if (!parsed || typeof parsed !== "object") {
    throw new Error("进度文件格式不正确");
  }
  const payload = parsed as ProgressMap & { progress?: ProgressMap; userStats?: UserStats };
  const progress = payload.progress || parsed;
  saveProgress(progress);
  if (payload.userStats) saveUserStats(mergeUserStats(payload.userStats));
  return progress;
}

export function createDefaultUserStats(): UserStats {
  return {
    totalStudyDays: 0,
    currentStreak: 0,
    longestStreak: 0,
    signInStreak: 0,
    lastSignInDate: null,
    lastCheckInDate: null,
    totalStudyMinutes: 0,
    totalWordsLearned: 0,
    totalWordsReviewed: 0,
    totalQuizCount: 0,
    totalCorrectCount: 0,
    totalWrongCount: 0,
    totalXp: 0,
    level: 1,
    coins: 0,
    diamonds: 0,
    monsterPoints: 0,
    defeatedMonsters: 0,
    unlockedItems: ["theme-default", "avatar-default"],
    equippedTheme: "theme-default",
    equippedAvatar: "avatar-default",
    checkedAchievementIds: [],
    defeatedWordIds: [],
    defeatedBossIds: [],
    dailyRewardCaps: {},
    checkInHistory: [],
    studySessions: [],
    rewardHistory: [],
    inventory: [],
    audioSettings: {
      autoPlayOnStudy: false,
      autoPlayOnRecall: false,
      defaultAccent: "us",
      speechRate: 1,
      repeatCount: 1,
    },
  };
}

function mergeUserStats(stats: Partial<UserStats>): UserStats {
  const defaults = createDefaultUserStats();
  return {
    ...defaults,
    ...stats,
    audioSettings: { ...defaults.audioSettings, ...stats.audioSettings },
    dailyRewardCaps: stats.dailyRewardCaps || {},
    checkInHistory: stats.checkInHistory || [],
    studySessions: stats.studySessions || [],
    rewardHistory: stats.rewardHistory || [],
    inventory: stats.inventory || [],
    unlockedItems: stats.unlockedItems || defaults.unlockedItems,
    checkedAchievementIds: stats.checkedAchievementIds || [],
    defeatedWordIds: stats.defeatedWordIds || [],
    defeatedBossIds: stats.defeatedBossIds || [],
    level: Math.floor(Math.sqrt((stats.totalXp || 0) / 100)) + 1,
  };
}

export function getUserStats(): UserStats {
  if (!canUseStorage()) return createDefaultUserStats();
  const raw = window.localStorage.getItem(USER_STATS_KEY);
  if (!raw) return createDefaultUserStats();
  try {
    return mergeUserStats(JSON.parse(raw) as Partial<UserStats>);
  } catch {
    return createDefaultUserStats();
  }
}

export function saveUserStats(stats: UserStats) {
  if (!canUseStorage()) return;
  window.localStorage.setItem(USER_STATS_KEY, JSON.stringify({ ...stats, level: Math.floor(Math.sqrt(stats.totalXp / 100)) + 1 }));
}

export function updateUserStats(updater: (stats: UserStats) => UserStats) {
  const current = getUserStats();
  const next = updater(current);
  saveUserStats(next);
  return next;
}

export function getTodayCap(stats: UserStats) {
  const today = toLocalDateKey();
  return stats.dailyRewardCaps[today] || { xp: 0, coins: 0, monsterPoints: 0 };
}
