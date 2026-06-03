import { ArrowLeft, ArrowRight, Check, Plus } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import type { AudioSettings, ProgressMap, WordEntry, WordUnit } from "../types";
import { ProgressBar } from "../components/ProgressBar";
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
  onLearn: (wordId: string) => void;
};

export function StudyPage({ unit, words, progressMap, audioSettings, onLearn }: StudyPageProps) {
  const [index, setIndex] = useState(0);
  const current = words[index];
  const learnedCount = useMemo(() => words.filter((word) => progressMap[word.id]?.learned || progressMap[word.id]?.firstLearnedAt).length, [words, progressMap]);
  const { isDesktop, isMobile } = useResponsive();
  const currentProgress = current ? progressMap[current.id] : undefined;
  const currentLearned = Boolean(currentProgress?.learned || currentProgress?.firstLearnedAt);
  const learnButtonLabel = currentLearned ? "已学习" : "未学习";
  const listStart = Math.max(0, index - 12);
  const visibleWords = words.slice(listStart, Math.min(words.length, listStart + 28));

  useEffect(() => {
    if (!current || !audioSettings.autoPlayOnStudy) return;
    playWordAudio(current.word, audioSettings.defaultAccent, audioSettings).catch(() => undefined);
  }, [current, audioSettings]);

  const move = (offset: number) => {
    setIndex((value) => Math.min(words.length - 1, Math.max(0, value + offset)));
  };

  const markCurrentLearned = () => {
    if (!current) return;
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
      <div className="min-h-[calc(100dvh-136px)] space-y-2 pb-24">
        <div className="flex h-9 items-center justify-between gap-3">
          <div className="min-w-0">
            <div className="truncate text-sm font-semibold text-ink">{unit?.name || "总记忆"}</div>
            <div className="text-[11px] text-slate-500">已初学 {learnedCount} 词</div>
          </div>
          <div className="shrink-0 rounded-md border border-sky-100 bg-white px-2 py-1 text-xs font-semibold text-harbor">
            {index + 1}/{words.length}
          </div>
        </div>

        <div className="h-1.5 overflow-hidden rounded-full bg-slate-200">
          <div className="h-full rounded-full bg-harbor" style={{ width: `${Math.min(100, ((index + 1) / words.length) * 100)}%` }} />
        </div>

        <WordCard word={current} progress={currentProgress} audioSettings={audioSettings} mobileCompact />

        <div className="fixed inset-x-3 z-40 grid grid-cols-3 gap-2" style={{ bottom: "calc(72px + env(safe-area-inset-bottom))" }}>
          <button type="button" onClick={() => move(-1)} disabled={index === 0} className="btn-secondary h-11 min-h-0 px-2 text-xs disabled:opacity-40">
            <ArrowLeft size={16} aria-hidden="true" />
            上一个
          </button>
          <button
            type="button"
            onClick={markCurrentLearned}
            data-sound="none"
            aria-label="标记当前单词已学"
            className={`inline-flex h-11 min-h-0 items-center justify-center gap-1.5 rounded-lg border px-2 text-xs font-semibold shadow-sm transition active:translate-y-px ${
              currentLearned
                ? "border-emerald-700 bg-emerald-600 text-white hover:bg-emerald-700"
                : "border-rose-700 bg-rose-600 text-white hover:bg-rose-700"
            }`}
          >
            {currentLearned ? <Check size={16} aria-hidden="true" /> : <Plus size={16} aria-hidden="true" />}
            {learnButtonLabel}
          </button>
          <button type="button" onClick={() => move(1)} disabled={index === words.length - 1} className="btn-secondary h-11 min-h-0 px-2 text-xs disabled:opacity-40">
            下一个
            <ArrowRight size={16} aria-hidden="true" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <div className="text-xs font-semibold uppercase text-copper">Study</div>
          <h1 className="mt-1 text-3xl font-semibold text-ink">{unit?.name || "总记忆功能"}</h1>
        </div>
        <div className="text-sm text-slate-500">
          {index + 1} / {words.length}
        </div>
      </div>

      <ProgressBar value={index + 1} max={words.length} label={`浏览进度，已初学 ${learnedCount} 词`} />

      <div className="grid gap-5 md:grid-cols-[260px_1fr] lg:grid-cols-[260px_minmax(0,1fr)_280px]">
        <aside className="hidden rounded-lg border border-slate-200 bg-white p-3 shadow-soft md:block">
          <div className="mb-3 flex items-center justify-between gap-2 px-1 text-sm">
            <span className="font-semibold text-ink">单词目录</span>
            <span className="text-slate-500">{index + 1}/{words.length}</span>
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
                    active ? "bg-indigo-50 text-indigo-700" : "text-slate-600 hover:bg-[#f8fbff] hover:text-ink"
                  }`}
                >
                  <span className="min-w-0 truncate font-semibold">{word.word}</span>
                  <span className="flex shrink-0 items-center gap-1.5 text-xs">
                    <span className={itemLearned ? "rounded-md bg-emerald-50 px-1.5 py-0.5 font-semibold text-emerald-700" : "rounded-md bg-rose-50 px-1.5 py-0.5 font-semibold text-rose-700"}>
                      {itemLearned ? "已学习" : "未学习"}
                    </span>
                    <span>#{word.order}</span>
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
          <section className="rounded-lg border border-slate-200 bg-white p-4 shadow-soft">
            <h2 className="font-semibold text-ink">当前记忆状态</h2>
            <div className="mt-4 space-y-3 text-sm">
              <div className="flex justify-between rounded-lg bg-[#f8fbff] p-3">
                <span className="text-slate-500">Stage</span>
                <span className="font-semibold text-ink">{currentProgress?.stage || 0}</span>
              </div>
              <div className="flex justify-between rounded-lg bg-[#f8fbff] p-3">
                <span className="text-slate-500">状态</span>
                <span className="font-semibold text-ink">{statusLabel(currentProgress)}</span>
              </div>
              <div className="rounded-lg bg-[#f8fbff] p-3">
                <span className="block text-slate-500">下次复习</span>
                <span className="mt-1 block font-semibold text-ink">{formatDateTime(currentProgress?.nextReviewAt)}</span>
              </div>
            </div>
          </section>
          {isDesktop ? (
            <section className="rounded-lg border border-slate-200 bg-white p-4 text-sm shadow-soft">
              <h2 className="font-semibold text-ink">快捷键</h2>
              <div className="mt-3 grid gap-2 text-slate-500">
                <span>Space 播放发音</span>
                <span>← / → 切换单词</span>
                <span>Enter 标记已学</span>
              </div>
            </section>
          ) : null}
        </aside>
      </div>

      <div className="sticky bottom-20 z-20 grid gap-3 rounded-lg border border-slate-200 bg-[#f8fbff]/95 p-2 shadow-soft backdrop-blur sm:grid-cols-3 md:static md:border-0 md:bg-transparent md:p-0 md:shadow-none">
        <button type="button" onClick={() => move(-1)} disabled={index === 0} className="btn-secondary disabled:opacity-40">
          <ArrowLeft size={18} aria-hidden="true" />
          上一个
        </button>
        <button
          type="button"
          onClick={markCurrentLearned}
          data-sound="none"
          className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold shadow-sm transition active:translate-y-px ${
            currentLearned ? "border border-emerald-700 bg-emerald-600 text-white hover:bg-emerald-700" : "border border-rose-700 bg-rose-600 text-white hover:bg-rose-700"
          }`}
        >
          {currentLearned ? <Check size={18} aria-hidden="true" /> : <Plus size={18} aria-hidden="true" />}
          {learnButtonLabel}
        </button>
        <button type="button" onClick={() => move(1)} disabled={index === words.length - 1} className="btn-secondary disabled:opacity-40">
          <ArrowRight size={18} aria-hidden="true" />
          下一个
        </button>
      </div>
    </div>
  );
}
