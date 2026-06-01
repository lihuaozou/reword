import type { RewardRecord } from "../types";

export function RewardToast({ reward }: { reward?: RewardRecord }) {
  if (!reward) return null;
  return (
    <div className="rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm text-amber-800">
      <strong>{reward.title}</strong> +{reward.xp} XP +{reward.coins} 金币
    </div>
  );
}
