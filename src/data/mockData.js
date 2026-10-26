export const espacios = [
  {
    id: 'el-parque',
    nombre: 'Residencias El Parque',
    accesosHoy: 84,
    estado: 'activo',
    ubicacion: 'Av. Principal 120',
  },
  {
    id: 'salud-norte',
    nombre: 'Min. de Salud Norte',
    accesosHoy: 112,
    estado: 'activo',
    ubicacion: 'Calle 45 #12-30',
  },
  {
    id: 'arrayanes',
    nombre: 'Los Arrayanes',
    accesosHoy: 26,
    estado: 'revision',
    ubicacion: 'Camino Los Arrayanes 8',
  },
]

export const accesosValidos = [
  {
    codigo: '5477',
    titular: 'Carlos Rodríguez',
    destino: 'Dep. 3B',
    espacio: 'Residencias El Parque',
    estado: 'pendiente',
    fotoUrl: 'https://i.pravatar.cc/150?img=11',
    tipo: 'Visita',
  },
  {
    codigo: '2190',
    titular: 'María González',
    destino: 'Oficina 204',
    espacio: 'Min. de Salud Norte',
    estado: 'pendiente',
    fotoUrl: 'https://i.pravatar.cc/150?img=47',
    tipo: 'Proveedor',
  },
  {
    codigo: '8042',
    titular: 'Andrés Silva',
    destino: 'Casa 12',
    espacio: 'Los Arrayanes',
    estado: 'pendiente',
    fotoUrl: 'https://i.pravatar.cc/150?img=12',
    tipo: 'Visita',
  },
]

export const historial = [
  {
    id: 1,
    titular: 'Lucía Fernández',
    espacio: 'Residencias El Parque',
    destino: 'Dep. 7A',
    metodo: 'QR',
    hora: '09:42',
    fotoUrl: 'https://i.pravatar.cc/150?img=32',
  },
  {
    id: 2,
    titular: 'Javier Morales',
    espacio: 'Min. de Salud Norte',
    destino: 'Piso 3 · Sala 12',
    metodo: 'Cédula',
    hora: '09:31',
    fotoUrl: 'https://i.pravatar.cc/150?img=15',
  },
  {
    id: 3,
    titular: 'Paula Restrepo',
    espacio: 'Residencias El Parque',
    destino: 'Dep. 2C',
    metodo: 'Código',
    hora: '09:18',
    fotoUrl: 'https://i.pravatar.cc/150?img=44',
  },
  {
    id: 4,
    titular: 'Diego Herrera',
    espacio: 'Los Arrayanes',
    destino: 'Casa 4',
    metodo: 'QR',
    hora: '09:05',
    fotoUrl: 'https://i.pravatar.cc/150?img=53',
  },
  {
    id: 5,
    titular: 'Camila Torres',
    espacio: 'Min. de Salud Norte',
    destino: 'Oficina 108',
    metodo: 'Código',
    hora: '08:57',
    fotoUrl: 'https://i.pravatar.cc/150?img=25',
  },
  {
    id: 6,
    titular: 'Santiago Vargas',
    espacio: 'Residencias El Parque',
    destino: 'Dep. 5B',
    metodo: 'Cédula',
    hora: '08:46',
    fotoUrl: 'https://i.pravatar.cc/150?img=60',
  },
  {
    id: 7,
    titular: 'Valentina Ríos',
    espacio: 'Los Arrayanes',
    destino: 'Casa 9',
    metodo: 'QR',
    hora: '08:33',
    fotoUrl: 'https://i.pravatar.cc/150?img=29',
  },
  {
    id: 8,
    titular: 'Mateo Cárdenas',
    espacio: 'Min. de Salud Norte',
    destino: 'Piso 1 · Recepción',
    metodo: 'Código',
    hora: '08:21',
    fotoUrl: 'https://i.pravatar.cc/150?img=68',
  },
]

export const alertas = [
  {
    id: 1,
    titulo: 'Intento de acceso fallido reiterado',
    detalle: 'Código 3381 ingresado 4 veces en Los Arrayanes.',
    severidad: 'alta',
    hora: 'Hace 6 min',
  },
  {
    id: 2,
    titulo: 'Credencial próxima a vencer',
    detalle: 'La credencial de María González vence hoy a las 18:00.',
    severidad: 'media',
    hora: 'Hace 24 min',
  },
  {
    id: 3,
    titulo: 'Dispositivo de garita sin señal',
    detalle: 'Tablet de la garita norte desconectada por 12 minutos.',
    severidad: 'media',
    hora: 'Hace 1 h',
  },
]

export const accesosSemana = [
  { dia: 'Lun', accesos: 148 },
  { dia: 'Mar', accesos: 176 },
  { dia: 'Mié', accesos: 162 },
  { dia: 'Jue', accesos: 205 },
  { dia: 'Vie', accesos: 231 },
  { dia: 'Sáb', accesos: 118 },
  { dia: 'Dom', accesos: 96 },
]

export const espacioBadgeStyles = {
  'Residencias El Parque':
    'bg-emerald-500/10 text-emerald-300 ring-emerald-500/20',
  'Min. de Salud Norte': 'bg-sky-500/10 text-sky-300 ring-sky-500/20',
  'Los Arrayanes': 'bg-amber-500/10 text-amber-300 ring-amber-500/20',
}

export const metodoIcons = {
  Código: 'key',
  QR: 'qr',
  Cédula: 'id',
}
