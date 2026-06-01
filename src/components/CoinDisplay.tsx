import { Gem, Swords } from "lucide-react";
import type { UserStats } from "../types";

export function CoinDisplay({ stats }: { stats: UserStats }) {
  return (
    <div className="flex flex-wrap gap-2 text-sm">
      <span className="rounded-lg border border-amber-200 bg-amber-50 px-3 py-1.5 font-semibold text-amber-700">金币 {stats.coins}</span>
      <span className="inline-flex items-center gap-1 rounded-lg border border-sky-200 bg-sky-50 px-3 py-1.5 font-semibold text-sky-700">
        <Gem size={15} aria-hidden="true" />
        钻石 {stats.diamonds}
      </span>
      <span className="inline-flex items-center gap-1 rounded-lg border border-violet-200 bg-violet-50 px-3 py-1.5 font-semibold text-violet-700">
        <Swords size={15} aria-hidden="true" />
        打怪 {stats.monsterPoints}
      </span>
    </div>
  );
}
