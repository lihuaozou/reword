import type { StudySession } from "../types";
import { useStudyTimer } from "../hooks/useStudyTimer";

type StudyTimerProps = {
  mode?: StudySession["mode"];
  unitId?: string;
  wordCount?: number;
  onComplete: (session: StudySession) => void;
};

export function StudyTimer({ mode, unitId, wordCount = 0, onComplete }: StudyTimerProps) {
  const timer = useStudyTimer(mode, unitId, wordCount, onComplete);

  if (!mode || !timer.active) return null;
  return (
    <div className="fixed bottom-20 right-4 z-30 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs text-slate-500 shadow-soft md:bottom-4">
      本次 {timer.minutes}分{timer.seconds % 60}秒
    </div>
  );
}
