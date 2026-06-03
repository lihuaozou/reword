import type { SoundSettings } from "../types";

export type SoundEffectType = "click" | "success" | "error" | "reward" | "toggle";

export const defaultSoundSettings: SoundSettings = {
  enabled: true,
  volume: 0.25,
};

let audioContext: AudioContext | null = null;
let lastPlayedAt = 0;

function getAudioContext() {
  if (typeof window === "undefined") return null;
  const AudioContextClass =
    window.AudioContext ||
    (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!AudioContextClass) return null;
  if (!audioContext) audioContext = new AudioContextClass();
  return audioContext;
}

function normalizeSettings(settings?: Partial<SoundSettings>): SoundSettings {
  return {
    ...defaultSoundSettings,
    ...settings,
  };
}

function canPlay(settings?: Partial<SoundSettings>) {
  const next = normalizeSettings(settings);
  if (!next.enabled || next.volume <= 0) return false;
  const now = performance.now();
  if (now - lastPlayedAt < 80) return false;
  lastPlayedAt = now;
  return next;
}

function playSequence(type: SoundEffectType, settings?: Partial<SoundSettings>) {
  const nextSettings = canPlay(settings);
  if (!nextSettings) return;

  try {
    const context = getAudioContext();
    if (!context) return;
    if (context.state === "suspended") context.resume().catch(() => undefined);

    const now = context.currentTime;
    const gain = context.createGain();
    gain.connect(context.destination);
    gain.gain.setValueAtTime(0.0001, now);

    const volume = nextSettings.volume * 0.16;
    const steps: Record<SoundEffectType, Array<[number, number]>> = {
      click: [[420, 0.045]],
      toggle: [[520, 0.05], [660, 0.06]],
      success: [[520, 0.055], [720, 0.075]],
      error: [[260, 0.08], [190, 0.09]],
      reward: [[520, 0.06], [700, 0.07], [920, 0.09]],
    };

    let cursor = now;
    steps[type].forEach(([frequency, duration], index) => {
      const oscillator = context.createOscillator();
      oscillator.type = type === "error" ? "triangle" : "sine";
      oscillator.frequency.setValueAtTime(frequency, cursor);
      oscillator.connect(gain);
      oscillator.start(cursor);
      oscillator.stop(cursor + duration);
      if (index === 0) {
        gain.gain.exponentialRampToValueAtTime(volume, cursor + 0.012);
      }
      cursor += duration + 0.018;
    });

    gain.gain.exponentialRampToValueAtTime(0.0001, cursor + 0.04);
    window.setTimeout(() => gain.disconnect(), Math.max(120, (cursor - now) * 1000 + 120));
  } catch {
    // Sound effects are optional; unsupported browsers should stay silent.
  }
}

export function playSoundEffect(type: SoundEffectType, settings?: Partial<SoundSettings>) {
  playSequence(type, settings);
}

export function playClickSound(settings?: Partial<SoundSettings>) {
  playSequence("click", settings);
}

export function playSuccessSound(settings?: Partial<SoundSettings>) {
  playSequence("success", settings);
}

export function playErrorSound(settings?: Partial<SoundSettings>) {
  playSequence("error", settings);
}

export function playRewardSound(settings?: Partial<SoundSettings>) {
  playSequence("reward", settings);
}

export function playToggleSound(settings?: Partial<SoundSettings>) {
  playSequence("toggle", settings);
}
