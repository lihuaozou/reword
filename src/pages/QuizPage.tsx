import { CheckCircle2, RotateCcw, XCircle } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import type { AudioSettings, ProgressMap, WordEntry } from "../types";
import { AudioButton } from "../components/AudioButton";
import { EmptyState } from "../components/EmptyState";
import { ProgressBar } from "../components/ProgressBar";
import { WordCard } from "../components/WordCard";
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

  if (!questions.length) {
    return <EmptyState title="当前范围没有可测试的单词" body="先导入或选择一个包含单词的单元。" />;
  }

  if (finished) {
    const total = score.correct + score.wrong;
    const accuracy = total ? Math.round((score.correct / total) * 100) : 0;
    return (
      <div className="space-y-5">
        <section className="rounded-lg border border-slate-200 bg-white p-6 text-center shadow-soft">
          <div className="text-xs font-semibold uppercase text-copper">Result</div>
          <h1 className="mt-2 text-3xl font-semibold text-ink">本次测试完成</h1>
          <div className="mt-6 grid gap-3 sm:grid-cols-4">
            <div className="rounded-lg border border-slate-200 bg-[#f8fbff] p-4">
              <div className="text-2xl font-semibold">{total}</div>
              <div className="text-sm text-slate-500">总题数</div>
            </div>
            <div className="rounded-lg border border-slate-200 bg-[#f8fbff] p-4">
              <div className="text-2xl font-semibold text-spruce">{score.correct}</div>
              <div className="text-sm text-slate-500">正确</div>
            </div>
            <div className="rounded-lg border border-slate-200 bg-[#f8fbff] p-4">
              <div className="text-2xl font-semibold text-copper">{score.wrong}</div>
              <div className="text-sm text-slate-500">错误</div>
            </div>
            <div className="rounded-lg border border-slate-200 bg-[#f8fbff] p-4">
              <div className="text-2xl font-semibold text-harbor">{accuracy}%</div>
              <div className="text-sm text-slate-500">正确率</div>
            </div>
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

  const answered = Boolean(selected);
  const correct = selected === question.answer;

  const choose = (option: string) => {
    if (answered) return;
    const isCorrect = option === question.answer;
    setSelected(option);
    setScore((value) => ({
      correct: value.correct + (isCorrect ? 1 : 0),
      wrong: value.wrong + (isCorrect ? 0 : 1),
    }));
    if (!isCorrect) setWrongWords((value) => [...value, question.word]);
    onAnswer(question.word.id, isCorrect);
  };

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

      <ProgressBar value={index + 1} max={questions.length} label="测试进度" />

      <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-soft">
        <div className="py-8 text-center">
          <div className="text-5xl font-semibold text-ink">{question.word.word}</div>
          <div className="mt-3 text-xl text-slate-500">{question.word.phonetic}</div>
          <div className="mt-4 flex justify-center gap-2">
            <AudioButton word={question.word.word} accent="us" settings={audioSettings} />
            <AudioButton word={question.word.word} accent="uk" settings={audioSettings} />
          </div>
        </div>

        <div className="grid gap-3">
          {question.options.map((option) => {
            const isAnswer = option === question.answer;
            const active = selected === option;
            return (
              <button
                key={option}
                type="button"
                onClick={() => choose(option)}
                className={`quiz-option ${
                  answered && isAnswer
                    ? "border-spruce bg-spruce/10 text-spruce"
                    : answered && active
                      ? "border-copper bg-copper/10 text-copper"
                      : "border-slate-200 bg-[#f8fbff] text-slate-900 hover:border-harbor"
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
          <div className={`mt-4 rounded-lg p-4 text-sm ${correct ? "bg-spruce/10 text-spruce" : "bg-copper/10 text-copper"}`}>
            {correct ? "回答正确，阶段会向前推进。" : `回答错误，正确答案是：${question.answer}`}
            <div className="mt-3 flex gap-2">
              <AudioButton word={question.word.word} accent="us" settings={audioSettings} />
              <AudioButton word={question.word.word} accent="uk" settings={audioSettings} />
            </div>
          </div>
        ) : null}

        <div className="mt-5 flex justify-end">
          <button
            type="button"
            onClick={() => {
              setSelected(undefined);
              setIndex((value) => value + 1);
            }}
            disabled={!answered}
            className="btn-primary disabled:opacity-40"
          >
            下一题
          </button>
        </div>
      </section>
    </div>
  );
}

