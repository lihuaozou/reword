import { BadgeCheck, CheckCircle, Eye, Image as ImageIcon, Lightbulb, Route, Scale, Shield, Sparkles, Target, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import type { Definition } from "../../types";
import { generateWordImagePrompt, getCoreMeaning } from "../../utils/imagePrompt";

type IconType = "target" | "law" | "eye" | "route" | "shield" | "idea" | "badge" | "landscape" | "check" | "abstract";

type WordVisualMeta = {
  keyword: string;
  iconType: IconType;
  gradient: string;
  motif: string;
};

export type WordVisualCardProps = {
  word: string;
  phonetic?: string;
  definitions: Definition[];
  image?: string;
  compact?: boolean;
  imagePrompt?: string;
  visualPrompt?: string;
};

const iconMap = {
  target: Target,
  law: Scale,
  eye: Eye,
  route: Route,
  shield: Shield,
  idea: Lightbulb,
  badge: BadgeCheck,
  landscape: ImageIcon,
  check: CheckCircle,
  abstract: Sparkles,
};

const visualThemes: Record<IconType, Pick<WordVisualMeta, "gradient" | "motif">> = {
  target: {
    gradient: "linear-gradient(135deg, #dff8f6 0%, #e8e1ff 58%, #fff1df 100%)",
    motif: "rings",
  },
  law: {
    gradient: "linear-gradient(135deg, #eef2ff 0%, #e0f2fe 55%, #f8fafc 100%)",
    motif: "columns",
  },
  eye: {
    gradient: "linear-gradient(135deg, #e0f7ff 0%, #f3e8ff 58%, #eefcf6 100%)",
    motif: "orbit",
  },
  route: {
    gradient: "linear-gradient(135deg, #ecfeff 0%, #dcfce7 52%, #fef3c7 100%)",
    motif: "path",
  },
  shield: {
    gradient: "linear-gradient(135deg, #e7f8ef 0%, #dbeafe 55%, #f8fafc 100%)",
    motif: "arc",
  },
  idea: {
    gradient: "linear-gradient(135deg, #fff7d6 0%, #e0f2fe 52%, #f5e8ff 100%)",
    motif: "glow",
  },
  badge: {
    gradient: "linear-gradient(135deg, #fff1df 0%, #e7f8ef 52%, #e8e1ff 100%)",
    motif: "medal",
  },
  landscape: {
    gradient: "linear-gradient(135deg, #dff8f6 0%, #e0f2fe 55%, #f6f0df 100%)",
    motif: "horizon",
  },
  check: {
    gradient: "linear-gradient(135deg, #e7f8ef 0%, #e0f2fe 56%, #fff1df 100%)",
    motif: "ticks",
  },
  abstract: {
    gradient: "linear-gradient(135deg, #e0f7ff 0%, #ebe5ff 54%, #fff2dc 100%)",
    motif: "mesh",
  },
};

const wordMetaFallbacks: Record<string, Partial<WordVisualMeta>> = {
  objective: { keyword: "目标 / 客观", iconType: "target" },
  radiate: { keyword: "散发 / 辐射", iconType: "abstract" },
  radiant: { keyword: "光芒 / 容光焕发", iconType: "abstract" },
  obligation: { keyword: "义务 / 责任", iconType: "badge" },
};

function includesAny(text: string, values: string[]) {
  return values.some((value) => text.includes(value));
}

export function getWordVisualMeta(word: string, definitions: Definition[]): WordVisualMeta {
  const meaningText = definitions.map((definition) => definition.meaning).join(" ");
  const fallback = wordMetaFallbacks[word.toLowerCase()];
  let iconType: IconType = fallback?.iconType || "abstract";

  if (includesAny(meaningText, ["目标", "目的", "客观"])) iconType = "target";
  else if (includesAny(meaningText, ["法律", "司法", "法官"])) iconType = "law";
  else if (includesAny(meaningText, ["观察", "观测"])) iconType = "eye";
  else if (includesAny(meaningText, ["旅行", "旅程"])) iconType = "route";
  else if (includesAny(meaningText, ["保护", "安全"])) iconType = "shield";
  else if (includesAny(meaningText, ["理论", "思想"])) iconType = "idea";
  else if (includesAny(meaningText, ["质量", "资格"])) iconType = "badge";
  else if (includesAny(meaningText, ["风景", "场景"])) iconType = "landscape";
  else if (includesAny(meaningText, ["证明", "提供"])) iconType = "check";

  return {
    keyword: fallback?.keyword || getCoreMeaning(word, definitions),
    iconType,
    ...visualThemes[iconType],
  };
}

function PromptSheet({ word, keyword, prompt, onClose }: { word: string; keyword: string; prompt: string; onClose: () => void }) {
  const [copied, setCopied] = useState(false);

  const copyPrompt = async () => {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(prompt);
    } else {
      const textarea = document.createElement("textarea");
      textarea.value = prompt;
      textarea.style.position = "fixed";
      textarea.style.left = "-9999px";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      textarea.remove();
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="fixed inset-0 z-[70] flex items-end bg-ink/30 px-3 pb-[max(env(safe-area-inset-bottom),12px)] backdrop-blur-sm" role="dialog" aria-modal="true">
      <div className="w-full rounded-3xl border border-white/80 bg-paper p-4 shadow-lifted">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="text-xs font-semibold uppercase text-harbor">image-2 prompt</div>
            <h2 className="word-title mt-1 truncate whitespace-nowrap break-normal word-break-normal text-xl font-semibold text-ink">{word}</h2>
            <p className="mt-1 text-sm font-medium text-slate-500">{keyword}</p>
          </div>
          <button type="button" onClick={onClose} className="icon-btn h-9 w-9 rounded-2xl" aria-label="关闭提示词">
            <X size={16} aria-hidden="true" />
          </button>
        </div>
        <div className="mt-4 max-h-56 overflow-y-auto rounded-2xl border border-ink/10 bg-white/80 p-3 text-xs leading-5 text-slate-700">{prompt}</div>
        <button type="button" onClick={copyPrompt} className="mt-3 w-full rounded-2xl bg-ink px-4 py-3 text-sm font-semibold text-white">
          {copied ? "图片提示词已复制" : "复制提示词"}
        </button>
      </div>
    </div>
  );
}

function MotifDecor({ motif }: { motif: string }) {
  return (
    <>
      <div className="pointer-events-none absolute -left-5 -top-6 h-24 w-24 rounded-full bg-white/40 blur-sm" />
      <div className="pointer-events-none absolute -bottom-8 right-8 h-28 w-28 rounded-full bg-white/30" />
      <div className="pointer-events-none absolute right-3 top-3 h-12 w-12 rounded-full border border-white/45" />
      <div className="pointer-events-none absolute inset-x-6 top-1/2 h-px bg-white/50" />
      <div className="pointer-events-none absolute inset-y-5 right-16 w-px rotate-12 bg-white/45" />
      {motif === "rings" ? <div className="pointer-events-none absolute right-7 top-7 h-12 w-12 rounded-full border-2 border-white/55 shadow-[inset_0_0_0_10px_rgba(255,255,255,0.18)]" /> : null}
      {motif === "columns" ? <div className="pointer-events-none absolute right-8 top-5 h-16 w-16 border-x-4 border-white/40" /> : null}
      {motif === "orbit" ? <div className="pointer-events-none absolute right-6 top-8 h-10 w-20 rotate-[-18deg] rounded-[999px] border border-white/55" /> : null}
      {motif === "path" ? <div className="pointer-events-none absolute bottom-5 right-6 h-10 w-24 rounded-full border-b-2 border-dashed border-white/60" /> : null}
      {motif === "arc" ? <div className="pointer-events-none absolute bottom-3 right-8 h-20 w-20 rounded-t-full border-t-4 border-white/45" /> : null}
      {motif === "glow" ? <div className="pointer-events-none absolute right-8 top-7 h-16 w-16 rounded-full bg-white/35 blur-md" /> : null}
      {motif === "medal" ? <div className="pointer-events-none absolute right-8 top-5 h-16 w-12 rounded-full border-2 border-white/50" /> : null}
      {motif === "horizon" ? <div className="pointer-events-none absolute inset-x-6 bottom-6 h-10 rounded-t-full border-t-2 border-white/55" /> : null}
      {motif === "ticks" ? <div className="pointer-events-none absolute right-8 top-7 h-10 w-16 rotate-[-12deg] border-b-4 border-r-4 border-white/50" /> : null}
    </>
  );
}

export function WordVisualCard({ word, phonetic, definitions, image, compact = false, imagePrompt, visualPrompt }: WordVisualCardProps) {
  const [imageFailed, setImageFailed] = useState(false);
  const [promptOpen, setPromptOpen] = useState(false);
  const meta = useMemo(() => getWordVisualMeta(word, definitions), [word, definitions]);
  const prompt = imagePrompt || visualPrompt || generateWordImagePrompt(word, definitions);
  const hasImage = Boolean(image && !imageFailed);
  const Icon = iconMap[meta.iconType];
  const heightClass = compact ? "h-24" : hasImage ? "h-[112px]" : "h-24";

  useEffect(() => {
    setImageFailed(false);
  }, [image]);

  return (
    <>
      <div
        data-word-visual-card
        data-has-image={hasImage ? "true" : "false"}
        className={`relative overflow-hidden rounded-2xl border border-white/80 shadow-sm ${heightClass}`}
        style={{ background: meta.gradient }}
      >
        {hasImage ? (
          <img src={image} alt="" className="h-full w-full object-contain p-2.5" loading="lazy" onError={() => setImageFailed(true)} />
        ) : (
          <div className="relative flex h-full items-center gap-3 p-3">
            <MotifDecor motif={meta.motif} />
            <div className="relative grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-white/75 bg-white/60 text-harbor shadow-soft backdrop-blur">
              <Icon size={24} aria-hidden="true" />
            </div>
            <div className={`relative min-w-0 flex-1 ${compact ? "" : "pr-16"}`}>
              <div className="line-clamp-1 text-base font-semibold leading-tight text-ink">{meta.keyword}</div>
            </div>

            {!compact ? (
              <button type="button" onClick={() => setPromptOpen(true)} className="absolute bottom-2 right-2 rounded-full border border-white/70 bg-white/70 px-2.5 py-1 text-[11px] font-semibold text-harbor shadow-sm backdrop-blur transition hover:bg-white">
                提示词
              </button>
            ) : null}
          </div>
        )}
      </div>
      {promptOpen ? <PromptSheet word={word} keyword={meta.keyword} prompt={prompt} onClose={() => setPromptOpen(false)} /> : null}
    </>
  );
}
