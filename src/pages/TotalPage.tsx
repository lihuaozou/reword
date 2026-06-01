import { Brain, ClipboardCheck, ListFilter, NotebookTabs } from "lucide-react";
import { useMemo, useState } from "react";
import type { AudioSettings, ProgressMap, WordEntry } from "../types";
import { ModeTabs } from "../components/ModeTabs";
import { WordCard } from "../components/WordCard";
import { getDueWords, getMasteredWords, getWeakWords, getWrongWords } from "../utils/scheduler";

type Filter = "all" | "unlearned" | "due" | "weak" | "wrong" | "mastered";

type TotalPageProps = {
  words: WordEntry[];
  progressMap: ProgressMap;
  audioSettings: AudioSettings;
  onStudy: () => void;
  onRecall: () => void;
  onQuiz: () => void;
};

export function TotalPage({ words, progressMap, audioSettings, onStudy, onRecall, onQuiz }: TotalPageProps) {
  const [filter, setFilter] = useState<Filter>("all");
  const filteredWords = useMemo(() => {
    if (filter === "unlearned") return words.filter((word) => !progressMap[word.id]?.learned);
    if (filter === "due") return getDueWords(words, progressMap);
    if (filter === "weak") return getWeakWords(words, progressMap);
    if (filter === "wrong") return getWrongWords(words, progressMap);
    if (filter === "mastered") return getMasteredWords(words, progressMap);
    return words;
  }, [filter, words, progressMap]);

  return (
    <div className="space-y-5">
      <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="text-xs font-semibold uppercase text-copper">Library</div>
            <h1 className="mt-1 text-3xl font-semibold text-ink">总词库</h1>
            <p className="mt-2 text-sm text-slate-500">共 {words.length} 词</p>
          </div>
          <ModeTabs
            value={filter}
            items={[
              { value: "all", label: "全部" },
              { value: "unlearned", label: "未学" },
              { value: "due", label: "应复习" },
              { value: "weak", label: "不熟" },
              { value: "wrong", label: "错题" },
              { value: "mastered", label: "掌握" },
            ]}
            onChange={setFilter}
          />
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          <button type="button" onClick={onStudy} className="mode-card">
            <NotebookTabs size={20} aria-hidden="true" />
            <span>总记忆</span>
          </button>
          <button type="button" onClick={onRecall} className="mode-card">
            <Brain size={20} aria-hidden="true" />
            <span>总理解</span>
          </button>
          <button type="button" onClick={onQuiz} className="mode-card">
            <ClipboardCheck size={20} aria-hidden="true" />
            <span>总测试</span>
          </button>
        </div>
      </section>

      <div className="flex items-center gap-2 text-sm text-slate-500">
        <ListFilter size={16} aria-hidden="true" />
        当前显示 {filteredWords.length} 词
      </div>

      <div className="grid gap-3 lg:grid-cols-2">
        {filteredWords.map((word) => (
          <WordCard key={word.id} word={word} progress={progressMap[word.id]} compact audioSettings={audioSettings} />
        ))}
      </div>
    </div>
  );
}

