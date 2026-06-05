import type { SoundSettings } from "../types";

export type SoundEffectType =
  | "click"
  | "success"
  | "error"
  | "reward"
  | "toggle"
  | "correct"
  | "wrong"
  | "wordLearned"
  | "monsterDefeated"
  | "levelUp";

export const defaultSoundSettings: SoundSettings = {
  enabled: true,
  volume: 0.25,
};

const MAX_MASTER_VOLUME = 0.35;
const SILENCE = 0.0001;

let audioContext: AudioContext | null = null;
let lastPlayedAt = 0;

type ToneOptions = {
  start: number;
  duration: number;
  frequency: number;
  endFrequency?: number;
  type?: OscillatorType;
  gain: number;
  attack?: number;
  decay?: number;
  release?: number;
};

type PlayOptions = {
  minGapMs?: number;
};

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

function canPlay(settings?: Partial<SoundSettings>, options: PlayOptions = {}) {
  const next = normalizeSettings(settings);
  if (!next.enabled || next.volume <= 0) return false;

  const now = typeof performance !== "undefined" ? performance.now() : Date.now();
  const minGapMs = options.minGapMs ?? 45;
  if (now - lastPlayedAt < minGapMs) return false;
  lastPlayedAt = now;

  return {
    ...next,
    volume: Math.min(Math.max(next.volume, 0), MAX_MASTER_VOLUME),
  };
}

function cleanupNode(node: AudioNode, delayMs: number) {
  if (typeof window === "undefined") return;
  window.setTimeout(() => {
    try {
      node.disconnect();
    } catch {
      // The node may already be disconnected by the browser.
    }
  }, delayMs);
}

function createMasterGain(context: AudioContext, volume: number) {
  const master = context.createGain();
  const now = context.currentTime;
  master.gain.setValueAtTime(SILENCE, now);
  master.gain.exponentialRampToValueAtTime(Math.max(SILENCE, volume), now + 0.006);
  master.connect(context.destination);
  return master;
}

function releaseMaster(master: GainNode, at: number) {
  master.gain.cancelScheduledValues(at);
  master.gain.setTargetAtTime(SILENCE, at, 0.018);
  cleanupNode(master, Math.max(120, (at - master.context.currentTime) * 1000 + 160));
}

function scheduleTone(context: AudioContext, destination: AudioNode, options: ToneOptions) {
  const start = context.currentTime + options.start;
  const duration = Math.max(0.02, options.duration);
  const end = start + duration;
  const attack = Math.min(options.attack ?? 0.006, duration * 0.35);
  const release = Math.min(options.release ?? 0.025, duration * 0.5);
  const decay = options.decay ?? Math.max(0.01, duration - attack - release);
  const peakGain = Math.max(SILENCE, options.gain);
  const tailGain = Math.max(SILENCE, peakGain * 0.18);
  const decayEnd = Math.min(end - release, start + attack + decay);

  const oscillator = context.createOscillator();
  const envelope = context.createGain();

  oscillator.type = options.type ?? "sine";
  oscillator.frequency.setValueAtTime(options.frequency, start);
  if (options.endFrequency) {
    oscillator.frequency.exponentialRampToValueAtTime(options.endFrequency, Math.max(start + 0.01, end - release * 0.3));
  }

  envelope.gain.setValueAtTime(SILENCE, start);
  envelope.gain.exponentialRampToValueAtTime(peakGain, start + attack);
  envelope.gain.exponentialRampToValueAtTime(tailGain, decayEnd);
  envelope.gain.exponentialRampToValueAtTime(SILENCE, end);

  oscillator.connect(envelope);
  envelope.connect(destination);
  oscillator.start(start);
  oscillator.stop(end + 0.035);

  cleanupNode(oscillator, (options.start + duration) * 1000 + 120);
  cleanupNode(envelope, (options.start + duration) * 1000 + 120);
}

function scheduleCorrect(context: AudioContext, master: GainNode) {
  scheduleTone(context, master, {
    start: 0,
    duration: 0.19,
    frequency: 660,
    endFrequency: 880,
    type: "sine",
    gain: 0.22,
    attack: 0.005,
    decay: 0.16,
    release: 0.028,
  });
  scheduleTone(context, master, {
    start: 0.004,
    duration: 0.17,
    frequency: 990,
    endFrequency: 1320,
    type: "triangle",
    gain: 0.095,
    attack: 0.005,
    decay: 0.16,
    release: 0.03,
  });
  releaseMaster(master, context.currentTime + 0.24);
}

