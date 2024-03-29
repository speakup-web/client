import { lazy } from 'react'

// use lazy for better code splitting, a.k.a. load faster
const Home = lazy(() => import('./../pages/HomePage'))
const FormPengaduan = lazy(() => import('../pages/FormPengaduan'))
const LaporanTerkirim = lazy(() => import('../pages/LaporanTerkirim'))
const SignIn = lazy(() => import('../pages/SignInPage'))
const PantauPengaduan = lazy(() => import('../pages/PantauPengaduan'))
const Dashboard = lazy(() => import('../pages/dashboard/DashboardHome'))

const routes = [
  {
    path: '/', // the url
    component: Home, // view rendered
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
    component: Dashboard
  }
]

export default routes
