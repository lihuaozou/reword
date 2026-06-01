import { ArrowLeft, ArrowRight, Check, Plus } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import type { AudioSettings, ProgressMap, WordEntry, WordUnit } from "../types";
import { ProgressBar } from "../components/ProgressBar";
import { WordCard } from "../components/WordCard";
import { playWordAudio } from "../utils/audio";

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
  const learnedCount = useMemo(() => words.filter((word) => progressMap[word.id]?.learned).length, [words, progressMap]);

  useEffect(() => {
    if (!current || !audioSettings.autoPlayOnStudy) return;
    playWordAudio(current.word, audioSettings.defaultAccent, audioSettings).catch(() => undefined);
  }, [current, audioSettings]);

  if (!current) return null;

  const move = (offset: number) => {
    setIndex((value) => Math.min(words.length - 1, Math.max(0, value + offset)));
  };

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

      <WordCard word={current} progress={progressMap[current.id]} audioSettings={audioSettings} />

      <div className="grid gap-3 sm:grid-cols-4">
        <button type="button" onClick={() => move(-1)} disabled={index === 0} className="btn-secondary disabled:opacity-40">
          <ArrowLeft size={18} aria-hidden="true" />
          上一个
        </button>
        <button type="button" onClick={() => onLearn(current.id)} className="btn-secondary sm:col-span-2">
          <Plus size={18} aria-hidden="true" />
          加入今日学习
        </button>
        <button type="button" onClick={() => onLearn(current.id)} className="btn-primary">
          <Check size={18} aria-hidden="true" />
          标记已初学
        </button>
        <button type="button" onClick={() => move(1)} disabled={index === words.length - 1} className="btn-secondary sm:col-start-4 disabled:opacity-40">
          <ArrowRight size={18} aria-hidden="true" />
          下一个
        </button>
      </div>
    </div>
  );
}

