import type { Definition, WordEntry, WordUnit } from "../types";

type ParseOptions = {
  unitId: string;
  unitName?: string;
  order: number;
  referenceImages?: string[];
};

const wordLinePattern = /^\s*(\d+)\.\s+\*\*(.+?)\*\*\s+(\/.+\/)\s*$/;
const bareWordLinePattern = /^\s*([A-Za-z][A-Za-z'’-]*(?:\s+[A-Za-z][A-Za-z'’-]*)?)\s+(\/[^/]+\/)\s*$/;
const definitionPattern = /^((?:[a-z]+\.)+(?:\s+[a-z]+\.)*)\s+(.+)$/i;

function normalizeUnitName(markdown: string, fallback: string) {
  const heading = markdown.match(/^#{1,3}\s+(.+)$/m)?.[1]?.trim();
  const match = heading?.match(/(必备词|必考词)\s*Unit\s*(\d+)/i);
  if (match) return `${match[1]} Unit${match[2]}`;
  return fallback;
}

function expectedCount(markdown: string) {
  const heading = markdown.match(/^#{1,3}\s+(.+)$/m)?.[1] || "";
  const numbers = [...heading.matchAll(/\d+/g)].map((match) => Number(match[0]));
  return numbers.length ? numbers[numbers.length - 1] : undefined;
}

function parseDefinitions(lines: string[]): Definition[] {
  return lines
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const match = line.match(definitionPattern);
      if (!match) return { pos: "", meaning: line };
      return { pos: match[1].trim(), meaning: match[2].trim() };
    });
}

export function parseMarkdownUnit(markdown: string, options: ParseOptions): WordUnit {
  const unitName = options.unitName || normalizeUnitName(markdown, options.unitId);
  const lines = markdown.split(/\r?\n/);
  const words: WordEntry[] = [];
  let current:
    | {
        order: number;
        word: string;
        phonetic: string;
        definitions: string[];
      }
    | undefined;

  const flush = () => {
    if (!current) return;
    const order = words.length + 1;
    words.push({
      id: `${options.unitId}-${String(order).padStart(3, "0")}`,
      unitId: options.unitId,
      unitName,
      order,
      word: current.word,
      phonetic: current.phonetic,
      definitions: parseDefinitions(current.definitions),
    });
  };

  for (const line of lines) {
    const wordMatch = line.match(wordLinePattern);
    if (wordMatch) {
      flush();
      current = {
        order: Number(wordMatch[1]),
        word: wordMatch[2].trim(),
        phonetic: wordMatch[3].trim(),
        definitions: [],
      };
      continue;
    }

    const bareWordMatch = line.match(bareWordLinePattern);
    if (bareWordMatch) {
      flush();
      current = {
        order: words.length + 1,
        word: bareWordMatch[1].trim(),
        phonetic: bareWordMatch[2].trim(),
        definitions: [],
      };
      continue;
    }

    if (!current) continue;
    if (!line.trim() || line.trim().startsWith("#")) continue;
    current.definitions.push(line);
  }

  flush();

  return {
    id: options.unitId,
    name: unitName,
    order: options.order,
    expectedCount: expectedCount(markdown),
    words,
    referenceImages: options.referenceImages,
  };
}
