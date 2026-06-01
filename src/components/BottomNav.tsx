import { BarChart3, BookOpen, RefreshCcw, Swords, UserRound } from "lucide-react";
import type { RouteName } from "../types";

type NavItem = {
  route: RouteName;
  label: string;
  icon: typeof BarChart3;
};

const items: NavItem[] = [
  { route: "dashboard", label: "首页", icon: BarChart3 },
  { route: "units", label: "单元", icon: BookOpen },
  { route: "review", label: "复习", icon: RefreshCcw },
  { route: "monster", label: "打怪", icon: Swords },
  { route: "profile", label: "我的", icon: UserRound },
];

type BottomNavProps = {
  current: RouteName;
  onNavigate: (route: RouteName) => void;
};

export function BottomNav({ current, onNavigate }: BottomNavProps) {
  return (
    <>
      <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-[#f8fbff]/95 px-2 pb-[max(env(safe-area-inset-bottom),8px)] pt-2 shadow-[0_-8px_20px_rgba(25,33,44,0.06)] backdrop-blur md:hidden">
        <div className="mx-auto grid max-w-xl grid-cols-5 gap-1">
          {items.map((item) => {
            const Icon = item.icon;
            const active = current === item.route;
            return (
              <button
                key={item.route}
                type="button"
                onClick={() => onNavigate(item.route)}
                className={`grid min-h-12 place-items-center rounded-lg border text-xs transition ${
                  active ? "border-harbor/20 bg-white text-harbor" : "border-transparent text-slate-500 hover:bg-white"
                }`}
                title={item.label}
              >
                <Icon size={18} aria-hidden="true" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>

      <nav className="hidden items-center gap-2 md:flex">
        {items.map((item) => {
          const Icon = item.icon;
          const active = current === item.route;
          return (
            <button
              key={item.route}
              type="button"
              onClick={() => onNavigate(item.route)}
              className={`inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm transition ${
                active ? "border-harbor/20 bg-white text-harbor shadow-sm" : "border-transparent text-slate-600 hover:bg-white"
              }`}
            >
              <Icon size={16} aria-hidden="true" />
              {item.label}
            </button>
          );
        })}
      </nav>
    </>
  );
}
