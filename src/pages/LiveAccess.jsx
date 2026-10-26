import { Activity, DoorOpen, Radio, Users } from 'lucide-react'
import AccessTable from '../components/AccessTable'
import SummaryCard from '../components/SummaryCard'
import { historial } from '../data/mockData'

export default function LiveAccess() {
  return (
    <div className="space-y-6">
      <header className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-semibold tracking-tight text-white">
              Accesos en vivo
            </h1>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-400 ring-1 ring-inset ring-emerald-500/20">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              En vivo
            </span>
          </div>
          <p className="mt-1 text-sm text-gray-500">
            Monitorea las entradas y salidas de todos tus espacios en tiempo real.
          </p>
        </div>
        <span className="inline-flex w-fit items-center gap-1.5 rounded-lg border border-gray-800 bg-ink-850 px-3 py-2 text-xs text-gray-400">
          <Radio size={13} className="text-emerald-400" />
          Garitas conectadas: 3/3
        </span>
      </header>

      <section className="grid gap-4 sm:grid-cols-3">
        <SummaryCard
          icon={DoorOpen}
          label="Accesos registrados"
          value={historial.length}
          helper="Últimos 60 minutos"
          iconClassName="text-emerald-400"
        />
        <SummaryCard
          icon={Users}
          label="Personas en sitio"
          value={12}
          helper="En los 3 espacios"
          iconClassName="text-sky-400"
        />
        <SummaryCard
          icon={Activity}
          label="Promedio por minuto"
          value="2,4"
          helper="Flujo estable"
          iconClassName="text-violet-400"
        />
      </section>

      <div className="panel overflow-hidden">
        <div className="flex items-center justify-between gap-3 border-b border-gray-800 px-5 py-4">
          <div>
            <h2 className="text-sm font-semibold text-white">
              Registro en vivo
            </h2>
            <p className="mt-0.5 text-xs text-gray-500">
              Los accesos aparecen aquí a medida que se validan.
            </p>
          </div>
          <span className="text-[11px] text-gray-500">
            {historial.length} eventos
          </span>
        </div>
        <AccessTable rows={historial} />
      </div>
    </div>
  )
}
