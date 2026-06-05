export type Definition = {
  pos: string;
  meaning: string;
};

export type WordEntry = {
  id: string;
  unitId: string;
  unitName: string;
  order: number;
  word: string;
  phonetic: string;
  definitions: Definition[];
  image?: string;
  imagePrompt?: string;
  visualPrompt?: string;
  example?: string;
  note?: string;
};

export type WordUnit = {
  id: string;
  name: string;
  order: number;
  expectedCount?: number;
  words: WordEntry[];
  referenceImages?: string[];
};

export type ReviewAction =
  | "learned"
  | "known"
  | "fuzzy"
  | "forgotten"
  | "quiz-correct"
  | "quiz-wrong"
  | "monster-defeated";

export type ReviewHistoryItem = {
  action: ReviewAction;
  at: string;
  stage: number;
};

export type WordProgress = {
  wordId: string;
  learned: boolean;
  stage: number;
  firstLearnedAt?: string;
  lastReviewedAt?: string;
  nextReviewAt?: string;
  knownCount: number;
  fuzzyCount: number;
  forgottenCount: number;
  correctCount: number;
  wrongCount: number;
  reviewHistory: ReviewHistoryItem[];
};

export type ProgressMap = Record<string, WordProgress>;

export type SyncSnapshot = {
  progress: ProgressMap;
  userStats: UserStats;
  exportedAt: string;
  schemaVersion: 1;
};

export type SyncMode = "upload" | "download" | "merge";

export type SyncState = "idle" | "syncing" | "offline" | "error" | "success" | "disabled";

export type PendingSyncItem = {
  id: string;
  type: "progress" | "stats" | "settings" | "session" | "manual";
  payload: unknown;
  createdAt: string;
  retryCount: number;
};

export type UserProfile = {
  id: string;
  userId: string;
  username: string;
  displayName?: string | null;
  avatarUrl?: string | null;
  createdAt?: string;
  updatedAt?: string;
};

export type AudioAccent = "us" | "uk";

export type AudioSettings = {
  autoPlayOnStudy: boolean;
  autoPlayOnRecall: boolean;
  defaultAccent: AudioAccent;
  speechRate: 0.8 | 0.9 | 1 | 1.1;
  repeatCount: 1 | 2;
};

export type SoundSettings = {
  enabled: boolean;
  volume: 0 | 0.25 | 0.5 | 0.75 | 1;
};

export type CheckInRecord = {
  date: string;
  checkedAt: string;
  streakDay: number;
  rewardCoins: number;
  rewardXp: number;
  rewardItem?: string;
};

export type StudySession = {
  id: string;
  date: string;
  startedAt: string;
  endedAt: string;
  durationSeconds: number;
  mode: "study" | "recall" | "quiz" | "review" | "total";
  unitId?: string;
  wordCount: number;
  correctCount?: number;
  wrongCount?: number;
};

export type RewardRecord = {
  id: string;
  type: "checkin" | "signin" | "study" | "review" | "quiz" | "monster" | "achievement" | "exchange";
  title: string;
  description: string;
  xp: number;
  coins: number;
  createdAt: string;
};

export type InventoryItem = {
  itemId: string;
  count: number;
  obtainedAt: string;
};

export type UserStats = {
  totalStudyDays: number;
  currentStreak: number;
  longestStreak: number;
  signInStreak: number;
  lastSignInDate: string | null;
  lastCheckInDate: string | null;
  totalStudyMinutes: number;
  totalWordsLearned: number;
  totalWordsReviewed: number;
  totalQuizCount: number;
  totalCorrectCount: number;
  totalWrongCount: number;
  totalXp: number;
  level: number;
  coins: number;
  diamonds: number;
  monsterPoints: number;
  defeatedMonsters: number;
  unlockedItems: string[];
  equippedTheme: string;
  equippedAvatar: string;
  checkedAchievementIds: string[];
  defeatedWordIds: string[];
  defeatedBossIds: string[];
  dailyRewardCaps: Record<string, { xp: number; coins: number; monsterPoints: number }>;
  checkInHistory: CheckInRecord[];
  studySessions: StudySession[];
  rewardHistory: RewardRecord[];
  inventory: InventoryItem[];
  audioSettings: AudioSettings;
  soundSettings: SoundSettings;
};

export type ShopItem = {
  id: string;
  name: string;
  description: string;
  type: "theme" | "avatar" | "tool" | "badge" | "cardSkin";
  priceCoins: number;
  priceDiamonds?: number;
  icon: string;
  rarity: "common" | "rare" | "epic" | "legendary";
  unlockCondition?: string;
};

export type Achievement = {
  id: string;
  title: string;
  description: string;
  rewardXp: number;
  rewardCoins: number;
  rewardDiamonds?: number;
};

export type RouteName =
  | "dashboard"
  | "units"
  | "unitDetail"
  | "study"
  | "recall"
  | "quiz"
  | "total"
  | "review"
  | "profile"
  | "checkin"
  | "rewards"
  | "shop"
  | "monster"
  | "statistics"
  | "achievements"
  | "settings"
  | "login"
  | "register"
  | "account"
  | "sync";

export type AppRoute = {
  name: RouteName;
  unitId?: string;
  wordId?: string;
  dueOnly?: boolean;
  quizMode?: "wrong";
};
