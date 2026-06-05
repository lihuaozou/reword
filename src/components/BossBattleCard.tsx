import { Crown, Lock, Shield, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import type { ProgressMap, UserStats, WordUnit } from "../types";
import { getBossVisualForUnit, type BattleVisualState, type BossVisual } from "../data/monsters";
import { getBossStatus } from "../utils/monster";
import { BattleEffectLayer } from "./BattleEffectLayer";
import { ProgressBar } from "./ProgressBar";
import { RewardEffectLayer } from "./RewardEffectLayer";

type BossBattleCardProps = {
  unit: WordUnit;
  progressMap: ProgressMap;
  stats: UserStats;
  state?: BattleVisualState;
  onChallenge: (unitId: string) => void;
};

export function BossBattleCard({ unit, progressMap, stats, state, onChallenge }: BossBattleCardProps) {
  const boss = getBossStatus(unit, progressMap, stats);
  const visual = getBossVisualForUnit(unit);
  const battleState: BattleVisualState = state || (boss.defeated ? "bossDefeated" : boss.eligible ? "bossIntro" : "idle");

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/80 bg-white/80 p-4 shadow-soft backdrop-blur-xl">
      <div className="grid gap-4 sm:grid-cols-[140px_1fr] sm:items-center">
        <div className="battle-stage h-32">
          <BossFigure visual={visual} intro={battleState === "bossIntro"} defeated={boss.defeated} />
          <BattleEffectLayer state={battleState} active={battleState !== "idle"} />
          <RewardEffectLayer active={boss.defeated} label="Boss Reward" />
        </div>

        <div className="min-w-0">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1 rounded-full bg-ink px-2.5 py-1 text-xs font-semibold text-white">
                  <Crown size={13} aria-hidden="true" />
                  Unit Boss
                </span>
                <span className="text-xs font-semibold text-slate-500">{boss.subtitle}</span>
              </div>
              <h3 className="mt-2 truncate text-lg font-semibold text-ink">{visual.label}</h3>
              <p className="mt-1 line-clamp-1 text-sm text-slate-500">{visual.painPoint}</p>
            </div>
            <button type="button" onClick={() => onChallenge(unit.id)} disabled={!boss.eligible || boss.defeated} data-sound="none" className="btn-secondary h-10 min-h-0 shrink-0 rounded-xl px-3 py-1.5 text-xs disabled:opacity-40">
              {boss.defeated ? "已通关" : boss.eligible ? "挑战" : <Lock size={15} aria-label="未解锁" />}
            </button>
          </div>

          <div className="mt-3 grid gap-3">
            <ProgressBar value={boss.learnedPercent} max={100} label="学习进度" />
            <ProgressBar value={boss.defeated ? 100 : boss.eligible ? 0 : boss.learnedPercent} max={100} label={boss.eligible ? "Boss 血量" : "解锁进度"} />
            <div className="flex flex-wrap gap-2 text-xs font-semibold">
              <span className="rounded-full bg-sky-50 px-2.5 py-1 text-harbor">到期复习 {boss.dueLeft}</span>
              <span className={boss.eligible ? "rounded-full bg-emerald-50 px-2.5 py-1 text-emerald-700" : "rounded-full bg-slate-100 px-2.5 py-1 text-slate-500"}>
                {boss.eligible ? "可挑战" : "学完 80% 并清空到期词解锁"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BossFigure({ visual, intro, defeated }: { visual: BossVisual; intro: boolean; defeated: boolean }) {
  const [showImage, setShowImage] = useState(true);
  const imageSrc = defeated ? visual.defeatedPath : visual.path;

  useEffect(() => {
    setShowImage(true);
  }, [imageSrc]);

  if (!showImage) return <BossFallback visual={visual} defeated={defeated} intro={intro} />;

  return (
    <img
      src={imageSrc}
      alt={visual.label}
      className={`monster-asset ${intro ? "boss-intro-pulse" : "monster-idle-float"} ${defeated ? "monster-defeated" : ""}`}
      loading="lazy"
      onError={() => setShowImage(false)}
    />
  );
}

function BossFallback({ visual, defeated, intro }: { visual: BossVisual; defeated: boolean; intro: boolean }) {
  return (
    <div className={`monster-fallback ${intro ? "boss-intro-pulse" : "monster-idle-float"} ${defeated ? "monster-defeated" : ""}`}>
      <div className="absolute inset-2 rounded-full bg-indigo-300/20 blur-xl" />
      <div className="relative grid h-24 w-24 place-items-center rounded-[2rem] border border-white/80 bg-white/70 text-indigo-700 shadow-soft backdrop-blur">
        {visual.id.includes("delay") ? <Shield size={34} aria-hidden="true" /> : <Crown size={34} aria-hidden="true" />}
        <Sparkles className="absolute right-3 top-3 text-amber-400" size={13} aria-hidden="true" />
      </div>
    </div>
  );
}
