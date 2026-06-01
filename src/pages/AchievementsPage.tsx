import type { ProgressMap, UserStats, WordEntry } from "../types";
import { AchievementBadge } from "../components/AchievementBadge";
import { ACHIEVEMENTS, evaluateAchievements } from "../utils/achievements";

export function AchievementsPage({ stats, words, progressMap }: { stats: UserStats; words: WordEntry[]; progressMap: ProgressMap }) {
  const available = new Set(evaluateAchievements(stats, words, progressMap).map((item) => item.id));
  return (
    <div className="space-y-5">
      <div>
        <div className="text-xs font-semibold uppercase text-copper">Achievements</div>
        <h1 className="mt-1 text-3xl font-semibold text-ink">成就徽章</h1>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {ACHIEVEMENTS.map((achievement) => (
          <div key={achievement.id} className={!available.has(achievement.id) && !stats.checkedAchievementIds.includes(achievement.id) ? "opacity-60" : ""}>
            <AchievementBadge achievement={achievement} stats={stats} />
          </div>
        ))}
      </div>
    </div>
  );
}

