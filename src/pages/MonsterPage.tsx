import type { ProgressMap, UserStats, WordEntry, WordUnit } from "../types";
import { BossBattleCard } from "../components/BossBattleCard";
import { CoinDisplay } from "../components/CoinDisplay";
import { MonsterCard } from "../components/MonsterCard";
import { getMonsterSummary } from "../utils/monster";

export function MonsterPage({ words, units, progressMap, stats, onChallengeBoss }: { words: WordEntry[]; units: WordUnit[]; progressMap: ProgressMap; stats: UserStats; onChallengeBoss: (unitId: string) => void }) {
  const summary = getMonsterSummary(words, progressMap, stats);
  const activeWords = words.filter((word) => !stats.defeatedWordIds.includes(word.id)).slice(0, 6);
  return (
    <div className="space-y-5">
      <section className="rounded-3xl border border-white/80 bg-white/80 p-5 shadow-soft backdrop-blur-xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="text-xs font-semibold uppercase text-violet-700">Monster</div>
            <h1 className="mt-1 text-3xl font-semibold text-ink">单词打怪</h1>
            <p className="mt-2 text-sm text-slate-500">记住、复习、答对都会攻击单词怪物。</p>
          </div>
          <CoinDisplay stats={stats} />
        </div>
        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          <div className="rounded-2xl bg-sky-50 p-4 text-center"><div className="text-2xl font-semibold">{summary.monsterPoints}</div><div className="text-sm text-slate-500">打怪积分</div></div>
          <div className="rounded-2xl bg-emerald-50 p-4 text-center"><div className="text-2xl font-semibold">{summary.defeatedWords}</div><div className="text-sm text-slate-500">击败小怪</div></div>
          <div className="rounded-2xl bg-amber-50 p-4 text-center"><div className="text-2xl font-semibold">{summary.defeatedBosses}</div><div className="text-sm text-slate-500">击败 Boss</div></div>
        </div>
      </section>
      <section className="grid gap-4 lg:grid-cols-2">
        {units.map((unit) => (
          <BossBattleCard key={unit.id} unit={unit} progressMap={progressMap} stats={stats} onChallenge={onChallengeBoss} />
        ))}
      </section>
      <section className="grid gap-4 lg:grid-cols-2">
        {activeWords.map((word) => (
          <MonsterCard key={word.id} word={word} progressMap={progressMap} />
        ))}
      </section>
    </div>
  );
}

