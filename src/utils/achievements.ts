import type { Achievement, ProgressMap, UserStats, WordEntry } from "../types";
import { applyReward } from "./rewards";
import { isMastered } from "./scheduler";

export const ACHIEVEMENTS: Achievement[] = [
  { id: "first-word", title: "第一次学习", description: "完成第一个单词", rewardXp: 20, rewardCoins: 8 },
  { id: "first-correct", title: "初战告捷", description: "第一次测试答对", rewardXp: 20, rewardCoins: 8 },
  { id: "unit1-20", title: "Unit1 入门", description: "Unit1 学习 20 个单词", rewardXp: 40, rewardCoins: 15 },
  { id: "hundred-mastered", title: "百词斩", description: "掌握 100 个单词", rewardXp: 120, rewardCoins: 50, rewardDiamonds: 1 },
  { id: "seven-checkin", title: "七日坚持", description: "连续打卡 7 天", rewardXp: 90, rewardCoins: 30 },
  { id: "thirty-checkin", title: "长期主义者", description: "连续打卡 30 天", rewardXp: 220, rewardCoins: 80, rewardDiamonds: 2 },
];

export function evaluateAchievements(stats: UserStats, words: WordEntry[], progressMap: ProgressMap) {
  const learnedCount = words.filter((word) => progressMap[word.id]?.learned).length;
  const correctCount = Object.values(progressMap).reduce((sum, progress) => sum + progress.correctCount, 0);
  const unit1Learned = words.filter((word) => word.unitId === "unit1" && progressMap[word.id]?.learned).length;
  const mastered = words.filter((word) => isMastered(progressMap[word.id])).length;
  const checks: Record<string, boolean> = {
    "first-word": learnedCount >= 1,
    "first-correct": correctCount >= 1,
    "unit1-20": unit1Learned >= 20,
    "hundred-mastered": mastered >= 100,
    "seven-checkin": stats.currentStreak >= 7 || stats.longestStreak >= 7,
    "thirty-checkin": stats.currentStreak >= 30 || stats.longestStreak >= 30,
  };
  return ACHIEVEMENTS.filter((achievement) => checks[achievement.id]);
}

export function unlockAvailableAchievements(stats: UserStats, words: WordEntry[], progressMap: ProgressMap) {
  let next = stats;
  const available = evaluateAchievements(stats, words, progressMap);
  available.forEach((achievement) => {
    if (next.checkedAchievementIds.includes(achievement.id)) return;
    next = applyReward(
      { ...next, checkedAchievementIds: [...next.checkedAchievementIds, achievement.id] },
      {
        type: "achievement",
        title: achievement.title,
        description: achievement.description,
        xp: achievement.rewardXp,
        coins: achievement.rewardCoins,
        diamonds: achievement.rewardDiamonds,
        itemId: `badge-${achievement.id}`,
        bypassDailyCap: true,
      }
    );
  });
  return next;
}
