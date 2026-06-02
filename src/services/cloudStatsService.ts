import { requireSupabase } from "../lib/supabase";
import type { AudioSettings, CheckInRecord, InventoryItem, RewardRecord, StudySession, UserStats } from "../types";
import { createDefaultUserStats, mergeUserStats } from "../utils/storage";
import { getLevel } from "../utils/rewards";

function nowIso() {
  return new Date().toISOString();
}

async function replaceRows(table: string, userId: string, rows: Record<string, unknown>[]) {
  const client = requireSupabase();
  const deleted = await client.from(table).delete().eq("user_id", userId);
  if (deleted.error) throw deleted.error;
  if (!rows.length) return;
  const inserted = await client.from(table).insert(rows);
  if (inserted.error) throw inserted.error;
}

function toStatsRow(userId: string, stats: UserStats) {
  return {
    user_id: userId,
    total_study_days: stats.totalStudyDays,
    current_streak: stats.currentStreak,
    longest_streak: stats.longestStreak,
    total_study_minutes: stats.totalStudyMinutes,
    total_words_learned: stats.totalWordsLearned,
    total_words_reviewed: stats.totalWordsReviewed,
    total_quiz_count: stats.totalQuizCount,
    total_correct_count: stats.totalCorrectCount,
    total_wrong_count: stats.totalWrongCount,
    total_xp: stats.totalXp,
    level: stats.level || getLevel(stats.totalXp),
    coins: stats.coins,
    diamonds: stats.diamonds,
    monster_points: stats.monsterPoints,
    defeated_monsters: stats.defeatedMonsters,
    raw_stats: stats,
    updated_at: nowIso(),
  };
}

function toSettingsRow(userId: string, stats: UserStats) {
  return {
    user_id: userId,
    default_accent: stats.audioSettings.defaultAccent,
    auto_play_on_study: stats.audioSettings.autoPlayOnStudy,
    auto_play_on_recall: stats.audioSettings.autoPlayOnRecall,
    speech_rate: stats.audioSettings.speechRate,
    repeat_count: stats.audioSettings.repeatCount,
    theme: stats.equippedTheme,
    updated_at: nowIso(),
  };
}

function toStudySessionRows(userId: string, sessions: StudySession[]) {
  return sessions.map((session) => ({
    user_id: userId,
    mode: session.mode,
    unit_id: session.unitId || null,
    started_at: session.startedAt,
    ended_at: session.endedAt,
    duration_seconds: session.durationSeconds,
    word_count: session.wordCount,
    correct_count: session.correctCount ?? null,
    wrong_count: session.wrongCount ?? null,
    created_at: session.startedAt,
  }));
}

function toCheckInRows(userId: string, records: CheckInRecord[]) {
  return records.map((record) => ({
    user_id: userId,
    date: record.date,
    type: "checkin",
    streak_day: record.streakDay,
    reward_xp: record.rewardXp,
    reward_coins: record.rewardCoins,
    created_at: record.checkedAt,
  }));
}

function toRewardRows(userId: string, rewards: RewardRecord[]) {
  return rewards.map((reward) => ({
    user_id: userId,
    type: reward.type,
    title: reward.title,
    description: reward.description,
    xp: reward.xp,
    coins: reward.coins,
    diamonds: 0,
    created_at: reward.createdAt,
  }));
}

function toAchievementRows(userId: string, achievementIds: string[]) {
  return Array.from(new Set(achievementIds)).map((achievementId) => ({
    user_id: userId,
    achievement_id: achievementId,
    unlocked_at: nowIso(),
  }));
}

function toInventoryRows(userId: string, inventory: InventoryItem[]) {
  return inventory.map((item) => ({
    user_id: userId,
    item_id: item.itemId,
    count: item.count,
    obtained_at: item.obtainedAt,
    updated_at: nowIso(),
  }));
}

function readNumber(value: unknown, fallback = 0) {
  const number = Number(value);
  return Number.isFinite(number) ? number : fallback;
}

function fromStatsRow(row: any) {
  const raw = row?.raw_stats && typeof row.raw_stats === "object" ? (row.raw_stats as Partial<UserStats>) : {};
  return mergeUserStats({
    ...raw,
    totalStudyDays: readNumber(row?.total_study_days, raw.totalStudyDays),
    currentStreak: readNumber(row?.current_streak, raw.currentStreak),
    longestStreak: readNumber(row?.longest_streak, raw.longestStreak),
    totalStudyMinutes: readNumber(row?.total_study_minutes, raw.totalStudyMinutes),
    totalWordsLearned: readNumber(row?.total_words_learned, raw.totalWordsLearned),
    totalWordsReviewed: readNumber(row?.total_words_reviewed, raw.totalWordsReviewed),
    totalQuizCount: readNumber(row?.total_quiz_count, raw.totalQuizCount),
    totalCorrectCount: readNumber(row?.total_correct_count, raw.totalCorrectCount),
    totalWrongCount: readNumber(row?.total_wrong_count, raw.totalWrongCount),
    totalXp: readNumber(row?.total_xp, raw.totalXp),
    level: readNumber(row?.level, raw.level || 1),
    coins: readNumber(row?.coins, raw.coins),
    diamonds: readNumber(row?.diamonds, raw.diamonds),
    monsterPoints: readNumber(row?.monster_points, raw.monsterPoints),
    defeatedMonsters: readNumber(row?.defeated_monsters, raw.defeatedMonsters),
  });
}

