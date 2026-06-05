import { useEffect, useState } from "react";
import { getEffectAssetForState, type BattleVisualState } from "../data/monsters";

type BattleEffectLayerProps = {
  state: BattleVisualState;
  active?: boolean;
  className?: string;
};

export function BattleEffectLayer({ state, active = true, className = "" }: BattleEffectLayerProps) {
  const effect = getEffectAssetForState(state);
  const [showImage, setShowImage] = useState(Boolean(effect));

  useEffect(() => {
    setShowImage(Boolean(effect));
  }, [effect?.asset]);

  if (!active || state === "idle") return null;

  return (
    <div className={`battle-effect-layer battle-effect-${state} ${className}`} aria-hidden="true">
      {effect && showImage ? <img src={effect.asset} alt="" className="h-full w-full object-contain" onError={() => setShowImage(false)} /> : null}
      {!showImage ? (
        <div className="battle-effect-fallback">
          <span />
          <span />
          <span />
        </div>
      ) : null}
    </div>
  );
}
