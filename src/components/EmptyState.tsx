import { Inbox } from "lucide-react";

type EmptyStateProps = {
  title: string;
  body?: string;
  actionLabel?: string;
  onAction?: () => void;
};

export function EmptyState({ title, body, actionLabel, onAction }: EmptyStateProps) {
  return (
    <div className="rounded-lg border border-dashed border-slate-300 bg-white p-8 text-center shadow-soft">
      <div className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-lg border border-harbor/15 bg-[#f8fbff] text-harbor">
        <Inbox size={22} aria-hidden="true" />
      </div>
      <h3 className="font-semibold text-ink">{title}</h3>
      {body ? <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">{body}</p> : null}
      {actionLabel && onAction ? (
        <button type="button" onClick={onAction} className="btn-primary mt-5">
          {actionLabel}
        </button>
      ) : null}
    </div>
  );
}
