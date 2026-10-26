import {
  ArrowUpRight,
  BellRing,
  Building2,
  ChevronRight,
  Clock3,
  DoorOpen,
  KeyRound,
  MonitorSmartphone,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import AccessTable from '../components/AccessTable'
import SummaryCard from '../components/SummaryCard'
import { accesosValidos, alertas, espacios, historial } from '../data/mockData'

const fecha = new Intl.DateTimeFormat('es', {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
}).format(new Date())

export default function AdminDashboard() {
  const accesosHoy = espacios.reduce(
    (total, espacio) => total + espacio.accesosHoy,
    0,
  )
  const espaciosActivos = espacios.filter(
    (espacio) => espacio.estado === 'activo',
  ).length

  return (
    <div className="space-y-6">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-gray-500">
            <span>Panel</span>
            <ChevronRight size={12} className="text-gray-700" />
            <span className="text-gray-400">Dashboard</span>
          </div>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight text-white">
            Hola, Jonathan
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Esto es lo que está pasando en tus espacios hoy.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="hidden items-center gap-1.5 rounded-lg border border-gray-800 bg-ink-850 px-3 py-2 text-xs capitalize text-gray-400 sm:flex">
            <Clock3 size={13} className="text-gray-500" />
            {fecha}
          </span>
          <Link
            to="/garita"
            className="flex items-center gap-1.5 rounded-lg bg-emerald-500 px-3 py-2 text-xs font-semibold text-emerald-950 transition-colors hover:bg-emerald-400 focus-ring"
          >
            <MonitorSmartphone size={14} />
            Abrir garita
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </header>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <SummaryCard
          icon={DoorOpen}
          label="Accesos hoy"
          value={accesosHoy}
          trend="+12,4%"
          helper="vs. ayer"
          iconClassName="text-emerald-400"
        />
        <SummaryCard
          icon={Building2}
          label="Espacios activos"
          value={espaciosActivos}
          helper={`${espacios.length} espacios en total`}
          iconClassName="text-sky-400"
        />
        <SummaryCard
          icon={KeyRound}
          label="Códigos válidos"
          value={accesosValidos.length}
          helper="Listos para ingresar"
          iconClassName="text-violet-400"
        />
        <SummaryCard
          icon={BellRing}
          label="Alertas pendientes"
          value={alertas.length}
          helper="Requieren atención"
          iconClassName="text-amber-400"
        />
      </section>

      <section className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_320px]">
        <div className="panel overflow-hidden">
          <div className="flex items-center justify-between gap-3 border-b border-gray-800 px-5 py-4">
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h2 className="text-sm font-semibold text-white">
                  Últimos accesos
                </h2>
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-1.5 py-0.5 text-[10px] font-medium text-emerald-400 ring-1 ring-inset ring-emerald-500/20">
                  <span className="h-1 w-1 rounded-full bg-emerald-400" />
                  En vivo
                </span>
              </div>
              <p className="mt-0.5 truncate text-xs text-gray-500">
                Registro de entradas de todos tus espacios.
              </p>
            </div>
            <Link
              to="/admin/accesos"
              className="flex shrink-0 items-center gap-1 rounded-md px-2 py-1 text-xs font-medium text-gray-400 transition-colors hover:bg-white/[0.05] hover:text-gray-100 focus-ring"
            >
              Ver todos
              <ChevronRight size={14} />
            </Link>
          </div>

          <AccessTable rows={historial.slice(0, 6)} />

          <div className="flex items-center justify-between gap-3 border-t border-gray-800 px-5 py-3 text-[11px] text-gray-500">
            <span>
              Mostrando 6 de {historial.length} accesos
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Actualizado hace un momento
            </span>
          </div>
        </div>

        <div className="space-y-4">
          <div className="panel p-5">
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-sm font-semibold text-white">
                Códigos activos
              </h2>
              <span className="rounded-md border border-gray-800 bg-white/[0.02] px-1.5 py-0.5 text-[10px] font-medium text-gray-400">
                {accesosValidos.length} pendientes
              </span>
            </div>

            <div className="mt-4 space-y-2.5">
              {accesosValidos.map((acceso) => (
                <div
                  key={acceso.codigo}
                  className="rounded-lg border border-gray-800 bg-ink-850 p-3"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex min-w-0 items-center gap-2.5">
                      <img
                        src={acceso.fotoUrl}
                        alt=""
                        className="h-8 w-8 rounded-full bg-ink-700 object-cover ring-1 ring-white/10"
                        loading="lazy"
                      />
                      <div className="min-w-0">
                        <p className="truncate text-xs font-medium text-gray-100">
                          {acceso.titular}
                        </p>
                        <p className="truncate text-[11px] text-gray-500">
                          {acceso.destino}
                        </p>
                      </div>
                    </div>
                    <span className="rounded-md border border-gray-700 bg-ink-800 px-1.5 py-0.5 font-mono text-xs tracking-[0.12em] text-gray-300">
                      {acceso.codigo}
                    </span>
                  </div>
                  <div className="mt-2 flex items-center gap-1.5 text-[11px] text-gray-500">
                    <Clock3 size={11} />
                    <span className="truncate">
                      Pendiente de ingreso · {acceso.espacio}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Link
            to="/garita"
            className="panel group block p-5 transition-colors hover:border-gray-700 hover:bg-ink-750 focus-ring"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-emerald-500/20 bg-emerald-500/10 text-emerald-400">
              <MonitorSmartphone size={17} />
            </span>
            <p className="mt-3 text-sm font-semibold text-white">
              Panel de garita
            </p>
            <p className="mt-1 text-xs leading-relaxed text-gray-500">
              Valida códigos de acceso desde la tablet de la garita en segundos.
            </p>
            <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-emerald-400">
              Ingresar
              <ArrowUpRight
                size={13}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </span>
          </Link>
        </div>
      </section>
    </div>
  )
}