function scheduleWordLearned(context: AudioContext, master: GainNode) {
  [523, 659, 784].forEach((frequency, index) => {
    scheduleTone(context, master, {
      start: index * 0.072,
      duration: 0.07,
      frequency,
      type: "sine",
      gain: 0.21,
      attack: 0.004,
      decay: 0.05,
      release: 0.02,
    });
  });

  [1568, 2093].forEach((frequency, index) => {
    scheduleTone(context, master, {
      start: 0.196 + index * 0.016,
      duration: 0.032,
      frequency,
      type: "sine",
      gain: 0.045,
      attack: 0.003,
      decay: 0.014,
      release: 0.014,
    });
  });

  releaseMaster(master, context.currentTime + 0.255);
}

function scheduleMonsterDefeated(context: AudioContext, master: GainNode) {
  const particleBus = context.createBiquadFilter();
  particleBus.type = "bandpass";
  particleBus.frequency.setValueAtTime(1350, context.currentTime);
  particleBus.Q.setValueAtTime(1.2, context.currentTime);
  particleBus.connect(master);

  scheduleTone(context, master, {
    start: 0,
    duration: 0.08,
    frequency: 120,
    endFrequency: 60,
    type: "sine",
    gain: 0.58,
    attack: 0.003,
    decay: 0.055,
    release: 0.022,
  });

  [900, 1200, 1600, 1200, 900, 1600].forEach((frequency, index) => {
    scheduleTone(context, particleBus, {
      start: 0.085 + index * 0.028 + Math.random() * 0.018,
      duration: 0.032 + Math.random() * 0.026,
      frequency,
      type: index % 2 ? "sine" : "triangle",
      gain: 0.055 + Math.random() * 0.035,
      attack: 0.002,
      decay: 0.018,
      release: 0.018,
    });
  });

  [880, 1174, 1568].forEach((frequency, index) => {
    scheduleTone(context, master, {
      start: 0.19 + index * 0.095,
      duration: index === 2 ? 0.13 : 0.105,
      frequency,
      type: "sine",
      gain: 0.18,
      attack: 0.005,
      decay: 0.075,
      release: 0.04,
    });
  });

  cleanupNode(particleBus, 640);
  releaseMaster(master, context.currentTime + 0.505);
}

function scheduleWrong(context: AudioContext, master: GainNode) {
  const lowpass = context.createBiquadFilter();
  const now = context.currentTime;
  lowpass.type = "lowpass";
  lowpass.frequency.setValueAtTime(560, now);
  lowpass.frequency.exponentialRampToValueAtTime(320, now + 0.2);
  lowpass.Q.setValueAtTime(0.55, now);
  lowpass.connect(master);

  scheduleTone(context, lowpass, {
    start: 0,
    duration: 0.22,
    frequency: 260,
    endFrequency: 180,
    type: "triangle",
    gain: 0.24,
    attack: 0.012,
    decay: 0.14,
    release: 0.06,
  });

  cleanupNode(lowpass, 420);
  releaseMaster(master, context.currentTime + 0.28);
}

function scheduleLevelUp(context: AudioContext, master: GainNode) {
  const input = context.createGain();
  const delay = context.createDelay(0.24);
  const delayGain = context.createGain();
  const now = context.currentTime;

  delay.delayTime.setValueAtTime(0.075, now);
  delayGain.gain.setValueAtTime(0.22, now);
  input.connect(master);
  input.connect(delay);
  delay.connect(delayGain);
  delayGain.connect(master);

  [
    { frequency: 523, start: 0, duration: 0.11, gain: 0.19 },
    { frequency: 659, start: 0.105, duration: 0.11, gain: 0.2 },
    { frequency: 784, start: 0.215, duration: 0.13, gain: 0.22 },
    { frequency: 1046, start: 0.345, duration: 0.16, gain: 0.22 },
    { frequency: 1318, start: 0.505, duration: 0.22, gain: 0.25 },
  ].forEach((note) => {
    scheduleTone(context, input, {
      ...note,
      type: "sine",
      attack: 0.006,
      decay: 0.08,
      release: 0.05,
    });
  });

  scheduleTone(context, input, {
    start: 0.55,
    duration: 0.15,
    frequency: 1976,
    type: "sine",
    gain: 0.06,
    attack: 0.005,
    decay: 0.05,
    release: 0.05,
  });

  cleanupNode(input, 980);
  cleanupNode(delay, 980);
  cleanupNode(delayGain, 980);
  releaseMaster(master, context.currentTime + 0.84);
}

