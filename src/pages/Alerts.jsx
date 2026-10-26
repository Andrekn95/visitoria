import { BellRing, ChevronRight, ShieldAlert } from 'lucide-react'
import { alertas } from '../data/mockData'

const severityStyles = {
  alta: {
    badge: 'bg-red-500/10 text-red-400 ring-red-500/20',
    icon: 'bg-red-500/10 text-red-400',
    label: 'Alta',
  },
  media: {
    badge: 'bg-amber-500/10 text-amber-400 ring-amber-500/20',
    icon: 'bg-amber-500/10 text-amber-400',
    label: 'Media',
  },
}

export default function Alerts() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-semibold tracking-tight text-white">
          Alertas
        </h1>
        <p className="mt-1 text-sm text-gray-500">
          Eventos que requieren tu atención en los espacios de trabajo.
        </p>
      </header>

      <div className="panel flex items-center gap-3 p-4">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-amber-500/20 bg-amber-500/10 text-amber-400">
          <BellRing size={17} />
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium text-gray-100">
            {alertas.length} alertas sin resolver
          </p>
          <p className="text-xs text-gray-500">
            Revísalas y marca su estado cuando hayan sido atendidas.
          </p>
        </div>
      </div>

      <div className="space-y-3">
        {alertas.map((alerta) => {
          const styles = severityStyles[alerta.severidad] ?? severityStyles.media

          return (
            <article
              key={alerta.id}
              className="panel flex flex-col gap-3 p-4 transition-colors hover:border-gray-700 sm:flex-row sm:items-center"
            >
              <span
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${styles.icon}`}
              >
                <ShieldAlert size={18} />
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="text-sm font-medium text-gray-100">
                    {alerta.titulo}
                  </h2>
                  <span
                    className={`rounded-md px-1.5 py-0.5 text-[10px] font-medium ring-1 ring-inset ${styles.badge}`}
                  >
                    {styles.label}
                  </span>
                </div>
                <p className="mt-1 text-xs leading-relaxed text-gray-500">
                  {alerta.detalle}
                </p>
              </div>
              <div className="flex shrink-0 items-center gap-3 text-[11px] text-gray-500">
                <span>{alerta.hora}</span>
                <ChevronRight size={15} className="text-gray-600" />
              </div>
            </article>
          )
        })}
      </div>
    </div>
  )
}
