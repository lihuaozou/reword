import { Volume2 } from "lucide-react";
import { useState } from "react";
import type { AudioAccent, AudioSettings } from "../types";
import { playWordAudio } from "../utils/audio";

type AudioButtonProps = {
  word: string;
  accent: AudioAccent;
  settings?: Partial<AudioSettings>;
};

export function AudioButton({ word, accent, settings }: AudioButtonProps) {
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
    <button type="button" onClick={play} className="inline-flex items-center gap-1 rounded-md border border-slate-200 bg-white px-2.5 py-1.5 text-sm font-semibold text-harbor transition hover:border-harbor">
      <Volume2 size={15} aria-hidden="true" />
      {accent.toUpperCase()}
      {speaking ? "..." : ""}
    </button>
  );
}
