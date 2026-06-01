import type { ShopItem, UserStats } from "../types";
import { applyReward } from "./rewards";

export const SHOP_ITEMS: ShopItem[] = [
  { id: "theme-default", name: "默认浅蓝主题", description: "清爽的浅蓝学习桌面", type: "theme", priceCoins: 0, icon: "蓝", rarity: "common" },
  { id: "theme-dark", name: "深色专注主题", description: "适合夜间学习的深色主题", type: "theme", priceCoins: 120, icon: "夜", rarity: "rare" },
  { id: "theme-morning", name: "晨读白色主题", description: "适合早起背词的明亮主题", type: "theme", priceCoins: 90, icon: "晨", rarity: "common" },
  { id: "avatar-unit1", name: "Unit1 完成头像框", description: "Unit1 学习者头像框", type: "avatar", priceCoins: 80, icon: "U1", rarity: "common" },
  { id: "avatar-thirty-days", name: "30 天坚持头像框", description: "长期主义者的头像框", type: "avatar", priceCoins: 220, priceDiamonds: 1, icon: "30", rarity: "epic" },
  { id: "tool-focus-card", name: "专注卡", description: "开启一次 25 分钟专注学习", type: "tool", priceCoins: 30, icon: "专", rarity: "common" },
  { id: "tool-review-boost", name: "复习加速卡", description: "把不熟词加入今日重点复习", type: "tool", priceCoins: 45, icon: "复", rarity: "rare" },
  { id: "tool-wrong-clean", name: "错题清理卡", description: "开启一次错题专项测试", type: "tool", priceCoins: 50, icon: "错", rarity: "rare" },
  { id: "tool-makeup", name: "补签卡", description: "预留功能，后续可用于补签", type: "tool", priceCoins: 120, icon: "补", rarity: "epic" },
  { id: "tool-double-monster", name: "双倍积分卡", description: "15 分钟内打怪积分翻倍", type: "tool", priceCoins: 100, icon: "双", rarity: "epic" },
  { id: "badge-seven-days", name: "7 天坚持徽章", description: "连续打卡 7 天纪念徽章", type: "badge", priceCoins: 160, icon: "7", rarity: "rare" },
];

export function ownItem(stats: UserStats, item: ShopItem) {
  return stats.unlockedItems.includes(item.id) || stats.inventory.some((inventory) => inventory.itemId === item.id);
}

export function exchangeItem(stats: UserStats, item: ShopItem) {
  const repeatable = item.type === "tool";
  if (!repeatable && stats.unlockedItems.includes(item.id)) return stats;
  if (stats.coins < item.priceCoins || stats.diamonds < (item.priceDiamonds || 0)) return stats;
  const unlockedItems = repeatable ? stats.unlockedItems : [...stats.unlockedItems, item.id];
  return applyReward(
    {
      ...stats,
      coins: stats.coins - item.priceCoins,
      diamonds: stats.diamonds - (item.priceDiamonds || 0),
      unlockedItems,
    },
    {
      type: "exchange",
      title: `兑换 ${item.name}`,
      description: item.description,
      itemId: repeatable ? item.id : undefined,
      bypassDailyCap: true,
    }
  );
}
