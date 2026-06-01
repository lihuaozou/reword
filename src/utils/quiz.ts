import type { WordEntry } from "../types";

export type QuizQuestion = {
  id: string;
  word: WordEntry;
  answer: string;
  options: string[];
};

export function formatDefinition(word: WordEntry) {
  return word.definitions.map((definition) => `${definition.pos} ${definition.meaning}`.trim()).join("；");
}

function shuffle<T>(items: T[]) {
  return [...items].sort(() => Math.random() - 0.5);
}

export function createQuizQuestions(words: WordEntry[], pool: WordEntry[] = words): QuizQuestion[] {
  return words.map((word) => {
    const answer = formatDefinition(word);
    const distractors = shuffle(pool.filter((item) => item.id !== word.id))
      .map(formatDefinition)
      .filter((meaning) => meaning && meaning !== answer)
      .slice(0, 3);

    return {
      id: `quiz-${word.id}-${Date.now()}`,
      word,
      answer,
      options: shuffle([answer, ...distractors]),
    };
  });
}
