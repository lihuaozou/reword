import type { AudioAccent, AudioSettings, SyncState, UserStats } from "../types";
import { CloudConfigStatusCard } from "../components/auth/CloudConfigStatusCard";
import { InstallGuideCard } from "../components/InstallGuideCard";

type SettingsPageProps = {
  stats: UserStats;
  onUpdateAudio: (settings: AudioSettings) => void;
  syncStatus: {
    online: boolean;
    state: SyncState;
    message: string;
    lastSyncAt?: string;
    pendingCount: number;
    isLoggedIn: boolean;
  };
};

export function SettingsPage({ stats, onUpdateAudio, syncStatus }: SettingsPageProps) {
  const settings = stats.audioSettings;
  const update = (patch: Partial<AudioSettings>) => onUpdateAudio({ ...settings, ...patch });
  return (
    <div className="space-y-5">
      <div>
        <div className="text-xs font-semibold uppercase text-copper">Settings</div>
        <h1 className="mt-1 text-3xl font-semibold text-ink">设置</h1>
      </div>

      <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft">
        <h2 className="font-semibold text-ink">发音设置</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <label className="flex items-center justify-between rounded-lg bg-[#f8fbff] p-3">
            <span>记忆页自动播放</span>
            <input type="checkbox" checked={settings.autoPlayOnStudy} onChange={(event) => update({ autoPlayOnStudy: event.target.checked })} />
          </label>
          <label className="flex items-center justify-between rounded-lg bg-[#f8fbff] p-3">
            <span>理解页自动播放</span>
            <input type="checkbox" checked={settings.autoPlayOnRecall} onChange={(event) => update({ autoPlayOnRecall: event.target.checked })} />
          </label>
          <label className="rounded-lg bg-[#f8fbff] p-3">
            <span className="mb-2 block">默认口音</span>
            <select value={settings.defaultAccent} onChange={(event) => update({ defaultAccent: event.target.value as AudioAccent })} className="w-full rounded-md border border-slate-200 bg-white p-2">
              <option value="us">美式</option>
              <option value="uk">英式</option>
            </select>
          </label>
          <label className="rounded-lg bg-[#f8fbff] p-3">
            <span className="mb-2 block">朗读速度</span>
            <select value={settings.speechRate} onChange={(event) => update({ speechRate: Number(event.target.value) as AudioSettings["speechRate"] })} className="w-full rounded-md border border-slate-200 bg-white p-2">
              <option value={0.8}>0.8</option>
              <option value={0.9}>0.9 推荐</option>
              <option value={1}>1.0</option>
              <option value={1.1}>1.1</option>
            </select>
          </label>
          <label className="rounded-lg bg-[#f8fbff] p-3">
            <span className="mb-2 block">朗读次数</span>
            <select value={settings.repeatCount} onChange={(event) => update({ repeatCount: Number(event.target.value) as AudioSettings["repeatCount"] })} className="w-full rounded-md border border-slate-200 bg-white p-2">
              <option value={1}>1 次</option>
              <option value={2}>2 次</option>
            </select>
          </label>
        </div>
      </section>

      <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
        <CloudConfigStatusCard
          online={syncStatus.online}
          loggedIn={syncStatus.isLoggedIn}
          syncState={syncStatus.state}
          syncMessage={syncStatus.message}
          lastSyncAt={syncStatus.lastSyncAt}
          pendingCount={syncStatus.pendingCount}
        />
        <InstallGuideCard />
      </div>
    </div>
  );
}
