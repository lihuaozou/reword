import { ArrowRight, BookOpen, CheckCircle2, Layers3 } from "lucide-react";
import { useMemo, useState } from "react";
import type { ProgressMap, WordUnit } from "../types";
import { ModeTabs } from "../components/ModeTabs";
import { ProgressBar } from "../components/ProgressBar";
import { unitProgress } from "../utils/view";

type UnitsPageProps = {
  units: WordUnit[];
  progressMap: ProgressMap;
  onOpenUnit: (unitId: string) => void;
};

type UnitDeck = "basic" | "required";

const basicCards = [
  ["基础高频", "后续基础词包会放在这里，适合每天热身。"],
  ["词根词缀", "用于把生词拆开记，减少死背压力。"],
  ["易混辨析", "把拼写、词义相近的词集中复现。"],
];

export function UnitsPage({ units, progressMap, onOpenUnit }: UnitsPageProps) {
  const [deck, setDeck] = useState<UnitDeck>("required");
  const requiredUnits = useMemo(() => units.filter((unit) => unit.order >= 1 && unit.order <= 26).sort((a, b) => a.order - b.order), [units]);
  const totalWords = requiredUnits.reduce((sum, unit) => sum + unit.words.length, 0);

  return (
    <div className="space-y-5">
      <section className="rounded-lg border border-sky-100 bg-white p-5 shadow-soft">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="text-xs font-semibold uppercase text-copper">Units</div>
            <h1 className="mt-1 text-3xl font-semibold text-ink">单元板块</h1>
            <p className="mt-2 text-sm leading-6 text-slate-500">先分成基础版和必备版。必备版已放入 Unit1-26，可以从任意单元继续学习、理解或测试。</p>
          </div>
          <ModeTabs
            value={deck}
            items={[
              { value: "basic", label: "基础版" },
              { value: "required", label: "必备版" },
            ]}
            onChange={setDeck}
          />
        </div>
      </section>

      {deck === "basic" ? (
        <section className="grid gap-4 md:grid-cols-3">
          {basicCards.map(([title, body]) => (
            <article key={title} className="rounded-lg border border-dashed border-sky-200 bg-white/85 p-5 shadow-soft">
              <div className="mb-4 grid h-10 w-10 place-items-center rounded-lg border border-harbor/15 bg-[#f8fbff] text-harbor">
                <Layers3 size={20} aria-hidden="true" />
              </div>
              <h2 className="text-xl font-semibold text-ink">{title}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-500">{body}</p>
              <div className="mt-5 rounded-lg border border-sky-100 bg-[#f8fbff] p-3 text-sm font-semibold text-harbor">不影响必备版进度</div>
            </article>
          ))}
        </section>
      ) : (
        <>
          <section className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg border border-sky-100 bg-white p-4 shadow-soft">
              <div className="text-sm text-slate-500">必备单元</div>
              <div className="mt-1 text-2xl font-semibold text-ink">{requiredUnits.length}</div>
            </div>
            <div className="rounded-lg border border-sky-100 bg-white p-4 shadow-soft">
              <div className="text-sm text-slate-500">总词量</div>
              <div className="mt-1 text-2xl font-semibold text-ink">{totalWords}</div>
            </div>
            <div className="rounded-lg border border-sky-100 bg-white p-4 shadow-soft">
              <div className="text-sm text-slate-500">范围</div>
              <div className="mt-1 text-2xl font-semibold text-ink">Unit1-26</div>
            </div>
          </section>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {requiredUnits.map((unit) => {
              const stats = unitProgress(unit.words, progressMap);
              return (
                <article key={unit.id} className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="mb-3 grid h-10 w-10 place-items-center rounded-lg border border-harbor/15 bg-[#f8fbff] text-harbor">
                        <BookOpen size={20} aria-hidden="true" />
                      </div>
                      <h2 className="text-xl font-semibold text-ink">{unit.name}</h2>
                      <p className="mt-1 text-sm text-slate-500">共 {unit.words.length} 词</p>
                    </div>
                    <button type="button" onClick={() => onOpenUnit(unit.id)} className="icon-btn" title="进入单元">
                      <ArrowRight size={18} aria-hidden="true" />
                    </button>
                  </div>

                  <div className="mt-5 grid grid-cols-3 gap-3 text-center">
                    <div className="rounded-lg border border-slate-200 bg-[#f8fbff] p-3">
                      <div className="font-semibold text-ink">{stats.learned}</div>
                      <div className="text-xs text-slate-500">已学习</div>
                    </div>
                    <div className="rounded-lg border border-slate-200 bg-[#f8fbff] p-3">
                      <div className="font-semibold text-ink">{stats.mastered}</div>
                      <div className="text-xs text-slate-500">已掌握</div>
                    </div>
                    <div className="rounded-lg border border-slate-200 bg-[#f8fbff] p-3">
                      <div className="font-semibold text-ink">{stats.due}</div>
                      <div className="text-xs text-slate-500">待复习</div>
                    </div>
                  </div>
                  <div className="mt-5">
                    <ProgressBar value={stats.mastered} max={unit.words.length} label="掌握进度" />
                  </div>
                  {unit.words.length ? null : (
                    <div className="mt-4 flex items-center gap-2 rounded-lg border border-copper/20 bg-copper/5 p-3 text-sm text-copper">
                      <CheckCircle2 size={16} aria-hidden="true" />
                      这个单元文件已放入，但还需要继续补充可解析单词。
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}
