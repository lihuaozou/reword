import type { ProgressMap, WordEntry, WordProgress } from "../types";
import { appendHistory } from "./storage";

export const REVIEW_INTERVALS = [
  { stage: 1, label: "5分钟", ms: 5 * 60 * 1000 },
  { stage: 2, label: "30分钟", ms: 30 * 60 * 1000 },
  { stage: 3, label: "12小时", ms: 12 * 60 * 60 * 1000 },
  { stage: 4, label: "1天", ms: 24 * 60 * 60 * 1000 },
  { stage: 5, label: "2天", ms: 2 * 24 * 60 * 60 * 1000 },
  { stage: 6, label: "4天", ms: 4 * 24 * 60 * 60 * 1000 },
  { stage: 7, label: "7天", ms: 7 * 24 * 60 * 60 * 1000 },
  { stage: 8, label: "15天", ms: 15 * 24 * 60 * 60 * 1000 },
] as const;

function intervalFor(stage: number) {
  return REVIEW_INTERVALS.find((item) => item.stage === stage) || REVIEW_INTERVALS[0];
}

function ensureLearned(progress: WordProgress, now: Date) {
  return {
    ...progress,
    learned: true,
    firstLearnedAt: progress.firstLearnedAt || now.toISOString(),
    lastReviewedAt: now.toISOString(),
  };
}

export function getNextReviewTime(stage: number, now = new Date()) {
  const interval = intervalFor(Math.max(1, Math.min(stage, 8)));
  return new Date(now.getTime() + interval.ms).toISOString();
}

export function markAsLearned(wordProgress: WordProgress, now = new Date()): WordProgress {
  const nextStage = Math.max(1, wordProgress.stage);
  const next = {
    ...ensureLearned(wordProgress, now),
    stage: nextStage,
    nextReviewAt: getNextReviewTime(nextStage, now),
  };
  return appendHistory(next, "learned", now);
}

export function markAsKnown(wordProgress: WordProgress, now = new Date()): WordProgress {
  const nextStage = Math.min(8, wordProgress.stage + 1);
  const next = {
    ...ensureLearned(wordProgress, now),
    stage: nextStage,
    knownCount: wordProgress.knownCount + 1,
    nextReviewAt: getNextReviewTime(nextStage, now),
  };
  return appendHistory(next, "known", now);
}

export function markAsFuzzy(wordProgress: WordProgress, now = new Date()): WordProgress {
  const next = {
    ...ensureLearned(wordProgress, now),
    fuzzyCount: wordProgress.fuzzyCount + 1,
    nextReviewAt: new Date(now.getTime() + 30 * 60 * 1000).toISOString(),
  };
  return appendHistory(next, "fuzzy", now);
}

export function markAsForgotten(wordProgress: WordProgress, now = new Date()): WordProgress {
  const next = {
    ...ensureLearned(wordProgress, now),
    stage: 0,
    forgottenCount: wordProgress.forgottenCount + 1,
    nextReviewAt: getNextReviewTime(1, now),
  };
  return appendHistory(next, "forgotten", now);
}

export function isDue(wordProgress?: WordProgress, now = new Date()) {
  if (!wordProgress?.learned || !wordProgress.nextReviewAt) return false;
  return new Date(wordProgress.nextReviewAt).getTime() <= now.getTime();
}

export function isMastered(wordProgress?: WordProgress) {
  return Boolean(wordProgress && wordProgress.stage >= 8 && wordProgress.correctCount >= 2);
}

export function getDueWords(words: WordEntry[], progressMap: ProgressMap, now = new Date()) {
  return words
    .filter((word) => isDue(progressMap[word.id], now))
    .sort((a, b) => {
      const aTime = new Date(progressMap[a.id]?.nextReviewAt || 0).getTime();
      const bTime = new Date(progressMap[b.id]?.nextReviewAt || 0).getTime();
      return aTime - bTime;
    });
}

export function getMasteredWords(words: WordEntry[], progressMap: ProgressMap) {
  return words.filter((word) => isMastered(progressMap[word.id]));
}

export function getWeakWords(words: WordEntry[], progressMap: ProgressMap) {
  return words.filter((word) => {
    const progress = progressMap[word.id];
    return Boolean(progress && progress.fuzzyCount > 0 && !isMastered(progress));
  });
}

export function getWrongWords(words: WordEntry[], progressMap: ProgressMap) {
  return words.filter((word) => (progressMap[word.id]?.wrongCount || 0) > 0);
}

function isSameDate(iso: string | undefined, now = new Date()) {
  if (!iso) return false;
  const date = new Date(iso);
  return (
    date.getFullYear() === now.getFullYear() &&
    date.getMonth() === now.getMonth() &&
    date.getDate() === now.getDate()
  );
}

function calculateStreak(progressMap: ProgressMap, now = new Date()) {
  const activeDays = new Set<string>();
  Object.values(progressMap).forEach((progress) => {
    progress.reviewHistory.forEach((item) => activeDays.add(item.at.slice(0, 10)));
    if (progress.firstLearnedAt) activeDays.add(progress.firstLearnedAt.slice(0, 10));
  });

  let streak = 0;
  const cursor = new Date(now);
  while (activeDays.has(cursor.toISOString().slice(0, 10))) {
    streak += 1;
    cursor.setDate(cursor.getDate() - 1);
  }
  return streak;
}

export function calculateTodayStats(words: WordEntry[], progressMap: ProgressMap, now = new Date()) {
  const dueWords = getDueWords(words, progressMap, now);
  const masteredWords = getMasteredWords(words, progressMap);
  const weakWords = getWeakWords(words, progressMap);
  const wrongWords = getWrongWords(words, progressMap);
  const learnedWords = words.filter((word) => progressMap[word.id]?.learned);
  const newLearnedToday = learnedWords.filter((word) => isSameDate(progressMap[word.id]?.firstLearnedAt, now));
  const forgottenCount = words.filter((word) => (progressMap[word.id]?.forgottenCount || 0) > 0).length;

  return {
    dueCount: dueWords.length,
    todayNewCount: newLearnedToday.length,
    totalCount: words.length,
    learnedCount: learnedWords.length,
    masteredCount: masteredWords.length,
    weakCount: weakWords.length,
    wrongCount: wrongWords.length,
    forgottenCount,
    streak: calculateStreak(progressMap, now),
    progressPercent: words.length ? Math.round((masteredWords.length / words.length) * 100) : 0,
  };
}
