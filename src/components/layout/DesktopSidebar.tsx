import { BookMarked } from "lucide-react";
import type { RouteName } from "../../types";
import { desktopNavItems, isRouteActive } from "./navigation";

type DesktopSidebarProps = {
  current: RouteName;
  onNavigate: (route: RouteName) => void;
};

export function DesktopSidebar({ current, onNavigate }: DesktopSidebarProps) {
  return (
    <aside className="fixed inset-y-0 left-0 z-30 hidden w-64 border-r border-slate-200 bg-[#f8fbff]/95 p-4 backdrop-blur lg:block">
      <button type="button" onClick={() => onNavigate("dashboard")} className="mb-6 flex items-center gap-3 rounded-lg p-2 text-left transition hover:bg-white">
        <span className="grid h-11 w-11 place-items-center rounded-lg bg-ink text-paper">
          <BookMarked size={22} aria-hidden="true" />
        </span>
        <span>
          <span className="block text-lg font-semibold leading-none text-ink">Reword</span>
          <span className="text-xs text-slate-500">2027考研英语记忆系统</span>
        </span>
      </button>

      <nav className="space-y-1.5">
        {desktopNavItems.map((item) => {
          const Icon = item.icon;
          const active = isRouteActive(current, item.route);
          return (
            <button
              key={item.route}
              type="button"
              onClick={() => onNavigate(item.route)}
              className={`flex min-h-11 w-full items-center gap-3 rounded-lg border px-3 text-sm font-medium transition ${
                active ? "border-indigo-200 bg-white text-indigo-600 shadow-sm" : "border-transparent text-slate-600 hover:bg-white hover:text-ink"
              }`}
            >
              <Icon size={18} aria-hidden="true" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
