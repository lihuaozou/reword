import { Volume2 } from "lucide-react";
import { useState } from "react";
import type { AudioAccent, AudioSettings } from "../types";
import { playWordAudio } from "../utils/audio";

type AudioButtonProps = {
  word: string;
  accent: AudioAccent;
  settings?: Partial<AudioSettings>;
  compact?: boolean;
};

export function AudioButton({ word, accent, settings, compact = false }: AudioButtonProps) {
  const [speaking, setSpeaking] = useState(false);

  const play = async () => {
    setSpeaking(true);
    try {
      await playWordAudio(word, accent, settings);
    } catch (error) {
      window.alert(error instanceof Error ? error.message : "当前浏览器不支持朗读，请添加音频文件。");
    } finally {
      setSpeaking(false);
    }
  };

  return (
    <button
      type="button"
      onClick={play}
      className={`inline-flex items-center justify-center gap-1 rounded-2xl border border-slate-200 bg-white font-semibold text-harbor shadow-sm transition hover:border-harbor active:scale-95 ${
        compact ? "h-9 px-2.5 text-xs" : "h-10 px-3 text-sm"
      }`}
    >
      <Volume2 size={compact ? 13 : 15} aria-hidden="true" />
      {accent.toUpperCase()}
      {speaking ? "..." : ""}
    </button>
  );
}
