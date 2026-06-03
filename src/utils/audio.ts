import type { AudioAccent, AudioSettings } from "../types";
import { safeFetchJson } from "./safeFetch";

type DictionaryEntry = {
  phonetics?: Array<{
    audio?: string;
  }>;
};

let currentAudio: HTMLAudioElement | null = null;
let voicesReady: Promise<SpeechSynthesisVoice[]> | null = null;
const missingLocalAudio = new Set<string>();
const missingRemoteAudio = new Set<string>();
const dictionaryAudioCache = new Map<string, Promise<string[]>>();

const fallbackSettings: AudioSettings = {
  autoPlayOnStudy: false,
  autoPlayOnRecall: false,
  defaultAccent: "us",
  speechRate: 0.9,
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
      window.speechSynthesis.removeEventListener("voiceschanged", finish);
      resolve(window.speechSynthesis.getVoices());
    };
    window.speechSynthesis.addEventListener("voiceschanged", finish, { once: true });
    window.setTimeout(finish, 900);
  });
  return voicesReady;
}

function targetLang(accent: AudioAccent) {
  return accent === "us" ? "en-US" : "en-GB";
}

function normalizeLang(lang: string) {
  return lang.toLowerCase().replace("_", "-");
}

function scoreVoice(voice: SpeechSynthesisVoice, accent: AudioAccent) {
  const desired = targetLang(accent).toLowerCase();
  const lang = normalizeLang(voice.lang);
  const name = voice.name.toLowerCase();
  let score = 0;

  if (lang === desired) score += 120;
  else if (lang.startsWith(`${desired}-`)) score += 105;
  else if (lang.startsWith("en-")) score += 55;
  else return -1;

  if (voice.default) score += 22;
  if (voice.localService) score += 8;

  const preferredUs = ["google us english", "samantha", "ava", "allison", "joelle", "microsoft aria", "microsoft jenny", "zira", "english united states"];
  const preferredUk = ["google uk english female", "serena", "daniel", "martha", "arthur", "microsoft sonia", "microsoft libby", "microsoft ryan", "english united kingdom"];
  const preferred = accent === "us" ? preferredUs : preferredUk;
  const preferredIndex = preferred.findIndex((keyword) => name.includes(keyword));
  if (preferredIndex >= 0) score += 70 - preferredIndex * 4;

  if (name.includes("google")) score += 26;
  if (name.includes("microsoft")) score += 20;
  if (name.includes("apple")) score += 12;
  if (/(natural|neural|premium|enhanced)/.test(name)) score += 30;
  if (/(female|woman)/.test(name)) score += 6;

  if (/(compact|novelty|whisper|bells|boing|bubbles|cellos|organ|trinoids|zarvox|bad news|good news|bahh|jester|superstar)/.test(name)) score -= 90;

  return score;
}

function getNaturalSpeechRate(rate: AudioSettings["speechRate"]) {
  const mobileLike = typeof window !== "undefined" && window.matchMedia?.("(pointer: coarse)").matches;
  if (mobileLike && rate === 1) return 0.92;
  return rate;
}

function shouldPreferBrowserSpeech() {
  if (typeof window === "undefined" || typeof navigator === "undefined") return false;
  const mobileLike = window.matchMedia?.("(pointer: coarse)").matches;
  const userAgent = navigator.userAgent.toLowerCase();
  const chromiumLike = /chrome|crios|edg|samsungbrowser/.test(userAgent) && !/firefox/.test(userAgent);
  return Boolean(mobileLike && chromiumLike && "speechSynthesis" in window);
}

function getStaticDictionaryAudioUrls(word: string, accent: AudioAccent) {
  const normalized = normalizeWord(word);
  if (!normalized) return [];

  const variant = accent === "us" ? "us" : "gb";
  return [
    `https://ssl.gstatic.com/dictionary/static/sounds/20200429/${normalized}--_${variant}_1.mp3`,
    `https://ssl.gstatic.com/dictionary/static/sounds/oxford/${normalized}--_${variant}_1.mp3`,
  ];
}

function normalizeAudioUrl(url: string) {
  if (!url) return "";
  if (url.startsWith("//")) return `https:${url}`;
  return url;
}

function matchesAccent(url: string, accent: AudioAccent) {
  const lower = url.toLowerCase();
  if (accent === "us") return /[-_]us(?:[-_.]|$)|american|united-states/.test(lower);
  return /[-_](?:uk|gb)(?:[-_.]|$)|british|united-kingdom/.test(lower);
}

