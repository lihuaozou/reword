import { parseMarkdownUnit } from "../utils/parser";

const markdownModules = import.meta.glob("../../单词文本/分区/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
}) as Record<string, string>;

function basename(path: string) {
  const name = path.split("/").pop() || path;
  return name.replace(/\.[^.]+$/, "");
}

function numberFromLabel(label: string) {
  const digit = label.match(/\d+/)?.[0];
  if (digit) return Number(digit);
  return undefined;
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
