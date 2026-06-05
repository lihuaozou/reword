import type { Definition } from "../types";

const WORD_MEANING_FALLBACKS: Record<string, string> = {
  objective: "目标 / 客观",
  radiate: "散发 / 辐射",
  radiant: "光芒 / 容光焕发",
  obligation: "义务 / 责任",
  object: "物体 / 反对",
  observe: "观察 / 遵守",
  observation: "观察 / 观测",
  ideal: "理想 / 典范",
};

function compactMeaning(value: string) {
  return value
    .replace(/\([^)]*\)/g, "")
    .replace(/（[^）]*）/g, "")
    .replace(/\s+/g, "")
    .trim();
}

export function getCoreMeaning(word: string, definitions: Definition[]) {
  const fallback = WORD_MEANING_FALLBACKS[word.toLowerCase()];
  const parts = definitions
    .flatMap((definition) => definition.meaning.split(/[；;，,、。/]/))
    .map(compactMeaning)
    .filter((part) => part.length >= 2 && part.length <= 8)
    .slice(0, 2);

  if (parts.length) return parts.join(" / ");
  return fallback || word;
}

export function generateWordImagePrompt(word: string, definitions: Definition[]) {
  const coreMeaning = getCoreMeaning(word, definitions);
  const fileName = word.toLowerCase().replace(/[^a-z0-9-]+/g, "-");
  return `Create a clean, modern mnemonic illustration for the English vocabulary word "${word}". The illustration should visually represent the meaning: "${coreMeaning}". Style: elegant educational app illustration, soft gradient background, simple symbolic objects, not childish, not photorealistic, no text, no logo, centered composition, mobile app friendly, high clarity. Use a 1:1 square composition. The image can be saved as public/images/words/${fileName}.png.`;
}
