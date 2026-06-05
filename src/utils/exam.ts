import { EXAM_TARGET_DATE } from "./examCountdown";

export const EXAM_ENGLISH_TARGET = EXAM_TARGET_DATE;

export const EXAM_QUOTES = [
  "坚持就是胜利，重复就是答案。",
  "今天多记一轮，考场少慌一分。",
  "背词不是拼爆发，是把每天的重复做稳。",
  "看似慢的复习，最后会变成最快的提分。",
];

export function getExamCountdown(now = new Date()) {
  const diff = Math.max(0, EXAM_ENGLISH_TARGET.getTime() - now.getTime());
  const totalHours = Math.floor(diff / 3_600_000);
  return {
    days: Math.floor(diff / 86_400_000),
    hours: totalHours % 24,
    minutes: Math.floor(diff / 60_000) % 60,
    expired: diff === 0,
  };
}

export function getTodayQuote(now = new Date()) {
  const daySeed = Math.floor(now.getTime() / 86_400_000);
  return EXAM_QUOTES[daySeed % EXAM_QUOTES.length];
}
