# Reword 单词打怪视觉系统

## A. 小怪类型设计

整体定位：学习 App 的轻量战斗反馈，不做页游式大场景。怪物图只承担“记忆阻力”的隐喻，默认透明背景 PNG/WebP，前端叠在白色卡片或浅蓝背景上。

普通怪：

- Forget Fogling / 遗忘雾团：刚背完就忘。形象是浅蓝雾团和散落空白单词卡。
- Delay Blob / 拖延软团：总想等会再学。形象是柔软时钟团和合上的笔记本。
- Confuse Knot / 混淆结晶：形近词、熟词僻义混乱。形象是交叉卡带和晶体结。
- Typo Wisp / 拼写微光：拼写不稳。形象是轻盈墨迹和抽象字母笔画。
- Context Veil / 语境薄雾：只背中文，放入句子就卡住。形象是包住空白句条的薄雾。
- Pressure Pebble / 压力石块：临考焦虑。形象是圆润石块和无数字倒计时芯片。

精英怪：

- Exception Binder / 例外装订者：规则例外太多。形象是纸签、装订夹、小金属冠。
- Long-Sentence Sentinel / 长句守卫：长难句阅读压力。形象是长条空白句带构成的守卫。

## B. Boss 类型设计

每个单元一个 Boss，Boss 不是单个词，而是该单元的阻力集合。解锁建议：本单元初学 80% 且到期复习为 0。

- Unit1 Memory Tide Core / 记忆潮核：遗忘集中爆发。
- Unit2 Delay Clock Core / 拖延时钟核：计划被拖延打断。
- Unit3 Confusion Prism Core / 混淆棱镜核：相似词义互相干扰。
- Unit4 Exam Pressure Core / 压力核心：临考压力和错题堆积。

后续 Unit5+ 可以循环使用 Boss 视觉体系，也可以按单元主题扩展。

## C. image-2 生成提示词

统一风格后缀：

```text
premium clean lightweight study app game visual, cute but not childish 2D vector character, translucent PNG style, flat colors, soft lighting, refined teal blue ivory saffron accent palette, centered full body, generous transparent background, no text, no logo, no watermark, no weapon gore, no horror
```

小怪存活图：

```text
Forget Fogling, a small soft cloud-like memory monster made of pale blue mist and loose flashcards, playful confident pose, tiny sleepy eyes, floating around one abstract vocabulary card, premium exam vocabulary app mascot, premium clean lightweight study app game visual, cute but not childish 2D vector character, translucent PNG style, flat colors, soft lighting, refined teal blue ivory saffron accent palette, centered full body, generous transparent background, no text, no logo, no watermark, no weapon gore, no horror
```

```text
Delay Blob, a rounded soft time-delay monster holding a tiny melting clock and leaning on a closed notebook, mischievous smug pose, clean college study app feeling, premium clean lightweight study app game visual, cute but not childish 2D vector character, translucent PNG style, flat colors, soft lighting, refined teal blue ivory saffron accent palette, centered full body, generous transparent background, no text, no logo, no watermark, no weapon gore, no horror
```

```text
Confuse Knot, a small crystal knot monster with two crossed vocabulary ribbons, clever teasing expression, abstract letter shapes orbiting but no readable letters, premium minimal study app game art, premium clean lightweight study app game visual, cute but not childish 2D vector character, translucent PNG style, flat colors, soft lighting, refined teal blue ivory saffron accent palette, centered full body, generous transparent background, no text, no logo, no watermark, no weapon gore, no horror
```

小怪被击败图：

```text
Forget Fogling defeated, the pale blue mist gently breaks into tiny golden page fragments and glowing memory dots, dizzy harmless expression, relaxing victory feeling, premium exam vocabulary app mascot, premium clean lightweight study app game visual, cute but not childish 2D vector character, translucent PNG style, flat colors, soft lighting, refined teal blue ivory saffron accent palette, centered full body, generous transparent background, no text, no logo, no watermark, no weapon gore, no horror
```

```text
Delay Blob defeated, the soft blob shrinks into a neat coin and an open study notebook, small clock resets with gentle sparkles, stress-relief victory effect, premium clean lightweight study app game visual, cute but not childish 2D vector character, translucent PNG style, flat colors, soft lighting, refined teal blue ivory saffron accent palette, centered full body, generous transparent background, no text, no logo, no watermark, no weapon gore, no horror
```

