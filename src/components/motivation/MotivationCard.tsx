import { ArrowRight, CalendarDays, Flame, PlayCircle } from "lucide-react";
import type { ProgressMap, UserStats, WordEntry } from "../../types";
import { getTodayLearningCounts } from "../../utils/checkin";
import { getCountdownMessage, getDaysUntilExam, getExamProgress } from "../../utils/examCountdown";
import { getDailyContractProgress, getMotivationByScene, getMotivationReminder, getStreakPressureMessage, normalizeMotivationSettings, type MotivationSettings } from "../../utils/motivation";

type MotivationCardProps = {
  words: WordEntry[];
  progressMap: ProgressMap;
  stats: UserStats;
  settings?: MotivationSettings;
  onStart: () => void;
};

function progressPercent(current: number, target: number) {
  return Math.min(100, Math.round((Math.min(current, target) / target) * 100));
}

export function MotivationCard({ words, progressMap, stats, settings, onStart }: MotivationCardProps) {
  const nextSettings = normalizeMotivationSettings(settings);
  if (!nextSettings.enabled) return null;

  const daysLeft = getDaysUntilExam();
  const quote = getMotivationByScene("dashboard", nextSettings);
  const reminder = getMotivationReminder(words, progressMap, stats, nextSettings);
  const contract = getDailyContractProgress(words, progressMap, stats);
  const counts = getTodayLearningCounts(words, progressMap, stats);
  const examProgress = getExamProgress();
  const mainText = reminder || quote.text;
  const subtext = reminder ? quote.text : quote.subtext || getCountdownMessage(daysLeft);

  return (
    <section className="overflow-hidden rounded-3xl bg-ink text-white shadow-lifted">
      <div className="relative p-5">
        <div className="pointer-events-none absolute -right-10 -top-16 h-44 w-44 rounded-full bg-harbor/35 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-20 left-8 h-40 w-40 rounded-full bg-copper/30 blur-2xl" />

        <div className="relative flex items-start justify-between gap-4">
          <div className="min-w-0">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-white/75">
              <CalendarDays size={14} aria-hidden="true" />
              今日动力
            </div>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight">今天别让遗忘赢</h2>
            <p className="mt-3 text-base font-semibold leading-7 text-white">{mainText}</p>
            <p className="mt-1 text-sm font-medium leading-6 text-white/64">{subtext}</p>
          </div>

          {nextSettings.showCountdown ? (
            <div className="shrink-0 rounded-2xl border border-white/15 bg-white/10 px-3 py-2 text-center">
              <div className="font-display text-4xl font-semibold leading-none">{daysLeft}</div>
              <div className="mt-1 text-[11px] font-semibold text-white/60">天</div>
            </div>
          ) : null}
        </div>

        <div className="relative mt-5 grid gap-2 sm:grid-cols-3">
          {[
            ["新词", contract.newWords.current, contract.newWords.target],
            ["复习", contract.reviewWords.current, contract.reviewWords.target],
            ["分钟", contract.minutes.current, contract.minutes.target],
          ].map(([label, current, target]) => (
            <div key={label} className="rounded-2xl border border-white/15 bg-white/10 p-3">
              <div className="flex items-center justify-between text-xs font-semibold text-white/60">
                <span>{label}</span>
                <span>{Math.min(Number(current), Number(target))}/{target}</span>
              </div>
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/15">
                <div className="h-full rounded-full bg-white" style={{ width: `${progressPercent(Number(current), Number(target))}%` }} />
              </div>
            </div>
          ))}
        </div>

        <div className="relative mt-5 flex flex-wrap items-center justify-between gap-3">
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-white/75">
            <Flame size={17} aria-hidden="true" />
            {getStreakPressureMessage(stats.currentStreak)}
          </div>
          <button type="button" onClick={onStart} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-ink shadow-sm transition hover:bg-paper active:scale-[0.98]">
            <PlayCircle size={18} aria-hidden="true" />
            开始今日任务
            <ArrowRight size={16} aria-hidden="true" />
          </button>
        </div>

        {nextSettings.showCountdown ? (
          <div className="relative mt-4">
            <div className="flex items-center justify-between text-[11px] font-semibold text-white/45">
              <span>{getCountdownMessage(daysLeft)}</span>
              <span>{examProgress}%</span>
            </div>
            <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/15">
              <div className="h-full rounded-full bg-saffron" style={{ width: `${examProgress}%` }} />
            </div>
          </div>
        ) : null}

        {counts.dueLeft > 0 ? <p className="relative mt-3 text-xs font-semibold text-white/50">今日还有 {counts.dueLeft} 个到期复习词。</p> : null}
      </div>
    </section>
  );
}
