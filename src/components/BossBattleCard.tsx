import type { ProgressMap, UserStats, WordUnit } from "../types";
import { getBossStatus } from "../utils/monster";
import { ProgressBar } from "./ProgressBar";

export function BossBattleCard({ unit, progressMap, stats, onChallenge }: { unit: WordUnit; progressMap: ProgressMap; stats: UserStats; onChallenge: (unitId: string) => void }) {
  const boss = getBossStatus(unit, progressMap, stats);
  return (
    <div className="rounded-3xl border border-white/80 bg-white/80 p-4 shadow-soft backdrop-blur-xl">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="font-semibold text-ink">{boss.subtitle}</div>
          <div className="mt-1 text-sm text-slate-500">学习 {boss.learnedPercent}% / 到期 {boss.dueLeft}</div>
        </div>
        <button type="button" onClick={() => onChallenge(unit.id)} disabled={!boss.eligible || boss.defeated} data-sound="none" className="btn-secondary h-10 min-h-0 px-3 py-1.5 disabled:opacity-40">
          {boss.defeated ? "已击败" : "挑战"}
        </button>
      </div>
      <div className="mt-3">
        <ProgressBar value={100 - boss.hp} max={100} label={boss.eligible ? "可挑战" : "解锁进度"} />
      </div>
    </div>
  );
}