function fromSettingsRow(row: any, fallback: AudioSettings): AudioSettings {
  if (!row) return fallback;
  return {
    autoPlayOnStudy: Boolean(row.auto_play_on_study),
    autoPlayOnRecall: Boolean(row.auto_play_on_recall),
    defaultAccent: row.default_accent === "uk" ? "uk" : "us",
    speechRate: [0.8, 0.9, 1, 1.1].includes(Number(row.speech_rate)) ? (Number(row.speech_rate) as AudioSettings["speechRate"]) : fallback.speechRate,
    repeatCount: Number(row.repeat_count) === 2 ? 2 : 1,
  };
}

function isStudyMode(mode: string): mode is StudySession["mode"] {
  return ["study", "recall", "quiz", "review", "total"].includes(mode);
}

export async function uploadUserStats(userId: string, stats: UserStats) {
  const client = requireSupabase();
  const statsResult = await client.from("user_stats").upsert(toStatsRow(userId, stats), { onConflict: "user_id" });
  if (statsResult.error) throw statsResult.error;

  const settingsResult = await client.from("user_settings").upsert(toSettingsRow(userId, stats), { onConflict: "user_id" });
  if (settingsResult.error) throw settingsResult.error;

  await replaceRows("study_sessions", userId, toStudySessionRows(userId, stats.studySessions));
  await replaceRows("checkins", userId, toCheckInRows(userId, stats.checkInHistory));
  await replaceRows("rewards", userId, toRewardRows(userId, stats.rewardHistory));
  await replaceRows("achievements", userId, toAchievementRows(userId, stats.checkedAchievementIds));
  await replaceRows("inventory", userId, toInventoryRows(userId, stats.inventory));
}

export async function downloadUserStats(userId: string): Promise<UserStats> {
  const client = requireSupabase();
  const [statsResult, settingsResult, sessionsResult, checkinsResult, rewardsResult, achievementsResult, inventoryResult] = await Promise.all([
    client.from("user_stats").select("*").eq("user_id", userId).maybeSingle(),
    client.from("user_settings").select("*").eq("user_id", userId).maybeSingle(),
    client.from("study_sessions").select("*").eq("user_id", userId).order("started_at", { ascending: false }),
    client.from("checkins").select("*").eq("user_id", userId).order("date", { ascending: false }),
    client.from("rewards").select("*").eq("user_id", userId).order("created_at", { ascending: false }),
    client.from("achievements").select("*").eq("user_id", userId),
    client.from("inventory").select("*").eq("user_id", userId),
  ]);

  [statsResult, settingsResult, sessionsResult, checkinsResult, rewardsResult, achievementsResult, inventoryResult].forEach((result) => {
    if (result.error) throw result.error;
  });

  const base = statsResult.data ? fromStatsRow(statsResult.data) : createDefaultUserStats();
  const studySessions: StudySession[] = (sessionsResult.data || []).map((row: any) => ({
    id: row.id,
    date: String(row.started_at || row.created_at).slice(0, 10),
    startedAt: row.started_at,
    endedAt: row.ended_at,
    durationSeconds: readNumber(row.duration_seconds),
    mode: isStudyMode(row.mode) ? row.mode : "study",
    unitId: row.unit_id || undefined,
    wordCount: readNumber(row.word_count),
    correctCount: row.correct_count == null ? undefined : readNumber(row.correct_count),
    wrongCount: row.wrong_count == null ? undefined : readNumber(row.wrong_count),
  }));

  const checkInHistory: CheckInRecord[] = (checkinsResult.data || [])
    .filter((row: any) => row.type === "checkin")
    .map((row: any) => ({
      date: row.date,
      checkedAt: row.created_at,
      streakDay: readNumber(row.streak_day, 1),
      rewardXp: readNumber(row.reward_xp),
      rewardCoins: readNumber(row.reward_coins),
    }));

  const rewardHistory: RewardRecord[] = (rewardsResult.data || []).map((row: any) => ({
    id: row.id,
    type: row.type,
    title: row.title,
    description: row.description || "",
    xp: readNumber(row.xp),
    coins: readNumber(row.coins),
    createdAt: row.created_at,
  }));

  const checkedAchievementIds = (achievementsResult.data || []).map((row: any) => row.achievement_id).filter(Boolean);
  const inventory: InventoryItem[] = (inventoryResult.data || []).map((row: any) => ({
    itemId: row.item_id,
    count: readNumber(row.count, 1),
    obtainedAt: row.obtained_at,
  }));

  return mergeUserStats({
    ...base,
    audioSettings: fromSettingsRow(settingsResult.data, base.audioSettings),
    equippedTheme: settingsResult.data?.theme || base.equippedTheme,
    studySessions,
    checkInHistory,
    rewardHistory,
    checkedAchievementIds,
    inventory,
  });
}

export async function hasCloudStats(userId: string) {
  const client = requireSupabase();
  const { count, error } = await client.from("user_stats").select("id", { count: "exact", head: true }).eq("user_id", userId);
  if (error) throw error;
  return Boolean(count && count > 0);
}
