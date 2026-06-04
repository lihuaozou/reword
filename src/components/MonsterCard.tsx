import { Sparkles, Swords } from "lucide-react";
import type { ProgressMap, WordEntry } from "../types";
import { getWordMonsterHp } from "../utils/monster";
import { ProgressBar } from "./ProgressBar";

export function MonsterCard({ word, progressMap }: { word: WordEntry; progressMap: ProgressMap }) {
  const hp = getWordMonsterHp(word, progressMap);
  const defeated = hp <= 0;
  return (
    <div className={`relative overflow-hidden rounded-3xl border border-white/80 bg-white/80 p-4 shadow-soft backdrop-blur-xl transition ${hp < 45 ? "animate-[monster-hit_320ms_ease-out]" : ""} ${defeated ? "opacity-70" : ""}`}>
      {defeated ? (
        <div className="absolute right-3 top-3 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
          XP +10 · 金币 +5
        </div>
      ) : null}
      <div className="flex items-center justify-between gap-3">
        <div>
          <div className="font-semibold text-ink">{word.word}</div>
          <div className="text-sm text-slate-500">{word.unitName}</div>
        </div>
        <div className="rounded-full bg-rose-50 px-2.5 py-1 text-sm font-semibold text-rose-600">HP {hp}</div>
      </div>

      <div className="my-4 grid h-32 place-items-center overflow-hidden rounded-2xl border border-sky-100 bg-[#f8fbff]">
        {word.image ? (
          <img src={word.image} alt="" className="max-h-32 w-full object-contain p-3" loading="lazy" />
        ) : (
          <div className="grid h-24 w-24 place-items-center rounded-full border border-sky-100 bg-white text-harbor shadow-sm">
            {defeated ? <Sparkles size={34} aria-hidden="true" /> : <Swords size={34} aria-hidden="true" />}
          </div>
        )}
      </div>

      <div className="mt-3">
        <ProgressBar value={100 - hp} max={100} label={hp <= 0 ? "已击败" : "攻击进度"} />
      </div>
    </div>
  );
}
