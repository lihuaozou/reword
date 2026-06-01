import { BookMarked } from "lucide-react";
import type { ReactNode } from "react";
import type { RouteName } from "../types";
import { DesktopSidebar } from "./layout/DesktopSidebar";
import { MobileBottomNav } from "./layout/MobileBottomNav";
import { ResponsiveContainer } from "./layout/ResponsiveContainer";
import { TabletSidebar } from "./layout/TabletSidebar";

type AppShellProps = {
  current: RouteName;
  onNavigate: (route: RouteName) => void;
  children: ReactNode;
};

export function AppShell({ current, onNavigate, children }: AppShellProps) {
  return (
    <div className="min-h-screen bg-app text-ink">
      <DesktopSidebar current={current} onNavigate={onNavigate} />
      <TabletSidebar current={current} onNavigate={onNavigate} />

      <header className="sticky top-0 z-30 border-b border-slate-200 bg-[#f8fbff]/95 backdrop-blur md:hidden">
        <div className="mx-auto flex items-center justify-between px-4 py-3">
          <button type="button" onClick={() => onNavigate("dashboard")} className="flex items-center gap-3 text-left">
            <span className="grid h-9 w-9 place-items-center rounded-lg border border-ink/15 bg-ink text-paper">
              <BookMarked size={20} aria-hidden="true" />
            </span>
            <span>
              <span className="block text-lg font-semibold leading-none">Reword</span>
              <span className="text-xs text-slate-500">2027考研英语红宝书</span>
            </span>
          </button>
        </div>
      </header>

      <div className="md:pl-20 lg:pl-64">
        <ResponsiveContainer>{children}</ResponsiveContainer>
      </div>
      <MobileBottomNav current={current} onNavigate={onNavigate} />
    </div>
  );
}
