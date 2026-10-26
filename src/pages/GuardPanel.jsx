import { useEffect, useState } from 'react'
import {
  ArrowLeft,
  CheckCircle2,
  CircleAlert,
  Delete,
  ShieldCheck,
  UserCheck,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { accesosValidos } from '../data/mockData'

const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9']

export default function GuardPanel() {
  const [code, setCode] = useState('')
  const [attempts, setAttempts] = useState(0)
  const [result, setResult] = useState(null)
  const [authorized, setAuthorized] = useState(false)
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 30_000)
    return () => clearInterval(interval)
  }, [])

  const clock = now.toLocaleTimeString('es', {
    hour: '2-digit',
    minute: '2-digit',
  })

  const reset = () => {
    setCode('')
    setAttempts(0)
    setResult(null)
    setAuthorized(false)
  }

  const handleDigit = (digit) => {
    if (result?.type === 'success') return
    if (result?.type === 'error') setResult(null)
    setCode((current) => (current.length < 4 ? current + digit : current))
  }

  const handleDelete = () => {
    if (result?.type === 'success') return
    if (result?.type === 'error') setResult(null)
    setCode((current) => current.slice(0, -1))
  }

  const handleSubmit = () => {
    if (result?.type === 'success') return

    if (code.length !== 4) {
      setResult({
        type: 'error',
        message: 'Ingresa los 4 dígitos del código.',
      })
      return
    }

    const acceso = accesosValidos.find((item) => item.codigo === code)

    if (acceso) {
      setResult({ type: 'success', acceso })
      return
    }

    const nextAttempt = Math.min(attempts + 1, 5)
    setAttempts(nextAttempt)
    setCode('')
    setResult({
      type: 'error',
      id: Date.now(),
      message: `Código inválido. Intento ${nextAttempt}/5`,
    })
  }

  const success = result?.type === 'success'

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-ink-950">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.08),transparent_55%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.15] [background-image:linear-gradient(to_right,#2a2a2a_1px,transparent_1px),linear-gradient(to_bottom,#2a2a2a_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
        aria-hidden="true"
      />

      <header className="relative z-10 flex items-center justify-between gap-3 px-4 py-4 sm:px-8">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-emerald-500/20 bg-emerald-500/10 text-emerald-400">
            <ShieldCheck size={18} strokeWidth={2.2} />
          </span>
          <div className="leading-tight">
            <p className="text-sm font-semibold tracking-tight text-white">
              Visitoria
            </p>
            <p className="text-[11px] text-gray-500">Panel de garita</p>
          </div>
        </div>

        <span className="hidden items-center gap-1.5 rounded-full border border-gray-800 bg-ink-900/80 px-2.5 py-1 text-[11px] text-gray-400 sm:inline-flex">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.65)]" />
          Garita Norte · En línea
        </span>

        <Link
          to="/admin"
          className="inline-flex items-center gap-1.5 rounded-lg border border-gray-800 bg-ink-850 px-2.5 py-1.5 text-xs font-medium text-gray-400 transition-colors hover:text-gray-100 focus-ring"
        >
          <ArrowLeft size={13} />
          Volver al panel
        </Link>
      </header>

      <main className="relative z-10 flex flex-1 items-center justify-center px-4 pb-8 pt-2 sm:pb-12">
        <div className="w-full max-w-[430px]">
          <div className="rounded-3xl border border-gray-800 bg-ink-800/90 p-4 shadow-panel backdrop-blur sm:p-6">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-white">
                  Control de acceso
                </p>
                <p className="text-[11px] text-gray-500">
                  Ingresa el código del visitante
                </p>
              </div>
              <span className="rounded-lg border border-gray-800 bg-ink-850 px-2 py-1 font-mono text-xs tabular-nums text-gray-400">
                {clock}
              </span>
            </div>

            <div
              className={`mt-5 rounded-xl border p-3.5 transition-colors ${
                success
                  ? 'border-emerald-500/30 bg-emerald-500/[0.05]'
                  : 'border-gray-800 bg-ink-950'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="label">Código de acceso</span>
                <span className="text-[11px] tabular-nums text-gray-600">
                  {code.length}/4
                </span>
              </div>
              <div className="mt-2.5 flex justify-center gap-2.5">
                {[0, 1, 2, 3].map((index) => {
                  const digit = code[index]

                  return (
                    <div
                      key={index}
                      className={`flex h-14 w-12 items-center justify-center rounded-lg border font-mono text-2xl font-semibold tabular-nums transition-colors ${
                        digit
                          ? success
                            ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300'
                            : 'border-gray-700 bg-ink-850 text-white'
                          : 'border-gray-800 bg-white/[0.01] text-gray-700'
                      }`}
                    >
                      {digit ?? '·'}
                    </div>
                  )
                })}
              </div>
            </div>

            {result?.type === 'error' && (
              <div
                key={result.id}
                className="mt-3 flex animate-shake items-center gap-2 rounded-lg border border-red-500/20 bg-red-500/10 px-3 py-2.5 text-xs font-medium text-red-300"
                role="alert"
              >
                <CircleAlert size={14} className="shrink-0" />
                {result.message}
              </div>
            )}

            {success ? (
              <div className="mt-4 animate-fade-up">
                <div className="rounded-xl border border-emerald-500/25 bg-emerald-500/[0.06] p-4">
                  <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
                    <CheckCircle2 size={15} />
                    Código válido
                  </div>

                  <div className="mt-3.5 flex items-center gap-3">
                    <img
                      src={result.acceso.fotoUrl}
                      alt={`Foto de ${result.acceso.titular}`}
                      className="h-14 w-14 rounded-xl bg-ink-700 object-cover ring-1 ring-emerald-500/20"
                    />
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold text-white">
                        {result.acceso.titular}
                      </p>
                      <p className="truncate text-xs text-gray-400">
                        {result.acceso.destino}
                      </p>
                      <p className="mt-0.5 truncate text-[11px] text-gray-500">
                        {result.acceso.espacio}
                      </p>
                    </div>
                  </div>

                  {authorized ? (
                    <div className="mt-4 flex items-center gap-2 rounded-lg border border-emerald-500/20 bg-emerald-500/10 px-3 py-2.5 text-xs font-medium text-emerald-300">
                      <UserCheck size={15} />
                      Ingreso autorizado. Buen turno.
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setAuthorized(true)}
                      className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-500 py-3 text-sm font-semibold text-emerald-950 transition-colors hover:bg-emerald-400 focus-ring"
                    >
                      <UserCheck size={16} />
                      Autorizar ingreso
                    </button>
                  )}

                  <button
                    type="button"
                    onClick={reset}
                    className="mt-2 w-full rounded-lg py-2 text-xs font-medium text-gray-500 transition-colors hover:text-gray-300 focus-ring"
                  >
                    Nuevo acceso
                  </button>
                </div>
              </div>
            ) : (
              <div className="mt-4 grid grid-cols-3 gap-2.5">
                {keys.map((key) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => handleDigit(key)}
                    className="h-16 rounded-xl border border-gray-800 bg-ink-750 text-xl font-semibold text-gray-100 shadow-key transition-all hover:bg-ink-700 active:scale-[0.97] focus-ring"
                  >
                    {key}
                  </button>
                ))}

                <button
                  type="button"
                  onClick={handleDelete}
                  className="flex h-16 items-center justify-center gap-1.5 rounded-xl border border-gray-800 bg-ink-850 text-xs font-medium text-gray-400 transition-all hover:bg-ink-750 hover:text-gray-200 active:scale-[0.97] focus-ring"
                  aria-label="Borrar último dígito"
                >
                  <Delete size={16} />
                  Borrar
                </button>

                <button
                  type="button"
                  onClick={() => handleDigit('0')}
                  className="h-16 rounded-xl border border-gray-800 bg-ink-750 text-xl font-semibold text-gray-100 shadow-key transition-all hover:bg-ink-700 active:scale-[0.97] focus-ring"
                >
                  0
                </button>

                <button
                  type="button"
                  onClick={handleSubmit}
                  className="h-16 rounded-xl bg-emerald-500 text-sm font-bold tracking-wide text-emerald-950 transition-all hover:bg-emerald-400 active:scale-[0.97] focus-ring"
                >
                  OK
                </button>
              </div>
            )}

            <div className="mt-4 flex items-center justify-between text-[10px] text-gray-600">
              <span>Demo · Código de prueba: 5477</span>
              <span className="uppercase tracking-[0.14em]">Visitoria</span>
            </div>
          </div>

          <p className="mt-4 text-center text-[11px] text-gray-600">
            Teclado de demostración. Los datos se reinician al recargar.
          </p>
        </div>
      </main>
    </div>
  )
}
