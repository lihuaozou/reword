import { BarChart3, BookCheck, CalendarClock, Flame, Gauge, Gift, LibraryBig, ListChecks, LogIn, Repeat2, ShoppingBag, Swords, Target, TrendingUp } from "lucide-react";
import type { ProgressMap, SyncState, UserStats, WordEntry, WordUnit } from "../types";
import { CoinDisplay } from "../components/CoinDisplay";
import { LevelProgress } from "../components/LevelProgress";
import { ProgressBar } from "../components/ProgressBar";
import { ReviewTimeline } from "../components/ReviewTimeline";
import { StatCard } from "../components/StatCard";
import { SyncStatusBadge } from "../components/auth/SyncStatusBadge";
import { canCheckIn, getCheckInTasks } from "../utils/checkin";
import { toLocalDateKey } from "../utils/date";
import { EXAM_ENGLISH_TARGET, getExamCountdown, getTodayQuote } from "../utils/exam";
import { calculateTodayStats, getDueWords } from "../utils/scheduler";
import { formatDuration, getStudyStats } from "../utils/statistics";
import { formatDateTime } from "../utils/view";

type DashboardPageProps = {
  units: WordUnit[];
  words: WordEntry[];
  progressMap: ProgressMap;
  stats: UserStats;
  onSignIn: () => void;
  onNavigateReview: () => void;
  onNavigateUnits: () => void;
  onNavigateCheckIn: () => void;
  onNavigateMonster: () => void;
  onNavigateShop: () => void;
  onNavigateStatistics: () => void;
  onNavigateLogin: () => void;
  onNavigateAccount: () => void;
  syncStatus: {
    configured: boolean;
    online: boolean;
    state: SyncState;
    message: string;
    lastSyncAt?: string;
    pendingCount: number;
    isLoggedIn: boolean;
  };
};

