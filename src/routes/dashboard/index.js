import { lazy } from 'react'

// use lazy for better code splitting, a.k.a. load faster
const Home = lazy(() => import('./../../pages/dashboard/DashboardHome'))

const dashboardRoutes = [
  {
    path: '/',
    component: Home
  }
]

export default dashboardRoutes
