import { Navigate, Route, Routes } from 'react-router-dom'
import AdminLayout from './components/AdminLayout'
import AdminDashboard from './pages/AdminDashboard'
import Alerts from './pages/Alerts'
import GuardPanel from './pages/GuardPanel'
import LiveAccess from './pages/LiveAccess'
import Reports from './pages/Reports'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/admin" replace />} />
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="accesos" element={<LiveAccess />} />
        <Route path="alertas" element={<Alerts />} />
        <Route path="reportes" element={<Reports />} />
      </Route>
      <Route path="/garita" element={<GuardPanel />} />
      <Route path="*" element={<Navigate to="/admin" replace />} />
    </Routes>
  )
}
