import { useCallback, useEffect, useMemo, useState } from "react";
import { AppShell } from "./components/AppShell";
import { RewardToast } from "./components/RewardToast";
import { AchievementsPage } from "./pages/AchievementsPage";
import { CheckInPage } from "./pages/CheckInPage";
import { DashboardPage } from "./pages/DashboardPage";
import { MonsterPage } from "./pages/MonsterPage";
import { ProfilePage } from "./pages/ProfilePage";
import { QuizPage } from "./pages/QuizPage";
import { RecallPage } from "./pages/RecallPage";
import { ReviewPage } from "./pages/ReviewPage";
import { RewardsPage } from "./pages/RewardsPage";
import { SettingsPage } from "./pages/SettingsPage";
import { ShopPage } from "./pages/ShopPage";
import { StatisticsPage } from "./pages/StatisticsPage";
import { StudyPage } from "./pages/StudyPage";
import { TotalPage } from "./pages/TotalPage";
import { UnitDetailPage } from "./pages/UnitDetailPage";
import { UnitsPage } from "./pages/UnitsPage";
import { StudyTimer } from "./components/StudyTimer";
import { units, words } from "./data/words";
import type { AppRoute, AudioSettings, ProgressMap, RewardRecord, RouteName, ShopItem, StudySession, UserStats, WordProgress } from "./types";
import { unlockAvailableAchievements } from "./utils/achievements";
import { canCheckIn, checkInToday, signInToday } from "./utils/checkin";
import { getBossStatus } from "./utils/monster";
import { applyReward } from "./utils/rewards";
import { appendHistory, createEmptyProgress, exportProgressToJson, getProgress, getUserStats, importProgressFromJson, resetAllProgress, saveProgress, saveUserStats } from "./utils/storage";
import { addStudySession, getStudyStats } from "./utils/statistics";
import { exchangeItem } from "./utils/shop";
import { isMastered, markAsForgotten, markAsFuzzy, markAsKnown, markAsLearned } from "./utils/scheduler";

