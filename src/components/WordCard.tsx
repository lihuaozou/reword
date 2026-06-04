import { CheckCircle2, Clock3, Layers3, Sparkles } from "lucide-react";
import type { AudioSettings, WordEntry, WordProgress } from "../types";
import { formatDateTime, statusLabel } from "../utils/view";
import { AudioButton } from "./AudioButton";

type WordCardProps = {
  word: WordEntry;
  progress?: WordProgress;
  compact?: boolean;
  mobileCompact?: boolean;
  audioSettings?: Partial<AudioSettings>;
};

export function WordCard({ word, progress, compact = false, mobileCompact = false, audioSettings }: WordCardProps) {
  const isLearned = Boolean(progress?.learned || progress?.firstLearnedAt);
  const learningChipClass = isLearned ? "border-emerald-200 bg-emerald-50 text-emerald-700" : "border-rose-200 bg-rose-50 text-rose-600";
  const learningLabel = isLearned ? "已学习" : "未学习";
  const wordSize = word.word.length > 18 ? "text-[30px]" : word.word.length > 12 ? "text-4xl" : "text-5xl";
  const initial = word.word.charAt(0).toUpperCase();

  if (mobileCompact) {
    return (
      <article className="overflow-hidden rounded-3xl border border-white/80 bg-paper shadow-lifted">
        <div className="study-texture p-3.5">
          <div className="mb-3 flex items-center justify-between gap-2">
            <span className="truncate rounded-full border border-harbor/15 bg-white/75 px-2.5 py-1 text-[11px] font-semibold text-harbor shadow-sm">{word.unitName}</span>
            <div className="flex shrink-0 items-center gap-1.5">
              <span className={`rounded-full border px-2 py-1 text-[11px] font-semibold ${learningChipClass}`}>{learningLabel}</span>
              <span className="text-[11px] font-semibold text-slate-500">#{word.order}</span>
            </div>
          </div>

          <div className="grid gap-2.5">
            <div className="memory-visual relative grid min-h-24 place-items-center overflow-hidden rounded-2xl border border-white/80 shadow-sm">
              {word.image ? <img src={word.image} alt="" className="h-full w-full object-contain p-3" loading="lazy" /> : null}
              {!word.image ? (
                <>
                  <div className="absolute left-4 top-4 h-10 w-16 rounded-2xl border border-white/70 bg-white/60 rotate-[-8deg]" />
                  <div className="absolute bottom-4 right-4 h-12 w-20 rounded-2xl border border-white/70 bg-white/60 rotate-[7deg]" />
                  <div className="relative grid h-20 w-20 place-items-center rounded-full border border-white/80 bg-white/70 font-display text-5xl font-semibold text-harbor shadow-soft backdrop-blur">
                    {initial}
                  </div>
                </>
              ) : null}
            </div>

            <div>
              <h1 className={`break-words font-display font-semibold leading-[1.03] text-ink ${wordSize}`}>{word.word}</h1>
              <div className="mt-1.5 flex items-center justify-between gap-2">
                <p className="min-w-0 break-words text-[13px] font-semibold text-slate-500">{word.phonetic}</p>
                <div className="flex shrink-0 gap-1.5">
                  <AudioButton word={word.word} accent="us" settings={audioSettings} compact />
                  <AudioButton word={word.word} accent="uk" settings={audioSettings} compact />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-2.5 p-3.5">
          <div className="no-scrollbar max-h-44 space-y-2 overflow-y-auto pr-1">
          {word.definitions.map((definition, index) => (
            <div key={`${word.id}-compact-def-${index}`} className="flex items-start gap-2.5 rounded-2xl border border-ink/10 bg-white/80 p-2.5 shadow-sm">
              <span className="shrink-0 rounded-full bg-harbor/10 px-2.5 py-1 text-[12px] font-semibold text-harbor">{definition.pos || "释义"}</span>
              <p className="min-w-0 break-words text-[15px] font-semibold leading-snug text-slate-950">{definition.meaning}</p>
            </div>
          ))}
          </div>

          <div className="flex flex-wrap gap-1.5 pt-1 text-[11px] font-semibold text-slate-600">
            <span className="rounded-full border border-ink/10 bg-white/80 px-2 py-1">S{progress?.stage || 0}</span>
            <span className={`rounded-full border px-2 py-1 ${learningChipClass}`}>{statusLabel(progress)}</span>
            <span className="rounded-full border border-ink/10 bg-white/80 px-2 py-1">{formatDateTime(progress?.nextReviewAt)}</span>
          </div>
        </div>
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
          <div className="grid gap-5 lg:grid-cols-[1fr_220px] lg:items-end">
            <div>
              <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-white/70 px-2.5 py-1 text-xs font-semibold text-slate-500">
                <Sparkles size={14} aria-hidden="true" />
                Memory Focus
              </div>
              <h1 className="break-words font-display text-5xl font-semibold leading-tight text-ink md:text-6xl">{word.word}</h1>
              <p className="mt-3 text-xl font-semibold text-slate-600 md:text-2xl">{word.phonetic}</p>
            </div>
            <div className="memory-visual hidden h-44 place-items-center overflow-hidden rounded-2xl border border-white/80 shadow-sm lg:grid">
              {word.image ? <img src={word.image} alt="" className="h-full w-full object-contain p-4" loading="lazy" /> : <span className="font-display text-7xl font-semibold text-harbor">{initial}</span>}
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
            <div>
              <h3 className="break-words text-2xl font-semibold text-ink">{word.word}</h3>
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
