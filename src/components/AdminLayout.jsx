import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Menu, MonitorSmartphone, ShieldCheck } from 'lucide-react'
import Sidebar from './Sidebar'

export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-ink-950">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="lg:pl-64">
        <header className="sticky top-0 z-30 flex items-center justify-between border-b border-gray-800 bg-ink-950/90 px-4 py-3 backdrop-blur lg:hidden">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setSidebarOpen(true)}
              className="rounded-lg border border-gray-800 p-2 text-gray-400 hover:text-gray-100 focus-ring"
              aria-label="Abrir menú"
            >
              <Menu size={18} />
            </button>
            <span className="flex items-center gap-2 text-sm font-semibold text-white">
              <ShieldCheck size={16} className="text-emerald-400" />
              Visitoria
            </span>
          </div>
          <Link
            to="/garita"
            className="flex items-center gap-1.5 rounded-lg border border-gray-800 bg-ink-800 px-2.5 py-1.5 text-xs font-medium text-gray-300 focus-ring"
          >
            <MonitorSmartphone size={14} />
            Garita
          </Link>
        </header>

        <main className="mx-auto w-full max-w-[1440px] px-4 py-6 sm:px-6 lg:px-10 lg:py-9">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
