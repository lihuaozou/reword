import type { WordEntry, WordUnit } from "../types";

export type BattleVisualState = "idle" | "hit" | "damaged" | "defeated" | "reward" | "bossIntro" | "bossDefeated";
export type EffectVisualState = BattleVisualState | "success" | "error" | "combo" | "checkin";
export type MonsterTier = "normal" | "elite";

export type MonsterVisual = {
  id: string;
  tier: MonsterTier;
  label: string;
  englishName: string;
  painPoint: string;
  palette: string;
  path: string;
  defeatedPath: string;
  promptAlive: string;
  promptDefeated: string;
};

export type BossVisual = {
  id: string;
  unitOrder?: number;
  label: string;
  englishName: string;
  painPoint: string;
  palette: string;
  path: string;
  defeatedPath: string;
  promptAlive: string;
  promptDefeated: string;
};

export type BattleEffectAsset = {
  id: string;
  state: EffectVisualState;
  asset: string;
  size: "512x512" | "768x768";
  prompt: string;
};

const artStyle =
  "premium clean lightweight study app game visual, cute but not childish 2D vector character, translucent PNG style, flat colors, soft lighting, refined teal blue ivory saffron accent palette, centered full body, generous transparent background, no text, no logo, no watermark, no weapon gore, no horror";

