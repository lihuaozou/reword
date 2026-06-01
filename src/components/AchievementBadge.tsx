import type { Achievement, UserStats } from "../types";

export function AchievementBadge({ achievement, stats }: { achievement: Achievement; stats: UserStats }) {
  const unlocked = stats.checkedAchievementIds.includes(achievement.id);
  return (
    <div className={`rounded-lg border p-4 ${unlocked ? "border-spruce/30 bg-spruce/10" : "border-slate-200 bg-white"}`}>
      <div className="font-semibold text-ink">{achievement.title}</div>
      <div className="mt-1 text-sm text-slate-500">{achievement.description}</div>
      <div className="mt-3 text-xs font-semibold text-harbor">XP {achievement.rewardXp} / 金币 {achievement.rewardCoins}</div>
    </div>
  );
}
