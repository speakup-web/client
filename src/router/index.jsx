import { createBrowserRouter } from 'react-router-dom';
import Layout from '../containers/Layout';
// import Home from ;
// import FormPengaduan from '../pages/FormPengaduan';
// import LaporanTerkirim = lazy(() => import('../pages/LaporanTerkirim'));
// const SignIn = lazy(() => import('../pages/SignIn'));
// const PantauPengaduan = lazy(() => import('../pages/PantauPengaduan'));
// const AdminDashboardHome = lazy(() =>
//   import('../pages/dashboard/admin/AdminDashboardHome')
// );
// const SatgasDashboardHome = lazy(() =>
//   import('../pages/dashboard/satgas/SatgasDashboardHome')
// );
// const DaftarPengaduan = lazy(() =>
//   import('../pages/dashboard/admin/DaftarPengaduan')
// );
// const DaftarSatgas = lazy(() =>
//   import('../pages/dashboard/admin/DaftarSatgas')
// );
// const StatusPengaduan = lazy(() =>
//   import('../pages/dashboard/admin/StatusPengaduan')
// );

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        async lazy() {
          let { HomePage } = await import('../pages/HomePage');
          return { Component: HomePage };
        },
      },
      {
        path: 'lapor',
        async lazy() {
          let { FormPengaduan } = await import('../pages/FormPengaduan');
          return { Component: FormPengaduan };
        },
      },
      {
        path: '/laporan-terkirim',
        async lazy() {
          let { LaporanTerkirim } = await import('../pages/LaporanTerkirim');
          return { Component: LaporanTerkirim };
        },
      },
      {
        path: '/pantau-pengaduan',
        async lazy() {
          let { PantauPengaduan } = await import('../pages/PantauPengaduan');
          return { Component: PantauPengaduan };
        },
      },
    ],
  },
  // {
  //   path: '/lapor',
  //   element: <FormPengaduan />,
  // },
  // {
  //   path: '/laporan-terkirim',
  //   element: <LaporanTerkirim />,
  // },
  // {
  //   path: '/pantau-pengaduan',
  //   element: <PantauPengaduan />,
  // },
  // {
  //   path: '/login',
  //   element: <SignIn />,
  // },
  // {
  //   path: '/dashboard',
  //   element: <DashboardLayout />,
  //   children: [
  //     {
  //       path: 'admin',
  //       element: <AdminDashboardHome />,
  //     },
  //     {
  //       path: 'admin/daftar-pengaduan',
  //       element: <DaftarPengaduan />,
  //     },
  //     {
  //       path: 'admin/status-pengaduan',
  //       element: <StatusPengaduan />,
  //     },
  //     {
  //       path: 'admin/daftar-satgas',
  //       element: <DaftarSatgas />,
  //     },
  //     {
  //       path: 'satgas',
  //       element: <SatgasDashboardHome />,
  //     },
  //     {
  //       path: 'satgas/daftar-pengaduan',
  //       element: <DaftarPengaduan />,
  //     },
  //     {
  //       path: 'satgas/status-pengaduan',
  //       element: <StatusPengaduan />,
  //     },
  //   ],
  // },
]);
