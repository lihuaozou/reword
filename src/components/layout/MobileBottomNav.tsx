import type { RouteName } from "../../types";
import { isRouteActive, primaryNavItems } from "./navigation";

type MobileBottomNavProps = {
  current: RouteName;
  onNavigate: (route: RouteName) => void;
};

export function MobileBottomNav({ current, onNavigate }: MobileBottomNavProps) {
  return (
    <nav className="nav-dock fixed inset-x-0 bottom-0 z-40 px-3 pt-2 md:hidden">
      <div className="mx-auto grid max-w-xl grid-cols-5 gap-1 rounded-lg border border-white/80 bg-ink/90 p-1.5 shadow-dock backdrop-blur-2xl">
        {primaryNavItems.map((item) => {
          const Icon = item.icon;
          const active = isRouteActive(current, item.route);
          return (
            <button
              key={item.route}
              type="button"
              onClick={() => onNavigate(item.route)}
              className={`grid min-h-12 place-items-center rounded-lg border text-[11px] font-semibold transition ${
                active ? "border-white/80 bg-white text-ink shadow-sm" : "border-transparent text-white/60 hover:bg-white/10 hover:text-white"
              }`}
              title={item.shortLabel || item.label}
            >
              <Icon size={18} aria-hidden="true" />
              <span>{item.shortLabel || item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
