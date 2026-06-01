import { formatDuration } from "../utils/statistics";

type StudyDurationChartProps = {
  data: { date: string; seconds: number }[];
  type?: "bar" | "line";
};

export function StudyDurationChart({ data, type = "bar" }: StudyDurationChartProps) {
  const max = Math.max(60, ...data.map((item) => item.seconds));
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-soft">
      <div className="mb-4 font-semibold text-ink">{type === "bar" ? "最近 7 天学习时长" : "最近 30 天学习趋势"}</div>
      <div className="flex h-36 items-end gap-1">
        {data.map((item) => (
          <div key={item.date} className="flex flex-1 flex-col items-center gap-2">
            <div className="w-full rounded-t bg-harbor" style={{ height: `${Math.max(4, (item.seconds / max) * 120)}px` }} title={formatDuration(item.seconds)} />
            <div className="text-[10px] text-slate-400">{item.date.slice(5)}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