function downloadJson(json: string) {
  const blob = new Blob([json], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = `reword-progress-${new Date().toISOString().slice(0, 10)}.json`;
  anchor.click();
  URL.revokeObjectURL(url);
}

function isRecentReward(progress: WordProgress, now: Date, windowMs = 60_000) {
  if (!progress.lastReviewedAt) return false;
  return now.getTime() - new Date(progress.lastReviewedAt).getTime() < windowMs;
}

function latestRewardChanged(current: UserStats, next: UserStats) {
  return next.rewardHistory[0] && next.rewardHistory[0]?.id !== current.rewardHistory[0]?.id;
}

export default function App() {
  const [route, setRoute] = useState<AppRoute>({ name: "dashboard" });
  const [progressMap, setProgressMap] = useState<ProgressMap>(() => getProgress());
  const [userStats, setUserStats] = useState<UserStats>(() => getUserStats());
  const [latestReward, setLatestReward] = useState<RewardRecord | undefined>();

  const selectedUnit = useMemo(() => units.find((unit) => unit.id === route.unitId) || units[0], [route.unitId]);
  const scopeWords = route.unitId ? selectedUnit.words : words;

  useEffect(() => {
    if (route.name === "study" || route.name === "recall" || route.name === "quiz") {
      window.scrollTo({ top: 0 });
    }
  }, [route.name, route.unitId]);

  useEffect(() => {
    if (!latestReward) return;
    const timer = window.setTimeout(() => setLatestReward(undefined), 2600);
    return () => window.clearTimeout(timer);
  }, [latestReward]);

  const finishStatsUpdate = (current: UserStats, next: UserStats, mapForAchievements = progressMap) => {
    const finalStats = unlockAvailableAchievements(next, words, mapForAchievements);
    saveUserStats(finalStats);
    if (latestRewardChanged(current, finalStats)) setLatestReward(finalStats.rewardHistory[0]);
    return finalStats;
  };

  const updateStats = (updater: (current: UserStats) => UserStats, mapForAchievements = progressMap) => {
    setUserStats((current) => finishStatsUpdate(current, updater(current), mapForAchievements));
  };

  const updateProgress = (
    wordId: string,
    progressUpdater: (progress: WordProgress) => WordProgress,
    statsUpdater?: (stats: UserStats, before: WordProgress, after: WordProgress, nextMap: ProgressMap) => UserStats
  ) => {
    setProgressMap((current) => {
      const before = current[wordId] || createEmptyProgress(wordId);
      const after = progressUpdater(before);
      const nextMap = { ...current, [wordId]: after };
      saveProgress(nextMap);

      if (statsUpdater) {
        setUserStats((stats) => finishStatsUpdate(stats, statsUpdater(stats, before, after, nextMap), nextMap));
      }

      return nextMap;
    });
  };

  const learnWord = (wordId: string) => {
    updateProgress(
      wordId,
      (progress) => markAsLearned(progress),
      (stats, before) => {
        if (before.learned) return stats;
        return applyReward(
          {
            ...stats,
            totalWordsLearned: stats.totalWordsLearned + 1,
          },
          {
            type: "study",
            title: "新词入库",
            description: "完成 1 个新单词初学",
            xp: 2,
            coins: 1,
            monsterPoints: 1,
          }
        );
      }
    );
  };

  const gradeWord = (wordId: string, grade: "known" | "fuzzy" | "forgotten") => {
    const now = new Date();
    updateProgress(
      wordId,
      (progress) => {
        if (grade === "known") return markAsKnown(progress, now);
        if (grade === "fuzzy") return markAsFuzzy(progress, now);
        return markAsForgotten(progress, now);
      },
      (stats, before, after) => {
        const recent = isRecentReward(before, now);
        if (recent) return stats;

        let next = { ...stats, totalWordsReviewed: stats.totalWordsReviewed + 1 };
        if (grade === "known") {
          next = applyReward(next, {
            type: "review",
            title: "复习命中",
            description: "理解模式记住 1 个单词",
            xp: 4,
            coins: 2,
            monsterPoints: 3,
          });
        } else if (grade === "fuzzy") {
          next = applyReward(next, {
            type: "review",
            title: "复习推进",
            description: "标记 1 个不熟词，进入加固周期",
            xp: 1,
            monsterPoints: 1,
          });
        }

        if (grade === "known" && isMastered(after) && !next.defeatedWordIds.includes(wordId)) {
          next = applyReward(
            {
              ...next,
              defeatedWordIds: [...next.defeatedWordIds, wordId],
              defeatedMonsters: next.defeatedMonsters + 1,
            },
            {
              type: "monster",
              title: "击败单词小怪",
              description: "一个单词进入掌握状态",
              xp: 10,
              coins: 5,
              monsterPoints: 10,
            }
          );
        }

        return next;
      }
    );
  };

  const answerQuiz = (wordId: string, correct: boolean) => {
    const now = new Date();
    updateProgress(
      wordId,
      (progress) => {
        if (correct) {
          const known = markAsKnown({ ...progress, correctCount: progress.correctCount + 1 }, now);
          return appendHistory(known, "quiz-correct", now);
        }
        const forgotten = markAsForgotten({ ...progress, wrongCount: progress.wrongCount + 1 }, now);
        return appendHistory(forgotten, "quiz-wrong", now);
      },
      (stats, before, after) => {
        const recent = isRecentReward(before, now);
        let next = {
          ...stats,
          totalQuizCount: stats.totalQuizCount + 1,
          totalCorrectCount: stats.totalCorrectCount + (correct ? 1 : 0),
          totalWrongCount: stats.totalWrongCount + (correct ? 0 : 1),
        };

        if (!recent && correct) {
          next = applyReward(next, {
            type: "quiz",
            title: "测试答对",
            description: "测验中答对 1 题",
            xp: 3,
            coins: 1,
            monsterPoints: 2,
          });
        }

        if (correct && isMastered(after) && !next.defeatedWordIds.includes(wordId)) {
          next = applyReward(
            {
              ...next,
              defeatedWordIds: [...next.defeatedWordIds, wordId],
              defeatedMonsters: next.defeatedMonsters + 1,
            },
            {
              type: "monster",
              title: "击败单词小怪",
              description: "测试命中让单词进入掌握状态",
              xp: 10,
              coins: 5,
              monsterPoints: 10,
            }
          );
        }

        return next;
      }
    );
  };

  const importProgress = (json: string) => {
    try {
      const next = importProgressFromJson(json);
      setProgressMap(next);
      setUserStats(getUserStats());
    } catch (error) {
      window.alert(error instanceof Error ? error.message : "导入失败");
    }
  };

  const resetProgress = () => {
    if (!window.confirm("确定清空所有学习进度、金币和打卡记录吗？")) return;
    resetAllProgress();
    setProgressMap({});
    setUserStats(getUserStats());
  };

  const handleSessionComplete = useCallback((session: StudySession) => {
    setUserStats((current) => {
      const beforeSeconds = getStudyStats(current).todaySeconds;
      let next = addStudySession(current, session);
      if (next === current) return current;

      const afterSeconds = getStudyStats(next).todaySeconds;
      [
        { minutes: 15, xp: 20, coins: 8, monsterPoints: 8 },
        { minutes: 30, xp: 35, coins: 12, monsterPoints: 12 },
        { minutes: 60, xp: 80, coins: 25, monsterPoints: 25 },
      ].forEach((reward) => {
        if (beforeSeconds < reward.minutes * 60 && afterSeconds >= reward.minutes * 60) {
          next = applyReward(next, {
            type: "study",
            title: `专注 ${reward.minutes} 分钟`,
            description: "今日学习时长达标",
            xp: reward.xp,
            coins: reward.coins,
            monsterPoints: reward.monsterPoints,
          });
        }
      });

      const finalStats = unlockAvailableAchievements(next, words, getProgress());
      saveUserStats(finalStats);
      if (latestRewardChanged(current, finalStats)) setLatestReward(finalStats.rewardHistory[0]);
      return finalStats;
    });
  }, []);

  const handleSignIn = () => {
    updateStats((stats) => signInToday(stats));
  };

  const handleCheckIn = () => {
    if (!canCheckIn(words, progressMap, userStats)) {
      window.alert("今日任务还没达成，先学几个新词、复习或完成一次测试。");
      return;
    }
    updateStats((stats) => checkInToday(stats));
  };

  const handleExchange = (item: ShopItem) => {
    setUserStats((current) => {
      const next = exchangeItem(current, item);
      if (next === current) {
        window.alert("金币/钻石不足，或已经拥有这个物品。");
        return current;
      }
      return finishStatsUpdate(current, next);
    });
  };

  const handleChallengeBoss = (unitId: string) => {
    const unit = units.find((item) => item.id === unitId);
    if (!unit) return;
    updateStats((stats) => {
      const status = getBossStatus(unit, progressMap, stats);
      if (!status.eligible || status.defeated) {
        window.alert("Boss 还不能挑战：需要本单元学习达到 80%，并且没有到期复习。");
        return stats;
      }
      return applyReward(
        {
          ...stats,
          defeatedBossIds: [...stats.defeatedBossIds, unitId],
          defeatedMonsters: stats.defeatedMonsters + 1,
        },
        {
          type: "monster",
          title: `击败 ${status.name}`,
          description: "完成一个单元 Boss 挑战",
          xp: 100,
          coins: 50,
          diamonds: 1,
          monsterPoints: 60,
          bypassDailyCap: true,
        }
      );
    });
  };

  const handleUpdateAudio = (settings: AudioSettings) => {
    updateStats((stats) => ({ ...stats, audioSettings: settings }));
  };

  const navigate = (name: RouteName) => setRoute({ name });
  const timerMode: StudySession["mode"] | undefined =
    route.name === "study" || route.name === "quiz" || route.name === "total" ? route.name : route.name === "recall" ? (route.dueOnly ? "review" : "recall") : undefined;

  const renderPage = () => {
    if (route.name === "dashboard") {
      return (
        <DashboardPage
          units={units}
          words={words}
          progressMap={progressMap}
          stats={userStats}
          onSignIn={handleSignIn}
          onNavigateReview={() => setRoute({ name: "review" })}
          onNavigateUnits={() => setRoute({ name: "units" })}
          onNavigateCheckIn={() => setRoute({ name: "checkin" })}
          onNavigateMonster={() => setRoute({ name: "monster" })}
          onNavigateShop={() => setRoute({ name: "shop" })}
          onNavigateStatistics={() => setRoute({ name: "statistics" })}
        />
      );
    }

    if (route.name === "units") {
      return <UnitsPage units={units} progressMap={progressMap} onOpenUnit={(unitId) => setRoute({ name: "unitDetail", unitId })} />;
    }

    if (route.name === "unitDetail") {
      return (
        <UnitDetailPage
          unit={selectedUnit}
          progressMap={progressMap}
          onStudy={() => setRoute({ name: "study", unitId: selectedUnit.id })}
          onRecall={() => setRoute({ name: "recall", unitId: selectedUnit.id })}
          onQuiz={() => setRoute({ name: "quiz", unitId: selectedUnit.id })}
        />
      );
    }

    if (route.name === "study") {
      return <StudyPage unit={route.unitId ? selectedUnit : undefined} words={scopeWords} progressMap={progressMap} audioSettings={userStats.audioSettings} onLearn={learnWord} />;
    }

    if (route.name === "recall") {
      return (
        <RecallPage
          title={route.unitId ? `${selectedUnit.name} 理解功能` : "总理解功能"}
          words={scopeWords}
          progressMap={progressMap}
          audioSettings={userStats.audioSettings}
          initialDueOnly={route.dueOnly}
          onGrade={gradeWord}
          onBackToStudy={() => setRoute({ name: "study", unitId: route.unitId })}
        />
      );
    }

    if (route.name === "quiz") {
      return <QuizPage title={route.unitId ? `${selectedUnit.name} 测试功能` : "总测试功能"} words={scopeWords} allWords={words} progressMap={progressMap} audioSettings={userStats.audioSettings} onAnswer={answerQuiz} />;
    }

    if (route.name === "total") {
      return (
        <TotalPage
          words={words}
          progressMap={progressMap}
          audioSettings={userStats.audioSettings}
          onStudy={() => setRoute({ name: "study" })}
          onRecall={() => setRoute({ name: "recall" })}
          onQuiz={() => setRoute({ name: "quiz" })}
        />
      );
    }

    if (route.name === "review") {
      return (
        <ReviewPage
          words={words}
          progressMap={progressMap}
          audioSettings={userStats.audioSettings}
          onStartReview={() => setRoute({ name: "recall", dueOnly: true })}
          onOpenUnits={() => setRoute({ name: "units" })}
        />
      );
    }

    if (route.name === "checkin") {
      return <CheckInPage words={words} progressMap={progressMap} stats={userStats} onSignIn={handleSignIn} onCheckIn={handleCheckIn} />;
    }

    if (route.name === "rewards") {
      return <RewardsPage stats={userStats} />;
    }

    if (route.name === "shop") {
      return <ShopPage stats={userStats} onExchange={handleExchange} />;
    }

    if (route.name === "monster") {
      return <MonsterPage words={words} units={units} progressMap={progressMap} stats={userStats} onChallengeBoss={handleChallengeBoss} />;
    }

    if (route.name === "statistics") {
      return <StatisticsPage stats={userStats} words={words} progressMap={progressMap} />;
    }

    if (route.name === "achievements") {
      return <AchievementsPage stats={userStats} words={words} progressMap={progressMap} />;
    }

    if (route.name === "settings") {
      return <SettingsPage stats={userStats} onUpdateAudio={handleUpdateAudio} />;
    }

    return (
      <ProfilePage
        words={words}
        progressMap={progressMap}
        stats={userStats}
        onNavigateCheckIn={() => setRoute({ name: "checkin" })}
        onNavigateRewards={() => setRoute({ name: "rewards" })}
        onNavigateShop={() => setRoute({ name: "shop" })}
        onNavigateStatistics={() => setRoute({ name: "statistics" })}
        onNavigateAchievements={() => setRoute({ name: "achievements" })}
        onNavigateSettings={() => setRoute({ name: "settings" })}
        onExport={() => downloadJson(exportProgressToJson())}
        onImport={importProgress}
        onReset={resetProgress}
      />
    );
  };

  return (
    <AppShell current={route.name} onNavigate={navigate}>
      {latestReward ? (
        <div className="fixed left-1/2 top-20 z-50 w-[min(92vw,360px)] -translate-x-1/2">
          <RewardToast reward={latestReward} />
        </div>
      ) : null}
      {renderPage()}
      <StudyTimer mode={timerMode} unitId={route.unitId} wordCount={scopeWords.length} onComplete={handleSessionComplete} />
    </AppShell>
  );
}
