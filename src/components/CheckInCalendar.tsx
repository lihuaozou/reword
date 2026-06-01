import type { UserStats } from "../types";
import { getMonthCheckInDays } from "../utils/checkin";

export function CheckInCalendar({ stats }: { stats: UserStats }) {
  const days = getMonthCheckInDays(stats);
  return (
    <div className="grid grid-cols-7 gap-2">
      {days.map((day) => (
        <div
          key={day.date}
          className={`grid h-10 place-items-center rounded-lg border text-sm ${
            day.checked ? "border-spruce/30 bg-spruce/10 font-semibold text-spruce" : day.today ? "border-harbor bg-white text-harbor" : "border-slate-200 bg-[#f8fbff] text-slate-500"
          }`}
        >
          {day.day}
        </div>
      ))}
    </div>
  );
}
