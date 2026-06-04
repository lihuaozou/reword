import { Eye, RotateCcw, ThumbsDown, ThumbsUp } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import type { AudioSettings, ProgressMap, WordEntry } from "../types";
import { AudioButton } from "../components/AudioButton";
import { DefinitionSheet } from "../components/DefinitionSheet";
import { EmptyState } from "../components/EmptyState";
import { ModeTabs } from "../components/ModeTabs";
import { WordCard } from "../components/WordCard";
import { useKeyboardShortcuts } from "../hooks/useKeyboardShortcuts";
import { useResponsive } from "../hooks/useResponsive";
import { playWordAudio } from "../utils/audio";
import { getDueWords, isDue } from "../utils/scheduler";
import { formatDateTime, statusLabel } from "../utils/view";

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
  const progress = current ? progressMap[current.id] : undefined;
  const listStart = Math.max(0, index - 10);
  const visibleQueue = activeWords.slice(listStart, Math.min(activeWords.length, listStart + 24));
  const { isMobile } = useResponsive();

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

  useKeyboardShortcuts({
    onSpace: () => current && playWordAudio(current.word, audioSettings.defaultAccent, audioSettings),
    onOne: () => handleGrade("known"),
    onTwo: () => handleGrade("fuzzy"),
    onThree: () => handleGrade("forgotten"),
    onEnter: () => setRevealed((value) => !value),
  });

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

  if (isMobile) {
    return (
      <div className="min-h-[calc(100dvh-136px)] space-y-3 pb-28">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <div className="text-xs font-semibold uppercase text-copper">Recall</div>
            <h1 className="truncate text-lg font-semibold text-ink">{title}</h1>
          </div>
          <div className="shrink-0 text-right text-xs text-slate-500">
            {Math.min(index + 1, activeWords.length)} / {activeWords.length}
          </div>
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

        <section className="rounded-3xl border border-slate-200 bg-white p-4 shadow-soft">
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
            <span>S{progress?.stage || 0} · {statusLabel(progress)}</span>
            <span>{formatDateTime(progress?.nextReviewAt)}</span>
          </div>

          <div className="py-7 text-center">
            <div className={`break-words font-semibold leading-tight text-ink ${current.word.length > 12 ? "text-3xl" : "text-[34px]"}`}>{current.word}</div>
            <div className="mt-2 text-sm text-slate-500">{current.phonetic}</div>
            <div className="mt-3 flex justify-center gap-2">
              <AudioButton word={current.word} accent="us" settings={audioSettings} compact />
              <AudioButton word={current.word} accent="uk" settings={audioSettings} compact />
            </div>
          </div>

          <button type="button" onClick={() => setRevealed(true)} className="btn-secondary h-11 min-h-0 w-full">
            <Eye size={17} aria-hidden="true" />
            查看释义
          </button>
        </section>

        <DefinitionSheet
          open={revealed}
          onClose={() => setRevealed(false)}
          word={current.word}
          phonetic={current.phonetic}
          definitions={current.definitions}
          bottomOffset="calc(132px + env(safe-area-inset-bottom))"
        />

        <div className="fixed inset-x-3 z-40 grid grid-cols-3 gap-2" style={{ bottom: "calc(78px + env(safe-area-inset-bottom))" }}>
          <button type="button" data-sound="none" onClick={() => handleGrade("known")} className="inline-flex h-12 items-center justify-center gap-1 rounded-2xl bg-emerald-500 px-2 text-xs font-semibold text-white shadow-sm transition active:scale-95">
            <ThumbsUp size={15} aria-hidden="true" />
            记住
          </button>
          <button type="button" data-sound="none" onClick={() => handleGrade("fuzzy")} className="inline-flex h-12 items-center justify-center gap-1 rounded-2xl border border-amber-300 bg-amber-50 px-2 text-xs font-semibold text-amber-700 shadow-sm transition active:scale-95">
            <RotateCcw size={15} aria-hidden="true" />
            不太熟
          </button>
          <button type="button" data-sound="none" onClick={() => handleGrade("forgotten")} className="inline-flex h-12 items-center justify-center gap-1 rounded-2xl border border-rose-300 bg-rose-50 px-2 text-xs font-semibold text-rose-700 shadow-sm transition active:scale-95">
            <ThumbsDown size={15} aria-hidden="true" />
            不记住
          </button>
        </div>
      </div>
    );
  }

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

      <div className="grid gap-5 md:grid-cols-[250px_1fr] lg:grid-cols-[250px_minmax(0,1fr)_280px]">
        <aside className="hidden rounded-lg border border-slate-200 bg-white p-3 shadow-soft md:block">
          <div className="mb-3 flex items-center justify-between px-1 text-sm">
            <span className="font-semibold text-ink">复习队列</span>
            <span className="text-slate-500">{activeWords.length}</span>
          </div>
          <div className="max-h-[68vh] space-y-1 overflow-y-auto pr-1">
            {visibleQueue.map((word, offset) => {
              const absoluteIndex = listStart + offset;
              const active = absoluteIndex === index;
              return (
                <button
                  key={word.id}
                  type="button"
                  onClick={() => {
                    setIndex(absoluteIndex);
                    setRevealed(false);
                  }}
                  className={`flex min-h-11 w-full items-center justify-between gap-3 rounded-lg px-3 text-left text-sm transition ${
                    active ? "bg-indigo-50 text-indigo-700" : "text-slate-600 hover:bg-[#f8fbff] hover:text-ink"
                  }`}
                >
                  <span className="min-w-0 truncate font-semibold">{word.word}</span>
                  <span className="shrink-0 text-xs">S{progressMap[word.id]?.stage || 0}</span>
                </button>
              );
            })}
          </div>
        </aside>

        <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft">
          <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-slate-500">
            <span>
              {Math.min(index + 1, activeWords.length)} / {activeWords.length}
            </span>
            <span>{isDue(progress) ? "已到期" : "未到期"}，Stage {progress?.stage || 0}，下次 {formatDateTime(progress?.nextReviewAt)}</span>
          </div>

          <div className="py-10 text-center">
            <div className="break-words text-5xl font-semibold text-ink">{current.word}</div>
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
            <button type="button" data-sound="none" onClick={() => handleGrade("known")} className="btn-primary">
              <ThumbsUp size={18} aria-hidden="true" />
              记住
            </button>
            <button type="button" data-sound="none" onClick={() => handleGrade("fuzzy")} className="btn-secondary">
              <RotateCcw size={18} aria-hidden="true" />
              不太熟
            </button>
            <button type="button" data-sound="none" onClick={() => handleGrade("forgotten")} className="btn-danger">
              <ThumbsDown size={18} aria-hidden="true" />
              不记住
            </button>
          </div>
        </section>

        <aside className="hidden space-y-4 lg:block">
          <section className="rounded-lg border border-slate-200 bg-white p-4 shadow-soft">
            <h2 className="font-semibold text-ink">复习反馈</h2>
            <div className="mt-4 space-y-3 text-sm">
              <div className="rounded-lg bg-[#f8fbff] p-3">
                <span className="block text-slate-500">当前状态</span>
                <span className="mt-1 block font-semibold text-ink">{statusLabel(progress)}</span>
              </div>
              <div className="rounded-lg bg-[#f8fbff] p-3">
                <span className="block text-slate-500">打怪伤害</span>
                <span className="mt-1 block font-semibold text-indigo-600">记住 +3，不熟 +1</span>
              </div>
            </div>
          </section>
          <section className="rounded-lg border border-slate-200 bg-white p-4 text-sm shadow-soft">
            <h2 className="font-semibold text-ink">快捷键</h2>
            <div className="mt-3 grid gap-2 text-slate-500">
              <span>Space 播放发音</span>
              <span>1 记住</span>
              <span>2 不太熟</span>
              <span>3 不记住</span>
              <span>Enter 查看释义</span>
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
}
