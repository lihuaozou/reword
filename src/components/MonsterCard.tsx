import { Brain, Bug, Clock3, Eye, Shield, Sparkles, Swords } from "lucide-react";
import { useEffect, useState } from "react";
import type { ProgressMap, WordEntry } from "../types";
import { getBattleStateLabel, getMonsterVisualForWord, type BattleVisualState, type MonsterVisual } from "../data/monsters";
import { getWordMonsterHp } from "../utils/monster";
import { BattleEffectLayer } from "./BattleEffectLayer";
import { ProgressBar } from "./ProgressBar";
import { RewardEffectLayer } from "./RewardEffectLayer";

type MonsterCardProps = {
  word: WordEntry;
  progressMap: ProgressMap;
  state?: BattleVisualState;
  compact?: boolean;
  className?: string;
};

function getBattleStateFromHp(hp: number): BattleVisualState {
  if (hp <= 0) return "defeated";
  if (hp < 35) return "damaged";
  if (hp < 70) return "hit";
  return "idle";
}

export function MonsterCard({ word, progressMap, state, compact = false, className = "" }: MonsterCardProps) {
  const hp = getWordMonsterHp(word, progressMap);
  const visual = getMonsterVisualForWord(word);
  const battleState = state || getBattleStateFromHp(hp);
  const defeated = battleState === "defeated";
  const imageSrc = defeated ? visual.defeatedPath : visual.path;
  const [showImage, setShowImage] = useState(true);
  const hpPercent = Math.max(0, Math.min(100, hp));

  useEffect(() => {
    setShowImage(true);
  }, [imageSrc]);

  if (compact) {
    return (
      <div className={`relative flex items-center gap-3 overflow-hidden rounded-2xl border border-white/80 bg-white/80 p-3 shadow-sm backdrop-blur ${defeated ? "opacity-75" : ""} ${className}`}>
        <div className="battle-stage h-16 w-16 shrink-0">
          {showImage ? <img src={imageSrc} alt={visual.label} className="monster-asset p-1.5" loading="lazy" onError={() => setShowImage(false)} /> : <MonsterFallback visual={visual} defeated={defeated} />}
          <BattleEffectLayer state={battleState} active={battleState !== "idle"} />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-2">
            <div className="min-w-0">
              <div className="truncate text-xs font-semibold text-slate-500">{visual.label}</div>
              <div className="truncate whitespace-nowrap text-sm font-semibold text-ink">{word.word}</div>
            </div>
            <div className={`shrink-0 rounded-full px-2 py-0.5 text-[11px] font-semibold ${defeated ? "bg-emerald-50 text-emerald-700" : "bg-rose-50 text-rose-600"}`}>
              {defeated ? "已击败" : `HP ${hpPercent}`}
            </div>
          </div>
          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-ink/10">
            <div className={`h-full rounded-full transition-all duration-500 ${defeated ? "bg-emerald-500" : "bg-copper"}`} style={{ width: `${defeated ? 100 : 100 - hpPercent}%` }} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden rounded-3xl border border-white/80 bg-white/80 p-4 shadow-soft backdrop-blur-xl transition ${defeated ? "opacity-80" : ""} ${className}`}>
      {defeated ? (
        <div className="absolute right-3 top-3 z-30 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
          XP +10 · 金币 +5
        </div>
      ) : null}

      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${visual.tier === "elite" ? "bg-indigo-50 text-indigo-700" : "bg-sky-50 text-harbor"}`}>
              {visual.tier === "elite" ? "精英怪" : "普通怪"}
            </span>
            <span className="text-xs font-semibold text-slate-500">{getBattleStateLabel(battleState)}</span>
          </div>
          <h3 className="mt-2 truncate text-lg font-semibold text-ink">{visual.label}</h3>
          <p className="mt-1 line-clamp-1 text-sm text-slate-500">{visual.painPoint}</p>
        </div>
        <div className={`shrink-0 rounded-full px-3 py-1 text-sm font-semibold ${defeated ? "bg-emerald-50 text-emerald-700" : "bg-rose-50 text-rose-600"}`}>
          {defeated ? "已击败" : `HP ${hpPercent}`}
        </div>
      </div>

      <div className="battle-stage my-4 h-36 sm:h-40">
        {showImage ? <img src={imageSrc} alt={visual.label} className={`monster-asset ${defeated ? "monster-defeated" : "monster-idle-float"}`} loading="lazy" onError={() => setShowImage(false)} /> : <MonsterFallback visual={visual} defeated={defeated} large />}
        <BattleEffectLayer state={battleState} active={battleState !== "idle"} />
        <RewardEffectLayer active={defeated} />
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between gap-3 text-xs text-slate-500">
          <span className="truncate whitespace-nowrap font-semibold text-ink">{word.word}</span>
          <span className="truncate">{word.unitName}</span>
        </div>
        <ProgressBar value={defeated ? 100 : 100 - hpPercent} max={100} label={defeated ? "已击败" : "攻击进度"} />
      </div>
    </div>
  );
}

function MonsterFallback({ visual, defeated, large = false }: { visual: MonsterVisual; defeated: boolean; large?: boolean }) {
  const Icon = visual.id.includes("delay")
    ? Clock3
    : visual.id.includes("confuse")
      ? Brain
      : visual.id.includes("mistake")
        ? Bug
        : visual.id.includes("guardian")
          ? Shield
          : visual.tier === "elite"
            ? Eye
            : Swords;

  return (
    <div className={`monster-fallback ${defeated ? "monster-defeated" : "monster-idle-float"}`}>
      <div className={`relative grid place-items-center rounded-[2rem] border border-white/80 bg-white/70 text-harbor shadow-soft backdrop-blur ${large ? "h-28 w-28" : "h-12 w-12"}`}>
        {defeated ? <Sparkles size={large ? 38 : 24} aria-hidden="true" /> : <Icon size={large ? 38 : 24} aria-hidden="true" />}
        <span className="absolute -bottom-3 rounded-full bg-white/85 px-2 py-0.5 text-[10px] font-semibold text-slate-500 shadow-sm">{visual.label}</span>
      </div>
    </div>
  );
}
