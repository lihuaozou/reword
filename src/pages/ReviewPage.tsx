import { Brain } from "lucide-react";
import type { AudioSettings, ProgressMap, WordEntry } from "../types";
import { EmptyState } from "../components/EmptyState";
import { WordCard } from "../components/WordCard";
import { getDueWords } from "../utils/scheduler";

type ReviewPageProps = {
  words: WordEntry[];
  progressMap: ProgressMap;
  audioSettings: AudioSettings;
  onStartReview: () => void;
  onOpenUnits: () => void;
};

export function ReviewPage({ words, progressMap, audioSettings, onStartReview, onOpenUnits }: ReviewPageProps) {
  const dueWords = getDueWords(words, progressMap);

  return (
    <div className="space-y-5">
      <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="text-xs font-semibold uppercase text-copper">Review</div>
            <h1 className="mt-1 text-3xl font-semibold text-ink">复习中心</h1>
          </div>
          <button type="button" onClick={onStartReview} disabled={!dueWords.length} className="btn-primary disabled:opacity-40">
            <Brain size={18} aria-hidden="true" />
            一键开始
          </button>
        </div>
      </section>

      {dueWords.length ? (
        <div className="grid gap-3 lg:grid-cols-2">
          {dueWords.map((word) => (
            <WordCard key={word.id} word={word} progress={progressMap[word.id]} compact audioSettings={audioSettings} />
          ))}
        </div>
      ) : (
        <EmptyState
          title="今天暂时没有到期复习"
          body="可以先从单元里加入今日学习，初学后的单词会自动进入复习周期。"
          actionLabel="去单元"
          onAction={onOpenUnits}
        />
      )}
    </div>
  );
}

