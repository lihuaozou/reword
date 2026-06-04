import { useCallback, useEffect, useMemo, useState } from "react";
import { AppShell } from "./components/AppShell";
import { RewardToast } from "./components/RewardToast";
import { AccountPage } from "./pages/AccountPage";
import { AchievementsPage } from "./pages/AchievementsPage";
import { CheckInPage } from "./pages/CheckInPage";
import { DashboardPage } from "./pages/DashboardPage";
import { LoginPage } from "./pages/LoginPage";
import { MonsterPage } from "./pages/MonsterPage";
import { ProfilePage } from "./pages/ProfilePage";
import { QuizPage } from "./pages/QuizPage";
import { RecallPage } from "./pages/RecallPage";
import { RegisterPage } from "./pages/RegisterPage";
import { ReviewPage } from "./pages/ReviewPage";
import { RewardsPage } from "./pages/RewardsPage";
import { SettingsPage } from "./pages/SettingsPage";
import { ShopPage } from "./pages/ShopPage";
import { StatisticsPage } from "./pages/StatisticsPage";
import { StudyPage } from "./pages/StudyPage";
import { SyncPage } from "./pages/SyncPage";
import { TotalPage } from "./pages/TotalPage";
import { UnitDetailPage } from "./pages/UnitDetailPage";
import { UnitsPage } from "./pages/UnitsPage";
import { StudyTimer } from "./components/StudyTimer";
import { units, words } from "./data/words";
import { useAuth } from "./hooks/useAuth";
import { useCloudSync } from "./hooks/useCloudSync";
import { useSoundEffects } from "./hooks/useSoundEffects";
import type { AppRoute, AudioSettings, ProgressMap, RewardRecord, RouteName, ShopItem, SoundSettings, StudySession, SyncSnapshot, UserStats, WordEntry, WordProgress } from "./types";
import { unlockAvailableAchievements } from "./utils/achievements";
import { canCheckIn, checkInToday, signInToday } from "./utils/checkin";
import { getBossStatus } from "./utils/monster";
import { applyReward } from "./utils/rewards";
import { appendHistory, createEmptyProgress, exportProgressToJson, getLastStudyPosition, getProgress, getUserStats, importProgressFromJson, resetAllProgress, saveLastStudyPosition, saveProgress, saveUserStats } from "./utils/storage";
import { addStudySession, getStudyStats } from "./utils/statistics";
import { exchangeItem } from "./utils/shop";
import { getWrongWords, isMastered, markAsForgotten, markAsFuzzy, markAsKnown, markAsLearned } from "./utils/scheduler";
import { playClickSound, playErrorSound, playRewardSound, playSuccessSound, playToggleSound } from "./utils/sound";

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
  const [updateReady, setUpdateReady] = useState(false);
  const auth = useAuth();
  useSoundEffects(userStats.soundSettings);

  const applySyncSnapshot = useCallback((snapshot: SyncSnapshot) => {
    setProgressMap(snapshot.progress);
    setUserStats(snapshot.userStats);
  }, []);

  const rememberStudyPosition = useCallback((word: WordEntry) => {
    saveLastStudyPosition(word.unitId, word.id);
  }, []);

  const cloudSync = useCloudSync({
    userId: auth.user?.id,
    progressMap,
    userStats,
    onApplySnapshot: applySyncSnapshot,
  });

  const selectedUnit = useMemo(() => units.find((unit) => unit.id === route.unitId) || units[0], [route.unitId]);
  const scopeWords = useMemo(() => {
    if (route.name === "quiz" && route.quizMode === "wrong") {
      const wrongWords = getWrongWords(words, progressMap);
      return wrongWords.length ? wrongWords : words;
    }
    return route.unitId ? selectedUnit.words : words;
  }, [progressMap, route.name, route.quizMode, route.unitId, selectedUnit.words]);

  useEffect(() => {
    if (auth.user && cloudSync.needsFirstSyncChoice && route.name !== "sync") {
      setRoute({ name: "sync" });
    }
  }, [auth.user, cloudSync.needsFirstSyncChoice, route.name]);

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

  useEffect(() => {
    const onUpdateReady = () => setUpdateReady(true);
    window.addEventListener("reword:update-ready", onUpdateReady);
    return () => window.removeEventListener("reword:update-ready", onUpdateReady);
  }, []);

  const refreshToLatestVersion = async () => {
    const registration = await navigator.serviceWorker?.getRegistration();
    if (registration?.waiting) {
      registration.waiting.postMessage({ type: "SKIP_WAITING" });
      return;
    }
    window.location.reload();
  };

  const clearAppCache = async () => {
    if (!window.confirm("只清理 PWA 缓存和旧版本文件，不会删除学习进度。继续吗？")) return;
    if ("caches" in window) {
      const keys = await caches.keys();
      await Promise.all(keys.filter((key) => key.startsWith("reword-cache-")).map((key) => caches.delete(key)));
    }
    if ("serviceWorker" in navigator) {
      const registrations = await navigator.serviceWorker.getRegistrations();
      await Promise.all(registrations.map((registration) => registration.unregister()));
    }
    window.location.reload();
  };

  const finishStatsUpdate = (current: UserStats, next: UserStats, mapForAchievements = progressMap) => {
    const finalStats = unlockAvailableAchievements(next, words, mapForAchievements);
    saveUserStats(finalStats);
    cloudSync.queueLocalChange("stats", { source: "stats-update" });
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
      cloudSync.queueLocalChange("progress", { wordId });

      if (statsUpdater) {
        setUserStats((stats) => finishStatsUpdate(stats, statsUpdater(stats, before, after, nextMap), nextMap));
      }

      return nextMap;
    });
  };

  const learnWord = (wordId: string) => {
    const alreadyLearned = Boolean(progressMap[wordId]?.learned || progressMap[wordId]?.firstLearnedAt);
    if (alreadyLearned) {
      playClickSound(userStats.soundSettings);
      return;
    }
    playSuccessSound(userStats.soundSettings);

    updateProgress(
      wordId,
      (progress) => markAsLearned(progress),
      (stats, before) => {
        if (before.learned || before.firstLearnedAt) return stats;
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
    if (grade === "known") playSuccessSound(userStats.soundSettings);
    else if (grade === "fuzzy") playToggleSound(userStats.soundSettings);
    else playErrorSound(userStats.soundSettings);

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
    if (correct) playSuccessSound(userStats.soundSettings);
    else playErrorSound(userStats.soundSettings);

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
      cloudSync.queueLocalChange("manual", { source: "import" });
    } catch (error) {
      window.alert(error instanceof Error ? error.message : "导入失败");
    }
  };

  const resetProgress = () => {
    if (!window.confirm("确定清空所有学习进度、金币和打卡记录吗？")) return;
    resetAllProgress();
    setProgressMap({});
    setUserStats(getUserStats());
    cloudSync.queueLocalChange("manual", { source: "reset" });
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
      cloudSync.queueLocalChange("session", { sessionId: session.id });
      if (latestRewardChanged(current, finalStats)) setLatestReward(finalStats.rewardHistory[0]);
      return finalStats;
    });
  }, [cloudSync.queueLocalChange]);

  const handleSignIn = () => {
    playRewardSound(userStats.soundSettings);
    updateStats((stats) => signInToday(stats));
  };

  const handleCheckIn = () => {
    if (!canCheckIn(words, progressMap, userStats)) {
      playErrorSound(userStats.soundSettings);
      window.alert("今日任务还没达成，先学几个新词、复习或完成一次测试。");
      return;
    }
    playRewardSound(userStats.soundSettings);
    updateStats((stats) => checkInToday(stats));
  };

  const handleExchange = (item: ShopItem) => {
    const preview = exchangeItem(userStats, item);
    if (preview === userStats) playErrorSound(userStats.soundSettings);
    else playRewardSound(userStats.soundSettings);

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
    const status = getBossStatus(unit, progressMap, userStats);
    if (!status.eligible || status.defeated) {
      playErrorSound(userStats.soundSettings);
      window.alert("Boss 还不能挑战：需要本单元学习达到 80%，并且没有到期复习。");
      return;
    }
    playRewardSound(userStats.soundSettings);

    updateStats((stats) => {
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

  const handleUpdateSound = (settings: SoundSettings) => {
    updateStats((stats) => ({ ...stats, soundSettings: settings }));
  };

  const continueStudy = () => {
    const lastPosition = getLastStudyPosition();
    if (lastPosition && words.some((word) => word.id === lastPosition.wordId)) {
      const lastUnit = units.find((unit) => unit.id === lastPosition.unitId) || units.find((unit) => unit.words.some((word) => word.id === lastPosition.wordId));
      if (lastUnit) {
        setRoute({ name: "study", unitId: lastUnit.id, wordId: lastPosition.wordId });
        return;
      }
    }

    const targetUnit = units.find((unit) => unit.words.some((word) => !progressMap[word.id]?.learned && !progressMap[word.id]?.firstLearnedAt)) || units[0];
    setRoute({ name: "study", unitId: targetUnit.id });
  };

  const navigate = (name: RouteName) => setRoute({ name });
  const timerMode: StudySession["mode"] | undefined =
    route.name === "study" || route.name === "quiz" || route.name === "total" ? route.name : route.name === "recall" ? (route.dueOnly ? "review" : "recall") : undefined;

  const renderPage = () => {
    if (route.name === "login") {
      return (
        <LoginPage
          configured={auth.configured}
          loading={auth.loading}
          error={auth.error}
          onLogin={async (email, password) => {
            await auth.login(email, password);
          }}
          onSuccess={() => setRoute({ name: "sync" })}
          onRegister={() => setRoute({ name: "register" })}
          onGuest={() => setRoute({ name: "dashboard" })}
        />
      );
    }

    if (route.name === "register") {
      return (
        <RegisterPage
          configured={auth.configured}
          loading={auth.loading}
          error={auth.error}
          onRegister={async (username, email, password) => {
            return await auth.register(username, email, password);
          }}
          onSuccess={() => setRoute({ name: auth.user ? "sync" : "login" })}
          onLogin={() => setRoute({ name: "login" })}
        />
      );
    }

    if (route.name === "sync") {
      return (
        <SyncPage
          configured={cloudSync.configured}
          online={cloudSync.online}
          user={auth.user}
          state={cloudSync.state}
          message={cloudSync.message}
          lastSyncAt={cloudSync.lastSyncAt}
          pendingCount={cloudSync.pendingCount}
          onSync={async (mode) => {
            await cloudSync.syncNow(mode);
            setRoute({ name: "account" });
          }}
          onSkip={() => setRoute({ name: "dashboard" })}
          onLogin={() => setRoute({ name: "login" })}
        />
      );
    }

    if (route.name === "account") {
      return (
        <AccountPage
          configured={cloudSync.configured}
          online={cloudSync.online}
          user={auth.user}
          profile={auth.profile}
          state={cloudSync.state}
          message={cloudSync.message}
          lastSyncAt={cloudSync.lastSyncAt}
          pendingCount={cloudSync.pendingCount}
          onLogin={() => setRoute({ name: "login" })}
          onRegister={() => setRoute({ name: "register" })}
          onSync={cloudSync.syncNow}
          onLogout={async () => {
            await auth.logout();
            setRoute({ name: "dashboard" });
          }}
          onExport={() => downloadJson(exportProgressToJson())}
          onImport={importProgress}
        />
      );
    }

    if (route.name === "dashboard") {
      return (
        <DashboardPage
          units={units}
          words={words}
          progressMap={progressMap}
          stats={userStats}
          onSignIn={handleSignIn}
          onContinueStudy={continueStudy}
          onNavigateReview={() => setRoute({ name: "review" })}
          onNavigateWrongQuiz={() => setRoute({ name: "quiz", quizMode: "wrong" })}
          onNavigateUnits={() => setRoute({ name: "units" })}
          onNavigateCheckIn={() => setRoute({ name: "checkin" })}
          onNavigateMonster={() => setRoute({ name: "monster" })}
          onNavigateShop={() => setRoute({ name: "shop" })}
          onNavigateStatistics={() => setRoute({ name: "statistics" })}
          onNavigateLogin={() => setRoute({ name: "login" })}
          onNavigateAccount={() => setRoute({ name: "account" })}
          syncStatus={{
            configured: cloudSync.configured,
            online: cloudSync.online,
            state: cloudSync.state,
            message: auth.user ? cloudSync.message : cloudSync.configured ? "游客本地模式" : cloudSync.message,
            lastSyncAt: cloudSync.lastSyncAt,
            pendingCount: cloudSync.pendingCount,
            isLoggedIn: Boolean(auth.user),
          }}
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
      return (
        <StudyPage
          unit={route.unitId ? selectedUnit : undefined}
          words={scopeWords}
          progressMap={progressMap}
          audioSettings={userStats.audioSettings}
          initialWordId={route.wordId}
          onLearn={learnWord}
          onStudyPositionChange={rememberStudyPosition}
        />
      );
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
      const quizTitle = route.quizMode === "wrong" ? "错题强化测试" : route.unitId ? `${selectedUnit.name} 测试功能` : "总测试功能";
      return <QuizPage title={quizTitle} words={scopeWords} allWords={words} progressMap={progressMap} audioSettings={userStats.audioSettings} onAnswer={answerQuiz} />;
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
      return (
        <SettingsPage
          stats={userStats}
          onUpdateAudio={handleUpdateAudio}
          onUpdateSound={handleUpdateSound}
          syncStatus={{
            online: cloudSync.online,
            state: cloudSync.state,
            message: cloudSync.message,
            lastSyncAt: cloudSync.lastSyncAt,
            pendingCount: cloudSync.pendingCount,
            isLoggedIn: Boolean(auth.user),
          }}
        />
      );
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
        onNavigateAccount={() => setRoute({ name: "account" })}
        syncStatus={{
          configured: cloudSync.configured,
          online: cloudSync.online,
          state: cloudSync.state,
          message: auth.user ? cloudSync.message : cloudSync.configured ? "游客本地模式" : cloudSync.message,
          lastSyncAt: cloudSync.lastSyncAt,
          pendingCount: cloudSync.pendingCount,
        }}
        onExport={() => downloadJson(exportProgressToJson())}
        onImport={importProgress}
        onClearCache={clearAppCache}
        onReset={resetProgress}
      />
    );
  };

  return (
    <AppShell current={route.name} onNavigate={navigate} user={auth.user} profile={auth.profile}>
      {latestReward ? (
        <div className="fixed left-1/2 top-20 z-50 w-[min(92vw,360px)] -translate-x-1/2">
          <RewardToast reward={latestReward} />
        </div>
      ) : null}
      {updateReady ? (
        <div className="fixed inset-x-3 top-16 z-50 mx-auto flex max-w-md items-center justify-between gap-3 rounded-lg border border-indigo-200 bg-white px-3 py-2 text-sm shadow-soft md:top-4">
          <span className="font-semibold text-ink">发现新版本</span>
          <div className="flex shrink-0 gap-2">
            <button type="button" onClick={() => setUpdateReady(false)} className="rounded-md border border-slate-200 px-2 py-1 text-xs font-semibold text-slate-500">
              稍后
            </button>
            <button type="button" onClick={clearAppCache} className="rounded-md border border-sky-200 px-2 py-1 text-xs font-semibold text-harbor">
              清缓存
            </button>
            <button type="button" onClick={refreshToLatestVersion} className="rounded-md bg-harbor px-2 py-1 text-xs font-semibold text-white">
              刷新
            </button>
          </div>
        </div>
      ) : null}
      {renderPage()}
      <StudyTimer mode={timerMode} unitId={route.unitId} wordCount={scopeWords.length} onComplete={handleSessionComplete} />
    </AppShell>
  );
}
