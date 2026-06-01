import type { UserStats } from "../types";
import { getLevelTitle, getNextLevelXp } from "../utils/rewards";
import { ProgressBar } from "./ProgressBar";

export function LevelProgress({ stats }: { stats: UserStats }) {
  const currentBase = (stats.level - 1) * (stats.level - 1) * 100;
  const next = getNextLevelXp(stats.level);
  const current = stats.totalXp - currentBase;
  const span = Math.max(1, next - currentBase);
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-soft">
      <div className="flex items-center justify-between gap-3">
        <div>
          <div className="text-sm text-slate-500">当前等级</div>
          <div className="text-2xl font-semibold text-ink">Lv.{stats.level}</div>
        </div>
        <div className="text-right text-sm font-semibold text-harbor">{getLevelTitle(stats.level)}</div>
      </div>
      <div className="mt-4">
        <ProgressBar value={current} max={span} label={`XP ${stats.totalXp}，距离下一级 ${Math.max(0, next - stats.totalXp)}`} />
      </div>
    </div>
  );
}
