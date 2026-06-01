import type { ProgressMap, UserStats, WordEntry } from "../types";
import { StudyDurationChart } from "../components/StudyDurationChart";
import { getDailyDurationSeries, getStudyStats, getUnitRanking, formatDuration } from "../utils/statistics";

export function StatisticsPage({ stats, words, progressMap }: { stats: UserStats; words: WordEntry[]; progressMap: ProgressMap }) {
  const summary = getStudyStats(stats);
  const ranking = getUnitRanking(words, progressMap).slice(0, 6);
  return (
    <div className="space-y-5">
      <div>
        <div className="text-xs font-semibold uppercase text-copper">Statistics</div>
        <h1 className="mt-1 text-3xl font-semibold text-ink">学习统计</h1>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Stat title="今日" value={formatDuration(summary.todaySeconds)} />
        <Stat title="本周" value={formatDuration(summary.weekSeconds)} />
        <Stat title="本月" value={formatDuration(summary.monthSeconds)} />
        <Stat title="总学习" value={formatDuration(summary.totalSeconds)} />
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        <StudyDurationChart data={getDailyDurationSeries(stats, 7)} />
        <StudyDurationChart data={getDailyDurationSeries(stats, 30)} type="line" />
      </div>
      <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft">
        <h2 className="font-semibold text-ink">单元完成排行榜</h2>
        <div className="mt-4 space-y-3">
          {ranking.map((unit) => (
            <div key={unit.unitName} className="flex items-center justify-between rounded-lg bg-[#f8fbff] p-3">
              <span>{unit.unitName}</span>
              <span className="font-semibold text-harbor">{unit.percent}%</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function Stat({ title, value }: { title: string; value: string }) {
  return <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-soft"><div className="text-sm text-slate-500">{title}</div><div className="mt-2 text-2xl font-semibold text-ink">{value}</div></div>;
}

