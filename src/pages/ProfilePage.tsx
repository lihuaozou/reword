import { Award, BarChart3, CalendarCheck2, Download, Gift, RotateCcw, Settings, ShoppingBag, Upload } from "lucide-react";
import type { ChangeEvent } from "react";
import type { ProgressMap, UserStats, WordEntry } from "../types";
import { CoinDisplay } from "../components/CoinDisplay";
import { LevelProgress } from "../components/LevelProgress";
import { StatCard } from "../components/StatCard";
import { calculateTodayStats } from "../utils/scheduler";
import { formatDuration, getStudyStats } from "../utils/statistics";

type ProfilePageProps = {
  words: WordEntry[];
  progressMap: ProgressMap;
  stats: UserStats;
  onNavigateCheckIn: () => void;
  onNavigateRewards: () => void;
  onNavigateShop: () => void;
  onNavigateStatistics: () => void;
  onNavigateAchievements: () => void;
  onNavigateSettings: () => void;
  onExport: () => void;
  onImport: (json: string) => void;
  onReset: () => void;
};

export function ProfilePage({
  words,
  progressMap,
  stats,
  onNavigateCheckIn,
  onNavigateRewards,
  onNavigateShop,
  onNavigateStatistics,
  onNavigateAchievements,
  onNavigateSettings,
  onExport,
  onImport,
  onReset,
}: ProfilePageProps) {
  const todayStats = calculateTodayStats(words, progressMap);
  const studyStats = getStudyStats(stats);

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
            <div className="text-xs font-semibold uppercase text-copper">Profile</div>
            <h1 className="mt-1 text-3xl font-semibold text-ink">我的学习账户</h1>
            <p className="mt-2 text-sm text-slate-500">进度、奖励、设置都在这里统一管理。</p>
          </div>
          <CoinDisplay stats={stats} />
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
        <LevelProgress stats={stats} />
        <div className="grid gap-4 sm:grid-cols-2">
          <StatCard label="总学习时长" value={formatDuration(studyStats.totalSeconds)} icon={BarChart3} tone="current" />
          <StatCard label="连续打卡" value={stats.currentStreak} icon={CalendarCheck2} tone="copper" />
          <StatCard label="已学词数" value={todayStats.learnedCount} icon={Upload} tone="spruce" />
          <StatCard label="掌握词数" value={todayStats.masteredCount} icon={Award} tone="slate" />
        </div>
      </section>

      <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft">
        <h2 className="text-lg font-semibold text-ink">功能入口</h2>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <button type="button" onClick={onNavigateCheckIn} className="mode-card">
            <CalendarCheck2 size={20} aria-hidden="true" />
            <span>打卡中心</span>
          </button>
          <button type="button" onClick={onNavigateRewards} className="mode-card">
            <Gift size={20} aria-hidden="true" />
            <span>奖励记录</span>
          </button>
          <button type="button" onClick={onNavigateShop} className="mode-card">
            <ShoppingBag size={20} aria-hidden="true" />
            <span>兑换商店</span>
          </button>
          <button type="button" onClick={onNavigateStatistics} className="mode-card">
            <BarChart3 size={20} aria-hidden="true" />
            <span>学习统计</span>
          </button>
          <button type="button" onClick={onNavigateAchievements} className="mode-card">
            <Award size={20} aria-hidden="true" />
            <span>成就徽章</span>
          </button>
          <button type="button" onClick={onNavigateSettings} className="mode-card">
            <Settings size={20} aria-hidden="true" />
            <span>设置</span>
          </button>
        </div>
      </section>

      <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft">
        <h2 className="text-lg font-semibold text-ink">进度管理</h2>
        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          <button type="button" onClick={onExport} className="btn-secondary">
            <Download size={18} aria-hidden="true" />
            导出进度
          </button>
          <label className="btn-secondary cursor-pointer">
            <Upload size={18} aria-hidden="true" />
            导入进度
            <input type="file" accept="application/json,.json" className="sr-only" onChange={handleImport} />
          </label>
          <button type="button" onClick={onReset} className="btn-danger">
            <RotateCcw size={18} aria-hidden="true" />
            清空进度
          </button>
        </div>
      </section>
    </div>
  );
}

