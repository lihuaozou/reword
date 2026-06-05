import { Clock, PlayCircle, X } from "lucide-react";
import type { MotivationSettings } from "../../utils/motivation";
import { getDaysUntilExam, getCountdownMessage } from "../../utils/examCountdown";
import { getMotivationByScene } from "../../utils/motivation";

type LaunchMotivationModalProps = {
  open: boolean;
  settings: MotivationSettings;
  onStart: () => void;
  onClose: () => void;
};

export function LaunchMotivationModal({ open, settings, onStart, onClose }: LaunchMotivationModalProps) {
  if (!open || !settings.enabled || !settings.launchModal) return null;

  const daysLeft = getDaysUntilExam();
  const quote = getMotivationByScene("launch", settings);

  return (
    <div className="fixed inset-0 z-[80] grid place-items-end bg-ink/45 px-3 pb-[calc(18px+env(safe-area-inset-bottom))] backdrop-blur-sm sm:place-items-center sm:p-6">
      <section className="w-full max-w-md overflow-hidden rounded-3xl border border-white/80 bg-paper shadow-lifted">
        <div className="study-texture p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full border border-white/70 bg-white/75 px-3 py-1 text-xs font-semibold text-harbor shadow-sm">
                <Clock size={14} aria-hidden="true" />
                今日上岸提醒
              </div>
              <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-ink">距离 2027 考研初试还有 {daysLeft} 天</h2>
            </div>
            <button type="button" onClick={onClose} className="icon-btn h-9 w-9" title="稍后再说">
              <X size={17} aria-hidden="true" />
            </button>
          </div>

          <div className="mt-5 rounded-2xl border border-white/80 bg-white/80 p-4 shadow-sm">
            <p className="text-lg font-semibold leading-7 text-ink">{quote.text}</p>
            <p className="mt-2 text-sm font-medium leading-6 text-slate-600">{quote.subtext || getCountdownMessage(daysLeft)}</p>
          </div>

          <div className="mt-4 rounded-2xl bg-ink px-4 py-3 text-white">
            <div className="text-xs font-semibold uppercase tracking-wide text-white/60">今日最小任务</div>
            <div className="mt-1 text-sm font-semibold">先开始 5 分钟，完成 10 个新词或 20 个复习。</div>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-3">
            <button type="button" onClick={onClose} className="btn-secondary min-h-12">
              稍后再说
            </button>
            <button type="button" onClick={onStart} className="btn-primary min-h-12">
              <PlayCircle size={18} aria-hidden="true" />
              开始 5 分钟
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
