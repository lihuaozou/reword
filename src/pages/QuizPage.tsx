import { CheckCircle2, RotateCcw, XCircle } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import type { AudioSettings, ProgressMap, WordEntry } from "../types";
import { AudioButton } from "../components/AudioButton";
import { EmptyState } from "../components/EmptyState";
import { MobileStudyShell } from "../components/layout/MobileStudyShell";
import { MonsterCard } from "../components/MonsterCard";
import { ProgressBar } from "../components/ProgressBar";
import { WordCard } from "../components/WordCard";
import type { BattleVisualState } from "../data/monsters";
import { useKeyboardShortcuts } from "../hooks/useKeyboardShortcuts";
import { useResponsive } from "../hooks/useResponsive";
import { playWordAudio } from "../utils/audio";
import { getWordMonsterHp } from "../utils/monster";
import { getMotivationByScene, type MotivationSettings } from "../utils/motivation";
import { createQuizQuestions, type QuizQuestion } from "../utils/quiz";
import { getMobileWordTitleClass, getWordTitleClass } from "../utils/textSize";

type QuizPageProps = {
  title: string;
  words: WordEntry[];
  allWords: WordEntry[];
  progressMap: ProgressMap;
  audioSettings: AudioSettings;
  motivationSettings?: MotivationSettings;
  onAnswer: (wordId: string, correct: boolean) => void;
};

