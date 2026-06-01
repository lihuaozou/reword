import { useEffect, useRef, useState } from "react";
import type { StudySession } from "../types";
import { createSession } from "../utils/statistics";

type StudyTimerProps = {
  mode?: StudySession["mode"];
  unitId?: string;
  wordCount?: number;
  onComplete: (session: StudySession) => void;
};

export function StudyTimer({ mode, unitId, wordCount = 0, onComplete }: StudyTimerProps) {
  const sessionRef = useRef<StudySession | null>(null);
  const startedAtRef = useRef<number>(0);
  const hiddenAtRef = useRef<number | null>(null);
  const [, forceTick] = useState(0);

  useEffect(() => {
    if (!mode) return;
    sessionRef.current = createSession(mode, unitId, wordCount);
    startedAtRef.current = Date.now();
    const interval = window.setInterval(() => forceTick((value) => value + 1), 1000);
    const onVisibility = () => {
      if (document.hidden) hiddenAtRef.current = Date.now();
      else if (hiddenAtRef.current && Date.now() - hiddenAtRef.current > 60_000) {
        startedAtRef.current += Date.now() - hiddenAtRef.current;
        hiddenAtRef.current = null;
      }
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      window.clearInterval(interval);
      document.removeEventListener("visibilitychange", onVisibility);
      const session = sessionRef.current;
      if (!session) return;
      const endedAt = new Date();
      const durationSeconds = Math.max(0, Math.floor((Date.now() - startedAtRef.current) / 1000));
      onComplete({ ...session, endedAt: endedAt.toISOString(), durationSeconds, wordCount });
      sessionRef.current = null;
    };
  }, [mode, unitId, wordCount, onComplete]);

  if (!mode || !sessionRef.current) return null;
  const seconds = Math.floor((Date.now() - startedAtRef.current) / 1000);
  const minutes = Math.floor(seconds / 60);
  return <div className="fixed bottom-20 right-4 z-30 rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs text-slate-500 shadow-soft md:bottom-4">本次 {minutes}分{seconds % 60}秒</div>;
}
