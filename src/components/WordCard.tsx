import { CheckCircle2, Clock3, Layers3 } from "lucide-react";
import type { AudioSettings, WordEntry, WordProgress } from "../types";
import { formatDateTime, statusLabel } from "../utils/view";
import { AudioButton } from "./AudioButton";

type WordCardProps = {
  word: WordEntry;
  progress?: WordProgress;
  compact?: boolean;
  audioSettings?: Partial<AudioSettings>;
};

export function WordCard({ word, progress, compact = false, audioSettings }: WordCardProps) {
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