function fetchDictionaryAudioUrls(word: string, accent: AudioAccent) {
  const normalized = normalizeWord(word);
  const cacheKey = `${accent}:${normalized}`;
  if (!normalized) return Promise.resolve([]);
  const cached = dictionaryAudioCache.get(cacheKey);
  if (cached) return cached;

  const request = safeFetchJson<DictionaryEntry[]>(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(normalized)}`)
    .then((result) => {
      if (!result.ok || !Array.isArray(result.data)) return [];
      const entries = result.data;
      const urls = entries.flatMap((entry) => entry.phonetics || []).map((phonetic) => normalizeAudioUrl(phonetic.audio || "")).filter(Boolean);
      const unique = Array.from(new Set(urls));
      const preferred = unique.filter((url) => matchesAccent(url, accent));
      const fallback = unique.filter((url) => !matchesAccent(url, accent));
      return [...preferred, ...fallback];
    })
    .catch(() => []);

  dictionaryAudioCache.set(cacheKey, request);
  return request;
}

function playAudioUrl(url: string) {
  return new Promise<void>((resolve, reject) => {
    const audio = new Audio(url);
    currentAudio = audio;
    audio.preload = "auto";
    audio.onended = () => resolve();
    audio.onerror = () => reject(new Error("audio missing"));
    audio.play().catch(reject);
  });
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
  const base = import.meta.env.BASE_URL || "/";
  const url = `${base}audio/${accent}/${normalizeWord(word)}.mp3`;
  const key = `${accent}:${normalizeWord(word)}`;
  if (missingLocalAudio.has(key)) return Promise.reject(new Error("local audio missing"));
  return playAudioUrl(url).catch((error) => {
    missingLocalAudio.add(key);
    throw error;
  });
}

export async function playDictionaryAudio(word: string, accent: AudioAccent) {
  const urls = [...getStaticDictionaryAudioUrls(word, accent), ...(await fetchDictionaryAudioUrls(word, accent))];

  for (const url of urls) {
    if (!url || missingRemoteAudio.has(url)) continue;
    try {
      await playAudioUrl(url);
      return;
    } catch {
      missingRemoteAudio.add(url);
    }
  }

  throw new Error("dictionary audio missing");
}

export function getBestVoice(accent: AudioAccent) {
  if (!("speechSynthesis" in window)) return undefined;
  const voices = window.speechSynthesis.getVoices();
  const ranked = voices
    .map((voice) => ({ voice, score: scoreVoice(voice, accent) }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score);
  return ranked[0]?.score >= 120 ? ranked[0].voice : undefined;
}

export async function speakWithWebSpeech(word: string, accent: AudioAccent, settings: Partial<AudioSettings> = {}) {
  await getVoicesWhenReady();
  return new Promise<void>((resolve, reject) => {
    if (!("speechSynthesis" in window)) {
      reject(new Error("当前浏览器不支持朗读，请添加音频文件。"));
      return;
    }

    const merged = { ...fallbackSettings, ...settings };
    const lang = targetLang(accent);
    let count = 0;

    const speak = () => {
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.lang = lang;
      utterance.rate = getNaturalSpeechRate(merged.speechRate);
      utterance.pitch = 1;
      utterance.volume = 1;
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
  if (shouldPreferBrowserSpeech()) {
    try {
      await speakWithWebSpeech(word.replace(/-/g, " "), accent, settings);
      return;
    } catch {
      // Mobile Chrome can delay voice loading. Fall back to recorded sources.
    }
  }

  try {
    await playLocalAudio(word, accent);
    return;
  } catch {
    // Local audio is optional. Prefer real dictionary MP3 before browser TTS.
  }

  try {
    await playDictionaryAudio(word, accent);
  } catch {
    await speakWithWebSpeech(word.replace(/-/g, " "), accent, settings);
  }
}

export function preloadAudio(word: string) {
  const base = import.meta.env.BASE_URL || "/";
  ["us", "uk"].forEach((accent) => {
    const localAudio = new Audio(`${base}audio/${accent}/${normalizeWord(word)}.mp3`);
    localAudio.preload = "metadata";
    const dictionaryAudio = new Audio(getStaticDictionaryAudioUrls(word, accent as AudioAccent)[0]);
    dictionaryAudio.preload = "metadata";
  });
}
