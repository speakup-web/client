import { lazy } from 'react'
import PantauPage from '../pages/PantauPage'

// use lazy for better code splitting, a.k.a. load faster
const Home = lazy(() => import('./../pages/HomePage'))
const Lapor = lazy(() => import('../pages/LaporPage'))
const LaporanTerkirim = lazy(() => import('../pages/LaporanTerkirimPage'))
const SignIn = lazy(() => import('../pages/SignInPage'))

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
    component: PantauPage
  },
  {
    path: '/login',
    component: SignIn
  }
]

export default routes
