import { REVIEW_INTERVALS } from "../utils/scheduler";

export function ReviewTimeline() {
  return (
    <div className="glass-panel p-5">
      <div className="mb-4 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-ink">艾宾浩斯复习节奏</h2>
        </div>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {REVIEW_INTERVALS.map((item) => (
          <div key={item.stage} className="rounded-lg border border-ink/10 bg-paper/80 p-3 shadow-sm">
            <div className="text-xs font-medium text-slate-500">Stage {item.stage}</div>
            <div className="mt-1 font-semibold text-harbor">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
