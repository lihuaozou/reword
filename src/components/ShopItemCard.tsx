import type { ShopItem, UserStats } from "../types";
import { ownItem } from "../utils/shop";

export function ShopItemCard({ item, stats, onExchange }: { item: ShopItem; stats: UserStats; onExchange: (item: ShopItem) => void }) {
  const owned = ownItem(stats, item);
  const canBuy = stats.coins >= item.priceCoins && stats.diamonds >= (item.priceDiamonds || 0);
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-soft">
      <div className="flex items-start gap-3">
        <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-[#f8fbff] font-semibold text-harbor">{item.icon}</div>
        <div className="min-w-0 flex-1">
          <div className="font-semibold text-ink">{item.name}</div>
          <div className="mt-1 text-sm leading-6 text-slate-500">{item.description}</div>
          <div className="mt-2 text-xs text-slate-500">{item.rarity} / {item.type}</div>
        </div>
      </div>
      <button type="button" onClick={() => onExchange(item)} disabled={(!canBuy || owned) && item.type !== "tool"} className="btn-primary mt-4 w-full disabled:opacity-40">
        {owned && item.type !== "tool" ? "已拥有" : `兑换 ${item.priceCoins} 金币${item.priceDiamonds ? ` + ${item.priceDiamonds} 钻石` : ""}`}
      </button>
    </div>
  );
}