export const monsterVisuals: MonsterVisual[] = [
  {
    id: "forget",
    tier: "normal",
    label: "遗忘雾团",
    englishName: "Forget Fogling",
    painPoint: "刚背完就忘",
    palette: "mist blue, warm ivory, tiny saffron sparks",
    path: "/game/monsters/monster-forget-01.webp",
    defeatedPath: "/game/monsters/monster-forget-01-defeated.webp",
    promptAlive: `Forget Fogling, a small soft cloud-like memory monster made of pale blue mist and loose flashcards, playful confident pose, tiny sleepy eyes, floating around one abstract vocabulary card, premium exam vocabulary app mascot, ${artStyle}`,
    promptDefeated: `Forget Fogling defeated, the pale blue mist gently breaks into tiny golden page fragments and glowing memory dots, dizzy harmless expression, relaxing victory feeling, premium exam vocabulary app mascot, ${artStyle}`,
  },
  {
    id: "delay",
    tier: "normal",
    label: "拖延软团",
    englishName: "Delay Blob",
    painPoint: "总想等会再学",
    palette: "soft cyan, muted coral, paper white",
    path: "/game/monsters/monster-delay-01.webp",
    defeatedPath: "/game/monsters/monster-delay-01-defeated.webp",
    promptAlive: `Delay Blob, a rounded soft time-delay monster holding a tiny melting clock and leaning on a closed notebook, mischievous smug pose, clean college study app feeling, ${artStyle}`,
    promptDefeated: `Delay Blob defeated, the soft blob shrinks into a neat coin and an open study notebook, small clock resets with gentle sparkles, stress-relief victory effect, ${artStyle}`,
  },
  {
    id: "confuse",
    tier: "normal",
    label: "混淆结晶",
    englishName: "Confuse Knot",
    painPoint: "形近词和熟词僻义混乱",
    palette: "harbor teal, pale lavender, amber dots",
    path: "/game/monsters/monster-confuse-01.webp",
    defeatedPath: "/game/monsters/monster-confuse-01-defeated.webp",
    promptAlive: `Confuse Knot, a small crystal knot monster with two crossed vocabulary ribbons, clever teasing expression, abstract letter shapes orbiting but no readable letters, premium minimal study app game art, ${artStyle}`,
    promptDefeated: `Confuse Knot defeated, the crystal knot unties into four clean blank study cards and soft amber particles, calm satisfying clarity, no readable text, ${artStyle}`,
  },
  {
    id: "typo",
    tier: "normal",
    label: "拼写微光",
    englishName: "Typo Wisp",
    painPoint: "单词拼写不稳",
    palette: "sky blue, ink navy, soft rose accent",
    path: "/game/monsters/monster-typo-01.webp",
    defeatedPath: "/game/monsters/monster-typo-01-defeated.webp",
    promptAlive: `Typo Wisp, a tiny floating ink-smudge monster with scattered abstract letter strokes, energetic evasive pose, bright clean vocabulary learning app mascot, no readable letters, ${artStyle}`,
    promptDefeated: `Typo Wisp defeated, the ink smudge becomes a tidy fountain pen nib and small golden coins, eye-star dizzy expression, transparent background game asset, ${artStyle}`,
  },
  {
    id: "context",
    tier: "normal",
    label: "语境薄雾",
    englishName: "Context Veil",
    painPoint: "只记中文，放进句子就卡住",
    palette: "mist green, porcelain white, copper accent",
    path: "/game/monsters/monster-context-01.webp",
    defeatedPath: "/game/monsters/monster-context-01-defeated.webp",
    promptAlive: `Context Veil, a light veil-shaped monster wrapping around a blank sentence strip, curious tricky pose, elegant friendly study app battle mascot, no readable text, ${artStyle}`,
    promptDefeated: `Context Veil defeated, the veil opens into a clean path of small blank sentence cards with warm sparkles, peaceful clarity reward, transparent PNG style, ${artStyle}`,
  },
  {
    id: "pressure",
    tier: "normal",
    label: "压力石块",
    englishName: "Pressure Pebble",
    painPoint: "越临近考试越焦虑",
    palette: "slate blue, pale aqua, saffron highlight",
    path: "/game/monsters/monster-pressure-01.webp",
    defeatedPath: "/game/monsters/monster-pressure-01-defeated.webp",
    promptAlive: `Pressure Pebble, a compact rounded stone monster carrying a tiny exam countdown badge with no readable numbers, stubborn but cute expression, premium clean learning app style, ${artStyle}`,
    promptDefeated: `Pressure Pebble defeated, the stone cracks into smooth study tokens and soft golden light, calm relieved expression, no scary damage, transparent background, ${artStyle}`,
  },
  {
    id: "exception",
    tier: "elite",
    label: "例外装订者",
    englishName: "Exception Binder",
    painPoint: "规则例外太多",
    palette: "deep teal, cream paper, restrained gold",
    path: "/game/monsters/monster-exception-01.webp",
    defeatedPath: "/game/monsters/monster-exception-01-defeated.webp",
    promptAlive: `Exception Binder, an elite small monster made of neat paper tabs and a floating binder clip crown, poised challenger stance, refined and clever, premium 2D vector study app game asset, ${artStyle}`,
    promptDefeated: `Exception Binder defeated, paper tabs arrange into a tidy study stack and reward coins, elegant burst of gold dust, not childish, transparent background, ${artStyle}`,
  },
  {
    id: "longsentence",
    tier: "elite",
    label: "长句守卫",
    englishName: "Long-Sentence Sentinel",
    painPoint: "长难句阅读压力",
    palette: "ink navy, aqua glow, ivory",
    path: "/game/monsters/monster-longsentence-01.webp",
    defeatedPath: "/game/monsters/monster-longsentence-01-defeated.webp",
    promptAlive: `Long-Sentence Sentinel, an elite ribbon-like monster formed by long flowing blank sentence strips, defensive stance, clean advanced study software style, no readable text, ${artStyle}`,
    promptDefeated: `Long-Sentence Sentinel defeated, the sentence ribbons separate into short clear study cards with soft teal light and coins, satisfying reading clarity, ${artStyle}`,
  },
];

