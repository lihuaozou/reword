import type { RouteName } from "../../types";
import { isRouteActive, primaryNavItems } from "./navigation";

type MobileBottomNavProps = {
  current: RouteName;
  onNavigate: (route: RouteName) => void;
};

export function MobileBottomNav({ current, onNavigate }: MobileBottomNavProps) {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-[#f8fbff]/95 px-2 pb-[max(env(safe-area-inset-bottom),8px)] pt-2 shadow-[0_-8px_20px_rgba(25,33,44,0.06)] backdrop-blur md:hidden">
      <div className="mx-auto grid max-w-xl grid-cols-5 gap-1">
        {primaryNavItems.map((item) => {
          const Icon = item.icon;
          const active = isRouteActive(current, item.route);
          return (
            <button
              key={item.route}
              type="button"
              onClick={() => onNavigate(item.route)}
              className={`grid min-h-12 place-items-center rounded-lg border text-xs transition ${
                active ? "border-indigo-200 bg-white text-indigo-600" : "border-transparent text-slate-500 hover:bg-white"
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
