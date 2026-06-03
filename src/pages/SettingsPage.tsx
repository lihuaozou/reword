import { Volume2 } from "lucide-react";
import type { AudioAccent, AudioSettings, SoundSettings, SyncState, UserStats } from "../types";
import { CloudConfigStatusCard } from "../components/auth/CloudConfigStatusCard";
import { InstallGuideCard } from "../components/InstallGuideCard";
import { playToggleSound } from "../utils/sound";

type SettingsPageProps = {
  stats: UserStats;
  onUpdateAudio: (settings: AudioSettings) => void;
  onUpdateSound: (settings: SoundSettings) => void;
  syncStatus: {
    online: boolean;
    state: SyncState;
    message: string;
    lastSyncAt?: string;
    pendingCount: number;
    isLoggedIn: boolean;
  };
};

const volumeOptions: Array<{ label: string; value: SoundSettings["volume"] }> = [
  { label: "0%", value: 0 },
  { label: "25%", value: 0.25 },
  { label: "50%", value: 0.5 },
  { label: "75%", value: 0.75 },
  { label: "100%", value: 1 },
];

export function SettingsPage({ stats, onUpdateAudio, onUpdateSound, syncStatus }: SettingsPageProps) {
  const settings = stats.audioSettings;
  const soundSettings = stats.soundSettings;
  const update = (patch: Partial<AudioSettings>) => onUpdateAudio({ ...settings, ...patch });
  const updateSound = (patch: Partial<SoundSettings>) => onUpdateSound({ ...soundSettings, ...patch });
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

      <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 font-semibold text-ink">
              <Volume2 size={18} aria-hidden="true" />
              按钮音效
            </div>
            <p className="mt-2 text-sm leading-6 text-slate-500">点击、答对、答错、打卡和奖励会有轻提示音。</p>
          </div>
          <label className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-sky-100 bg-[#f8fbff] px-3 py-2 text-sm font-semibold text-harbor">
            <input type="checkbox" checked={soundSettings.enabled} onChange={(event) => updateSound({ enabled: event.target.checked })} />
            开启
          </label>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-[1fr_auto]">
          <label className="rounded-lg bg-[#f8fbff] p-3">
            <span className="mb-2 block text-sm font-semibold text-slate-700">音量</span>
            <select
              value={soundSettings.volume}
              onChange={(event) => updateSound({ volume: Number(event.target.value) as SoundSettings["volume"] })}
              className="w-full rounded-md border border-slate-200 bg-white p-2"
            >
              {volumeOptions.map((option) => (
                <option key={option.label} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
          <button
            type="button"
            data-sound="none"
            onClick={() => playToggleSound(soundSettings)}
            className="btn-secondary self-end"
          >
            <Volume2 size={18} aria-hidden="true" />
            试听
          </button>
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
