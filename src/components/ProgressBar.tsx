type ProgressBarProps = {
  value: number;
  max?: number;
  label?: string;
};

export function ProgressBar({ value, max = 100, label }: ProgressBarProps) {
  const percent = max === 0 ? 0 : Math.min(100, Math.round((value / max) * 100));

  return (
    <div className="space-y-2">
      {label ? (
        <div className="flex items-center justify-between text-xs text-slate-500">
          <span>{label}</span>
          <span>{percent}%</span>
        </div>
      ) : null}
      <div className="h-2 overflow-hidden rounded-full bg-slate-200">
        <div className="h-full rounded-full bg-harbor transition-all duration-500" style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}
