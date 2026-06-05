# Game Asset Integration

Reword uses a light asset manifest so generated monster and effect art can be dropped into `public/game` without touching app logic.

## Directories

- `public/game/monsters/`
- `public/game/bosses/`
- `public/game/effects/`
- `public/game/rewards/`

## Recommended Files

- `public/game/monsters/monster-forget-01.webp`
- `public/game/monsters/monster-delay-01.webp`
- `public/game/monsters/monster-confuse-01.webp`
- `public/game/monsters/monster-mistake-01.webp`
- `public/game/monsters/elite-forget-01.webp`
- `public/game/monsters/elite-guardian-01.webp`
- `public/game/bosses/boss-unit1.webp`
- `public/game/bosses/boss-delay-king.webp`
- `public/game/effects/effect-hit-sm.webp`
- `public/game/effects/effect-defeat-sm.webp`
- `public/game/effects/effect-boss-hit.webp`
- `public/game/effects/effect-boss-defeat.webp`
- `public/game/effects/effect-success-feedback.webp`
- `public/game/effects/effect-error-feedback.webp`
- `public/game/effects/effect-combo-streak.webp`
- `public/game/rewards/effect-reward-drop.webp`
- `public/game/rewards/effect-checkin-reward.webp`

## Sizes

- Normal monster: `512x512`, transparent background.
- Elite monster: `512x512`, transparent background.
- Boss: `768x768`, transparent background.
- Battle effects: `512x512`, transparent background.
- Reward effects: `512x512`, transparent background.

## Frontend State Model

The battle UI supports these states:

- `idle`
- `hit`
- `damaged`
- `defeated`
- `reward`
- `bossIntro`
- `bossDefeated`

`src/data/gameAssets.ts` maps each state to asset paths. If an image is missing or fails to load, the components render a CSS fallback so the app never shows a broken image.

## Components

- `src/components/MonsterCard.tsx`
- `src/components/BossBattleCard.tsx`
- `src/components/BattleEffectLayer.tsx`
- `src/components/RewardEffectLayer.tsx`

The mobile layout keeps monster art compact and places effects inside the battle frame so overlays do not cover bottom actions.
