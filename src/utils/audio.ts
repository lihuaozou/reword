import type { AudioAccent, AudioSettings } from "../types";

let currentAudio: HTMLAudioElement | null = null;
let voicesReady: Promise<SpeechSynthesisVoice[]> | null = null;

const fallbackSettings: AudioSettings = {
  autoPlayOnStudy: false,
  autoPlayOnRecall: false,
  defaultAccent: "us",
  speechRate: 1,
  repeatCount: 1,
};

function normalizeWord(word: string) {
  return word.toLowerCase().replace(/[^a-z-]/g, "");
}

function getVoicesWhenReady() {
  if (!("speechSynthesis" in window)) return Promise.resolve([]);
  const voices = window.speechSynthesis.getVoices();
  if (voices.length) return Promise.resolve(voices);
  if (voicesReady) return voicesReady;
  voicesReady = new Promise((resolve) => {
    const finish = () => {
      window.speechSynthesis.onvoiceschanged = null;
      resolve(window.speechSynthesis.getVoices());
    };
    window.speechSynthesis.onvoiceschanged = finish;
    window.setTimeout(finish, 900);
  });
  return voicesReady;
}

export function stopAudio() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentAudio = null;
  }
  if ("speechSynthesis" in window) window.speechSynthesis.cancel();
}

export function playLocalAudio(word: string, accent: AudioAccent) {
  return new Promise<void>((resolve, reject) => {
    const base = import.meta.env.BASE_URL || "/";
    const audio = new Audio(`${base}audio/${accent}/${normalizeWord(word)}.mp3`);
    currentAudio = audio;
    audio.onended = () => resolve();
    audio.onerror = () => reject(new Error("local audio missing"));
    audio.play().catch(reject);
  });
}

export function getBestVoice(accent: AudioAccent) {
  if (!("speechSynthesis" in window)) return undefined;
  const lang = accent === "us" ? "en-US" : "en-GB";
  const voices = window.speechSynthesis.getVoices();
  return voices.find((voice) => voice.lang === lang) || voices.find((voice) => voice.lang.toLowerCase().startsWith(lang.toLowerCase()));
}

export async function speakWithWebSpeech(word: string, accent: AudioAccent, settings: Partial<AudioSettings> = {}) {
  await getVoicesWhenReady();
  return new Promise<void>((resolve, reject) => {
    if (!("speechSynthesis" in window)) {
      reject(new Error("当前浏览器不支持朗读，请添加音频文件。"));
      return;
    }
    const merged = { ...fallbackSettings, ...settings };
    const lang = accent === "us" ? "en-US" : "en-GB";
    let count = 0;
    const speak = () => {
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.lang = lang;
      utterance.rate = merged.speechRate;
      const voice = getBestVoice(accent);
      if (voice) utterance.voice = voice;
      utterance.onend = () => {
        count += 1;
        if (count < merged.repeatCount) speak();
        else resolve();
      };
      utterance.onerror = (event) => {
        if (event.error === "interrupted" || event.error === "canceled") {
          resolve();
          return;
        }
        reject(new Error("当前浏览器朗读失败，请检查系统语音或浏览器权限。"));
      };
      window.speechSynthesis.speak(utterance);
    };
    speak();
  });
}

export async function playWordAudio(word: string, accent: AudioAccent, settings: Partial<AudioSettings> = {}) {
  stopAudio();
  try {
    await playLocalAudio(word, accent);
  } catch {
    await speakWithWebSpeech(word.replace(/-/g, " "), accent, settings);
  }
}

export function preloadAudio(word: string) {
  const base = import.meta.env.BASE_URL || "/";
  ["us", "uk"].forEach((accent) => {
    const audio = new Audio(`${base}audio/${accent}/${normalizeWord(word)}.mp3`);
    audio.preload = "metadata";
  });
}