export const bossVisuals: BossVisual[] = [
  {
    id: "boss-unit1",
    unitOrder: 1,
    label: "Unit1 记忆潮核",
    englishName: "Memory Tide Core",
    painPoint: "本单元遗忘集中爆发",
    palette: "pale blue, ivory, refined gold",
    path: "/game/bosses/boss-unit1.webp",
    defeatedPath: "/game/bosses/boss-unit1-defeated.webp",
    promptAlive:
      "Memory Tide Core, a refined unit boss for an exam vocabulary app, elegant floating core made of pale blue waves, blank cards and small gold study tokens, confident boss intro pose, 2D vector game art, flat colors, soft lighting, transparent background, no text, no logo, not scary, premium clean UI asset",
    promptDefeated:
      "Memory Tide Core defeated, the wave core opens into a calm ring of golden cards, coins and soft teal particles, satisfying unit-clear celebration, 2D vector game art, transparent background, no text, no logo, premium clean UI asset",
  },
  {
    id: "boss-unit2",
    unitOrder: 2,
    label: "Unit2 拖延时钟核",
    englishName: "Delay Clock Core",
    painPoint: "复习计划被拖延打断",
    palette: "soft cyan, muted coral, ivory",
    path: "/game/bosses/boss-unit2.webp",
    defeatedPath: "/game/bosses/boss-unit2-defeated.webp",
    promptAlive:
      "Delay Clock Core, an elegant boss creature shaped like a floating abstract clock and study planner pages, smug but harmless, premium clean lightweight game visual for vocabulary learning app, flat colors, soft lighting, transparent background, no text, no logo",
    promptDefeated:
      "Delay Clock Core defeated, abstract clock turns into a neat checklist, gold coins and soft aqua reward light, calm productive victory effect, transparent background, no readable text, premium 2D vector style",
  },
  {
    id: "boss-unit3",
    unitOrder: 3,
    label: "Unit3 混淆棱镜核",
    englishName: "Confusion Prism Core",
    painPoint: "相似词义互相干扰",
    palette: "teal prism, pale lavender, gold",
    path: "/game/bosses/boss-unit3.webp",
    defeatedPath: "/game/bosses/boss-unit3-defeated.webp",
    promptAlive:
      "Confusion Prism Core, a refined boss formed by translucent teal prisms and blank vocabulary cards, challenging pose, premium college study app game asset, 2D vector, flat colors, soft lighting, transparent background, no text",
    promptDefeated:
      "Confusion Prism Core defeated, prisms split into clear organized card stacks with soft gold and teal particles, rewarding clarity, transparent PNG style, no text, no watermark",
  },
  {
    id: "boss-unit4",
    unitOrder: 4,
    label: "Unit4 压力核心",
    englishName: "Exam Pressure Core",
    painPoint: "临考压力和错题堆积",
    palette: "slate blue, pale aqua, saffron",
    path: "/game/bosses/boss-unit4.webp",
    defeatedPath: "/game/bosses/boss-unit4-defeated.webp",
    promptAlive:
      "Exam Pressure Core, a premium abstract boss made of smooth slate stones, blank countdown chips and blue light, serious but not dark, suitable for exam vocabulary app, clean 2D vector art, transparent background, no text",
    promptDefeated:
      "Exam Pressure Core defeated, stones dissolve into light study tokens, gold coins and an open book shape, calming final-review victory, transparent background, no text, premium 2D vector game art",
  },
];

