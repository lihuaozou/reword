import { CheckCircle2, RotateCcw, XCircle } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import type { AudioSettings, ProgressMap, WordEntry } from "../types";
import { AudioButton } from "../components/AudioButton";
import { EmptyState } from "../components/EmptyState";
import { ProgressBar } from "../components/ProgressBar";
import { WordCard } from "../components/WordCard";
import { useKeyboardShortcuts } from "../hooks/useKeyboardShortcuts";
import { useResponsive } from "../hooks/useResponsive";
import { playWordAudio } from "../utils/audio";
import { createQuizQuestions, type QuizQuestion } from "../utils/quiz";

type QuizPageProps = {
  title: string;
  words: WordEntry[];
  allWords: WordEntry[];
  progressMap: ProgressMap;
  audioSettings: AudioSettings;
  onAnswer: (wordId: string, correct: boolean) => void;
};

export function QuizPage({ title, words, allWords, progressMap, audioSettings, onAnswer }: QuizPageProps) {
  const [questionSeed, setQuestionSeed] = useState(0);
  const [quizWords, setQuizWords] = useState(words);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | undefined>();
  const [score, setScore] = useState({ correct: 0, wrong: 0 });
  const [wrongWords, setWrongWords] = useState<WordEntry[]>([]);
  const questions = useMemo(() => createQuizQuestions(quizWords, allWords), [quizWords, allWords, questionSeed]);
  const question: QuizQuestion | undefined = questions[index];
  const finished = index >= questions.length;
  const answered = Boolean(selected);
  const correct = selected === question?.answer;
  const total = score.correct + score.wrong;
  const accuracy = total ? Math.round((score.correct / total) * 100) : 0;
  const { isMobile } = useResponsive();

  useEffect(() => {
    setQuizWords(words);
    setIndex(0);
    setSelected(undefined);
    setScore({ correct: 0, wrong: 0 });
    setWrongWords([]);
  }, [words]);

  const restart = (nextWords = words) => {
    setQuizWords([...nextWords]);
    setQuestionSeed((value) => value + 1);
    setIndex(0);
    setSelected(undefined);
    setScore({ correct: 0, wrong: 0 });
    setWrongWords([]);
  };

  const choose = (option: string) => {
    if (!question || answered) return;
    const isCorrect = option === question.answer;
    setSelected(option);
    setScore((value) => ({
      correct: value.correct + (isCorrect ? 1 : 0),
      wrong: value.wrong + (isCorrect ? 0 : 1),
    }));
    if (!isCorrect) setWrongWords((value) => [...value, question.word]);
    onAnswer(question.word.id, isCorrect);
  };

  const nextQuestion = () => {
    if (!answered) return;
    setSelected(undefined);
    setIndex((value) => value + 1);
  };

  useKeyboardShortcuts({
    onSpace: () => question && playWordAudio(question.word.word, audioSettings.defaultAccent, audioSettings),
    onEnter: nextQuestion,
  });

  if (!questions.length) {
    return <EmptyState title="当前范围没有可测试的单词" body="先导入或选择一个包含单词的单元。" />;
  }

  if (finished) {
    return (
      <div className="space-y-5">
        <section className="rounded-lg border border-slate-200 bg-white p-6 text-center shadow-soft">
          <div className="text-xs font-semibold uppercase text-copper">Result</div>
          <h1 className="mt-2 text-3xl font-semibold text-ink">本次测试完成</h1>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <ResultBox title="总题数" value={total} />
            <ResultBox title="正确" value={score.correct} tone="text-emerald-600" />
            <ResultBox title="错误" value={score.wrong} tone="text-rose-600" />
            <ResultBox title="正确率" value={`${accuracy}%`} tone="text-indigo-600" />
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <button type="button" onClick={() => restart()} className="btn-secondary">
              <RotateCcw size={18} aria-hidden="true" />
              重新测试
            </button>
            {wrongWords.length ? (
              <button type="button" onClick={() => restart(wrongWords)} className="btn-primary">
                <RotateCcw size={18} aria-hidden="true" />
                重新测试错题
              </button>
            ) : null}
          </div>
        </section>

        {wrongWords.length ? (
          <div className="grid gap-3 md:grid-cols-2">
            {wrongWords.map((word) => (
              <WordCard key={word.id} word={word} progress={progressMap[word.id]} compact audioSettings={audioSettings} />
            ))}
          </div>
        ) : null}
      </div>
    );
  }

  if (isMobile) {
    return (
      <div className="min-h-[calc(100dvh-136px)] space-y-2 pb-20">
        <div className="flex h-8 items-center justify-between gap-3">
          <div className="min-w-0">
            <div className="text-xs font-semibold uppercase text-copper">Quiz</div>
            <h1 className="truncate text-base font-semibold text-ink">{title}</h1>
          </div>
          <div className="shrink-0 text-right text-xs text-slate-500">
            {index + 1}/{questions.length} · {accuracy}%
          </div>
        </div>

        <div className="h-1.5 overflow-hidden rounded-full bg-slate-200">
          <div className="h-full rounded-full bg-harbor" style={{ width: `${Math.min(100, ((index + 1) / questions.length) * 100)}%` }} />
        </div>

        <section className="rounded-lg border border-slate-200 bg-white p-3 shadow-soft">
          <div className="pb-3 pt-2 text-center">
            <div className={`break-words font-semibold leading-tight text-ink ${question.word.word.length > 12 ? "text-2xl" : "text-[32px]"}`}>{question.word.word}</div>
            <div className="mt-1 text-xs text-slate-500">{question.word.phonetic}</div>
            <div className="mt-2 flex justify-center gap-2">
              <AudioButton word={question.word.word} accent="us" settings={audioSettings} compact />
              <AudioButton word={question.word.word} accent="uk" settings={audioSettings} compact />
            </div>
          </div>

          <div className="grid gap-2">
            {question.options.map((option) => {
              const isAnswer = option === question.answer;
              const active = selected === option;
              return (
                <button
                  key={option}
                  type="button"
                  data-sound="none"
                  onClick={() => choose(option)}
                  className={`flex min-h-12 items-center justify-between gap-2 rounded-lg border px-3 py-2 text-left text-[13px] font-semibold leading-snug transition ${
                    answered && isAnswer
                      ? "border-emerald-500 bg-emerald-50 text-emerald-700"
                      : answered && active
                        ? "border-rose-500 bg-rose-50 text-rose-700"
                        : "border-slate-200 bg-[#f8fbff] text-slate-900 active:border-indigo-400"
                  }`}
                >
                  <span className="mobile-option-clamp min-w-0">{option}</span>
                  {answered && isAnswer ? <CheckCircle2 size={17} aria-hidden="true" /> : null}
                  {answered && active && !isAnswer ? <XCircle size={17} aria-hidden="true" /> : null}
                </button>
              );
            })}
          </div>

          {answered ? (
            <div className={`mt-2 rounded-lg px-3 py-2 text-[13px] font-semibold leading-snug ${correct ? "bg-emerald-50 text-emerald-700" : "bg-rose-50 text-rose-700"}`}>
              {correct ? "回答正确，阶段会向前推进。" : `回答错误：${question.answer}`}
            </div>
          ) : null}

          <button type="button" onClick={nextQuestion} disabled={!answered} className="btn-primary mt-2 h-11 min-h-0 w-full disabled:opacity-40">
            下一题
          </button>
        </section>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <div className="text-xs font-semibold uppercase text-copper">Quiz</div>
          <h1 className="mt-1 text-3xl font-semibold text-ink">{title}</h1>
        </div>
        <div className="text-sm text-slate-500">
          {index + 1} / {questions.length}
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_280px]">
        <section className="min-w-0 space-y-5">
          <ProgressBar value={index + 1} max={questions.length} label="测试进度" />

          <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft">
            <div className="py-8 text-center">
              <div className="break-words text-5xl font-semibold text-ink">{question.word.word}</div>
              <div className="mt-3 text-xl text-slate-500">{question.word.phonetic}</div>
              <div className="mt-4 flex justify-center gap-2">
                <AudioButton word={question.word.word} accent="us" settings={audioSettings} />
                <AudioButton word={question.word.word} accent="uk" settings={audioSettings} />
              </div>
            </div>

            <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
              {question.options.map((option) => {
                const isAnswer = option === question.answer;
                const active = selected === option;
                return (
                  <button
                    key={option}
                    type="button"
                    data-sound="none"
                    onClick={() => choose(option)}
                    className={`quiz-option ${
                      answered && isAnswer
                        ? "border-emerald-500 bg-emerald-50 text-emerald-700"
                        : answered && active
                          ? "border-rose-500 bg-rose-50 text-rose-700"
                          : "border-slate-200 bg-[#f8fbff] text-slate-900 hover:border-indigo-400"
                    }`}
                  >
                    <span>{option}</span>
                    {answered && isAnswer ? <CheckCircle2 size={18} aria-hidden="true" /> : null}
                    {answered && active && !isAnswer ? <XCircle size={18} aria-hidden="true" /> : null}
                  </button>
                );
              })}
            </div>

            {answered ? (
              <div className={`mt-4 rounded-lg p-4 text-sm ${correct ? "bg-emerald-50 text-emerald-700" : "bg-rose-50 text-rose-700"}`}>
                {correct ? "回答正确，阶段会向前推进。" : `回答错误，正确答案是：${question.answer}`}
                <div className="mt-3 flex gap-2">
                  <AudioButton word={question.word.word} accent="us" settings={audioSettings} />
                  <AudioButton word={question.word.word} accent="uk" settings={audioSettings} />
                </div>
              </div>
            ) : null}

            <div className="mt-5 flex justify-end">
              <button type="button" onClick={nextQuestion} disabled={!answered} className="btn-primary disabled:opacity-40">
                下一题
              </button>
            </div>
          </section>
        </section>

        <aside className="hidden space-y-4 lg:block">
          <section className="rounded-lg border border-slate-200 bg-white p-4 shadow-soft">
            <h2 className="font-semibold text-ink">测试面板</h2>
            <div className="mt-4 grid gap-3 text-sm">
              <ResultBox title="正确率" value={`${accuracy}%`} tone="text-indigo-600" />
              <ResultBox title="正确" value={score.correct} tone="text-emerald-600" />
              <ResultBox title="错题" value={score.wrong} tone="text-rose-600" />
            </div>
          </section>
          <section className="rounded-lg border border-slate-200 bg-white p-4 text-sm shadow-soft">
            <h2 className="font-semibold text-ink">快捷键</h2>
            <div className="mt-3 grid gap-2 text-slate-500">
              <span>Enter 下一题</span>
              <span>Space 可播放当前词</span>
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
}

function ResultBox({ title, value, tone = "text-ink" }: { title: string; value: string | number; tone?: string }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-[#f8fbff] p-4">
      <div className={`text-2xl font-semibold ${tone}`}>{value}</div>
      <div className="text-sm text-slate-500">{title}</div>
    </div>
  );
}
