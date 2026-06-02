import { CheckCircle2, Cloud, CloudOff, Loader2, WifiOff } from "lucide-react";
import type { SyncState } from "../../types";

type SyncStatusBadgeProps = {
  configured: boolean;
  online: boolean;
  state: SyncState;
  message: string;
  lastSyncAt?: string;
  pendingCount?: number;
};

function formatTime(value?: string) {
  if (!value) return "未同步";
  return new Date(value).toLocaleString("zh-CN", { month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" });
}

export function SyncStatusBadge({ configured, online, state, message, lastSyncAt, pendingCount = 0 }: SyncStatusBadgeProps) {
  const Icon = !configured ? CloudOff : !online ? WifiOff : state === "syncing" ? Loader2 : state === "success" ? CheckCircle2 : Cloud;
  const tone =
    !configured || !online || state === "error"
      ? "border-amber-200 bg-amber-50 text-amber-700"
      : state === "success"
        ? "border-emerald-200 bg-emerald-50 text-emerald-700"
        : "border-sky-200 bg-sky-50 text-harbor";

  return (
    <span className={`inline-flex min-h-8 items-center gap-1.5 rounded-lg border px-2.5 text-xs font-semibold ${tone}`}>
      <Icon size={14} className={state === "syncing" ? "animate-spin" : ""} aria-hidden="true" />
      <span>{message}</span>
      {pendingCount ? <span>待同步 {pendingCount}</span> : null}
      <span className="hidden text-slate-500 sm:inline">{formatTime(lastSyncAt)}</span>
    </span>
  );
}