export const battleEffectAssets: BattleEffectAsset[] = [
  {
    id: "effect-hit-sm",
    state: "hit",
    asset: "/game/effects/effect-hit-sm.webp",
    size: "512x512",
    prompt:
      "Small clean hit impact effect for a premium vocabulary app battle UI, teal blue ring burst, tiny golden sparks, translucent PNG, centered, transparent background, no text, no logo, flat vector colors, soft lighting",
  },
  {
    id: "effect-damaged-sm",
    state: "damaged",
    asset: "/game/effects/effect-damaged-sm.webp",
    size: "512x512",
    prompt:
      "Small missed-answer feedback effect, soft coral ripple with two tiny slate fragments, clean nonviolent study app visual, transparent background, no text, flat vector style, premium and restrained",
  },
  {
    id: "effect-defeat-sm",
    state: "defeated",
    asset: "/game/effects/effect-defeat-sm.webp",
    size: "512x512",
    prompt:
      "Small monster defeat effect, elegant teal dust, golden coin dots and paper page fragments, transparent background, no text, no character, premium clean 2D vector game effect",
  },
  {
    id: "effect-boss-hit",
    state: "bossIntro",
    asset: "/game/effects/effect-boss-hit.webp",
    size: "512x512",
    prompt:
      "Boss hit impact overlay, refined aqua shockwave with restrained gold sparks, transparent background, no text, no logo, premium 2D vector effect for study app battle layer",
  },
  {
    id: "effect-boss-defeat",
    state: "bossDefeated",
    asset: "/game/effects/effect-boss-defeat.webp",
    size: "768x768",
    prompt:
      "Boss defeat celebration effect, large elegant ring of golden page fragments, teal light rays and coins, transparent background, no text, no character, clean premium learning app game effect",
  },
  {
    id: "effect-reward-drop",
    state: "reward",
    asset: "/game/rewards/effect-reward-drop.webp",
    size: "512x512",
    prompt:
      "Reward drop UI effect, small gold coins, blue study gems and blank cards floating upward, transparent background, no text, no logo, premium clean 2D vector style, soft lighting",
  },
  {
    id: "effect-success-feedback",
    state: "success",
    asset: "/game/effects/effect-success-feedback.webp",
    size: "512x512",
    prompt:
      "Correct answer success effect for a premium vocabulary app, compact teal light arc, small golden sparkles, transparent background, no text, no logo, clean 2D vector effect",
  },
  {
    id: "effect-error-feedback",
    state: "error",
    asset: "/game/effects/effect-error-feedback.webp",
    size: "512x512",
    prompt:
      "Wrong answer feedback effect for a premium vocabulary app, gentle coral warning ripple, tiny fading particles, transparent background, no text, no logo, restrained 2D vector effect",
  },
  {
    id: "effect-combo-streak",
    state: "combo",
    asset: "/game/effects/effect-combo-streak.webp",
    size: "512x512",
    prompt:
      "Combo streak effect for multiple correct answers in a study app, layered teal lines, gold sparks, rising energy burst, transparent background, no text, no logo, premium clean 2D vector",
  },
  {
    id: "effect-checkin-reward",
    state: "checkin",
    asset: "/game/rewards/effect-checkin-reward.webp",
    size: "512x512",
    prompt:
      "Daily check-in reward celebration for a vocabulary app, floating gold coins, blue study gems, blank cards and soft sparkles, transparent background, no text, no logo, premium clean style",
  },
];

function hashText(value: string) {
  let hash = 0;
  for (let index = 0; index < value.length; index += 1) {
    hash = (hash * 31 + value.charCodeAt(index)) >>> 0;
  }
  return hash;
}

function includesAny(text: string, values: string[]) {
  return values.some((value) => text.includes(value));
}

export function getMonsterVisualForWord(word: WordEntry) {
  const meaning = word.definitions.map((definition) => definition.meaning).join(" ");
  const eliteVisuals = monsterVisuals.filter((monster) => monster.tier === "elite");
  if (word.order % 12 === 0 && eliteVisuals.length) return eliteVisuals[hashText(word.id) % eliteVisuals.length];
  if (includesAny(meaning, ["拼写", "错误", "错", "不同"])) return monsterVisuals.find((monster) => monster.id === "typo") || monsterVisuals[0];
  if (includesAny(meaning, ["混", "模糊", "难以理解", "相似"])) return monsterVisuals.find((monster) => monster.id === "confuse") || monsterVisuals[0];
  if (includesAny(meaning, ["慢", "懒", "义务", "延迟"])) return monsterVisuals.find((monster) => monster.id === "delay") || monsterVisuals[0];
  if (includesAny(meaning, ["压力", "焦虑", "紧张"])) return monsterVisuals.find((monster) => monster.id === "pressure") || monsterVisuals[0];
  const normalVisuals = monsterVisuals.filter((monster) => monster.tier === "normal");
  return normalVisuals[hashText(`${word.id}-${word.word}`) % normalVisuals.length] || monsterVisuals[0];
}

export function getBossVisualForUnit(unit: WordUnit) {
  return bossVisuals.find((boss) => boss.unitOrder === unit.order) || bossVisuals[(unit.order - 1) % bossVisuals.length] || bossVisuals[0];
}

export function getEffectAssetForState(state: EffectVisualState) {
  return battleEffectAssets.find((effect) => effect.state === state);
}

export function getBattleStateLabel(state: BattleVisualState) {
  const labels: Record<BattleVisualState, string> = {
    idle: "待挑战",
    hit: "命中",
    damaged: "受挫",
    defeated: "已击败",
    reward: "奖励",
    bossIntro: "Boss 登场",
    bossDefeated: "Boss 击败",
  };
  return labels[state];
}

export { bossName, getBossStatus, getMonsterSummary, getWordMonsterHp } from "../utils/monster";
