import { useEffect, useRef, useState } from "react";
import type { StudySession } from "../types";
import { createSession } from "../utils/statistics";

export function useStudyTimer(mode?: StudySession["mode"], unitId?: string, wordCount = 0, onComplete?: (session: StudySession) => void) {
  const sessionRef = useRef<StudySession | null>(null);
  const startedAtRef = useRef(0);
  const hiddenAtRef = useRef<number | null>(null);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (!mode) return;
    sessionRef.current = createSession(mode, unitId, wordCount);
    startedAtRef.current = Date.now();
    setSeconds(0);

    const interval = window.setInterval(() => setSeconds(Math.floor((Date.now() - startedAtRef.current) / 1000)), 1000);
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
      if (!session || !onComplete) return;
      onComplete({
        ...session,
        endedAt: new Date().toISOString(),
        durationSeconds: Math.max(0, Math.floor((Date.now() - startedAtRef.current) / 1000)),
        wordCount,
      });
      sessionRef.current = null;
    };
  }, [mode, onComplete, unitId, wordCount]);

  return { seconds, minutes: Math.floor(seconds / 60), active: Boolean(mode && sessionRef.current) };
}
