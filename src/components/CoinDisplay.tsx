import { Gem, Swords } from "lucide-react";
import type { UserStats } from "../types";

export function CoinDisplay({ stats }: { stats: UserStats }) {
  return (
    <div className="flex flex-wrap gap-2 text-sm">
      <span className="rounded-lg border border-amber-200 bg-amber-50 px-3 py-1.5 font-semibold text-amber-700">金币 {stats.coins}</span>
      <span className="inline-flex items-center gap-1 rounded-lg border border-cyan-200 bg-cyan-50 px-3 py-1.5 font-semibold text-cyan-700">
        <Gem size={15} aria-hidden="true" />
        钻石 {stats.diamonds}
      </span>
      <span className="inline-flex items-center gap-1 rounded-lg border border-rose-200 bg-rose-50 px-3 py-1.5 font-semibold text-rose-700">
        <Swords size={15} aria-hidden="true" />
        战力 {stats.monsterPoints}
      </span>
    </div>
  );
}
