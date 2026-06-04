import {
  BarChart3,
  BookCheck,
  CalendarClock,
  ChevronRight,
  Flame,
  Gauge,
  Gift,
  LibraryBig,
  ListChecks,
  LogIn,
  PlayCircle,
  ShoppingBag,
  Sparkles,
  Swords,
  Target,
  TrendingUp,
  Trophy,
  Zap,
} from "lucide-react";
import type { ProgressMap, SyncState, UserStats, WordEntry, WordUnit } from "../types";
import { CoinDisplay } from "../components/CoinDisplay";
import { LevelProgress } from "../components/LevelProgress";
import { ProgressBar } from "../components/ProgressBar";
import { ReviewTimeline } from "../components/ReviewTimeline";
import { StatCard } from "../components/StatCard";
import { SyncStatusBadge } from "../components/auth/SyncStatusBadge";
import { useLocalStorage } from "../hooks/useLocalStorage";
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
  onContinueStudy: () => void;
  onNavigateReview: () => void;
  onNavigateWrongQuiz: () => void;
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
  onContinueStudy,
  onNavigateReview,
  onNavigateWrongQuiz,
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
  const dueWords = getDueWords(words, progressMap).slice(0, 5);
  const today = toLocalDateKey();
  const signed = stats.lastSignInDate === today;
  const checked = stats.lastCheckInDate === today;
  const readyToCheckIn = canCheckIn(words, progressMap, stats);
  const recentRewards = stats.rewardHistory.slice(0, 3);
  const countdown = getExamCountdown();
  const quote = getTodayQuote();
  const examDate = `${EXAM_ENGLISH_TARGET.getFullYear()}-12-19 14:00`;
  const completion = todayStats.totalCount ? Math.round((todayStats.masteredCount / todayStats.totalCount) * 100) : 0;
  const [localSyncTipSeen, setLocalSyncTipSeen] = useLocalStorage("reword-local-sync-tip-seen", false);
  const showLocalSyncTip = !syncStatus.configured && !localSyncTipSeen;

  return (
    <div className="space-y-5 pb-2">
      <section className="relative min-h-[520px] overflow-hidden rounded-lg app-hero-wallpaper p-4 shadow-lifted sm:min-h-[560px] md:p-6">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(251,250,246,0.82)_0%,rgba(251,250,246,0.46)_38%,rgba(23,33,43,0.24)_100%)]" />
        <div className="relative flex h-full min-h-[488px] flex-col justify-between gap-6 sm:min-h-[528px]">
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-lg border border-white/70 bg-white/70 px-3 py-1 text-xs font-semibold text-harbor backdrop-blur">
                <Sparkles size={14} aria-hidden="true" />
                Focus Studio
              </div>
              <h1 className="mt-4 max-w-[12ch] font-display text-4xl font-semibold leading-[1.08] text-ink sm:text-5xl">考研英语倒计时</h1>
            </div>
            <button
              type="button"
              onClick={syncStatus.isLoggedIn ? onNavigateAccount : onNavigateLogin}
              className="inline-flex h-10 shrink-0 items-center gap-1.5 rounded-lg border border-white/80 bg-white/75 px-3 text-xs font-semibold text-ink shadow-sm backdrop-blur transition hover:bg-white"
            >
              <LogIn size={15} aria-hidden="true" />
              {syncStatus.isLoggedIn ? "同步" : "登录"}
            </button>
          </div>

          <div className="grid gap-3 md:grid-cols-[1fr_280px] md:items-end">
            <div className="glass-panel p-4">
              <div className="flex flex-wrap items-end gap-3">
                <div className="font-display text-7xl font-semibold leading-none text-ink">{countdown.days}</div>
                <div className="pb-2">
                  <div className="text-lg font-semibold text-ink">天 {countdown.hours}小时 {countdown.minutes}分钟</div>
                  <div className="text-sm font-medium text-slate-500">预计英语考试：{examDate}</div>
                </div>
              </div>
              <p className="mt-4 rounded-lg bg-ink/10 px-3 py-2 text-sm font-semibold leading-6 text-slate-700">{quote}</p>
            </div>

            <div className="glass-panel p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-sm font-medium text-slate-500">掌握进度</div>
                  <div className="mt-1 text-5xl font-semibold leading-none text-harbor">{completion}%</div>
                </div>
                <CoinDisplay stats={stats} />
              </div>
              <div className="mt-4">
                <ProgressBar value={todayStats.masteredCount} max={todayStats.totalCount} label={`${todayStats.masteredCount}/${todayStats.totalCount} 已掌握`} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {showLocalSyncTip ? (
        <section className="rounded-2xl border border-amber-200 bg-amber-50/90 p-3 text-sm leading-6 text-amber-800 shadow-soft">
          <div className="flex items-start justify-between gap-3">
            <p className="font-medium">当前为本地模式，学习数据仅保存在本设备。</p>
            <button type="button" onClick={() => setLocalSyncTipSeen(true)} className="shrink-0 rounded-full border border-amber-300 bg-white/80 px-2.5 py-1 text-xs font-semibold text-amber-800">
              知道了
            </button>
          </div>
        </section>
      ) : null}

      <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <button type="button" onClick={onContinueStudy} className="group glass-panel flex min-h-24 items-center justify-between gap-3 p-4 text-left transition hover:-translate-y-0.5 hover:bg-white/90">
          <span>
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-ink text-white">
              <PlayCircle size={20} aria-hidden="true" />
            </span>
            <span className="mt-3 block text-lg font-semibold text-ink">继续学习</span>
            <span className="mt-1 block text-sm font-medium text-slate-500">从上次停下的单元开始</span>
          </span>
          <ChevronRight className="text-slate-400 transition group-hover:translate-x-1 group-hover:text-ink" size={22} aria-hidden="true" />
        </button>
        <button type="button" onClick={onNavigateReview} className="group glass-panel flex min-h-24 items-center justify-between gap-3 p-4 text-left transition hover:-translate-y-0.5 hover:bg-white/90">
          <span>
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-harbor text-white">
              <CalendarClock size={20} aria-hidden="true" />
            </span>
            <span className="mt-3 block text-lg font-semibold text-ink">今日复习</span>
            <span className="mt-1 block text-sm font-medium text-slate-500">{todayStats.dueCount} 个单词到期</span>
          </span>
          <ChevronRight className="text-slate-400 transition group-hover:translate-x-1 group-hover:text-harbor" size={22} aria-hidden="true" />
        </button>
        <button type="button" onClick={onNavigateWrongQuiz} className="group glass-panel flex min-h-24 items-center justify-between gap-3 p-4 text-left transition hover:-translate-y-0.5 hover:bg-white/90">
          <span>
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-copper text-white">
              <ListChecks size={20} aria-hidden="true" />
            </span>
            <span className="mt-3 block text-lg font-semibold text-ink">错题强化</span>
            <span className="mt-1 block text-sm font-medium text-slate-500">{todayStats.wrongCount} 个薄弱点</span>
          </span>
          <ChevronRight className="text-slate-400 transition group-hover:translate-x-1 group-hover:text-copper" size={22} aria-hidden="true" />
        </button>
        <button type="button" onClick={onNavigateUnits} className="group glass-panel flex min-h-24 items-center justify-between gap-3 p-4 text-left transition hover:-translate-y-0.5 hover:bg-white/90">
          <span>
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-saffron text-ink">
              <LibraryBig size={20} aria-hidden="true" />
            </span>
            <span className="mt-3 block text-lg font-semibold text-ink">单元词库</span>
            <span className="mt-1 block text-sm font-medium text-slate-500">{units.length} 个单元 / {words.length} 词</span>
          </span>
          <ChevronRight className="text-slate-400 transition group-hover:translate-x-1 group-hover:text-ink" size={22} aria-hidden="true" />
        </button>
      </section>

      <section className="grid gap-4 lg:grid-cols-[1fr_0.95fr]">
        <LevelProgress stats={stats} />
        <div className="glass-panel p-4">
          <div className="mb-3 flex items-center justify-between gap-3">
            <h2 className="font-semibold text-ink">今日最小任务</h2>
            <button type="button" onClick={onNavigateCheckIn} className="text-sm font-semibold text-harbor">
              打卡中心
            </button>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {tasks.map((task) => (
              <div key={task.id} className="rounded-lg border border-ink/10 bg-paper/80 p-3">
                <div className="mb-2 flex items-center justify-between gap-3 text-sm">
                  <span className="font-semibold text-ink">{task.title}</span>
                  <span className="font-medium text-slate-500">
                    {Math.min(task.current, task.target)}/{task.target}
                  </span>
                </div>
                <ProgressBar value={task.current} max={task.target} label={task.reward} />
              </div>
            ))}
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2">
            <button type="button" onClick={onSignIn} disabled={signed} data-sound="none" className="btn-secondary min-h-10 disabled:opacity-45">
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

      <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <ReviewTimeline />
        <section className="glass-panel p-5">
          <div className="mb-4 flex items-center justify-between gap-4">
            <h2 className="text-lg font-semibold text-ink">最近需要复习</h2>
            <button type="button" onClick={onNavigateReview} className="text-sm font-semibold text-harbor">
              全部查看
            </button>
          </div>
          <div className="space-y-3">
            {dueWords.length ? (
              dueWords.map((word) => (
                <div key={word.id} className="flex items-center justify-between gap-3 rounded-lg border border-ink/10 bg-paper/80 p-3">
                  <div className="min-w-0">
                    <div className="truncate font-semibold text-ink">{word.word}</div>
                    <div className="text-xs font-medium text-slate-500">{word.unitName}</div>
                  </div>
                  <div className="shrink-0 text-xs font-semibold text-copper">{formatDateTime(progressMap[word.id]?.nextReviewAt)}</div>
                </div>
              ))
            ) : (
              <p className="rounded-lg border border-ink/10 bg-paper/80 p-4 text-sm leading-6 text-slate-500">现在没有到期词，可以进入单元继续初学。</p>
            )}
          </div>
        </section>
      </div>

      <section className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="glass-panel p-5">
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
              <span>单词挑战</span>
            </button>
            <button type="button" onClick={onNavigateStatistics} className="mode-card">
              <BarChart3 size={20} aria-hidden="true" />
              <span>学习统计</span>
            </button>
          </div>
          {syncStatus.configured || syncStatus.isLoggedIn ? (
          <div className="mt-4">
            <SyncStatusBadge
              configured={syncStatus.configured}
              online={syncStatus.online}
              state={syncStatus.state}
              message={syncStatus.message}
              lastSyncAt={syncStatus.lastSyncAt}
              pendingCount={syncStatus.pendingCount}
            />
          </div>
          ) : null}
        </div>
        <div className="glass-panel p-5">
          <div className="flex items-center justify-between gap-3">
            <h2 className="font-semibold text-ink">最新奖励</h2>
            <span className="inline-flex items-center gap-1 rounded-lg bg-saffron/20 px-2.5 py-1 text-xs font-semibold text-ink">
              <Trophy size={14} aria-hidden="true" />
              XP
            </span>
          </div>
          <div className="mt-4 space-y-3">
            {recentRewards.length ? (
              recentRewards.map((reward) => (
                <div key={reward.id} className="flex items-center justify-between gap-3 rounded-lg border border-ink/10 bg-paper/80 p-3">
                  <div>
                    <div className="font-semibold text-ink">{reward.title}</div>
                    <div className="text-xs font-medium text-slate-500">{reward.description}</div>
                  </div>
                  <div className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-harbor">
                    <Zap size={15} aria-hidden="true" />+{reward.xp}
                  </div>
                </div>
              ))
            ) : (
              <p className="rounded-lg border border-ink/10 bg-paper/80 p-4 text-sm text-slate-500">还没有奖励记录，先签到或学一个新词。</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
