import type { InventoryItem, RewardRecord, UserStats } from "../types";
import { toLocalDateKey } from "./date";

export const DAILY_REWARD_LIMITS = {
  xp: 300,
  coins: 120,
  monsterPoints: 300,
};

export type RewardInput = {
  type: RewardRecord["type"];
  title: string;
  description: string;
  xp?: number;
  coins?: number;
  diamonds?: number;
  monsterPoints?: number;
  bypassDailyCap?: boolean;
  itemId?: string;
};

export function getLevel(totalXp: number) {
  return Math.floor(Math.sqrt(totalXp / 100)) + 1;
}

export function getLevelTitle(level: number) {
  if (level <= 3) return "入门背词者";
  if (level <= 6) return "稳定学习者";
  if (level <= 10) return "复习执行者";
  if (level <= 15) return "考研单词斗士";
  if (level <= 20) return "长期主义者";
  return "红宝书征服者";
}

export function getNextLevelXp(level: number) {
  return level * level * 100;
}

function addInventory(inventory: InventoryItem[], itemId?: string) {
  if (!itemId) return inventory;
  const now = new Date().toISOString();
  const current = inventory.find((item) => item.itemId === itemId);
  if (!current) return [...inventory, { itemId, count: 1, obtainedAt: now }];
  return inventory.map((item) => (item.itemId === itemId ? { ...item, count: item.count + 1 } : item));
}

export function applyReward(stats: UserStats, input: RewardInput): UserStats {
  const today = toLocalDateKey();
  const cap = stats.dailyRewardCaps[today] || { xp: 0, coins: 0, monsterPoints: 0 };
  const rawXp = input.xp || 0;
  const rawCoins = input.coins || 0;
  const rawMonsterPoints = input.monsterPoints || 0;
  const xp = input.bypassDailyCap ? rawXp : Math.max(0, Math.min(rawXp, DAILY_REWARD_LIMITS.xp - cap.xp));
  const coins = input.bypassDailyCap ? rawCoins : Math.max(0, Math.min(rawCoins, DAILY_REWARD_LIMITS.coins - cap.coins));
  const monsterPoints = input.bypassDailyCap
    ? rawMonsterPoints
    : Math.max(0, Math.min(rawMonsterPoints, DAILY_REWARD_LIMITS.monsterPoints - cap.monsterPoints));

  const record: RewardRecord = {
    id: `reward-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    type: input.type,
    title: input.title,
    description: input.description,
    xp,
    coins,
    createdAt: new Date().toISOString(),
  };

  const totalXp = stats.totalXp + xp;
  return {
    ...stats,
    totalXp,
    level: getLevel(totalXp),
    coins: stats.coins + coins,
    diamonds: stats.diamonds + (input.diamonds || 0),
    monsterPoints: stats.monsterPoints + monsterPoints,
    inventory: addInventory(stats.inventory, input.itemId),
    rewardHistory: [record, ...stats.rewardHistory].slice(0, 200),
    dailyRewardCaps: {
      ...stats.dailyRewardCaps,
      [today]: {
        xp: cap.xp + (input.bypassDailyCap ? 0 : xp),
        coins: cap.coins + (input.bypassDailyCap ? 0 : coins),
        monsterPoints: cap.monsterPoints + (input.bypassDailyCap ? 0 : monsterPoints),
      },
    },
  };
}
