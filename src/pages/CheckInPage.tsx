import { CheckCircle2, Gift } from "lucide-react";
import type { ProgressMap, UserStats, WordEntry } from "../types";
import { CheckInCalendar } from "../components/CheckInCalendar";
import { ProgressBar } from "../components/ProgressBar";
import { getCheckInTasks, canCheckIn } from "../utils/checkin";
import { toLocalDateKey } from "../utils/date";

type CheckInPageProps = {
  words: WordEntry[];
  progressMap: ProgressMap;
  stats: UserStats;
  onSignIn: () => void;
  onCheckIn: () => void;
};

export function CheckInPage({ words, progressMap, stats, onSignIn, onCheckIn }: CheckInPageProps) {
  const tasks = getCheckInTasks(words, progressMap, stats);
  const today = toLocalDateKey();
  const signed = stats.lastSignInDate === today;
  const checked = stats.lastCheckInDate === today;
  const ready = canCheckIn(words, progressMap, stats);

  return (
    <div className="space-y-5">
      <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <div className="text-xs font-semibold uppercase text-copper">Check In</div>
            <h1 className="mt-1 text-3xl font-semibold text-ink">打卡中心</h1>
            <p className="mt-2 text-sm text-slate-500">签到是轻量奖励，打卡需要完成学习目标。</p>
          </div>
          <div className="flex gap-3">
            <button type="button" onClick={onSignIn} disabled={signed} data-sound="none" className="btn-secondary disabled:opacity-40">
              <Gift size={18} aria-hidden="true" />
              {signed ? "今日已签到" : "每日签到"}
            </button>
            <button type="button" onClick={onCheckIn} disabled={!ready || checked} data-sound="none" className="btn-primary disabled:opacity-40">
              <CheckCircle2 size={18} aria-hidden="true" />
              {checked ? "今日已打卡" : ready ? "完成今日打卡" : "未达成打卡条件"}
            </button>
          </div>
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-[1fr_0.8fr]">
        <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft">
          <h2 className="font-semibold text-ink">今日任务</h2>
          <div className="mt-4 space-y-4">
            {tasks.map((task) => (
              <div key={task.id} className="rounded-lg border border-slate-200 bg-[#f8fbff] p-4">
                <div className="flex items-center justify-between gap-3">
                  <div className="font-semibold text-ink">{task.title}</div>
                  <div className="text-sm text-slate-500">{Math.min(task.current, task.target)} / {task.target}</div>
                </div>
                <div className="mt-3">
                  <ProgressBar value={task.current} max={task.target} label={task.reward} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft">
            <h2 className="font-semibold text-ink">连续记录</h2>
            <div className="mt-4 grid grid-cols-2 gap-3 text-center">
              <div className="rounded-lg bg-[#f8fbff] p-4">
                <div className="text-2xl font-semibold text-harbor">{stats.currentStreak}</div>
                <div className="text-sm text-slate-500">连续打卡</div>
              </div>
              <div className="rounded-lg bg-[#f8fbff] p-4">
                <div className="text-2xl font-semibold text-harbor">{stats.longestStreak}</div>
                <div className="text-sm text-slate-500">最长连续</div>
              </div>
            </div>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft">
            <h2 className="mb-4 font-semibold text-ink">本月打卡</h2>
            <CheckInCalendar stats={stats} />
          </div>
        </div>
      </section>
    </div>
  );
}

