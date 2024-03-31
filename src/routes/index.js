import { lazy } from 'react';
import DashboardLayout from '../containers/dashboard/DashboardLayout';

// Penggunaan lazy loading untuk mempercepat waktu pemuatan
const Home = lazy(() => import('../pages/HomePage'));
const FormPengaduan = lazy(() => import('../pages/FormPengaduan'));
const LaporanTerkirim = lazy(() => import('../pages/LaporanTerkirim'));
const SignIn = lazy(() => import('../pages/SignIn'));
const PantauPengaduan = lazy(() => import('../pages/PantauPengaduan'));
const AdminDashboardHome = lazy(() => import('../pages/dashboard/admin/AdminDashboardHome'));
const SatgasDashboardHome = lazy(() => import('../pages/dashboard/satgas/SatgasDashboardHome'));
const DaftarPengaduan = lazy(() => import('../pages/dashboard/admin/DaftarPengaduan'));
const DaftarSatgas = lazy(() => import('../pages/dashboard/admin/DaftarSatgas'));
const StatusPengaduan = lazy(() => import('../pages/dashboard/admin/StatusPengaduan'));

const routes = [
  {
    path: '/', // URL
    component: Home, // Komponen yang akan di-render
  },
  {
    path: '/lapor',
    component: FormPengaduan,
  },
  {
    path: '/laporan-terkirim',
    component: LaporanTerkirim
  },
  {
    path: '/pantau-pengaduan',
    component: PantauPengaduan
  },
  {
    path: '/login',
    component: SignIn
  },
  {
    path: '/dashboard',
    component: DashboardLayout,
    routes: [
      {
        path: '/admin',
        component: AdminDashboardHome
      },
      {
        path: '/admin/daftar-pengaduan',
        component: DaftarPengaduan
      },
      {
        path: '/admin/status-pengaduan',
        component: StatusPengaduan
      },
      {
        path: '/admin/daftar-satgas',
        component: DaftarSatgas
      },
      {
        path: '/satgas',
        component: SatgasDashboardHome
      },
      {
        path: '/satgas/daftar-pengaduan',
        component: DaftarPengaduan
      },
      {
        path: '/satgas/status-pengaduan',
        component: StatusPengaduan
      },
    ]
  }
]

export default routes;
