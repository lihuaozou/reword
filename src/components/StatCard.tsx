import type { LucideIcon } from "lucide-react";

type StatCardProps = {
  label: string;
  value: string | number;
  tone?: "current" | "spruce" | "copper" | "slate";
  icon: LucideIcon;
};

const toneClasses = {
  current: "bg-harbor/10 text-harbor",
  spruce: "bg-spruce/10 text-spruce",
  copper: "bg-copper/10 text-copper",
  slate: "bg-ink/10 text-ink",
};

export function StatCard({ label, value, tone = "current", icon: Icon }: StatCardProps) {
  return (
    <div className="glass-panel p-3">
      <div className={`mb-3 grid h-8 w-8 place-items-center rounded-lg ${toneClasses[tone]}`}>
        <Icon size={18} aria-hidden="true" />
      </div>
      <div className="text-2xl font-semibold leading-none text-ink">{value}</div>
      <div className="mt-1 text-sm font-medium text-slate-500">{label}</div>
    </div>
  );
}