```text
Confuse Knot defeated, the crystal knot unties into four clean blank study cards and soft amber particles, calm satisfying clarity, no readable text, premium clean lightweight study app game visual, cute but not childish 2D vector character, translucent PNG style, flat colors, soft lighting, refined teal blue ivory saffron accent palette, centered full body, generous transparent background, no text, no logo, no watermark, no weapon gore, no horror
```

Boss 图：

```text
Memory Tide Core, a refined unit boss for an exam vocabulary app, elegant floating core made of pale blue waves, blank cards and small gold study tokens, confident boss intro pose, 2D vector game art, flat colors, soft lighting, transparent background, no text, no logo, not scary, premium clean UI asset
```

```text
Memory Tide Core defeated, the wave core opens into a calm ring of golden cards, coins and soft teal particles, satisfying unit-clear celebration, 2D vector game art, transparent background, no text, no logo, premium clean UI asset
```

特效图：

```text
Small clean hit impact effect for a premium vocabulary app battle UI, teal blue ring burst, tiny golden sparks, translucent PNG, centered, transparent background, no text, no logo, flat vector colors, soft lighting
```

```text
Small monster defeat effect, elegant teal dust, golden coin dots and paper page fragments, transparent background, no text, no character, premium clean 2D vector game effect
```

```text
Reward drop UI effect, small gold coins, blue study gems and blank cards floating upward, transparent background, no text, no logo, premium clean 2D vector style, soft lighting
```

完整提示词维护在 `src/data/monsters.ts`。

## D. 前端组件建议

已建立组件：

- `src/components/MonsterCard.tsx`：单词小怪卡。支持 `idle / hit / damaged / defeated`，支持 `compact` 手机紧凑条。
- `src/components/BossBattleCard.tsx`：单元 Boss 卡。支持 `bossIntro / bossDefeated`。
- `src/components/BattleEffectLayer.tsx`：命中、受挫、击败、Boss 特效叠加层。
- `src/components/RewardEffectLayer.tsx`：答对、连击、掉落奖励、打卡奖励的轻提示层。

推荐状态：

```ts
type BattleVisualState =
  | "idle"
  | "hit"
  | "damaged"
  | "defeated"
  | "reward"
  | "bossIntro"
  | "bossDefeated";
```

## E. 动画建议

CSS 已提供基础动画：

- idle：轻微漂浮或呼吸，不持续抢注意力。
- hit：短闪 + 微弹，用于“记住 / 答对 / 复习成功”。
- damaged：短横向抖动，用于答错或不记住。
- defeated：轻微缩小 + 淡出感 + 粒子层。
- reward：奖励层从上方轻微上浮后消失。
- bossIntro：Boss 卡进入时轻微上浮。
- bossDefeated：使用大号粒子和金币页片效果。

如果后续安装 Framer Motion，可以只替换容器动画，不需要改数据结构。

## F. 文件命名与尺寸建议

素材目录：

```text
public/game/monsters/
public/game/effects/
public/game/bosses/
public/game/rewards/
```

命名：

```text
monster-forget-01.webp
monster-forget-01-defeated.webp
monster-delay-01.webp
monster-delay-01-defeated.webp
monster-confuse-01.webp
monster-confuse-01-defeated.webp
boss-unit1.webp
boss-unit1-defeated.webp
effect-hit-sm.webp
effect-damaged-sm.webp
effect-defeat-sm.webp
effect-boss-hit.webp
effect-boss-defeat.webp
effect-reward-drop.webp
```

尺寸：

- 普通小怪：512x512，透明背景，主体占画面 70% 左右。
- 精英怪：512x512，透明背景，主体占画面 74% 左右。
- Boss：768x768，透明背景，主体占画面 72% 左右。
- 特效素材：512x512，透明背景，中心爆发，四周留安全边距。
- UI 奖励效果：512x512，透明背景，金币、书页、蓝色学习宝石不要贴边。

移动端交互：

- 测试页小怪使用紧凑条，高度控制在 82px 内。
- 怪物图不要超过当前卡片高度的 25%。
- 特效层 `pointer-events: none`，不遮挡底部操作按钮。
- 单词、音标、选项、底部按钮优先级高于怪物。
- Boss 不放进单词学习主流程，放在单元页或打怪页，避免压缩背词空间。
