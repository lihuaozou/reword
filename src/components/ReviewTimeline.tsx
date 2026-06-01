import { REVIEW_INTERVALS } from "../utils/scheduler";

export function ReviewTimeline() {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft">
      <div className="mb-4 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-ink">艾宾浩斯复习时间轴</h2>
        </div>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {REVIEW_INTERVALS.map((item) => (
          <div key={item.stage} className="rounded-lg border border-slate-200 bg-[#f8fbff] p-3">
            <div className="text-xs text-slate-500">Stage {item.stage}</div>
            <div className="mt-1 font-semibold text-harbor">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
