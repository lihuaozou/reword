import { useCallback } from "react";
import type { AudioAccent, AudioSettings } from "../types";
import { playWordAudio, stopAudio } from "../utils/audio";

export function useAudio(settings?: Partial<AudioSettings>) {
  const play = useCallback(
    (word: string, accent: AudioAccent = settings?.defaultAccent || "us") => playWordAudio(word, accent, settings),
    [settings]
  );

  return { play, stop: stopAudio };
}
