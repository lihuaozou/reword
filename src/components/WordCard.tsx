import { CheckCircle2, Clock3, Layers3 } from "lucide-react";
import { useMemo, useState } from "react";
import type { AudioSettings, WordEntry, WordProgress } from "../types";
import { formatDateTime, statusLabel } from "../utils/view";
import { AudioButton } from "./AudioButton";
import { DefinitionSheet } from "./DefinitionSheet";

type WordCardProps = {
  word: WordEntry;
  progress?: WordProgress;
  compact?: boolean;
  mobileCompact?: boolean;
  audioSettings?: Partial<AudioSettings>;
};

export function WordCard({ word, progress, compact = false, mobileCompact = false, audioSettings }: WordCardProps) {
  const [sheetOpen, setSheetOpen] = useState(false);
  const visibleDefinitions = useMemo(() => (mobileCompact ? word.definitions.slice(0, 2) : word.definitions), [mobileCompact, word.definitions]);

  if (mobileCompact) {
    return (
      <>
        <article className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-soft">
          <div className="border-b border-slate-200 bg-[#f8fbff] p-3">
            <div className="mb-2 flex items-center justify-between gap-2">
              <span className="truncate rounded-md border border-harbor/15 bg-white px-2 py-0.5 text-[11px] font-medium text-harbor">{word.unitName}</span>
              <span className="text-[11px] text-slate-500">#{word.order}</span>
            </div>
            <div className="flex items-end justify-between gap-3">
              <div className="min-w-0">
                <h1 className={`truncate font-semibold leading-tight text-ink ${word.word.length > 12 ? "text-2xl" : "text-3xl"}`}>{word.word}</h1>
                <p className="mt-1 text-xs font-medium text-slate-500">{word.phonetic}</p>
              </div>
              <div className="flex shrink-0 gap-1.5">
                <AudioButton word={word.word} accent="us" settings={audioSettings} compact />
                <AudioButton word={word.word} accent="uk" settings={audioSettings} compact />
              </div>
            </div>
          </div>

          <div className="p-3">
            <div className="mb-2 grid h-20 place-items-center overflow-hidden rounded-lg border border-sky-100 bg-word-placeholder">
              {word.image ? <img src={word.image} alt="" className="h-full w-full object-contain" loading="lazy" /> : <span className="text-xs font-semibold text-harbor/70">重复记忆</span>}
            </div>

            <div className="space-y-1.5">
              {visibleDefinitions.map((definition, index) => (
                <div key={`${word.id}-compact-def-${index}`} className="flex gap-2 rounded-lg border border-sky-100 bg-[#f8fbff] p-2">
                  <span className="shrink-0 rounded-md bg-white px-2 py-0.5 text-[11px] font-semibold text-harbor">{definition.pos || "释义"}</span>
                  <p className="mobile-def-clamp min-w-0 text-[13px] font-semibold leading-snug text-slate-950">{definition.meaning}</p>
                </div>
              ))}
            </div>

            {word.definitions.length > 2 || word.definitions.some((definition) => definition.meaning.length > 28) ? (
              <button type="button" onClick={() => setSheetOpen(true)} className="mt-2 text-xs font-semibold text-harbor">
                展开完整释义
              </button>
            ) : null}

            <div className="mt-2 flex flex-wrap gap-1.5 text-[11px] text-slate-600">
              <span className="rounded-md border border-slate-200 bg-white px-2 py-1">S{progress?.stage || 0}</span>
              <span className="rounded-md border border-slate-200 bg-white px-2 py-1">{statusLabel(progress)}</span>
              <span className="rounded-md border border-slate-200 bg-white px-2 py-1">{formatDateTime(progress?.nextReviewAt)}</span>
            </div>
          </div>
        </article>
        <DefinitionSheet open={sheetOpen} onClose={() => setSheetOpen(false)} word={word.word} phonetic={word.phonetic} definitions={word.definitions} />
      </>
    );
  }

  return (
    <article className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-soft">
      {!compact ? (
        <div className="border-b border-slate-200 bg-[#f8fbff] p-5 md:p-6">
          <div className="mb-5 flex items-center justify-between gap-3">
            <span className="rounded-md border border-harbor/15 bg-white px-2.5 py-1 text-xs font-medium text-harbor">{word.unitName}</span>
            <span className="text-xs text-slate-500">#{word.order}</span>
          </div>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h1 className="break-words text-5xl font-semibold leading-tight text-ink md:text-6xl">{word.word}</h1>
              <p className="mt-3 text-xl font-medium text-slate-600 md:text-2xl">{word.phonetic}</p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <AudioButton word={word.word} accent="us" settings={audioSettings} />
              <AudioButton word={word.word} accent="uk" settings={audioSettings} />
            </div>
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
            <span className="rounded-md border border-harbor/15 bg-[#f8fbff] px-2.5 py-1 text-xs text-harbor">#{word.order}</span>
          </div>
        ) : null}

        <div className="space-y-3">
          {word.definitions.map((definition, index) => (
            <div key={`${word.id}-def-${index}`} className="flex gap-3 rounded-lg border border-slate-200 bg-[#f8fbff] p-4">
              <span className="shrink-0 rounded-md border border-harbor/15 bg-white px-3 py-1.5 text-base font-semibold text-harbor">
                {definition.pos || "释义"}
              </span>
              <p className="min-w-0 text-xl font-semibold leading-9 text-slate-950 md:text-2xl md:leading-10">{definition.meaning}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 grid gap-3 text-sm sm:grid-cols-3">
          <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-600">
            <Layers3 size={16} aria-hidden="true" />
            Stage {progress?.stage || 0}
          </div>
          <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-600">
            <Clock3 size={16} aria-hidden="true" />
            {formatDateTime(progress?.nextReviewAt)}
          </div>
          <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-600">
            <CheckCircle2 size={16} aria-hidden="true" />
            {statusLabel(progress)}
          </div>
        </div>
      </div>
    </article>
  );
}
