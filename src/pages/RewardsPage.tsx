import type { UserStats } from "../types";

export function RewardsPage({ stats }: { stats: UserStats }) {
  return (
    <div className="space-y-5">
      <div>
        <div className="text-xs font-semibold uppercase text-copper">Rewards</div>
        <h1 className="mt-1 text-3xl font-semibold text-ink">奖励记录</h1>
      </div>
      <div className="space-y-3">
        {stats.rewardHistory.length ? (
          stats.rewardHistory.map((reward) => (
            <div key={reward.id} className="rounded-lg border border-slate-200 bg-white p-4 shadow-soft">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <div className="font-semibold text-ink">{reward.title}</div>
                  <div className="mt-1 text-sm text-slate-500">{reward.description}</div>
                </div>
                <div className="text-sm font-semibold text-harbor">+{reward.xp} XP / +{reward.coins} 金币</div>
              </div>
            </div>
          ))
        ) : (
          <div className="rounded-lg border border-slate-200 bg-white p-8 text-center text-slate-500">暂无奖励记录</div>
        )}
      </div>
    </div>
  );
}

