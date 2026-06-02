import { requireSupabase } from "../lib/supabase";
import { words } from "../data/words";
import type { ProgressMap, ReviewAction, ReviewHistoryItem, WordProgress } from "../types";
import { createEmptyProgress } from "../utils/storage";
import { isMastered } from "../utils/scheduler";

const unitByWordId = new Map(words.map((word) => [word.id, word.unitId]));

const validActions = new Set<ReviewAction>(["learned", "known", "fuzzy", "forgotten", "quiz-correct", "quiz-wrong", "monster-defeated"]);

function latestProgressTime(progress: WordProgress) {
  return progress.lastReviewedAt || progress.nextReviewAt || progress.firstLearnedAt || new Date(0).toISOString();
}

function normalizeAction(action: string): ReviewAction {
  return validActions.has(action as ReviewAction) ? (action as ReviewAction) : "known";
}

function toProgressRow(userId: string, progress: WordProgress) {
  return {
    user_id: userId,
    word_id: progress.wordId,
    unit_id: unitByWordId.get(progress.wordId) || null,
    stage: progress.stage,
    first_learned_at: progress.firstLearnedAt || null,
    last_reviewed_at: progress.lastReviewedAt || null,
    next_review_at: progress.nextReviewAt || null,
    known_count: progress.knownCount,
    fuzzy_count: progress.fuzzyCount,
    forgotten_count: progress.forgottenCount,
    correct_count: progress.correctCount,
    wrong_count: progress.wrongCount,
    monster_hp: null,
    is_mastered: isMastered(progress),
    raw_progress: progress,
    updated_at: latestProgressTime(progress),
  };
}

function toReviewRows(userId: string, progressMap: ProgressMap) {
  return Object.values(progressMap).flatMap((progress) =>
    progress.reviewHistory.map((item) => ({
      user_id: userId,
      word_id: progress.wordId,
      unit_id: unitByWordId.get(progress.wordId) || null,
      action: item.action,
      old_stage: item.stage,
      new_stage: progress.stage,
      created_at: item.at,
    }))
  );
}

function fromProgressRow(row: any): WordProgress {
  const raw = row.raw_progress && typeof row.raw_progress === "object" ? (row.raw_progress as Partial<WordProgress>) : {};
  return {
    ...createEmptyProgress(row.word_id),
    ...raw,
    wordId: row.word_id,
    learned: Boolean(raw.learned ?? row.first_learned_at),
    stage: Number(row.stage || 0),
    firstLearnedAt: row.first_learned_at || raw.firstLearnedAt,
    lastReviewedAt: row.last_reviewed_at || raw.lastReviewedAt,
    nextReviewAt: row.next_review_at || raw.nextReviewAt,
    knownCount: Number(row.known_count || 0),
    fuzzyCount: Number(row.fuzzy_count || 0),
    forgottenCount: Number(row.forgotten_count || 0),
    correctCount: Number(row.correct_count || 0),
    wrongCount: Number(row.wrong_count || 0),
    reviewHistory: Array.isArray(raw.reviewHistory) ? raw.reviewHistory : [],
  };
}

async function replaceRows(table: string, userId: string, rows: Record<string, unknown>[]) {
  const client = requireSupabase();
  const deleted = await client.from(table).delete().eq("user_id", userId);
  if (deleted.error) throw deleted.error;
  if (!rows.length) return;
  const inserted = await client.from(table).insert(rows);
  if (inserted.error) throw inserted.error;
}

export async function uploadWordProgress(userId: string, progressMap: ProgressMap) {
  const client = requireSupabase();
  const rows = Object.values(progressMap).map((progress) => toProgressRow(userId, progress));
  if (rows.length) {
    const result = await client.from("word_progress").upsert(rows, { onConflict: "user_id,word_id" });
    if (result.error) throw result.error;
  }
  await replaceRows("review_history", userId, toReviewRows(userId, progressMap));
}

export async function downloadWordProgress(userId: string): Promise<ProgressMap> {
  const client = requireSupabase();
  const progressResult = await client.from("word_progress").select("*").eq("user_id", userId);
  if (progressResult.error) throw progressResult.error;

  const progressMap: ProgressMap = {};
  (progressResult.data || []).forEach((row: any) => {
    const progress = fromProgressRow(row);
    progressMap[progress.wordId] = progress;
  });

  const historyResult = await client.from("review_history").select("*").eq("user_id", userId).order("created_at", { ascending: true });
  if (historyResult.error) throw historyResult.error;

  const grouped = new Map<string, ReviewHistoryItem[]>();
  (historyResult.data || []).forEach((row: any) => {
    const current = grouped.get(row.word_id) || [];
    current.push({
      action: normalizeAction(row.action),
      at: row.created_at,
      stage: Number(row.new_stage ?? row.old_stage ?? 0),
    });
    grouped.set(row.word_id, current);
  });

  grouped.forEach((reviewHistory, wordId) => {
    const current = progressMap[wordId] || createEmptyProgress(wordId);
    progressMap[wordId] = { ...current, reviewHistory: reviewHistory.slice(-200) };
  });

  return progressMap;
}

export async function hasCloudProgress(userId: string) {
  const client = requireSupabase();
  const { count, error } = await client.from("word_progress").select("id", { count: "exact", head: true }).eq("user_id", userId);
  if (error) throw error;
  return Boolean(count && count > 0);
}
