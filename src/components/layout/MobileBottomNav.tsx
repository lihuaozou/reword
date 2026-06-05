import type { RouteName } from "../../types";
import { isRouteActive, primaryNavItems } from "./navigation";

type MobileBottomNavProps = {
  current: RouteName;
  onNavigate: (route: RouteName) => void;
};

export function MobileBottomNav({ current, onNavigate }: MobileBottomNavProps) {
  return (
    <nav className="mobile-bottom-nav px-3 pt-2 md:hidden">
      <div className="mx-auto grid max-w-xl grid-cols-5 gap-1 rounded-2xl border border-white/80 bg-ink/90 p-1 shadow-dock backdrop-blur-2xl">
        {primaryNavItems.map((item) => {
          const Icon = item.icon;
          const active = isRouteActive(current, item.route);
          return (
            <button
              key={item.route}
              type="button"
              onClick={() => onNavigate(item.route)}
              className={`grid min-h-11 place-items-center gap-0.5 rounded-xl border text-[10px] font-semibold leading-none transition ${
                active ? "border-white/80 bg-white text-ink shadow-sm" : "border-transparent text-white/60 hover:bg-white/10 hover:text-white"
              }`}
              title={item.shortLabel || item.label}
            >
              <Icon size={17} aria-hidden="true" />
              <span>{item.shortLabel || item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
