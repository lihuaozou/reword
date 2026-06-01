import { BookMarked } from "lucide-react";
import type { ReactNode } from "react";
import type { RouteName } from "../types";
import { BottomNav } from "./BottomNav";

type AppShellProps = {
  current: RouteName;
  onNavigate: (route: RouteName) => void;
  children: ReactNode;
};

export function AppShell({ current, onNavigate, children }: AppShellProps) {
  return (
    <div className="min-h-screen bg-app text-ink">
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-[#f8fbff]/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1100px] items-center justify-between px-4 py-3 md:px-6">
          <button type="button" onClick={() => onNavigate("dashboard")} className="flex items-center gap-3 text-left">
            <span className="grid h-9 w-9 place-items-center rounded-lg border border-ink/15 bg-ink text-paper">
              <BookMarked size={20} aria-hidden="true" />
            </span>
            <span>
              <span className="block text-lg font-semibold leading-none">Reword</span>
              <span className="text-xs text-slate-500">2027考研英语红宝书</span>
            </span>
          </button>
          <BottomNav current={current} onNavigate={onNavigate} />
        </div>
      </header>

      <main className="mx-auto max-w-[1100px] px-4 pb-28 pt-5 md:px-6 md:pb-10">{children}</main>
    </div>
  );
}
