import { useEffect } from "react";
import type { SoundSettings } from "../types";
import { playClickSound, playSoundEffect, type SoundEffectType } from "../utils/sound";

const soundTypes = new Set(["click", "success", "error", "reward", "toggle"]);

export function useSoundEffects(settings: SoundSettings) {
  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target instanceof Element ? event.target : null;
      const control = target?.closest("button, a") as HTMLButtonElement | HTMLAnchorElement | null;
      if (!control || control.getAttribute("aria-disabled") === "true") return;
      if ("disabled" in control && control.disabled) return;

      const sound = control.dataset.sound;
      if (sound === "none") return;
      if (sound && soundTypes.has(sound)) {
        playSoundEffect(sound as SoundEffectType, settings);
        return;
      }
      playClickSound(settings);
    };

    document.addEventListener("pointerdown", handlePointerDown, { capture: true });
    return () => document.removeEventListener("pointerdown", handlePointerDown, { capture: true });
  }, [settings.enabled, settings.volume]);
}
