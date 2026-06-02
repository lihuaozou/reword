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

function statusLabel(configured: boolean, online: boolean, state: SyncState, message: string) {
  if (!configured) return "本地模式";
  if (!online) return "离线模式";
  if (state === "syncing") return "同步中";
  if (state === "success") return "已同步";
  if (state === "error") return "同步失败";
  if (message.includes("登录")) return "云同步已配置";
  return "已连接 Supabase";
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
    <span className={`inline-flex max-w-full min-h-8 items-center gap-1.5 rounded-lg border px-2.5 py-1 text-xs font-semibold leading-snug ${tone}`} title={message}>
      <Icon size={14} className={`shrink-0 ${state === "syncing" ? "animate-spin" : ""}`} aria-hidden="true" />
      <span className="min-w-0">{statusLabel(configured, online, state, message)}</span>
      {pendingCount ? <span className="shrink-0">待同步 {pendingCount}</span> : null}
      <span className="hidden shrink-0 text-slate-500 sm:inline">{formatTime(lastSyncAt)}</span>
    </span>
  );
}
