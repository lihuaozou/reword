import { motivationQuotes, type MotivationQuote, type MotivationScene, type MotivationTone } from "../data/motivationQuotes";
import type { ProgressMap, UserStats, WordEntry } from "../types";
import { getTodayLearningCounts } from "./checkin";
import { toLocalDateKey } from "./date";
import { getDueWords } from "./scheduler";

export type MotivationMode = "gentle" | "hard" | "teacher" | "mixed";

export type MotivationSettings = {
  enabled: boolean;
  launchModal: boolean;
  tone: MotivationMode;
  intensity: 1 | 2 | 3;
  showCountdown: boolean;
  wrongAnswerMotivation: boolean;
  checkinMotivation: boolean;
  missedTaskReminder: boolean;
};

export const defaultMotivationSettings: MotivationSettings = {
  enabled: true,
  launchModal: true,
  tone: "mixed",
  intensity: 2,
  showCountdown: true,
  wrongAnswerMotivation: true,
  checkinMotivation: true,
  missedTaskReminder: true,
};

export type DailyContractState = {
  date: string | null;
};

export const defaultDailyContract: DailyContractState = {
  date: null,
};

function toneMatches(quote: MotivationQuote, mode: MotivationMode) {
  if (mode === "mixed") return true;
  if (mode === "gentle") return quote.tone === "gentle" || quote.tone === "morning" || quote.tone === "night";
  if (mode === "hard") return quote.tone === "hard" || quote.tone === "exam" || quote.tone === "comeback";
  return quote.tone === "teacher" || quote.tone === "exam" || quote.tone === "mistake";
}

function daySeed(now = new Date()) {
  return Math.floor(now.getTime() / 86_400_000);
}

export function normalizeMotivationSettings(settings?: Partial<MotivationSettings>): MotivationSettings {
  return {
    ...defaultMotivationSettings,
    ...settings,
  };
}

export function getMotivationByScene(scene: MotivationScene, settings?: Partial<MotivationSettings>, now = new Date()) {
  const nextSettings = normalizeMotivationSettings(settings);
  const candidates = motivationQuotes.filter((quote) => quote.scene === scene && quote.intensity <= nextSettings.intensity && toneMatches(quote, nextSettings.tone));
  const fallback = motivationQuotes.filter((quote) => quote.scene === scene);
  const pool = candidates.length ? candidates : fallback.length ? fallback : motivationQuotes;
  return pool[daySeed(now) % pool.length];
}

export function formatQuoteText(quote: MotivationQuote, replacements: Record<string, string | number> = {}) {
  return Object.entries(replacements).reduce((text, [key, value]) => text.split(key).join(String(value)), quote.text);
}

export function getStreakPressureMessage(streak: number) {
  if (streak >= 30) return "这不是热血，这是习惯。";
  if (streak >= 14) return "你已经跑完一个记忆周期，继续滚动复习。";
  if (streak >= 7) return "已经坚持一周了，现在断掉太亏。";
  if (streak >= 3) return `你已经连续 ${streak} 天没有断，今天别让它归零。`;
  return "今天先把最小任务兑现。";
}

export function getMotivationReminder(words: WordEntry[], progressMap: ProgressMap, stats: UserStats, settings?: Partial<MotivationSettings>, now = new Date()) {
  const nextSettings = normalizeMotivationSettings(settings);
  if (!nextSettings.enabled || !nextSettings.missedTaskReminder) return null;

  const today = toLocalDateKey(now);
  const counts = getTodayLearningCounts(words, progressMap, stats, now);
  const dueCount = getDueWords(words, progressMap, now).length;
  const accuracy = stats.totalQuizCount ? Math.round((stats.totalCorrectCount / stats.totalQuizCount) * 100) : 0;

  if (counts.newWords === 0 && counts.reviewedWords === 0 && counts.studyMinutes === 0) {
    return "今天还没开始。先背 5 个词，不要让这一天空过去。";
  }
  if (stats.lastCheckInDate && stats.lastCheckInDate !== today && stats.currentStreak > 0) {
    return "断了不可怕，可怕的是断了以后装作没事。";
  }
  if (stats.totalWrongCount >= 10 && stats.totalWrongCount > stats.totalCorrectCount / 2) {
    return "错题不是丢脸，是最便宜的提分机会。";
  }
  if (counts.studyMinutes > 0 && counts.studyMinutes < 15) {
    return "今天已经开始了，再补几分钟就够到最小任务。";
  }
  if (dueCount >= 20) {
    return "到期复习不是建议，是你记忆曲线上的警报。";
  }
  if (stats.currentStreak >= 3) {
    return getStreakPressureMessage(stats.currentStreak);
  }
  if (accuracy >= 85 && stats.totalQuizCount >= 20) {
    return "正确率不错，继续用测试把熟悉变成稳定。";
  }
  return null;
}

export function isDailyContractCompleted(words: WordEntry[], progressMap: ProgressMap, stats: UserStats, now = new Date()) {
  const counts = getTodayLearningCounts(words, progressMap, stats, now);
  return counts.newWords >= 10 && counts.reviewedWords >= 20 && counts.studyMinutes >= 15;
}

export function getDailyContractProgress(words: WordEntry[], progressMap: ProgressMap, stats: UserStats, now = new Date()) {
  const counts = getTodayLearningCounts(words, progressMap, stats, now);
  return {
    newWords: { current: counts.newWords, target: 10 },
    reviewWords: { current: counts.reviewedWords, target: 20 },
    minutes: { current: counts.studyMinutes, target: 15 },
  };
}
