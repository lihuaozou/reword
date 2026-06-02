import { CloudDownload, CloudUpload, GitMerge, X } from "lucide-react";
import type { User } from "@supabase/supabase-js";
import { SyncStatusBadge } from "../components/auth/SyncStatusBadge";
import type { SyncMode, SyncState } from "../types";

type SyncPageProps = {
  configured: boolean;
  online: boolean;
  user: User | null;
  state: SyncState;
  message: string;
  lastSyncAt?: string;
  pendingCount: number;
  onSync: (mode: SyncMode) => Promise<unknown>;
  onSkip: () => void;
  onLogin: () => void;
};

export function SyncPage({ configured, online, user, state, message, lastSyncAt, pendingCount, onSync, onSkip, onLogin }: SyncPageProps) {
  return (
    <div className="mx-auto max-w-3xl space-y-5">
      <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <div className="text-xs font-semibold uppercase text-copper">Cloud Sync</div>
            <h1 className="mt-1 text-2xl font-semibold text-ink">同步学习进度</h1>
            <p className="mt-2 text-sm leading-6 text-slate-500">首次登录时请选择本地数据和云端数据的处理方式。之后学习动作会自动同步。</p>
          </div>
          <SyncStatusBadge configured={configured} online={online} state={state} message={message} lastSyncAt={lastSyncAt} pendingCount={pendingCount} />
        </div>
      </section>

      {!configured || !user ? (
        <section className="rounded-lg border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-800">
          {!configured ? "Supabase 未配置，暂时只能使用本地游客模式。" : "请先登录账号再同步。"}
          <div className="mt-4 flex flex-wrap gap-3">
            <button type="button" onClick={onLogin} className="btn-primary">
              去登录
            </button>
            <button type="button" onClick={onSkip} className="btn-secondary">
              返回首页
            </button>
          </div>
        </section>
      ) : (
        <section className="grid gap-4 md:grid-cols-3">
          <button type="button" onClick={() => onSync("upload")} className="rounded-lg border border-sky-100 bg-white p-5 text-left shadow-soft transition hover:border-indigo-200 hover:bg-indigo-50">
            <CloudUpload className="text-harbor" size={24} aria-hidden="true" />
            <h2 className="mt-4 text-lg font-semibold text-ink">上传本地</h2>
            <p className="mt-2 text-sm leading-6 text-slate-500">把当前设备的学习进度保存到云端。适合第一次创建账号。</p>
          </button>
          <button type="button" onClick={() => onSync("download")} className="rounded-lg border border-sky-100 bg-white p-5 text-left shadow-soft transition hover:border-indigo-200 hover:bg-indigo-50">
            <CloudDownload className="text-harbor" size={24} aria-hidden="true" />
            <h2 className="mt-4 text-lg font-semibold text-ink">下载云端</h2>
            <p className="mt-2 text-sm leading-6 text-slate-500">用云端进度覆盖本地。适合换设备恢复。</p>
          </button>
          <button type="button" onClick={() => onSync("merge")} className="rounded-lg border border-sky-100 bg-white p-5 text-left shadow-soft transition hover:border-indigo-200 hover:bg-indigo-50">
            <GitMerge className="text-harbor" size={24} aria-hidden="true" />
            <h2 className="mt-4 text-lg font-semibold text-ink">合并数据</h2>
            <p className="mt-2 text-sm leading-6 text-slate-500">本地和云端都有数据时推荐使用。单词进度保留较新的记录。</p>
          </button>
        </section>
      )}

      <button type="button" onClick={onSkip} className="btn-secondary">
        <X size={18} aria-hidden="true" />
        稍后处理
      </button>
    </div>
  );
}
