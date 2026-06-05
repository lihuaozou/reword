import { useEffect, useState } from "react";
import { getEffectAssetForState } from "../data/monsters";

type RewardEffectLayerProps = {
  active?: boolean;
  label?: string;
  variant?: "drop" | "checkin";
  className?: string;
};

export function RewardEffectLayer({ active = false, label = "XP + Coins", variant = "drop", className = "" }: RewardEffectLayerProps) {
  const rewardEffect = getEffectAssetForState("reward");
  const effectAsset = variant === "checkin" ? "/game/rewards/effect-checkin-reward.webp" : rewardEffect?.asset;
  const [showImage, setShowImage] = useState(Boolean(effectAsset));

  useEffect(() => {
    setShowImage(Boolean(effectAsset));
  }, [effectAsset]);

  if (!active) return null;

  return (
    <div className={`reward-effect-layer ${className}`} aria-live="polite">
      <div className="relative h-16 w-16 shrink-0">
        {effectAsset && showImage ? <img src={effectAsset} alt="" className="h-full w-full object-contain" onError={() => setShowImage(false)} /> : null}
        {!showImage ? <div className="reward-effect-fallback">+</div> : null}
      </div>
      <span>{label}</span>
    </div>
  );
}
