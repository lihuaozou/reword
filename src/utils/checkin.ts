import type { ProgressMap, UserStats, WordEntry } from "../types";
import { addDays, isToday, isYesterday, toLocalDateKey } from "./date";
import { applyReward } from "./rewards";
import { isDue } from "./scheduler";

export function getTodayLearningCounts(words: WordEntry[], progressMap: ProgressMap, stats: UserStats, now = new Date()) {
  const today = toLocalDateKey(now);
  const newWords = words.filter((word) => progressMap[word.id]?.firstLearnedAt?.slice(0, 10) === today).length;
  const reviewedWords = words.filter((word) => progressMap[word.id]?.lastReviewedAt?.slice(0, 10) === today && progressMap[word.id]?.learned).length;
  const studySeconds = stats.studySessions.filter((session) => session.date === today).reduce((sum, session) => sum + session.durationSeconds, 0);
  const testCount = stats.studySessions
    .filter((session) => session.date === today && session.mode === "quiz" && session.wordCount >= 20)
    .reduce((sum, session) => sum + session.wordCount, 0);
  const dueLeft = words.filter((word) => isDue(progressMap[word.id], now)).length;
  return { newWords, reviewedWords, studyMinutes: Math.floor(studySeconds / 60), testCount, dueLeft };
}

export function getCheckInTasks(words: WordEntry[], progressMap: ProgressMap, stats: UserStats, now = new Date()) {
  const counts = getTodayLearningCounts(words, progressMap, stats, now);
  return [
    { id: "new-words", title: "学习 10 个新单词", current: counts.newWords, target: 10, reward: "XP 30 / 金币 12" },
    { id: "review", title: "完成 20 个复习", current: counts.reviewedWords, target: 20, reward: "XP 40 / 金币 16" },
    { id: "quiz", title: "完成一次 20 题测试", current: counts.testCount, target: 20, reward: "XP 35 / 金币 10" },
    { id: "time", title: "学习满 15 分钟", current: counts.studyMinutes, target: 15, reward: "XP 20 / 金币 10" },
  ];
}

export function canCheckIn(words: WordEntry[], progressMap: ProgressMap, stats: UserStats, now = new Date()) {
  if (isToday(stats.lastCheckInDate, now)) return false;
  return getCheckInTasks(words, progressMap, stats, now).some((task) => task.current >= task.target);
}

export function signInToday(stats: UserStats, now = new Date()) {
  const today = toLocalDateKey(now);
  if (isToday(stats.lastSignInDate, now)) return stats;
  const streak = isYesterday(stats.lastSignInDate, now) ? stats.signInStreak + 1 : 1;
  let coins = 2;
  let xp = 5;
  let itemId: string | undefined;
  if (streak % 30 === 0) {
    coins += 80;
    itemId = "theme-morning";
  } else if (streak % 14 === 0) {
    coins += 30;
    itemId = "tool-review-boost";
  } else if (streak % 7 === 0) {
    coins += 15;
    itemId = "tool-focus-card";
  } else if (streak % 3 === 0) {
    coins += 5;
  }
  return applyReward(
    { ...stats, signInStreak: streak, lastSignInDate: today },
    {
      type: "signin",
      title: "每日签到",
      description: `连续签到 ${streak} 天`,
      xp,
      coins,
      itemId,
      bypassDailyCap: true,
    }
  );
}

export function checkInToday(stats: UserStats, now = new Date()) {
  const today = toLocalDateKey(now);
  if (isToday(stats.lastCheckInDate, now)) return stats;
  const streak = isYesterday(stats.lastCheckInDate, now) ? stats.currentStreak + 1 : 1;
  let coins = 20;
  let xp = 50;
  let diamonds = 0;
  let itemId: string | undefined;
  if ([7, 14, 30, 100].includes(streak)) diamonds += 1;
  if (streak === 3) coins += 10;
  if (streak === 7) {
    coins += 30;
    itemId = "badge-seven-days";
  }
  if (streak === 14) {
    xp += 80;
    itemId = "tool-review-boost";
  }
  if (streak === 30) {
    xp += 200;
    coins += 80;
    itemId = "avatar-thirty-days";
  }
  if (streak === 100) {
    xp += 800;
    coins += 300;
    itemId = "badge-longterm";
  }

  const next = applyReward(
    {
      ...stats,
      currentStreak: streak,
      longestStreak: Math.max(stats.longestStreak, streak),
      totalStudyDays: stats.checkInHistory.some((record) => record.date === today) ? stats.totalStudyDays : stats.totalStudyDays + 1,
      lastCheckInDate: today,
      checkInHistory: [
        {
          date: today,
          checkedAt: now.toISOString(),
          streakDay: streak,
          rewardCoins: coins,
          rewardXp: xp,
          rewardItem: itemId,
        },
        ...stats.checkInHistory,
      ].slice(0, 365),
    },
    {
      type: "checkin",
      title: "完成今日打卡",
      description: `连续打卡 ${streak} 天`,
      xp,
      coins,
      diamonds,
      itemId,
      bypassDailyCap: true,
    }
  );
  return next;
}

export function getMonthCheckInDays(stats: UserStats, now = new Date()) {
  const first = new Date(now.getFullYear(), now.getMonth(), 1);
  const last = new Date(now.getFullYear(), now.getMonth() + 1, 0);
  const checked = new Set(stats.checkInHistory.map((record) => record.date));
  return Array.from({ length: last.getDate() }, (_, index) => {
    const date = addDays(first, index);
    const key = toLocalDateKey(date);
    return { date: key, day: index + 1, checked: checked.has(key), today: key === toLocalDateKey(now) };
  });
}
