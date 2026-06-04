import { X } from "lucide-react";
import type { Definition } from "../types";

type DefinitionSheetProps = {
  open: boolean;
  onClose: () => void;
  word: string;
  phonetic?: string;
  definitions: Definition[];
  bottomOffset?: string;
};

export function DefinitionSheet({ open, onClose, word, phonetic, definitions, bottomOffset = "calc(128px + env(safe-area-inset-bottom))" }: DefinitionSheetProps) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-x-3 z-50 rounded-3xl border border-slate-200 bg-white p-3 shadow-lifted md:hidden"
      style={{ bottom: bottomOffset, maxHeight: "45dvh" }}
      role="dialog"
      aria-modal="false"
      aria-label={`${word} 完整释义`}
    >
      <div className="mb-2 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="truncate text-lg font-semibold leading-tight text-ink">{word}</div>
          {phonetic ? <div className="text-xs text-slate-500">{phonetic}</div> : null}
        </div>
        <button type="button" onClick={onClose} className="icon-btn h-8 w-8" aria-label="关闭释义">
          <X size={15} aria-hidden="true" />
        </button>
      </div>

      <div className="max-h-[calc(45dvh-64px)] space-y-2 overflow-y-auto pr-1">
        {definitions.map((definition, index) => (
          <div key={`${word}-sheet-${index}`} className="flex gap-2 rounded-2xl border border-sky-100 bg-[#f8fbff] p-2">
            <span className="shrink-0 rounded-full bg-white px-2 py-1 text-[12px] font-semibold text-harbor">{definition.pos || "释义"}</span>
            <p className="min-w-0 text-[13px] font-semibold leading-snug text-slate-950">{definition.meaning}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
