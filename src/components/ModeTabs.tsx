type ModeTabsProps<T extends string> = {
  value: T;
  items: { value: T; label: string }[];
  onChange: (value: T) => void;
};

export function ModeTabs<T extends string>({ value, items, onChange }: ModeTabsProps<T>) {
  return (
    <div className="inline-grid grid-flow-col rounded-lg border border-slate-200 bg-[#f8fbff] p-1">
      {items.map((item) => (
        <button
          key={item.value}
          type="button"
          onClick={() => onChange(item.value)}
          className={`rounded-md px-3 py-2 text-sm transition ${
            value === item.value ? "bg-white text-ink shadow-sm" : "text-slate-500 hover:text-ink"
          }`}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
