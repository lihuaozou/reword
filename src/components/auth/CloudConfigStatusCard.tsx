import { CheckCircle2, CloudOff, Database, ExternalLink, KeyRound, LogIn, RefreshCw, Wifi, type LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { getSupabaseSetupDetail, supabaseConfig } from "../../lib/supabase";
import type { SyncState } from "../../types";

const SUPABASE_DOC_URL = "https://github.com/lihuaozou/reword/blob/main/docs/DO_THIS_FIRST_SUPABASE.md";

type CloudConfigStatusCardProps = {
  online: boolean;
  loggedIn: boolean;
  syncState: SyncState;
  syncMessage: string;
  lastSyncAt?: string;
  pendingCount?: number;
  compact?: boolean;
};

function formatLastSync(value?: string) {
  if (!value) return "未同步";
  return new Date(value).toLocaleString("zh-CN", { month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" });
}

function StatusPill({ ok, text }: { ok: boolean; text: string }) {
  return (
    <span className={`inline-flex min-h-7 items-center rounded-md border px-2 text-xs font-semibold ${ok ? "border-emerald-200 bg-emerald-50 text-emerald-700" : "border-amber-200 bg-amber-50 text-amber-700"}`}>
      {text}
    </span>
  );
}

function StatusRow({ icon: Icon, label, children }: { icon: LucideIcon; label: string; children: ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-lg border border-sky-100 bg-[#f8fbff] px-3 py-2">
      <div className="flex min-w-0 items-center gap-2 text-sm font-semibold text-slate-700">
        <Icon size={16} className="shrink-0 text-harbor" aria-hidden="true" />
        <span className="truncate">{label}</span>
      </div>
      <div className="shrink-0">{children}</div>
    </div>
  );
}

function syncStateLabel(state: SyncState) {
  if (state === "syncing") return "同步中";
  if (state === "success") return "已同步";
  if (state === "offline") return "离线";
  if (state === "error") return "同步失败";
  if (state === "disabled") return "未启用";
  return "待登录";
}

export function CloudConfigStatusCard({ online, loggedIn, syncState, syncMessage, lastSyncAt, pendingCount = 0, compact = false }: CloudConfigStatusCardProps) {
  const configured = supabaseConfig.clientEnabled;
  const summary = !configured
    ? getSupabaseSetupDetail()
    : loggedIn
      ? syncState === "error"
        ? "云同步请求失败，请检查 Supabase 表结构、RLS 策略和当前登录状态。"
        : "已登录，云同步可用。"
      : "云同步已配置，请注册或登录账号。";

  return (
    <section className={`rounded-lg border border-slate-200 bg-white shadow-soft ${compact ? "p-4" : "p-5"}`}>
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 text-sm font-semibold text-harbor">
            {configured ? <CheckCircle2 size={18} aria-hidden="true" /> : <CloudOff size={18} aria-hidden="true" />}
            云同步配置
          </div>
          <h2 className={`${compact ? "mt-1 text-lg" : "mt-2 text-xl"} font-semibold text-ink`}>{configured ? "云同步已配置" : "本地模式"}</h2>
        </div>
        <StatusPill ok={configured} text={configured ? "可登录" : "未配置"} />
      </div>

      <p className="mt-3 text-sm leading-6 text-slate-600">{summary}</p>

      {!configured ? (
        <div className="mt-3 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-xs leading-5 text-amber-800">
          线上仍显示 URL/key 缺失时，通常只有两个原因：GitHub Secrets 没配置，或配置后没有重新运行 Deploy GitHub Pages。注册和登录会在 Supabase 配好后自动启用。
        </div>
      ) : null}

      <a href={SUPABASE_DOC_URL} target="_blank" rel="noreferrer" className="mt-3 inline-flex min-h-9 items-center gap-2 rounded-lg border border-sky-200 bg-[#f8fbff] px-3 text-xs font-semibold text-harbor transition hover:border-harbor hover:bg-white">
        <ExternalLink size={15} aria-hidden="true" />
        Supabase 配置步骤
      </a>

      <div className={`mt-4 grid gap-2 ${compact ? "" : "sm:grid-cols-2"}`}>
        <StatusRow icon={Database} label="Supabase URL">
          <StatusPill ok={supabaseConfig.urlPresent} text={supabaseConfig.urlPresent ? "已读取" : "缺失"} />
        </StatusRow>
        <StatusRow icon={KeyRound} label="Supabase anon key">
          <StatusPill ok={supabaseConfig.anonKeyPresent} text={supabaseConfig.anonKeyPresent ? "已读取" : "缺失"} />
        </StatusRow>
        <StatusRow icon={Wifi} label="客户端">
          <StatusPill ok={configured && online} text={!configured ? "未启用" : online ? "在线" : "离线"} />
        </StatusRow>
        <StatusRow icon={LogIn} label="登录状态">
          <StatusPill ok={loggedIn} text={loggedIn ? "已登录" : "未登录"} />
        </StatusRow>
        <StatusRow icon={RefreshCw} label="同步状态">
          <span className="max-w-[180px] truncate text-right text-xs font-semibold text-slate-600" title={syncMessage}>
            {syncStateLabel(syncState)}
          </span>
        </StatusRow>
        <StatusRow icon={RefreshCw} label="最近同步">
          <span className="text-xs font-semibold text-slate-600">{pendingCount ? `待同步 ${pendingCount}` : formatLastSync(lastSyncAt)}</span>
        </StatusRow>
      </div>
    </section>
  );
}
