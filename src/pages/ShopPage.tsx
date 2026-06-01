import type { ShopItem, UserStats } from "../types";
import { CoinDisplay } from "../components/CoinDisplay";
import { ShopItemCard } from "../components/ShopItemCard";
import { SHOP_ITEMS } from "../utils/shop";

export function ShopPage({ stats, onExchange }: { stats: UserStats; onExchange: (item: ShopItem) => void }) {
  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <div className="text-xs font-semibold uppercase text-copper">Shop</div>
          <h1 className="mt-1 text-3xl font-semibold text-ink">兑换商店</h1>
        </div>
        <CoinDisplay stats={stats} />
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {SHOP_ITEMS.map((item) => (
          <ShopItemCard key={item.id} item={item} stats={stats} onExchange={onExchange} />
        ))}
      </div>
    </div>
  );
}

