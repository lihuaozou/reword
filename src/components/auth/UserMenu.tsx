import { Cloud, LogIn, UserRound } from "lucide-react";
import type { User } from "@supabase/supabase-js";
import type { UserProfile } from "../../types";

type UserMenuProps = {
  user: User | null;
  profile: UserProfile | null;
  onLogin: () => void;
  onAccount: () => void;
};

export function UserMenu({ user, profile, onLogin, onAccount }: UserMenuProps) {
  if (!user) {
    return (
      <button type="button" onClick={onLogin} className="inline-flex h-9 items-center gap-2 rounded-lg border border-sky-200 bg-white px-3 text-xs font-semibold text-harbor transition hover:border-harbor">
        <LogIn size={15} aria-hidden="true" />
        登录同步
      </button>
    );
  }

  return (
    <button type="button" onClick={onAccount} className="inline-flex h-9 items-center gap-2 rounded-lg border border-emerald-200 bg-emerald-50 px-3 text-xs font-semibold text-emerald-700 transition hover:border-emerald-400">
      <UserRound size={15} aria-hidden="true" />
      <span className="max-w-[96px] truncate">{profile?.displayName || profile?.username || user.email}</span>
      <Cloud size={14} aria-hidden="true" />
    </button>
  );
}
