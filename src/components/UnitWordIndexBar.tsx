import { useEffect, useRef } from "react";
import type { ProgressMap, WordEntry } from "../types";

type UnitWordIndexBarProps = {
  words: WordEntry[];
  currentIndex: number;
  progressMap: ProgressMap;
  onSelectIndex: (index: number) => void;
};

function isWordLearned(word: WordEntry, progressMap: ProgressMap) {
  const progress = progressMap[word.id];
  return Boolean(progress?.firstLearnedAt || progress?.learned);
}

export function UnitWordIndexBar({ words, currentIndex, progressMap, onSelectIndex }: UnitWordIndexBarProps) {
  const buttonRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const learnedCount = words.filter((word) => isWordLearned(word, progressMap)).length;

  useEffect(() => {
    buttonRefs.current[currentIndex]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [currentIndex]);

  return (
    <section className="max-h-[68px] rounded-2xl border border-white/80 bg-white/80 px-3 py-2 shadow-soft backdrop-blur-xl">
      <div className="mb-1.5 flex items-center justify-between gap-3 px-1">
        <div className="text-xs font-semibold text-ink">本单元词序</div>
        <div className="text-[11px] font-semibold text-slate-500">已学 {learnedCount} / {words.length}</div>
      </div>

      <div className="no-scrollbar -mx-1 flex gap-1.5 overflow-x-auto overscroll-x-contain px-1 pb-0.5">
        {words.map((word, index) => {
          const learned = isWordLearned(word, progressMap);
          const active = index === currentIndex;
          const baseClass =
            "grid h-7 w-7 shrink-0 place-items-center rounded-full border text-xs font-semibold tabular-nums shadow-sm transition active:scale-95";
          const stateClass = active
            ? learned
              ? "border-emerald-600 bg-emerald-500 text-white ring-2 ring-emerald-200"
              : "border-rose-600 bg-rose-500 text-white ring-2 ring-rose-200"
            : learned
              ? "border-emerald-200 bg-emerald-50 text-emerald-700"
              : "border-rose-200 bg-rose-50 text-rose-600";

          return (
            <button
              key={word.id}
              ref={(node) => {
                buttonRefs.current[index] = node;
              }}
              type="button"
              aria-current={active ? "true" : undefined}
              aria-label={`切换到第 ${index + 1} 个单词${learned ? "，已学习" : "，未学习"}`}
              onClick={() => onSelectIndex(index)}
              className={`${baseClass} ${stateClass}`}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
    </section>
  );
}
