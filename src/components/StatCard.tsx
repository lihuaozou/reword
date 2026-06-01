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
  slate: "bg-slate-200 text-slate-700",
};

export function StatCard({ label, value, tone = "current", icon: Icon }: StatCardProps) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-3 shadow-soft">
      <div className={`mb-3 grid h-8 w-8 place-items-center rounded-md ${toneClasses[tone]}`}>
        <Icon size={18} aria-hidden="true" />
      </div>
      <div className="text-2xl font-semibold leading-none text-ink">{value}</div>
      <div className="mt-1 text-sm text-slate-500">{label}</div>
    </div>
  );
}