function scheduleReward(context: AudioContext, master: GainNode) {
  [659, 880, 1174].forEach((frequency, index) => {
    scheduleTone(context, master, {
      start: index * 0.085,
      duration: index === 2 ? 0.13 : 0.085,
      frequency,
      type: "sine",
      gain: 0.18,
      attack: 0.004,
      decay: 0.055,
      release: 0.035,
    });
  });
  releaseMaster(master, context.currentTime + 0.33);
}

function scheduleToggle(context: AudioContext, master: GainNode) {
  [520, 660].forEach((frequency, index) => {
    scheduleTone(context, master, {
      start: index * 0.055,
      duration: 0.055,
      frequency,
      type: "sine",
      gain: 0.14,
      attack: 0.004,
      decay: 0.035,
      release: 0.018,
    });
  });
  releaseMaster(master, context.currentTime + 0.18);
}

function scheduleClick(context: AudioContext, master: GainNode) {
  scheduleTone(context, master, {
    start: 0,
    duration: 0.045,
    frequency: 420,
    endFrequency: 520,
    type: "sine",
    gain: 0.11,
    attack: 0.003,
    decay: 0.026,
    release: 0.014,
  });
  releaseMaster(master, context.currentTime + 0.1);
}

function playSequence(type: SoundEffectType, settings?: Partial<SoundSettings>, options?: PlayOptions) {
  const nextSettings = canPlay(settings, options);
  if (!nextSettings) return;

  try {
    const context = getAudioContext();
    if (!context) return;
    if (context.state === "suspended") context.resume().catch(() => undefined);

    const master = createMasterGain(context, nextSettings.volume);
    const resolvedType = resolveEffectType(type);

    if (resolvedType === "click") scheduleClick(context, master);
    else if (resolvedType === "toggle") scheduleToggle(context, master);
    else if (resolvedType === "correct") scheduleCorrect(context, master);
    else if (resolvedType === "wrong") scheduleWrong(context, master);
    else if (resolvedType === "wordLearned") scheduleWordLearned(context, master);
    else if (resolvedType === "monsterDefeated") scheduleMonsterDefeated(context, master);
    else if (resolvedType === "levelUp") scheduleLevelUp(context, master);
    else scheduleReward(context, master);
  } catch {
    // Sound effects are optional; unsupported browsers should stay silent.
  }
}

function resolveEffectType(type: SoundEffectType) {
  if (type === "success") return "correct";
  if (type === "error") return "wrong";
  return type;
}

export function playSoundEffect(type: SoundEffectType, settings?: Partial<SoundSettings>) {
  playSequence(type, settings);
}

export function playClickSound(settings?: Partial<SoundSettings>) {
  playSequence("click", settings);
}

export function playCorrectSound(settings?: Partial<SoundSettings>) {
  playSequence("correct", settings);
}

export function playSuccessSound(settings?: Partial<SoundSettings>) {
  playCorrectSound(settings);
}

export function playWordLearnedSound(settings?: Partial<SoundSettings>) {
  playSequence("wordLearned", settings);
}

export function playWrongSound(settings?: Partial<SoundSettings>) {
  playSequence("wrong", settings);
}

export function playErrorSound(settings?: Partial<SoundSettings>) {
  playWrongSound(settings);
}

export function playMonsterDefeatedSound(settings?: Partial<SoundSettings>) {
  playSequence("monsterDefeated", settings, { minGapMs: 80 });
}

export function playRewardSound(settings?: Partial<SoundSettings>) {
  playSequence("reward", settings);
}

export function playLevelUpSound(settings?: Partial<SoundSettings>) {
  playSequence("levelUp", settings, { minGapMs: 80 });
}

export function playToggleSound(settings?: Partial<SoundSettings>) {
  playSequence("toggle", settings);
}
