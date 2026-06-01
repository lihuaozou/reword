import type { StudySession, UserStats, WordEntry, ProgressMap } from "../types";
import { formatDuration, getLastDateKeys, isSameMonth, isSameWeek, toLocalDateKey } from "./date";
import { isMastered } from "./scheduler";

export function createSession(mode: StudySession["mode"], unitId: string | undefined, wordCount = 0): StudySession {
  const now = new Date();
  return {
    id: `session-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    date: toLocalDateKey(now),
    startedAt: now.toISOString(),
    endedAt: now.toISOString(),
    durationSeconds: 0,
    mode,
    unitId,
    wordCount,
  };
}

export function addStudySession(stats: UserStats, session: StudySession) {
  if (session.durationSeconds < 30) return stats;
  const minutes = Math.floor(session.durationSeconds / 60);
  return {
    ...stats,
    totalStudyMinutes: stats.totalStudyMinutes + minutes,
    studySessions: [session, ...stats.studySessions].slice(0, 500),
  };
}

export function getStudyStats(stats: UserStats) {
  const today = toLocalDateKey();
  const todaySeconds = sumSeconds(stats.studySessions.filter((session) => session.date === today));
  const weekSeconds = sumSeconds(stats.studySessions.filter((session) => isSameWeek(session.date)));
  const monthSeconds = sumSeconds(stats.studySessions.filter((session) => isSameMonth(session.date)));
  const totalSeconds = stats.totalStudyMinutes * 60;
  const activeDays = new Set(stats.studySessions.map((session) => session.date)).size || 1;
  const longest = Math.max(0, ...stats.studySessions.map((session) => session.durationSeconds));
  const modeTotals = stats.studySessions.reduce<Record<string, number>>((acc, session) => {
    acc[session.mode] = (acc[session.mode] || 0) + session.durationSeconds;
    return acc;
  }, {});
  return {
    todaySeconds,
    weekSeconds,
    monthSeconds,
    totalSeconds,
    averageSeconds: Math.floor(totalSeconds / activeDays),
    longestSeconds: longest,
    modeTotals,
  };
}

function sumSeconds(sessions: StudySession[]) {
  return sessions.reduce((sum, session) => sum + session.durationSeconds, 0);
}

export function getDailyDurationSeries(stats: UserStats, days: number) {
  const keys = getLastDateKeys(days);
  return keys.map((date) => ({
    date,
    seconds: sumSeconds(stats.studySessions.filter((session) => session.date === date)),
  }));
}

export function getUnitRanking(words: WordEntry[], progressMap: ProgressMap) {
  const grouped = words.reduce<Record<string, { total: number; mastered: number }>>((acc, word) => {
    const row = acc[word.unitName] || { total: 0, mastered: 0 };
    row.total += 1;
    if (isMastered(progressMap[word.id])) row.mastered += 1;
    acc[word.unitName] = row;
    return acc;
  }, {});
  return Object.entries(grouped)
    .map(([unitName, row]) => ({ unitName, ...row, percent: row.total ? Math.round((row.mastered / row.total) * 100) : 0 }))
    .sort((a, b) => b.percent - a.percent);
}

export { formatDuration };
