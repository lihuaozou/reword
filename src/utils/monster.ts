import type { ProgressMap, UserStats, WordEntry, WordUnit } from "../types";
import { getDueWords, isMastered } from "./scheduler";

export function getWordMonsterHp(word: WordEntry, progressMap: ProgressMap) {
  const progress = progressMap[word.id];
  if (isMastered(progress)) return 0;
  if (!progress) return 100;
  const damage = progress.knownCount * 25 + progress.correctCount * 20 + progress.fuzzyCount * 10;
  const heal = progress.forgottenCount * 10 + progress.wrongCount * 5;
  return Math.max(5, Math.min(100, 100 - damage + heal));
}

export function getMonsterSummary(words: WordEntry[], progressMap: ProgressMap, stats: UserStats) {
  const defeatedWords = words.filter((word) => isMastered(progressMap[word.id])).length;
  const activeMonsters = words.length - defeatedWords;
  return {
    defeatedWords,
    activeMonsters,
    defeatedBosses: stats.defeatedBossIds.length,
    monsterPoints: stats.monsterPoints,
  };
}

export function getBossStatus(unit: WordUnit, progressMap: ProgressMap, stats: UserStats) {
  const learned = unit.words.filter((word) => progressMap[word.id]?.learned).length;
  const learnedPercent = unit.words.length ? Math.round((learned / unit.words.length) * 100) : 0;
  const dueLeft = getDueWords(unit.words, progressMap).length;
  const defeated = stats.defeatedBossIds.includes(unit.id);
  const eligible = learnedPercent >= 80 && dueLeft === 0;
  return {
    id: unit.id,
    name: `${unit.name} Boss`,
    subtitle: `${bossName(unit.order)}·Unit${unit.order}`,
    learnedPercent,
    dueLeft,
    defeated,
    eligible,
    hp: defeated ? 0 : eligible ? 100 : Math.max(20, 100 - learnedPercent),
  };
}

export function bossName(order: number) {
  const names = ["遗忘兽", "拖延兽", "混淆兽", "倦怠兽", "焦虑兽", "懒散兽", "粗心兽", "瓶颈兽"];
  return names[(order - 1) % names.length];
}
