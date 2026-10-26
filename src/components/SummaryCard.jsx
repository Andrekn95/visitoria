export default function SummaryCard({
  icon: Icon,
  label,
  value,
  helper,
  trend,
  iconClassName = 'text-gray-400',
}) {
  return (
    <div className="panel group relative overflow-hidden p-5">
      <div
        className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-white/[0.02] blur-2xl transition-opacity group-hover:opacity-80"
        aria-hidden="true"
      />
      <div className="flex items-start justify-between gap-4">
        <p className="text-[13px] font-medium text-gray-400">{label}</p>
        <span
          className={`flex h-8 w-8 items-center justify-center rounded-lg border border-gray-800 bg-white/[0.02] ${iconClassName}`}
        >
          <Icon size={16} />
        </span>
      </div>
      <p className="mt-3 text-[28px] font-semibold leading-none tracking-tight text-white tabular-nums">
        {value}
      </p>
      <div className="mt-3 flex items-center gap-2 text-[11px]">
        {trend && (
          <span className="rounded-md bg-emerald-500/10 px-1.5 py-0.5 font-medium text-emerald-400">
            {trend}
          </span>
        )}
        <span className="truncate text-gray-500">{helper}</span>
      </div>
    </div>
  )
}
