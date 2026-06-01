import type { ProgressMap, WordEntry } from "../types";
import { getWordMonsterHp } from "../utils/monster";
import { ProgressBar } from "./ProgressBar";

export function MonsterCard({ word, progressMap }: { word: WordEntry; progressMap: ProgressMap }) {
  const hp = getWordMonsterHp(word, progressMap);
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-soft">
      <div className="flex items-center justify-between gap-3">
        <div>
          <div className="font-semibold text-ink">{word.word}</div>
          <div className="text-sm text-slate-500">{word.unitName}</div>
        </div>
        <div className="text-sm font-semibold text-violet-700">HP {hp}</div>
      </div>
      <div className="mt-3">
        <ProgressBar value={100 - hp} max={100} label={hp <= 0 ? "已击败" : "攻击进度"} />
      </div>
    </div>
  );
}
