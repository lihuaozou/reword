import { Eye, RotateCcw, ThumbsDown, ThumbsUp } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import type { AudioSettings, ProgressMap, WordEntry } from "../types";
import { AudioButton } from "../components/AudioButton";
import { EmptyState } from "../components/EmptyState";
import { ModeTabs } from "../components/ModeTabs";
import { WordCard } from "../components/WordCard";
import { playWordAudio } from "../utils/audio";
import { getDueWords, isDue } from "../utils/scheduler";
import { formatDateTime } from "../utils/view";

type RecallPageProps = {
  title: string;
  words: WordEntry[];
  progressMap: ProgressMap;
  audioSettings: AudioSettings;
  initialDueOnly?: boolean;
  onGrade: (wordId: string, grade: "known" | "fuzzy" | "forgotten") => void;
  onBackToStudy?: () => void;
};

export function RecallPage({ title, words, progressMap, audioSettings, initialDueOnly = false, onGrade, onBackToStudy }: RecallPageProps) {
  const [mode, setMode] = useState<"due" | "all">(initialDueOnly ? "due" : "all");
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const activeWords = useMemo(() => (mode === "due" ? getDueWords(words, progressMap) : words), [mode, words, progressMap]);
  const current = activeWords[Math.min(index, Math.max(0, activeWords.length - 1))];

  useEffect(() => {
    if (!current || !audioSettings.autoPlayOnRecall) return;
    playWordAudio(current.word, audioSettings.defaultAccent, audioSettings).catch(() => undefined);
  }, [current, audioSettings]);

  const handleGrade = (grade: "known" | "fuzzy" | "forgotten") => {
    if (!current) return;
    onGrade(current.id, grade);
    setRevealed(false);
    setIndex((value) => {
      const nextIndex = mode === "due" ? value : value + 1;
      return Math.min(nextIndex, Math.max(0, activeWords.length - 1));
    });
  };

  if (!activeWords.length) {
    return (
      <EmptyState
        title={mode === "due" ? "当前没有到期词" : "当前范围没有词"}
        body="可以切换到全部练习，或者先进入记忆模式完成初学。"
        actionLabel={onBackToStudy ? "去记忆模式" : undefined}
        onAction={onBackToStudy}
      />
    );
  }

  const progress = progressMap[current.id];

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <div className="text-xs font-semibold uppercase text-copper">Recall</div>
          <h1 className="mt-1 text-3xl font-semibold text-ink">{title}</h1>
        </div>
        <ModeTabs
          value={mode}
          items={[
            { value: "due", label: "到期词" },
            { value: "all", label: "全部词" },
          ]}
          onChange={(value) => {
            setMode(value);
            setIndex(0);
            setRevealed(false);
          }}
        />
      </div>

      <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft">
        <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-slate-500">
          <span>
            {Math.min(index + 1, activeWords.length)} / {activeWords.length}
          </span>
          <span>{isDue(progress) ? "已到期" : "未到期"}，Stage {progress?.stage || 0}，下次 {formatDateTime(progress?.nextReviewAt)}</span>
        </div>

        <div className="py-10 text-center">
          <div className="text-5xl font-semibold text-ink">{current.word}</div>
          <div className="mt-3 text-xl text-slate-500">{current.phonetic}</div>
          <div className="mt-4 flex justify-center gap-2">
            <AudioButton word={current.word} accent="us" settings={audioSettings} />
            <AudioButton word={current.word} accent="uk" settings={audioSettings} />
          </div>
        </div>

        {revealed ? <WordCard word={current} progress={progress} compact audioSettings={audioSettings} /> : null}

        <div className="mt-5 grid gap-3 sm:grid-cols-4">
          <button type="button" onClick={() => setRevealed((value) => !value)} className="btn-secondary">
            <Eye size={18} aria-hidden="true" />
            查看释义
          </button>
          <button type="button" onClick={() => handleGrade("known")} className="btn-primary">
            <ThumbsUp size={18} aria-hidden="true" />
            记住
          </button>
          <button type="button" onClick={() => handleGrade("fuzzy")} className="btn-secondary">
            <RotateCcw size={18} aria-hidden="true" />
            不太熟
          </button>
          <button type="button" onClick={() => handleGrade("forgotten")} className="btn-danger">
            <ThumbsDown size={18} aria-hidden="true" />
            不记住
          </button>
        </div>
      </section>
    </div>
  );
}

