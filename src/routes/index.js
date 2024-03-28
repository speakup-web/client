import { lazy } from 'react'

// use lazy for better code splitting, a.k.a. load faster
const Home = lazy(() => import('./../pages/HomePage'))
const Lapor = lazy(() => import('../pages/LaporPage'))
const LaporanTerkirim = lazy(() => import('../pages/LaporanTerkirimPage'))
const SignIn = lazy(() => import('../pages/SignInPage'))
const PantauPengaduan = lazy(() => import('../pages/PantauPengaduanPage'))
const Admin = lazy(() => import('../pages/AdminPage'))

const routes = [
  {
    path: '/', // the url
    component: Home, // view rendered
  },
  {
    path: '/lapor',
    component: Lapor,
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
    path: '/Admin',
    component: Admin
  }
]

export default routes
