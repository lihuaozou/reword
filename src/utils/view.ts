import type { ProgressMap, WordEntry, WordProgress } from "../types";
import { isDue, isMastered } from "./scheduler";

export function formatDateTime(iso?: string) {
  if (!iso) return "未安排";
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "未安排";
  return new Intl.DateTimeFormat("zh-CN", {
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

export function statusLabel(progress?: WordProgress) {
  if (!progress?.learned && !progress?.firstLearnedAt) return "未学习";
  if (isMastered(progress)) return "已掌握";
  if (isDue(progress)) return "待复习";
  if (progress.fuzzyCount > 0) return "需巩固";
  return "学习中";
}

export function unitProgress(words: WordEntry[], progressMap: ProgressMap) {
  const learned = words.filter((word) => progressMap[word.id]?.learned || progressMap[word.id]?.firstLearnedAt).length;
  const mastered = words.filter((word) => isMastered(progressMap[word.id])).length;
  const due = words.filter((word) => isDue(progressMap[word.id])).length;
  return { learned, mastered, due };
}

export function referenceTitle(index: number) {
  return `原图 ${index + 1}`;
}
