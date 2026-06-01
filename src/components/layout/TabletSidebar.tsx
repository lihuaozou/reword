import { BookMarked } from "lucide-react";
import type { RouteName } from "../../types";
import { isRouteActive, primaryNavItems } from "./navigation";

type TabletSidebarProps = {
  current: RouteName;
  onNavigate: (route: RouteName) => void;
};

export function TabletSidebar({ current, onNavigate }: TabletSidebarProps) {
  return (
    <aside className="fixed inset-y-0 left-0 z-30 hidden w-20 border-r border-slate-200 bg-[#f8fbff]/95 px-2 py-4 backdrop-blur md:block lg:hidden">
      <button type="button" onClick={() => onNavigate("dashboard")} className="mx-auto mb-6 grid h-11 w-11 place-items-center rounded-lg bg-ink text-paper">
        <BookMarked size={21} aria-hidden="true" />
      </button>
      <nav className="space-y-2">
        {primaryNavItems.map((item) => {
          const Icon = item.icon;
          const active = isRouteActive(current, item.route);
          return (
            <button
              key={item.route}
              type="button"
              onClick={() => onNavigate(item.route)}
              className={`grid min-h-14 w-full place-items-center rounded-lg border text-[11px] transition ${
                active ? "border-indigo-200 bg-white text-indigo-600 shadow-sm" : "border-transparent text-slate-500 hover:bg-white"
              }`}
              title={item.label}
            >
              <Icon size={19} aria-hidden="true" />
              <span>{item.shortLabel || item.label}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
