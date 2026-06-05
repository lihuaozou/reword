export function getWordTitleClass(word: string) {
  const len = word.length;

  if (len <= 7) return "text-6xl md:text-7xl";
  if (len <= 10) return "text-5xl md:text-6xl";
  if (len <= 14) return "text-4xl md:text-5xl";
  if (len <= 18) return "text-3xl md:text-4xl";
  return "text-2xl md:text-3xl";
}

export function getMobileWordTitleClass(word: string) {
  const len = word.length;

  if (len <= 7) return "text-5xl";
  if (len <= 10) return "text-4xl";
  if (len <= 14) return "text-3xl";
  if (len <= 18) return "text-2xl";
  return "text-xl";
}
