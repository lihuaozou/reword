import { useCallback, useEffect, useRef, useState } from "react";
import { getSupabaseDisabledMessage, isSupabaseConfigured } from "../lib/supabase";
import type { PendingSyncItem, ProgressMap, SyncMode, SyncSnapshot, SyncState, UserStats } from "../types";
import {
  enqueuePendingSync,
  getLocalSyncSnapshot,
  getPendingSyncQueue,
  getSyncMetadata,
  hasCloudLearningData,
  hasLocalLearningData,
  runCloudSync,
} from "../services/syncService";
import { useSyncStatus } from "./useSyncStatus";

type CloudSyncOptions = {
  userId?: string;
  progressMap: ProgressMap;
  userStats: UserStats;
  onApplySnapshot: (snapshot: SyncSnapshot) => void;
};

type CloudSyncStatus = {
  configured: boolean;
  online: boolean;
  state: SyncState;
  message: string;
  lastSyncAt?: string;
  pendingCount: number;
  needsFirstSyncChoice: boolean;
};

const disabledMessage = getSupabaseDisabledMessage();

export function useCloudSync({ userId, progressMap, userStats, onApplySnapshot }: CloudSyncOptions) {
  const { online } = useSyncStatus();
  const snapshotRef = useRef<SyncSnapshot>(getLocalSyncSnapshot());
  const timerRef = useRef<number | undefined>();
  const checkedUserRef = useRef<string | undefined>();
  const metadata = getSyncMetadata();
  const [status, setStatus] = useState<CloudSyncStatus>(() => ({
    configured: isSupabaseConfigured,
    online,
    state: isSupabaseConfigured ? "idle" : "disabled",
    message: isSupabaseConfigured ? "本地模式" : disabledMessage,
    lastSyncAt: metadata.lastSyncAt,
    pendingCount: getPendingSyncQueue().length,
    needsFirstSyncChoice: false,
  }));

  useEffect(() => {
    snapshotRef.current = {
      progress: progressMap,
      userStats,
      exportedAt: new Date().toISOString(),
      schemaVersion: 1,
    };
  }, [progressMap, userStats]);

  const refreshStatus = useCallback(
    (patch: Partial<CloudSyncStatus> = {}) => {
      const nextMeta = getSyncMetadata();
      setStatus((current) => ({
        ...current,
        configured: isSupabaseConfigured,
        online,
        lastSyncAt: nextMeta.lastSyncAt,
        pendingCount: getPendingSyncQueue().length,
        ...patch,
      }));
    },
    [online]
  );

  const syncNow = useCallback(
    async (mode: SyncMode) => {
      if (!isSupabaseConfigured) {
        refreshStatus({ state: "disabled", message: disabledMessage });
        return null;
      }
      if (!userId) {
        refreshStatus({ state: "idle", message: "登录后可同步" });
        return null;
      }
      if (!online) {
        enqueuePendingSync("manual", { mode });
        refreshStatus({ state: "offline", message: "离线中，已加入待同步队列" });
        return null;
      }

      refreshStatus({ state: "syncing", message: "正在同步..." });
      try {
        const snapshot = await runCloudSync(userId, mode, snapshotRef.current);
        onApplySnapshot(snapshot);
        refreshStatus({
          state: "success",
          message: mode === "upload" ? "已上传本地进度" : mode === "download" ? "已恢复云端进度" : "已合并本地和云端进度",
          needsFirstSyncChoice: false,
        });
        return snapshot;
      } catch (error) {
        const message = error instanceof Error ? error.message : "同步失败";
        refreshStatus({ state: "error", message });
        throw error;
      }
    },
    [online, onApplySnapshot, refreshStatus, userId]
  );

  const queueLocalChange = useCallback(
    (type: PendingSyncItem["type"], payload: unknown = {}) => {
      if (!isSupabaseConfigured) {
        refreshStatus({ state: "disabled", message: disabledMessage });
        return;
      }
      if (!userId) {
        refreshStatus({ state: "idle", message: "游客本地模式" });
        return;
      }
      if (!online) {
        enqueuePendingSync(type, payload);
        refreshStatus({ state: "offline", message: "离线中，已先保存到本地" });
        return;
      }
      window.clearTimeout(timerRef.current);
      timerRef.current = window.setTimeout(() => {
        syncNow("upload").catch(() => undefined);
      }, 900);
    },
    [online, refreshStatus, syncNow, userId]
  );

  useEffect(() => {
    refreshStatus({
      state: !isSupabaseConfigured ? "disabled" : online ? (status.state === "offline" ? "idle" : status.state) : "offline",
      message: !isSupabaseConfigured ? disabledMessage : online ? status.message : "离线模式",
    });
  }, [online]);

  useEffect(() => {
    if (!isSupabaseConfigured || !userId || !online) return;
    if (!getPendingSyncQueue().length) return;
    syncNow("upload").catch(() => undefined);
  }, [online, syncNow, userId]);

  useEffect(() => {
    if (!isSupabaseConfigured || !userId || checkedUserRef.current === userId) return;
    checkedUserRef.current = userId;
    const nextMeta = getSyncMetadata();
    if (nextMeta.userId === userId && nextMeta.lastSyncAt) {
      refreshStatus({ state: "success", message: "已连接云同步", needsFirstSyncChoice: false });
      return;
    }

    let alive = true;
    hasCloudLearningData(userId)
      .then(async (cloudHasData) => {
        if (!alive) return;
        const localHasData = hasLocalLearningData(snapshotRef.current);
        if (localHasData && cloudHasData) {
          refreshStatus({ state: "idle", message: "请选择首次同步方式", needsFirstSyncChoice: true });
        } else if (localHasData && !cloudHasData) {
          await syncNow("upload");
        } else if (!localHasData && cloudHasData) {
          await syncNow("download");
        } else {
          refreshStatus({ state: "success", message: "已连接云同步", needsFirstSyncChoice: false });
        }
      })
      .catch((error) => {
        if (!alive) return;
        refreshStatus({ state: "error", message: error instanceof Error ? error.message : "读取云端数据失败" });
      });

    return () => {
      alive = false;
    };
  }, [refreshStatus, syncNow, userId]);

  useEffect(() => {
    return () => window.clearTimeout(timerRef.current);
  }, []);

  return {
    ...status,
    syncNow,
    queueLocalChange,
    refreshStatus,
  };
}
