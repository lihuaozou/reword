import { X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import type { Definition } from "../../types";
import { getCoreMeaning } from "../../utils/imagePrompt";

type MemoryTipCardProps = {
  word: string;
  memoryTip?: string;
  definitions: Definition[];
};

function getMemoryTip(word: string, memoryTip: string | undefined, definitions: Definition[]) {
  const tip = memoryTip?.trim();
  if (tip) return tip;
  return `${word}: 记住它的核心意思是「${getCoreMeaning(word, definitions)}」。`;
}

export function MemoryTipCard({ word, memoryTip, definitions }: MemoryTipCardProps) {
  const [fullOpen, setFullOpen] = useState(false);
  const [isClamped, setIsClamped] = useState(false);
  const contentRef = useRef<HTMLParagraphElement>(null);
  const tip = useMemo(() => getMemoryTip(word, memoryTip, definitions), [word, memoryTip, definitions]);

  useEffect(() => {
    setFullOpen(false);
  }, [tip]);

  useEffect(() => {
    const content = contentRef.current;
    if (!content) return;

    const updateClampState = () => {
      setIsClamped(content.scrollHeight > content.clientHeight + 1);
    };

    updateClampState();
    if (typeof ResizeObserver === "undefined") {
      window.addEventListener("resize", updateClampState);
      return () => window.removeEventListener("resize", updateClampState);
    }

    const observer = new ResizeObserver(updateClampState);
    observer.observe(content);
    return () => observer.disconnect();
  }, [tip]);

  return (
    <>
      <section className="min-h-[64px] max-h-[88px] overflow-hidden rounded-2xl border border-white/70 bg-gradient-to-r from-indigo-50 via-white to-emerald-50 px-4 py-2.5 shadow-sm md:max-h-none md:py-3">
        <div className="mb-1 flex items-center justify-between gap-3">
          <div className="text-xs font-semibold tracking-wide text-indigo-500">一句话记忆</div>
          {isClamped ? (
            <button type="button" onClick={() => setFullOpen(true)} className="shrink-0 text-xs font-semibold text-harbor underline-offset-2 hover:underline">
              查看完整
            </button>
          ) : null}
        </div>
        <p ref={contentRef} className="line-clamp-2 break-words text-[13px] font-medium leading-snug text-slate-700 sm:text-sm">
          {tip}
        </p>
      </section>

      {fullOpen ? (
        <div className="fixed inset-0 z-[80] flex items-end bg-ink/30 px-3 pb-[calc(var(--mobile-bottom-nav-height)+var(--mobile-action-bar-height)+env(safe-area-inset-bottom)+12px)] backdrop-blur-sm md:items-center md:justify-center md:p-6" role="dialog" aria-modal="true">
          <div className="w-full rounded-3xl border border-white/80 bg-paper p-4 shadow-lifted md:max-w-lg">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-xs font-semibold tracking-wide text-indigo-500">一句话记忆</div>
                <h2 className="word-title mt-1 truncate whitespace-nowrap break-normal word-break-normal text-xl font-semibold text-ink">{word}</h2>
              </div>
              <button type="button" onClick={() => setFullOpen(false)} className="icon-btn h-9 w-9 rounded-2xl" aria-label="关闭一句话记忆">
                <X size={16} aria-hidden="true" />
              </button>
            </div>
            <p className="mt-4 break-words rounded-2xl border border-ink/10 bg-white/85 p-3 text-sm font-medium leading-6 text-slate-700">{tip}</p>
          </div>
        </div>
      ) : null}
    </>
  );
}
