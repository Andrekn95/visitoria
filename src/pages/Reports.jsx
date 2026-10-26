import { CalendarRange, Download, TrendingUp } from 'lucide-react'
import { accesosSemana, espacios } from '../data/mockData'

const maxAccesos = Math.max(...accesosSemana.map((item) => item.accesos))
const totalSemana = accesosSemana.reduce(
  (total, item) => total + item.accesos,
  0,
)
const maxEspacio = Math.max(...espacios.map((espacio) => espacio.accesosHoy))

export default function Reports() {
  return (
    <div className="space-y-6">
      <header className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-white">
            Reportes
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Analiza el flujo de accesos de la última semana.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-lg border border-gray-800 bg-ink-850 px-3 py-2 text-xs text-gray-400">
            <CalendarRange size={13} className="text-gray-500" />
            Últimos 7 días
          </span>
          <button
            type="button"
            className="inline-flex items-center gap-1.5 rounded-lg border border-gray-800 bg-ink-800 px-3 py-2 text-xs font-medium text-gray-300 transition-colors hover:bg-ink-750 focus-ring"
          >
            <Download size={13} />
            Exportar
          </button>
        </div>
      </header>

      <section className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_340px]">
        <div className="panel p-5">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h2 className="text-sm font-semibold text-white">
                Accesos por día
              </h2>
              <p className="mt-0.5 text-xs text-gray-500">
                Total semanal: {totalSemana} accesos
              </p>
            </div>
            <span className="inline-flex items-center gap-1 rounded-md bg-emerald-500/10 px-1.5 py-0.5 text-[11px] font-medium text-emerald-400">
              <TrendingUp size={12} />
              +8,2%
            </span>
          </div>

          <div className="mt-7 flex h-56 items-end gap-3 sm:gap-5">
            {accesosSemana.map((item) => (
              <div
                key={item.dia}
                className="group flex h-full flex-1 flex-col items-center justify-end gap-2"
              >
                <span className="text-[10px] tabular-nums text-gray-500 opacity-0 transition-opacity group-hover:opacity-100">
                  {item.accesos}
                </span>
                <div
                  className="w-full rounded-t-md bg-gradient-to-t from-emerald-500/20 to-emerald-400/70 transition-all duration-300 group-hover:from-emerald-500/30 group-hover:to-emerald-300"
                  style={{ height: `${(item.accesos / maxAccesos) * 100}%` }}
                  title={`${item.dia}: ${item.accesos} accesos`}
                />
                <span className="text-[11px] text-gray-500">{item.dia}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="panel p-5">
          <h2 className="text-sm font-semibold text-white">
            Distribución por espacio
          </h2>
          <p className="mt-0.5 text-xs text-gray-500">Accesos registrados hoy</p>

          <div className="mt-5 space-y-5">
            {espacios.map((espacio) => (
              <div key={espacio.id}>
                <div className="flex items-center justify-between gap-3 text-xs">
                  <span className="truncate text-gray-300">
                    {espacio.nombre}
                  </span>
                  <span className="shrink-0 tabular-nums text-gray-500">
                    {espacio.accesosHoy}
                  </span>
                </div>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/[0.05]">
                  <div
                    className={`h-full rounded-full ${
                      espacio.estado === 'activo'
                        ? 'bg-emerald-400/80'
                        : 'bg-amber-400/80'
                    }`}
                    style={{
                      width: `${(espacio.accesosHoy / maxEspacio) * 100}%`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-lg border border-gray-800 bg-ink-850 p-3">
            <p className="text-[11px] leading-relaxed text-gray-500">
              El Ministerio de Salud Norte concentra el mayor volumen de
              accesos, con 112 entradas hoy.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
