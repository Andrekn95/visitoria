import { CreditCard, KeyRound, QrCode } from 'lucide-react'
import { espacioBadgeStyles } from '../data/mockData'

const methodIcons = {
  Código: KeyRound,
  QR: QrCode,
  Cédula: CreditCard,
}

export default function AccessTable({ rows }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[720px] border-collapse text-left">
        <thead>
          <tr className="border-b border-gray-800">
            {['Titular', 'Espacio', 'Destino', 'Método', 'Hora de entrada'].map(
              (heading) => (
                <th
                  key={heading}
                  className="whitespace-nowrap px-4 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-500 first:pl-5 last:pr-5"
                >
                  {heading}
                </th>
              ),
            )}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => {
            const MethodIcon = methodIcons[row.metodo] ?? KeyRound

            return (
              <tr
                key={row.id}
                className="border-b border-gray-800/60 transition-colors last:border-0 hover:bg-white/[0.02]"
              >
                <td className="px-4 py-3.5 pl-5">
                  <div className="flex items-center gap-3">
                    <img
                      src={row.fotoUrl}
                      alt=""
                      className="h-9 w-9 rounded-full bg-ink-700 object-cover ring-1 ring-white/10"
                      loading="lazy"
                    />
                    <div className="min-w-0">
                      <p className="truncate text-[13px] font-medium text-gray-100">
                        {row.titular}
                      </p>
                      <p className="text-[11px] text-gray-500">
                        Acceso verificado
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3.5">
                  <span
                    className={`inline-flex whitespace-nowrap rounded-md px-2 py-0.5 text-[11px] font-medium ring-1 ring-inset ${
                      espacioBadgeStyles[row.espacio] ??
                      'bg-gray-500/10 text-gray-300 ring-gray-500/20'
                    }`}
                  >
                    {row.espacio}
                  </span>
                </td>
                <td className="whitespace-nowrap px-4 py-3.5 text-[13px] text-gray-300">
                  {row.destino}
                </td>
                <td className="whitespace-nowrap px-4 py-3.5">
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-gray-800 bg-white/[0.02] px-2 py-0.5 text-[11px] text-gray-400">
                    <MethodIcon size={12} className="text-gray-500" />
                    {row.metodo}
                  </span>
                </td>
                <td className="whitespace-nowrap px-4 py-3.5 pr-5 text-[13px] tabular-nums text-gray-400">
                  {row.hora}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
