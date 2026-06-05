import { ArrowLeft, ArrowRight, Check, Plus } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import type { AudioSettings, ProgressMap, WordEntry, WordUnit } from "../types";
import { MobileStudyShell } from "../components/layout/MobileStudyShell";
import { ProgressBar } from "../components/ProgressBar";
import { UnitWordIndexBar } from "../components/UnitWordIndexBar";
import { WordCard } from "../components/WordCard";
import { useKeyboardShortcuts } from "../hooks/useKeyboardShortcuts";
import { useResponsive } from "../hooks/useResponsive";
import { playWordAudio } from "../utils/audio";
import { formatDateTime, statusLabel } from "../utils/view";

type StudyPageProps = {
  unit?: WordUnit;
  words: WordEntry[];
  progressMap: ProgressMap;
  audioSettings: AudioSettings;
  initialWordId?: string;
  onLearn: (wordId: string) => void;
  onStudyPositionChange?: (word: WordEntry) => void;
};

export function StudyPage({ unit, words, progressMap, audioSettings, initialWordId, onLearn, onStudyPositionChange }: StudyPageProps) {
  const initialIndex = initialWordId ? Math.max(0, words.findIndex((word) => word.id === initialWordId)) : 0;
  const [index, setIndex] = useState(initialIndex);
  const [notice, setNotice] = useState<string | null>(null);
  const current = words[index];
  const learnedCount = useMemo(() => words.filter((word) => progressMap[word.id]?.learned || progressMap[word.id]?.firstLearnedAt).length, [words, progressMap]);
  const { isMobile } = useResponsive();
  const currentProgress = current ? progressMap[current.id] : undefined;
  const currentLearned = Boolean(currentProgress?.learned || currentProgress?.firstLearnedAt);
  const learnButtonLabel = currentLearned ? "已学习" : "未学习";
  const listStart = Math.max(0, index - 12);
  const visibleWords = words.slice(listStart, Math.min(words.length, listStart + 28));
  const progressPercent = words.length ? Math.min(100, ((index + 1) / words.length) * 100) : 0;

  useEffect(() => {
    if (!initialWordId) {
      setIndex(0);
      return;
    }
    const nextIndex = words.findIndex((word) => word.id === initialWordId);
    setIndex(nextIndex >= 0 ? nextIndex : 0);
  }, [initialWordId, words]);

  useEffect(() => {
    setIndex((value) => Math.min(Math.max(0, value), Math.max(0, words.length - 1)));
  }, [words.length]);

  useEffect(() => {
    if (!current || !audioSettings.autoPlayOnStudy) return;
    playWordAudio(current.word, audioSettings.defaultAccent, audioSettings).catch(() => undefined);
  }, [current, audioSettings]);

  useEffect(() => {
    if (!current) return;
    onStudyPositionChange?.(current);
  }, [current, onStudyPositionChange]);

  useEffect(() => {
    if (!notice) return;
    const timer = window.setTimeout(() => setNotice(null), 1800);
    return () => window.clearTimeout(timer);
  }, [notice]);

  const move = (offset: number) => {
    setNotice(null);
    setIndex((value) => Math.min(words.length - 1, Math.max(0, value + offset)));
  };

  const markCurrentLearned = () => {
    if (!current) return;
    if (currentLearned) {
      setNotice("这个词已标记为已学习");
      return;
    }
    setNotice(null);
    onLearn(current.id);
  };

  useKeyboardShortcuts({
    onSpace: () => current && playWordAudio(current.word, audioSettings.defaultAccent, audioSettings),
    onArrowLeft: () => move(-1),
    onArrowRight: () => move(1),
    onEnter: markCurrentLearned,
  });

  if (!current) return null;

  if (isMobile) {
    return (
      <MobileStudyShell
        header={
          <div className="rounded-2xl border border-white/80 bg-white/80 px-3 py-2 shadow-soft backdrop-blur-xl">
            <div className="flex min-h-9 items-center justify-between gap-3">
            <div className="min-w-0">
              <div className="truncate text-sm font-semibold text-ink">{unit?.name || "总记忆"}</div>
              <div className="text-[11px] font-medium text-slate-500">已学 {learnedCount} 词</div>
            </div>
              <div className="shrink-0 rounded-full border border-white/80 bg-white/90 px-2.5 py-1 text-xs font-semibold text-harbor shadow-sm">
              {index + 1}/{words.length}
            </div>
          </div>

            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-ink/10">
              <div className="h-full rounded-full bg-harbor transition-all duration-500" style={{ width: `${progressPercent}%` }} />
            </div>
          </div>
        }
        indexBar={
          <UnitWordIndexBar
          words={words}
          currentIndex={index}
          progressMap={progressMap}
          onSelectIndex={(nextIndex) => {
            setNotice(null);
            setIndex(nextIndex);
          }}
        />
        }
        actionBar={
          <div className="grid grid-cols-3 gap-2">
          <button type="button" onClick={() => move(-1)} disabled={index === 0} className="btn-secondary h-12 min-h-0 px-2 text-xs disabled:opacity-40">
            <ArrowLeft size={16} aria-hidden="true" />
            上一个
          </button>
          <button
            type="button"
            onClick={markCurrentLearned}
            data-sound="none"
            aria-label="标记当前单词已学习"
            className={`inline-flex h-12 min-h-0 items-center justify-center gap-1.5 rounded-2xl border px-2 text-xs font-semibold shadow-soft transition active:scale-95 ${
              currentLearned ? "border-emerald-600 bg-emerald-500 text-white hover:bg-emerald-600" : "border-rose-600 bg-rose-500 text-white hover:bg-rose-600"
            }`}
          >
            {currentLearned ? <Check size={16} aria-hidden="true" /> : <Plus size={16} aria-hidden="true" />}
            {learnButtonLabel}
          </button>
          <button type="button" onClick={() => move(1)} disabled={index === words.length - 1} className="btn-secondary h-12 min-h-0 px-2 text-xs disabled:opacity-40">
            下一个
            <ArrowRight size={16} aria-hidden="true" />
          </button>
        </div>
        }
      >
        <div key={current.id} className="word-card-swap pb-1">
          <WordCard word={current} progress={currentProgress} audioSettings={audioSettings} mobileCompact />
        </div>

        {notice ? (
          <div className="fixed inset-x-6 z-50 rounded-2xl border border-emerald-200 bg-white/95 px-3 py-2 text-center text-xs font-semibold text-emerald-700 shadow-soft backdrop-blur" style={{ bottom: "calc(var(--mobile-bottom-nav-height) + var(--mobile-action-bar-height) + env(safe-area-inset-bottom) + 10px)" }}>
            {notice}
          </div>
        ) : null}
      </MobileStudyShell>
    );
  }

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <div className="text-xs font-semibold uppercase text-copper">Study</div>
          <h1 className="mt-1 text-3xl font-semibold text-ink">{unit?.name || "总记忆"}</h1>
        </div>
        <div className="rounded-lg border border-white/80 bg-white/75 px-3 py-1.5 text-sm font-semibold text-slate-500 shadow-sm">
          {index + 1} / {words.length}
        </div>
      </div>

      <ProgressBar value={index + 1} max={words.length} label={`浏览进度，已初学 ${learnedCount} 词`} />

      <div className="grid gap-5 md:grid-cols-[260px_1fr] lg:grid-cols-[260px_minmax(0,1fr)_280px]">
        <aside className="hidden glass-panel p-3 md:block">
          <div className="mb-3 flex items-center justify-between gap-2 px-1 text-sm">
            <span className="font-semibold text-ink">单词目录</span>
            <span className="font-medium text-slate-500">{index + 1}/{words.length}</span>
          </div>
          <div className="max-h-[68vh] space-y-1 overflow-y-auto pr-1">
            {visibleWords.map((word, offset) => {
              const absoluteIndex = listStart + offset;
              const active = absoluteIndex === index;
              const itemLearned = Boolean(progressMap[word.id]?.learned || progressMap[word.id]?.firstLearnedAt);
              return (
                <button
                  key={word.id}
                  type="button"
                  onClick={() => setIndex(absoluteIndex)}
                  className={`flex min-h-11 w-full items-center justify-between gap-3 rounded-lg px-3 text-left text-sm transition ${
                    active ? "bg-ink text-white" : "text-slate-600 hover:bg-white/75 hover:text-ink"
                  }`}
                >
                  <span className="min-w-0 truncate font-semibold">{word.word}</span>
                  <span className="flex shrink-0 items-center gap-1.5 text-xs">
                    <span className={itemLearned ? "rounded-lg bg-emerald-50 px-1.5 py-0.5 font-semibold text-emerald-700" : "rounded-lg bg-copper/10 px-1.5 py-0.5 font-semibold text-copper"}>
                      {itemLearned ? "已学" : "未学"}
                    </span>
                    <span className={active ? "text-white/70" : "text-slate-400"}>#{word.order}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </aside>

        <section className="min-w-0">
          <WordCard word={current} progress={currentProgress} audioSettings={audioSettings} />
        </section>

        <aside className="hidden space-y-4 lg:block">
          <section className="glass-panel p-4">
            <h2 className="font-semibold text-ink">当前记忆状态</h2>
            <div className="mt-4 space-y-3 text-sm">
              <div className="flex justify-between rounded-lg bg-paper/80 p-3">
                <span className="font-medium text-slate-500">Stage</span>
                <span className="font-semibold text-ink">{currentProgress?.stage || 0}</span>
              </div>
              <div className="flex justify-between rounded-lg bg-paper/80 p-3">
                <span className="font-medium text-slate-500">状态</span>
                <span className="font-semibold text-ink">{statusLabel(currentProgress)}</span>
              </div>
              <div className="rounded-lg bg-paper/80 p-3">
                <span className="block font-medium text-slate-500">下次复习</span>
                <span className="mt-1 block font-semibold text-ink">{formatDateTime(currentProgress?.nextReviewAt)}</span>
              </div>
            </div>
          </section>
        </aside>
      </div>

      <div className="sticky bottom-20 z-20 grid gap-3 rounded-lg border border-white/80 bg-paper/90 p-2 shadow-soft backdrop-blur sm:grid-cols-3 md:static md:border-0 md:bg-transparent md:p-0 md:shadow-none">
        <button type="button" onClick={() => move(-1)} disabled={index === 0} className="btn-secondary disabled:opacity-40">
          <ArrowLeft size={18} aria-hidden="true" />
          上一个
        </button>
        <button
          type="button"
          onClick={markCurrentLearned}
          data-sound="none"
          className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl px-4 py-2 text-sm font-semibold shadow-sm transition active:scale-95 ${
            currentLearned ? "border border-emerald-600 bg-emerald-500 text-white hover:bg-emerald-600" : "border border-rose-600 bg-rose-500 text-white hover:bg-rose-600"
          }`}
        >
          {currentLearned ? <Check size={18} aria-hidden="true" /> : <Plus size={18} aria-hidden="true" />}
          {learnButtonLabel}
        </button>
        <button type="button" onClick={() => move(1)} disabled={index === words.length - 1} className="btn-secondary disabled:opacity-40">
          下一个
          <ArrowRight size={18} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
