import { CloudDownload, CloudUpload, Download, GitMerge, LogOut, Upload } from "lucide-react";
import type { ChangeEvent } from "react";
import type { User } from "@supabase/supabase-js";
import { SyncStatusBadge } from "../components/auth/SyncStatusBadge";
import type { SyncMode, SyncState, UserProfile } from "../types";

type AccountPageProps = {
  configured: boolean;
  online: boolean;
  user: User | null;
  profile: UserProfile | null;
  state: SyncState;
  message: string;
  lastSyncAt?: string;
  pendingCount: number;
  onLogin: () => void;
  onRegister: () => void;
  onSync: (mode: SyncMode) => Promise<unknown>;
  onLogout: () => Promise<void>;
  onExport: () => void;
  onImport: (json: string) => void;
};

export function AccountPage({
  configured,
  online,
  user,
  profile,
  state,
  message,
  lastSyncAt,
  pendingCount,
  onLogin,
  onRegister,
  onSync,
  onLogout,
  onExport,
  onImport,
}: AccountPageProps) {
  const handleImport = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    file.text().then(onImport);
    event.target.value = "";
  };

  return (
    <div className="space-y-5">
      <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <div className="text-xs font-semibold uppercase text-copper">Account</div>
            <h1 className="mt-1 text-3xl font-semibold text-ink">账号与云同步</h1>
            <p className="mt-2 text-sm leading-6 text-slate-500">游客模式仍可本地使用；登录后可以跨设备同步学习进度。</p>
          </div>
          <SyncStatusBadge configured={configured} online={online} state={state} message={message} lastSyncAt={lastSyncAt} pendingCount={pendingCount} />
        </div>
      </section>

      {!user ? (
        <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft">
          <h2 className="text-lg font-semibold text-ink">当前是游客模式</h2>
          <p className="mt-2 text-sm leading-6 text-slate-500">学习数据已保存在本地。登录后可以选择上传本地数据、下载云端数据或合并两边数据。</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <button type="button" onClick={onLogin} className="btn-primary">
              登录账号
            </button>
            <button type="button" onClick={onRegister} className="btn-secondary">
              注册账号
            </button>
          </div>
        </section>
      ) : (
        <section className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft">
            <h2 className="text-lg font-semibold text-ink">登录状态</h2>
            <div className="mt-4 space-y-3 text-sm">
              <div className="flex justify-between gap-3 rounded-lg border border-sky-100 bg-[#f8fbff] px-3 py-2">
                <span className="text-slate-500">用户名</span>
                <span className="font-semibold text-ink">{profile?.username || "未设置"}</span>
              </div>
              <div className="flex justify-between gap-3 rounded-lg border border-sky-100 bg-[#f8fbff] px-3 py-2">
                <span className="text-slate-500">邮箱</span>
                <span className="max-w-[220px] truncate font-semibold text-ink">{user.email}</span>
              </div>
              <div className="flex justify-between gap-3 rounded-lg border border-sky-100 bg-[#f8fbff] px-3 py-2">
                <span className="text-slate-500">上次同步</span>
                <span className="font-semibold text-ink">{lastSyncAt ? new Date(lastSyncAt).toLocaleString("zh-CN") : "未同步"}</span>
              </div>
            </div>
            <button type="button" onClick={onLogout} className="btn-danger mt-5 w-full">
              <LogOut size={18} aria-hidden="true" />
              退出登录
            </button>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft">
            <h2 className="text-lg font-semibold text-ink">同步操作</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <button type="button" onClick={() => onSync("upload")} disabled={!configured || !online} className="btn-secondary disabled:opacity-45">
                <CloudUpload size={18} aria-hidden="true" />
                上传本地
              </button>
              <button type="button" onClick={() => onSync("download")} disabled={!configured || !online} className="btn-secondary disabled:opacity-45">
                <CloudDownload size={18} aria-hidden="true" />
                下载云端
              </button>
              <button type="button" onClick={() => onSync("merge")} disabled={!configured || !online} className="btn-primary disabled:opacity-45">
                <GitMerge size={18} aria-hidden="true" />
                合并
              </button>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <button type="button" onClick={onExport} className="btn-secondary">
                <Download size={18} aria-hidden="true" />
                导出本地数据
              </button>
              <label className="btn-secondary cursor-pointer">
                <Upload size={18} aria-hidden="true" />
                导入本地数据
                <input type="file" accept="application/json,.json" className="sr-only" onChange={handleImport} />
              </label>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
