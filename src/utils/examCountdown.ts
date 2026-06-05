export const EXAM_TARGET_DATE = new Date("2026-12-20T00:00:00+08:00");
const EXAM_PREP_START = new Date("2025-12-20T00:00:00+08:00");

export function getDaysUntilExam(now = new Date()) {
  const diff = EXAM_TARGET_DATE.getTime() - now.getTime();
  return Math.max(0, Math.ceil(diff / 86_400_000));
}

export function getExamProgress(now = new Date()) {
  const total = EXAM_TARGET_DATE.getTime() - EXAM_PREP_START.getTime();
  const elapsed = now.getTime() - EXAM_PREP_START.getTime();
  if (total <= 0) return 100;
  return Math.max(0, Math.min(100, Math.round((elapsed / total) * 100)));
}

export function getCountdownMessage(daysLeft = getDaysUntilExam()) {
  if (daysLeft > 300) return "现在是打基础最值钱的时候。";
  if (daysLeft > 180) return "这一阶段拼的是稳定，不是感动自己。";
  if (daysLeft > 90) return "现在每一天都不能随便丢。";
  if (daysLeft > 30) return "别再试探时间够不够，直接背。";
  return "最后阶段，能多记一个就是一个。";
}