export function QuizPage({ title, words, allWords, progressMap, audioSettings, motivationSettings, onAnswer }: QuizPageProps) {
  const [questionSeed, setQuestionSeed] = useState(0);
  const [quizWords, setQuizWords] = useState(words);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | undefined>();
  const [score, setScore] = useState({ correct: 0, wrong: 0 });
  const [wrongWords, setWrongWords] = useState<WordEntry[]>([]);
  const [showDefinition, setShowDefinition] = useState(false);
  const questions = useMemo(() => createQuizQuestions(quizWords, allWords), [quizWords, allWords, questionSeed]);
  const question: QuizQuestion | undefined = questions[index];
  const finished = index >= questions.length;
  const answered = Boolean(selected);
  const correct = selected === question?.answer;
  const total = score.correct + score.wrong;
  const accuracy = total ? Math.round((score.correct / total) * 100) : 0;
  const { isMobile } = useResponsive();
  const showWrongMotivation = Boolean(motivationSettings?.enabled !== false && motivationSettings?.wrongAnswerMotivation !== false);
  const wrongQuote = showWrongMotivation && answered && !correct ? getMotivationByScene("wrong_answer", motivationSettings) : null;
  const battleState: BattleVisualState = !question || !answered ? "idle" : correct ? (getWordMonsterHp(question.word, progressMap) <= 25 ? "defeated" : "hit") : "damaged";

  useEffect(() => {
    setQuizWords(words);
    setIndex(0);
    setSelected(undefined);
    setScore({ correct: 0, wrong: 0 });
    setWrongWords([]);
    setShowDefinition(false);
  }, [words]);

  const restart = (nextWords = words) => {
    setQuizWords([...nextWords]);
    setQuestionSeed((value) => value + 1);
    setIndex(0);
    setSelected(undefined);
    setScore({ correct: 0, wrong: 0 });
    setWrongWords([]);
    setShowDefinition(false);
  };

  const choose = (option: string) => {
    if (!question || answered) return;
    const isCorrect = option === question.answer;
    setSelected(option);
    setShowDefinition(false);
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
    setShowDefinition(false);
    setIndex((value) => value + 1);
  };

  const retryCurrent = () => {
    setSelected(undefined);
    setShowDefinition(false);
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
      <MobileStudyShell
        header={
          <div className="rounded-2xl border border-white/80 bg-white/80 px-3 py-2 shadow-soft backdrop-blur-xl">
            <div className="flex min-h-9 items-center justify-between gap-3">
              <div className="min-w-0">
                <h1 className="truncate text-sm font-semibold text-ink">{title}</h1>
                <div className="text-[11px] font-medium text-slate-500">正确率 {accuracy}%</div>
              </div>
              <div className="shrink-0 rounded-full border border-white/80 bg-white/90 px-2.5 py-1 text-xs font-semibold text-harbor shadow-sm">
                {index + 1}/{questions.length}
              </div>
            </div>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-ink/10">
              <div className="h-full rounded-full bg-harbor" style={{ width: `${Math.min(100, ((index + 1) / questions.length) * 100)}%` }} />
            </div>
          </div>
        }
        actionBar={
          <button type="button" onClick={nextQuestion} disabled={!answered} className="btn-primary h-12 min-h-0 w-full disabled:opacity-40">
            下一题
          </button>
        }
      >

        <section className="rounded-3xl border border-slate-200 bg-white p-3 shadow-soft">
          <div className="pb-3 pt-2 text-center">
            <div className={`word-title whitespace-nowrap break-normal word-break-normal overflow-visible font-semibold tracking-tight text-ink ${getMobileWordTitleClass(question.word.word)}`}>{question.word.word}</div>
            <div className="mt-1 text-xs text-slate-500">{question.word.phonetic}</div>
            <div className="mt-2 flex justify-center gap-2">
              <AudioButton word={question.word.word} accent="us" settings={audioSettings} compact />
              <AudioButton word={question.word.word} accent="uk" settings={audioSettings} compact />
            </div>
            <MonsterCard word={question.word} progressMap={progressMap} state={battleState} compact className="mt-2 text-left" />
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
                  className={`flex min-h-12 items-center justify-between gap-2 rounded-2xl border px-3 py-2 text-left text-[13px] font-semibold leading-snug transition active:scale-[0.99] ${
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
            <div className={`mt-2 rounded-2xl px-3 py-2 text-[13px] font-semibold leading-snug ${correct ? "bg-emerald-50 text-emerald-700" : "bg-rose-50 text-rose-700"}`}>
              {correct ? "回答正确，阶段会向前推进。" : `回答错误：${question.answer}`}
              {wrongQuote ? (
                <div className="mt-2 rounded-xl border border-rose-100 bg-white/80 p-2 text-slate-800">
                  <div className="text-[13px] font-semibold text-rose-700">{wrongQuote.text}</div>
                  {wrongQuote.subtext ? <div className="mt-1 text-xs font-medium text-slate-500">{wrongQuote.subtext}</div> : null}
                </div>
              ) : null}
            </div>
          ) : null}

          {showDefinition ? <div className="mt-2"><WordCard word={question.word} progress={progressMap[question.word.id]} compact audioSettings={audioSettings} /></div> : null}

          {answered && !correct ? (
            <div className="mt-2 grid grid-cols-2 gap-2">
              <button type="button" onClick={() => restart([question.word])} className="btn-secondary h-10 min-h-0 px-2 text-xs">
                错题强化
              </button>
              <button type="button" onClick={() => setShowDefinition((value) => !value)} className="btn-secondary h-10 min-h-0 px-2 text-xs">
                查看释义
              </button>
              <button type="button" onClick={retryCurrent} className="btn-secondary h-10 min-h-0 px-2 text-xs">
                再来一次
              </button>
              <button type="button" onClick={nextQuestion} className="btn-primary h-10 min-h-0 px-2 text-xs">
                下一题
              </button>
            </div>
          ) : null}

        </section>
      </MobileStudyShell>
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
              <div className={`word-title whitespace-nowrap break-normal word-break-normal overflow-visible font-semibold tracking-tight text-ink ${getWordTitleClass(question.word.word)}`}>{question.word.word}</div>
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
                {wrongQuote ? (
                  <div className="mt-3 rounded-lg border border-rose-100 bg-white/80 p-3 text-slate-800">
                    <div className="font-semibold text-rose-700">{wrongQuote.text}</div>
                    {wrongQuote.subtext ? <div className="mt-1 text-xs text-slate-500">{wrongQuote.subtext}</div> : null}
                  </div>
                ) : null}
                <div className="mt-3 flex gap-2">
                  <AudioButton word={question.word.word} accent="us" settings={audioSettings} />
                  <AudioButton word={question.word.word} accent="uk" settings={audioSettings} />
                </div>
                {!correct ? (
                  <div className="mt-3 flex flex-wrap gap-2">
                    <button type="button" onClick={() => restart([question.word])} className="btn-secondary min-h-9 px-3 py-1.5 text-xs">
                      加入错题强化
                    </button>
                    <button type="button" onClick={() => setShowDefinition((value) => !value)} className="btn-secondary min-h-9 px-3 py-1.5 text-xs">
                      查看释义
                    </button>
                    <button type="button" onClick={retryCurrent} className="btn-secondary min-h-9 px-3 py-1.5 text-xs">
                      再来一次
                    </button>
                  </div>
                ) : null}
              </div>
            ) : null}

            {showDefinition ? <WordCard word={question.word} progress={progressMap[question.word.id]} compact audioSettings={audioSettings} /> : null}

            <div className="mt-5 flex justify-end">
              <button type="button" onClick={nextQuestion} disabled={!answered} className="btn-primary disabled:opacity-40">
                下一题
              </button>
            </div>
          </section>
        </section>

        <aside className="hidden space-y-4 lg:block">
          <MonsterCard word={question.word} progressMap={progressMap} state={battleState} />
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
