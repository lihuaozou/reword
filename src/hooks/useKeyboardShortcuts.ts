import { useEffect } from "react";
import { useResponsive } from "./useResponsive";

type ShortcutHandlers = {
  onSpace?: () => void;
  onArrowRight?: () => void;
  onArrowLeft?: () => void;
  onOne?: () => void;
  onTwo?: () => void;
  onThree?: () => void;
  onEnter?: () => void;
  onEscape?: () => void;
};

function isTypingTarget(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) return false;
  const tag = target.tagName.toLowerCase();
  return tag === "input" || tag === "textarea" || tag === "select" || target.isContentEditable;
}

export function useKeyboardShortcuts(handlers: ShortcutHandlers, enabled = true) {
  const { isDesktop } = useResponsive();

  useEffect(() => {
    if (!enabled || !isDesktop) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (isTypingTarget(event.target)) return;
      const run = (handler?: () => void, prevent = true) => {
        if (!handler) return;
        if (prevent) event.preventDefault();
        handler();
      };

      if (event.code === "Space") run(handlers.onSpace);
      else if (event.key === "ArrowRight") run(handlers.onArrowRight);
      else if (event.key === "ArrowLeft") run(handlers.onArrowLeft);
      else if (event.key === "1") run(handlers.onOne);
      else if (event.key === "2") run(handlers.onTwo);
      else if (event.key === "3") run(handlers.onThree);
      else if (event.key === "Enter") run(handlers.onEnter);
      else if (event.key === "Escape") run(handlers.onEscape, false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [enabled, handlers, isDesktop]);
}
