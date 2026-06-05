import { CheckCircle2, Coins, Flame, Timer, X, Zap, type LucideIcon } from "lucide-react";
import type { MotivationSettings } from "../../utils/motivation";
import { formatQuoteText, getMotivationByScene } from "../../utils/motivation";

export type CheckinSuccessSummary = {
  streak: number;
  studyMinutes: number;
  wordCount: number;
  xp: number;
  coins: number;
};

type CheckinSuccessModalProps = {
  open: boolean;
  summary: CheckinSuccessSummary | null;
  settings: MotivationSettings;
  onClose: () => void;
};

export function CheckinSuccessModal({ open, summary, settings, onClose }: CheckinSuccessModalProps) {
  if (!open || !summary || !settings.enabled || !settings.checkinMotivation) return null;

  const quote = getMotivationByScene("checkin_success", settings);
  const text = formatQuoteText(quote, { X: summary.streak });

  return (
    <div className="fixed inset-0 z-[85] grid place-items-end bg-ink/45 px-3 pb-[calc(18px+env(safe-area-inset-bottom))] backdrop-blur-sm sm:place-items-center sm:p-6">
      <section className="w-full max-w-md overflow-hidden rounded-3xl border border-emerald-100 bg-white shadow-lifted">
        <div className="bg-[linear-gradient(135deg,rgba(236,253,245,0.98),rgba(255,251,235,0.92))] p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-600 px-3 py-1 text-xs font-semibold text-white">
                <CheckCircle2 size={14} aria-hidden="true" />
                打卡成功
              </div>
              <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-ink">{text}</h2>
              <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">{quote.subtext || "今天这一点坚持，会变成考场上的底气。"}</p>
            </div>
            <button type="button" onClick={onClose} className="icon-btn h-9 w-9" title="关闭">
              <X size={17} aria-hidden="true" />
            </button>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-2">
            <Metric icon={Flame} label="连续打卡" value={`${summary.streak} 天`} />
            <Metric icon={Timer} label="今日时长" value={`${summary.studyMinutes} 分钟`} />
            <Metric icon={Zap} label="今日词数" value={`${summary.wordCount} 词`} />
            <Metric icon={Coins} label="奖励" value={`XP ${summary.xp} / 金币 ${summary.coins}`} />
          </div>

          <button type="button" onClick={onClose} className="btn-primary mt-5 w-full bg-emerald-600 hover:bg-emerald-700">
            收下今天的进度
          </button>
        </div>
      </section>
    </div>
  );
}

function Metric({ icon: Icon, label, value }: { icon: LucideIcon; label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/80 bg-white/80 p-3 shadow-sm">
      <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
        <Icon size={14} aria-hidden="true" />
        {label}
      </div>
      <div className="mt-1 text-base font-semibold text-ink">{value}</div>
    </div>
  );
}