export function DashboardPage({
  units,
  words,
  progressMap,
  stats,
  onSignIn,
  onNavigateReview,
  onNavigateUnits,
  onNavigateCheckIn,
  onNavigateMonster,
  onNavigateShop,
  onNavigateStatistics,
  onNavigateLogin,
  onNavigateAccount,
  syncStatus,
}: DashboardPageProps) {
  const todayStats = calculateTodayStats(words, progressMap);
  const studyStats = getStudyStats(stats);
  const tasks = getCheckInTasks(words, progressMap, stats);
  const dueWords = getDueWords(words, progressMap).slice(0, 6);
  const today = toLocalDateKey();
  const signed = stats.lastSignInDate === today;
  const checked = stats.lastCheckInDate === today;
  const readyToCheckIn = canCheckIn(words, progressMap, stats);
  const recentRewards = stats.rewardHistory.slice(0, 3);
  const countdown = getExamCountdown();
  const quote = getTodayQuote();

  return (
    <div className="space-y-5">
      <section className="hero-panel relative overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[linear-gradient(90deg,rgba(111,185,219,0.28),rgba(255,255,255,0))]" />
        <div className="relative max-w-2xl">
          <div className="mb-3 text-xs font-semibold uppercase text-copper">Seaside Study Desk</div>
          <h1 className="font-display text-3xl font-semibold leading-tight text-ink md:text-4xl">考研英语倒计时</h1>
          <div className="mt-3 flex flex-wrap items-end gap-3">
            <div className="font-display text-6xl font-semibold leading-none text-harbor md:text-7xl">{countdown.days}</div>
            <div className="pb-2">
              <div className="text-lg font-semibold text-ink">天 {countdown.hours}小时 {countdown.minutes}分钟</div>
              <div className="text-sm text-slate-500">预估英语考试：{EXAM_ENGLISH_TARGET.getFullYear()}-12-19 14:00</div>
            </div>
          </div>
          <div className="mt-4 rounded-lg border border-sky-100 bg-white/80 p-3 text-sm font-semibold leading-6 text-slate-700">{quote}</div>
          <div className="mt-4 grid gap-3 text-sm text-slate-600 sm:grid-cols-3">
            <div className="rounded-lg border border-sky-100 bg-white/90 px-3 py-2">
              <span className="block text-xs text-slate-400">必备单元</span>
              <span className="font-semibold text-ink">{units.length}</span>
            </div>
            <div className="rounded-lg border border-sky-100 bg-white/90 px-3 py-2">
              <span className="block text-xs text-slate-400">词量</span>
              <span className="font-semibold text-ink">{words.length}</span>
            </div>
            <button type="button" onClick={onNavigateStatistics} className="rounded-lg border border-sky-100 bg-white/90 px-3 py-2 text-left transition hover:border-harbor hover:text-harbor">
              <span className="block text-xs text-slate-400">今日时长</span>
              <span className="font-semibold text-ink">{formatDuration(studyStats.todaySeconds)}</span>
            </button>
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <SyncStatusBadge
              configured={syncStatus.configured}
              online={syncStatus.online}
              state={syncStatus.state}
              message={syncStatus.message}
              lastSyncAt={syncStatus.lastSyncAt}
              pendingCount={syncStatus.pendingCount}
            />
            <button type="button" onClick={syncStatus.isLoggedIn ? onNavigateAccount : onNavigateLogin} className="btn-secondary min-h-8 px-3 py-1.5 text-xs">
              <LogIn size={15} aria-hidden="true" />
              {syncStatus.isLoggedIn ? "账号同步" : "登录同步"}
            </button>
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            <button type="button" onClick={onNavigateReview} className="btn-primary">
              <CalendarClock size={18} aria-hidden="true" />
              开始今日复习
            </button>
            <button type="button" onClick={onNavigateUnits} className="btn-secondary">
              <LibraryBig size={18} aria-hidden="true" />
              进入单元
            </button>
            <button type="button" onClick={onNavigateMonster} className="btn-secondary">
              <Swords size={18} aria-hidden="true" />
              打怪进度
            </button>
          </div>
        </div>
        <div className="hero-meter relative">
          <div className="flex items-center justify-between gap-3">
            <div>
              <div className="text-sm text-slate-500">掌握进度</div>
              <div className="mt-2 text-5xl font-semibold text-harbor">{todayStats.progressPercent}%</div>
            </div>
            <CoinDisplay stats={stats} />
          </div>
          <div className="mt-4">
            <ProgressBar value={todayStats.masteredCount} max={todayStats.totalCount} label={`${todayStats.masteredCount}/${todayStats.totalCount}`} />
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
            <button type="button" onClick={onSignIn} disabled={signed} className="btn-secondary min-h-10 disabled:opacity-45">
              <Gift size={17} aria-hidden="true" />
              {signed ? "已签到" : "签到"}
            </button>
            <button type="button" onClick={onNavigateCheckIn} className={checked || readyToCheckIn ? "btn-primary min-h-10" : "btn-secondary min-h-10"}>
              <Target size={17} aria-hidden="true" />
              {checked ? "已打卡" : readyToCheckIn ? "去打卡" : "看任务"}
            </button>
          </div>
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-[1fr_0.9fr]">
        <LevelProgress stats={stats} />
        <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-soft">
          <div className="mb-3 flex items-center justify-between gap-3">
            <h2 className="font-semibold text-ink">今日打卡条件</h2>
            <button type="button" onClick={onNavigateCheckIn} className="text-sm font-semibold text-harbor">
              打卡中心
            </button>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {tasks.map((task) => (
              <div key={task.id} className="rounded-lg border border-sky-100 bg-[#f8fbff] p-3">
                <div className="mb-2 flex items-center justify-between gap-3 text-sm">
                  <span className="font-semibold text-ink">{task.title}</span>
                  <span className="text-slate-500">
                    {Math.min(task.current, task.target)}/{task.target}
                  </span>
                </div>
                <ProgressBar value={task.current} max={task.target} label={task.reward} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-lg border border-sky-100 bg-white p-5 shadow-soft">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-sm font-semibold text-harbor">
              <Repeat2 size={18} aria-hidden="true" />
              重复记忆节奏
            </div>
            <h2 className="mt-2 text-xl font-semibold text-ink">新学一次，复习多轮，测试收口</h2>
          </div>
          <button type="button" onClick={onNavigateReview} className="btn-secondary">
            进入复习
          </button>
        </div>
        <div className="mt-4 grid gap-3 md:grid-cols-4">
          {[
            ["初学", "先把释义看清，加入今日学习"],
            ["5分钟", "马上复现一次，挡住第一波遗忘"],
            ["间隔复习", "按 Stage 自动推到 30 分钟、12 小时、1 天"],
            ["测试", "用选择题把熟悉变成稳定掌握"],
          ].map(([title, body]) => (
            <div key={title} className="rounded-lg border border-sky-100 bg-[#f8fbff] p-4">
              <div className="text-base font-semibold text-ink">{title}</div>
              <div className="mt-2 text-sm leading-6 text-slate-500">{body}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="今日应复习" value={todayStats.dueCount} icon={CalendarClock} tone="current" />
        <StatCard label="今日新学" value={todayStats.todayNewCount} icon={BookCheck} tone="spruce" />
        <StatCard label="连续打卡" value={stats.currentStreak} icon={Flame} tone="copper" />
        <StatCard label="今日学习" value={formatDuration(studyStats.todaySeconds)} icon={BarChart3} tone="slate" />
        <StatCard label="已掌握" value={todayStats.masteredCount} icon={Target} tone="spruce" />
        <StatCard label="不熟词" value={todayStats.weakCount} icon={TrendingUp} tone="copper" />
        <StatCard label="遗忘词" value={todayStats.forgottenCount} icon={Gauge} tone="slate" />
        <StatCard label="错题词" value={todayStats.wrongCount} icon={ListChecks} tone="current" />
      </section>

      <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
        <ReviewTimeline />
        <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft">
          <div className="mb-4 flex items-center justify-between gap-4">
            <h2 className="text-lg font-semibold text-ink">最近需要复习</h2>
            <button type="button" onClick={onNavigateReview} className="text-sm font-semibold text-harbor">
              全部查看
            </button>
          </div>
          <div className="space-y-3">
            {dueWords.length ? (
              dueWords.map((word) => (
                <div key={word.id} className="flex items-center justify-between gap-3 rounded-lg border border-sky-100 bg-[#f8fbff] p-3">
                  <div className="min-w-0">
                    <div className="truncate font-semibold text-ink">{word.word}</div>
                    <div className="text-xs text-slate-500">{word.unitName}</div>
                  </div>
                  <div className="shrink-0 text-xs text-copper">{formatDateTime(progressMap[word.id]?.nextReviewAt)}</div>
                </div>
              ))
            ) : (
              <p className="rounded-lg border border-sky-100 bg-[#f8fbff] p-4 text-sm leading-6 text-slate-500">现在没有到期词，可以进入单元继续初学。</p>
            )}
          </div>
        </section>
      </div>

      <section className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft">
          <div className="mb-4 flex items-center justify-between gap-3">
            <h2 className="font-semibold text-ink">快捷入口</h2>
            <button type="button" onClick={onNavigateShop} className="inline-flex items-center gap-1 text-sm font-semibold text-harbor">
              <ShoppingBag size={16} aria-hidden="true" />
              商店
            </button>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <button type="button" onClick={onNavigateMonster} className="mode-card">
              <Swords size={20} aria-hidden="true" />
              <span>单词打怪</span>
            </button>
            <button type="button" onClick={onNavigateStatistics} className="mode-card">
              <BarChart3 size={20} aria-hidden="true" />
              <span>学习统计</span>
            </button>
          </div>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft">
          <h2 className="font-semibold text-ink">最新奖励</h2>
          <div className="mt-4 space-y-3">
            {recentRewards.length ? (
              recentRewards.map((reward) => (
                <div key={reward.id} className="flex items-center justify-between gap-3 rounded-lg border border-sky-100 bg-[#f8fbff] p-3">
                  <div>
                    <div className="font-semibold text-ink">{reward.title}</div>
                    <div className="text-xs text-slate-500">{reward.description}</div>
                  </div>
                  <div className="shrink-0 text-sm font-semibold text-harbor">+{reward.xp} XP</div>
                </div>
              ))
            ) : (
              <p className="rounded-lg border border-sky-100 bg-[#f8fbff] p-4 text-sm text-slate-500">还没有奖励记录，先签到或学一个新词。</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
