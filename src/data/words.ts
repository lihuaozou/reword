import { parseMarkdownUnit } from "../utils/parser";

const markdownModules = import.meta.glob("../../单词文本/分区/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
}) as Record<string, string>;

const chineseNumbers: Record<string, number> = {
  一: 1,
  二: 2,
  三: 3,
  四: 4,
  五: 5,
  六: 6,
  七: 7,
  八: 8,
  九: 9,
  十: 10,
};

function basename(path: string) {
  const name = path.split("/").pop() || path;
  return name.replace(/\.[^.]+$/, "");
}

function numberFromLabel(label: string) {
  const digit = label.match(/\d+/)?.[0];
  if (digit) return Number(digit);

  const chinese = label.match(/[一二三四五六七八九十]+/)?.[0];
  if (!chinese) return undefined;
  if (chinese === "十") return 10;
  if (chinese.startsWith("十")) return 10 + (chineseNumbers[chinese[1]] || 0);
  if (chinese.endsWith("十")) return (chineseNumbers[chinese[0]] || 1) * 10;
  if (chinese.includes("十")) {
    const [tens, ones] = chinese.split("十");
    return (chineseNumbers[tens] || 1) * 10 + (chineseNumbers[ones] || 0);
  }
  return chineseNumbers[chinese];
}

function unitOrderFromSource(path: string, markdown?: string) {
  const fromHeading = markdown?.match(/Unit\s*(\d+)/i)?.[1];
  if (fromHeading) return Number(fromHeading);
  return numberFromLabel(basename(path)) || 999;
}

export const units = Object.entries(markdownModules)
  .map(([path, markdown]) => {
    const order = unitOrderFromSource(path, markdown);
    return parseMarkdownUnit(markdown, {
      unitId: `unit${order}`,
      unitName: `必备词 Unit${order}`,
      order,
    });
  })
  .sort((a, b) => a.order - b.order);

export const unit1 = units.find((unit) => unit.id === "unit1") || units[0];
export const unit2 = units.find((unit) => unit.id === "unit2");
export const words = units.flatMap((unit) => unit.words);
