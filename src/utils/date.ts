export function toLocalDateKey(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function addDays(date: Date, days: number) {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
}

export function isYesterday(dateKey: string | null, now = new Date()) {
  if (!dateKey) return false;
  return dateKey === toLocalDateKey(addDays(now, -1));
}

export function isToday(dateKey: string | null, now = new Date()) {
  return Boolean(dateKey && dateKey === toLocalDateKey(now));
}

export function secondsToMinutes(seconds: number) {
  return Math.round(seconds / 60);
}

export function formatDuration(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const restMinutes = minutes % 60;
  if (hours <= 0) return `${minutes}分钟`;
  return `${hours}小时${restMinutes ? `${restMinutes}分钟` : ""}`;
}

export function getLastDateKeys(days: number, now = new Date()) {
  return Array.from({ length: days }, (_, index) => toLocalDateKey(addDays(now, index - days + 1)));
}

export function isSameWeek(dateKey: string, now = new Date()) {
  const date = new Date(`${dateKey}T00:00:00`);
  const cursor = new Date(now);
  const day = cursor.getDay() || 7;
  cursor.setDate(cursor.getDate() - day + 1);
  cursor.setHours(0, 0, 0, 0);
  const end = addDays(cursor, 7);
  return date >= cursor && date < end;
}

export function isSameMonth(dateKey: string, now = new Date()) {
  const date = new Date(`${dateKey}T00:00:00`);
  return date.getFullYear() === now.getFullYear() && date.getMonth() === now.getMonth();
}
