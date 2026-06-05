import { CheckCircle2, FilePenLine } from "lucide-react";
import type { ProgressMap, UserStats, WordEntry } from "../../types";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { isYesterday, toLocalDateKey } from "../../utils/date";
import { getDailyContractProgress, isDailyContractCompleted, defaultDailyContract, normalizeMotivationSettings, type DailyContractState, type MotivationSettings } from "../../utils/motivation";

type DailyContractCardProps = {
  words: WordEntry[];
  progressMap: ProgressMap;
  stats: UserStats;
  settings?: MotivationSettings;
};

export function DailyContractCard({ words, progressMap, stats, settings }: DailyContractCardProps) {
  const [contract, setContract] = useLocalStorage<DailyContractState>("motivation.dailyContract", defaultDailyContract);
  const nextSettings = normalizeMotivationSettings(settings);
  if (!nextSettings.enabled) return null;

  const today = toLocalDateKey();
  const promisedToday = contract.date === today;
  const completed = isDailyContractCompleted(words, progressMap, stats);
  const progress = getDailyContractProgress(words, progressMap, stats);
  const missedYesterday = nextSettings.missedTaskReminder && contract.date && isYesterday(contract.date) && stats.lastCheckInDate !== contract.date;

  return (
    <section className="glass-panel p-4">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 rounded-full bg-harbor/10 px-2.5 py-1 text-xs font-semibold text-harbor">
            <FilePenLine size={14} aria-hidden="true" />
            每日学习契约
          </div>
          <h2 className="mt-3 text-xl font-semibold text-ink">{completed ? "今日兑现" : promisedToday ? "今日已立约" : "先把今天签下来"}</h2>
          <p className="mt-1 text-sm leading-6 text-slate-500">
            {completed ? "最小任务已经完成，今天没有白过。" : promisedToday ? "承诺已经写下，接下来只需要兑现。" : "学习 10 个新词、复习 20 个旧词、学习 15 分钟。"}
          </p>
        </div>
        <span className={`shrink-0 rounded-2xl px-3 py-2 text-xs font-semibold ${completed ? "bg-emerald-50 text-emerald-700" : promisedToday ? "bg-saffron/25 text-ink" : "bg-white/80 text-slate-500"}`}>
          {completed ? "已兑现" : promisedToday ? "已立约" : "未立约"}
        </span>
      </div>

      {missedYesterday ? <p className="mt-3 rounded-2xl border border-amber-200 bg-amber-50 px-3 py-2 text-sm font-semibold leading-6 text-amber-800">昨天的承诺没兑现，今天补回来。</p> : null}

      <div className="mt-4 grid gap-2 sm:grid-cols-3">
        {[
          ["新词", progress.newWords.current, progress.newWords.target],
          ["复习", progress.reviewWords.current, progress.reviewWords.target],
          ["分钟", progress.minutes.current, progress.minutes.target],
        ].map(([label, current, target]) => (
          <div key={label} className="rounded-2xl border border-ink/10 bg-paper/80 p-3">
            <div className="text-lg font-semibold text-ink">{Math.min(Number(current), Number(target))}/{target}</div>
            <div className="mt-1 text-xs font-semibold text-slate-500">{label}</div>
          </div>
        ))}
      </div>

      <button
        type="button"
        disabled={promisedToday}
        onClick={() => setContract({ date: today })}
        className="btn-primary mt-4 w-full disabled:opacity-45"
      >
        <CheckCircle2 size={18} aria-hidden="true" />
        {promisedToday ? "今日已立约" : "我承诺今天完成最小任务"}
      </button>
    </section>
  );
}
