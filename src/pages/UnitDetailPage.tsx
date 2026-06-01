import { BookMarked, Brain, ClipboardCheck, Layers3 } from "lucide-react";
import type { ProgressMap, WordUnit } from "../types";
import { ProgressBar } from "../components/ProgressBar";
import { unitProgress } from "../utils/view";

type UnitDetailPageProps = {
  unit: WordUnit;
  progressMap: ProgressMap;
  onStudy: () => void;
  onRecall: () => void;
  onQuiz: () => void;
};

export function UnitDetailPage({ unit, progressMap, onStudy, onRecall, onQuiz }: UnitDetailPageProps) {
  const stats = unitProgress(unit.words, progressMap);

  return (
    <div className="space-y-5">
      <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft">
        <div className="grid gap-5 lg:grid-cols-[1fr_320px]">
          <div>
            <div className="mb-3 text-xs font-semibold uppercase text-copper">Unit</div>
            <h1 className="text-3xl font-semibold text-ink">{unit.name}</h1>
            <p className="mt-2 text-sm text-slate-500">
              共 {unit.words.length} 词{unit.expectedCount ? `，原文标注 ${unit.expectedCount} 词` : ""}
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <button type="button" onClick={onStudy} className="mode-card">
                <BookMarked size={20} aria-hidden="true" />
                <span>记忆</span>
              </button>
              <button type="button" onClick={onRecall} className="mode-card">
                <Brain size={20} aria-hidden="true" />
                <span>理解</span>
              </button>
              <button type="button" onClick={onQuiz} className="mode-card">
                <ClipboardCheck size={20} aria-hidden="true" />
                <span>测试</span>
              </button>
            </div>
          </div>

          <div className="rounded-lg border border-slate-200 bg-[#f8fbff] p-4">
            <div className="mb-4 flex items-center gap-2 font-semibold text-ink">
              <Layers3 size={18} aria-hidden="true" />
              单元进度
            </div>
            <div className="grid grid-cols-3 gap-2 text-center text-sm">
              <div className="rounded-lg border border-slate-200 bg-white p-3">
                <div className="font-semibold">{stats.learned}</div>
                <div className="text-xs text-slate-500">学习</div>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-3">
                <div className="font-semibold">{stats.mastered}</div>
                <div className="text-xs text-slate-500">掌握</div>
              </div>
              <div className="rounded-lg border border-slate-200 bg-white p-3">
                <div className="font-semibold">{stats.due}</div>
                <div className="text-xs text-slate-500">到期</div>
              </div>
            </div>
            <div className="mt-4">
              <ProgressBar value={stats.mastered} max={unit.words.length} label="掌握进度" />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

