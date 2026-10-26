import {
  BarChart3,
  Bell,
  ChevronRight,
  LayoutDashboard,
  MonitorSmartphone,
  Radio,
  ShieldCheck,
  X,
} from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import { espacios } from '../data/mockData'

const navigation = [
  { name: 'Dashboard', to: '/admin', icon: LayoutDashboard, end: true },
  { name: 'Accesos en vivo', to: '/admin/accesos', icon: Radio },
  { name: 'Alertas', to: '/admin/alertas', icon: Bell, badge: '3' },
  { name: 'Reportes', to: '/admin/reportes', icon: BarChart3 },
]

function navClasses({ isActive }) {
  return [
    'group flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm transition-colors focus-ring',
    isActive
      ? 'bg-white/[0.07] font-medium text-white'
      : 'text-gray-400 hover:bg-white/[0.04] hover:text-gray-100',
  ].join(' ')
}

export default function Sidebar({ open, onClose }) {
  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity lg:hidden ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-gray-800 bg-ink-900 transition-transform duration-200 lg:translate-x-0 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-4 pb-5 pt-5">
          <Link
            to="/admin"
            onClick={onClose}
            className="flex items-center gap-2.5 rounded-lg focus-ring"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-emerald-500/20 bg-emerald-500/10 text-emerald-400">
              <ShieldCheck size={18} strokeWidth={2.2} />
            </span>
            <span className="text-[15px] font-semibold tracking-tight text-white">
              Visitoria
            </span>
          </Link>
          <button
            type="button"
            onClick={onClose}
            className="rounded-md p-1.5 text-gray-500 hover:bg-white/[0.06] hover:text-gray-200 focus-ring lg:hidden"
            aria-label="Cerrar menú"
          >
            <X size={18} />
          </button>
        </div>

        <nav className="space-y-0.5 px-2.5">
          {navigation.map(({ name, to, icon: Icon, end, badge }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              onClick={onClose}
              className={navClasses}
            >
              <Icon size={16} className="shrink-0 opacity-80" />
              <span className="flex-1">{name}</span>
              {badge && (
                <span className="rounded-full bg-amber-500/10 px-1.5 py-0.5 text-[10px] font-semibold text-amber-400 ring-1 ring-inset ring-amber-500/20">
                  {badge}
                </span>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="mt-7 px-3">
          <p className="label px-1.5">Mis espacios de trabajo</p>
          <div className="mt-2 space-y-0.5">
            {espacios.map((espacio) => (
              <Link
                key={espacio.id}
                to="/admin"
                onClick={onClose}
                className="group flex items-center gap-2.5 rounded-lg px-2 py-2 text-sm text-gray-400 transition-colors hover:bg-white/[0.04] hover:text-gray-100 focus-ring"
              >
                <span
                  className={`h-1.5 w-1.5 shrink-0 rounded-full ${
                    espacio.estado === 'activo'
                      ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.55)]'
                      : 'bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.45)]'
                  }`}
                />
                <span className="flex-1 truncate">{espacio.nombre}</span>
                <span className="text-[11px] tabular-nums text-gray-600 group-hover:text-gray-500">
                  {espacio.accesosHoy}
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-auto space-y-3 p-3">
          <Link
            to="/garita"
            onClick={onClose}
            className="group flex items-center gap-3 rounded-lg border border-gray-800 bg-ink-850 p-3 transition-colors hover:border-gray-700 hover:bg-ink-800 focus-ring"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
              <MonitorSmartphone size={17} />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-xs font-medium text-gray-200">
                Abrir garita
              </span>
              <span className="block truncate text-[11px] text-gray-500">
                Panel de guardia
              </span>
            </span>
            <ChevronRight
              size={15}
              className="text-gray-600 transition-transform group-hover:translate-x-0.5"
            />
          </Link>

          <div className="flex items-center gap-2.5 rounded-lg px-1.5 py-1">
            <img
              src="https://i.pravatar.cc/150?img=14"
              alt=""
              className="h-8 w-8 rounded-full ring-1 ring-white/10"
            />
            <div className="min-w-0 flex-1">
              <p className="truncate text-xs font-medium text-gray-200">
                Jonathan Läpple
              </p>
              <p className="truncate text-[11px] text-gray-500">
                Administrador
              </p>
            </div>
            <span className="flex h-5 w-5 items-center justify-center rounded-md border border-gray-700 text-[10px] font-semibold text-gray-500">
              JL
            </span>
          </div>
        </div>
      </aside>
    </>
  )
}
