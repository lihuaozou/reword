import { CheckCircle2, Clock3, Eye, Layers3, Sparkles } from "lucide-react";
import { useState } from "react";
import type { AudioSettings, WordEntry, WordProgress } from "../types";
import { getMobileWordTitleClass, getWordTitleClass } from "../utils/textSize";
import { formatDateTime, statusLabel } from "../utils/view";
import { AudioButton } from "./AudioButton";
import { DefinitionSheet } from "./DefinitionSheet";
import { MemoryTipCard } from "./word/MemoryTipCard";
import { WordVisualCard } from "./word/WordVisualCard";

type WordCardProps = {
  word: WordEntry;
  progress?: WordProgress;
  compact?: boolean;
  mobileCompact?: boolean;
  audioSettings?: Partial<AudioSettings>;
};

export function WordCard({ word, progress, compact = false, mobileCompact = false, audioSettings }: WordCardProps) {
  const [definitionSheetOpen, setDefinitionSheetOpen] = useState(false);
  const isLearned = Boolean(progress?.learned || progress?.firstLearnedAt);
  const learningChipClass = isLearned ? "border-emerald-200 bg-emerald-50 text-emerald-700" : "border-rose-200 bg-rose-50 text-rose-600";
  const learningLabel = isLearned ? "已学习" : "未学习";
  const wordSizeClass = mobileCompact ? getMobileWordTitleClass(word.word) : getWordTitleClass(word.word);
  const compactWordSizeClass = word.word.length > 18 ? "text-lg md:text-xl" : word.word.length > 14 ? "text-xl md:text-2xl" : "text-2xl";
  const shouldFoldDefinitions = mobileCompact && word.definitions.length > 3;
  const visibleDefinitions = shouldFoldDefinitions ? word.definitions.slice(0, 3) : word.definitions;

  if (mobileCompact) {
    return (
      <article className="overflow-hidden rounded-3xl border border-white/80 bg-paper shadow-lifted">
        <div className="study-texture p-3.5">
          <div className="mb-2.5 flex items-center justify-between gap-2">
            <span className="truncate rounded-full border border-harbor/15 bg-white/75 px-2.5 py-1 text-[11px] font-semibold text-harbor shadow-sm">{word.unitName}</span>
            <div className="flex shrink-0 items-center gap-1.5">
              <span className={`rounded-full border px-2 py-1 text-[11px] font-semibold ${learningChipClass}`}>{learningLabel}</span>
              <span className="text-[11px] font-semibold text-slate-500">#{word.order}</span>
            </div>
          </div>

          <div className="mt-2 min-w-0">
            <h1 className={`word-title whitespace-nowrap break-normal word-break-normal overflow-visible font-display font-semibold tracking-tight text-ink ${wordSizeClass}`}>{word.word}</h1>
            <div className="mt-1.5 flex items-center justify-between gap-2">
              <p className="min-w-0 break-words text-[13px] font-semibold text-slate-500">{word.phonetic}</p>
              <div className="flex shrink-0 gap-1.5">
                <AudioButton word={word.word} accent="us" settings={audioSettings} compact />
                <AudioButton word={word.word} accent="uk" settings={audioSettings} compact />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-2.5 p-3.5">
          <div className="space-y-2">
            {visibleDefinitions.map((definition, index) => (
              <div key={`${word.id}-compact-def-${index}`} className="flex items-start gap-2.5 rounded-2xl border border-ink/10 bg-white/80 p-2.5 shadow-sm">
                <span className="shrink-0 rounded-full bg-harbor/10 px-2.5 py-1 text-[12px] font-semibold text-harbor">{definition.pos || "释义"}</span>
                <p className="min-w-0 break-words text-[14px] font-semibold leading-snug text-slate-950">{definition.meaning}</p>
              </div>
            ))}
          </div>

          {word.memoryTip ? <MemoryTipCard word={word.word} memoryTip={word.memoryTip} definitions={word.definitions} /> : null}

          {shouldFoldDefinitions ? (
            <button type="button" onClick={() => setDefinitionSheetOpen(true)} className="inline-flex h-9 w-full items-center justify-center gap-1.5 rounded-2xl border border-harbor/15 bg-white/80 px-3 text-xs font-semibold text-harbor shadow-sm">
              <Eye size={14} aria-hidden="true" />
              查看完整释义
            </button>
          ) : null}

          <div className="flex flex-wrap gap-1.5 pt-1 text-[11px] font-semibold text-slate-600">
            <span className="rounded-full border border-ink/10 bg-white/80 px-2 py-1">S{progress?.stage || 0}</span>
            <span className={`rounded-full border px-2 py-1 ${learningChipClass}`}>{statusLabel(progress)}</span>
            <span className="rounded-full border border-ink/10 bg-white/80 px-2 py-1">{formatDateTime(progress?.nextReviewAt)}</span>
          </div>
        </div>

        <DefinitionSheet
          open={definitionSheetOpen}
          onClose={() => setDefinitionSheetOpen(false)}
          word={word.word}
          phonetic={word.phonetic}
          definitions={word.definitions}
          bottomOffset="calc(var(--mobile-bottom-nav-height) + var(--mobile-action-bar-height) + env(safe-area-inset-bottom) + 16px)"
        />
      </article>
    );
  }

  return (
    <article className="overflow-hidden rounded-3xl border border-white/80 bg-paper shadow-lifted">
      {!compact ? (
        <div className="study-texture p-5 md:p-6">
          <div className="mb-5 flex items-center justify-between gap-3">
            <span className="rounded-full border border-harbor/15 bg-white/75 px-2.5 py-1 text-xs font-semibold text-harbor shadow-sm">{word.unitName}</span>
            <div className="flex shrink-0 items-center gap-2">
              <span className={`rounded-full border px-2.5 py-1 text-xs font-semibold ${learningChipClass}`}>{learningLabel}</span>
              <span className="text-xs font-semibold text-slate-500">#{word.order}</span>
            </div>
          </div>
          <div className="flex flex-col gap-5 2xl:flex-row 2xl:items-end 2xl:justify-between">
            <div className="min-w-0 flex-1">
              <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-white/70 px-2.5 py-1 text-xs font-semibold text-slate-500">
                <Sparkles size={14} aria-hidden="true" />
                Memory Focus
              </div>
              <h1 className={`word-title whitespace-nowrap break-normal word-break-normal overflow-visible font-display font-semibold tracking-tight text-ink ${wordSizeClass}`}>{word.word}</h1>
              <p className="mt-3 text-xl font-semibold text-slate-600 md:text-2xl">{word.phonetic}</p>
            </div>
            <div className="shrink-0 2xl:w-80 2xl:self-end">
              <WordVisualCard word={word.word} phonetic={word.phonetic} definitions={word.definitions} image={word.image} imagePrompt={word.imagePrompt} visualPrompt={word.visualPrompt} />
            </div>
          </div>
          <div className="mt-5 flex flex-wrap items-center gap-2">
            <AudioButton word={word.word} accent="us" settings={audioSettings} />
            <AudioButton word={word.word} accent="uk" settings={audioSettings} />
          </div>
        </div>
      ) : null}

      <div className={compact ? "p-4" : "p-5 md:p-6"}>
        {compact ? (
          <div className="mb-3 flex items-start justify-between gap-3">
            <div className="min-w-0">
              <h3 className={`word-title whitespace-nowrap break-normal word-break-normal overflow-visible font-semibold text-ink ${compactWordSizeClass}`}>{word.word}</h3>
              <p className="text-base font-medium text-slate-600">{word.phonetic}</p>
              <div className="mt-2 flex gap-2">
                <AudioButton word={word.word} accent="us" settings={audioSettings} />
                <AudioButton word={word.word} accent="uk" settings={audioSettings} />
              </div>
            </div>
            <div className="flex shrink-0 flex-col items-end gap-1">
              <span className={`rounded-full border px-2.5 py-1 text-xs font-semibold ${learningChipClass}`}>{learningLabel}</span>
              <span className="rounded-full border border-harbor/15 bg-white/70 px-2.5 py-1 text-xs font-semibold text-harbor">#{word.order}</span>
            </div>
          </div>
        ) : null}

        <div className="space-y-3">
          {word.definitions.map((definition, index) => (
            <div key={`${word.id}-def-${index}`} className="flex gap-3 rounded-2xl border border-ink/10 bg-white/80 p-4 shadow-sm">
              <span className="shrink-0 rounded-full bg-harbor/10 px-3 py-1.5 text-base font-semibold text-harbor">{definition.pos || "释义"}</span>
              <p className="min-w-0 text-xl font-semibold leading-9 text-slate-950 md:text-2xl md:leading-10">{definition.meaning}</p>
            </div>
          ))}
        </div>

        {!compact && word.memoryTip ? (
          <div className="mt-4">
            <MemoryTipCard word={word.word} memoryTip={word.memoryTip} definitions={word.definitions} />
          </div>
        ) : null}

        <div className="mt-4 grid gap-3 text-sm sm:grid-cols-3">
          <div className="flex items-center gap-2 rounded-2xl border border-ink/10 bg-white/80 px-3 py-2 font-medium text-slate-600">
            <Layers3 size={16} aria-hidden="true" />
            Stage {progress?.stage || 0}
          </div>
          <div className="flex items-center gap-2 rounded-2xl border border-ink/10 bg-white/80 px-3 py-2 font-medium text-slate-600">
            <Clock3 size={16} aria-hidden="true" />
            {formatDateTime(progress?.nextReviewAt)}
          </div>
          <div className="flex items-center gap-2 rounded-2xl border border-ink/10 bg-white/80 px-3 py-2 font-medium text-slate-600">
            <CheckCircle2 size={16} aria-hidden="true" />
            {statusLabel(progress)}
          </div>
        </div>
      </div>
    </article>
  );
}
