import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../containers/Layout';
import { ProtectedRoute } from '../components/ProtectedRoute';
import { DashboardLayout } from '../containers/dashboard/DashboardLayout';

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
  {
    path: '/login',
    async lazy() {
      let { SignIn } = await import('../pages/SignIn');
      return { Component: SignIn };
    },
  },
  {
    path: '/dashboard/admin',
    element: (
      <ProtectedRoute userRole="admin">
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        async lazy() {
          let { AdminDashboardHome } = await import(
            '../pages/dashboard/admin/AdminDashboardHome'
          );
          return { Component: AdminDashboardHome };
        },
      },
      {
        path: 'daftar-pengaduan',
        async lazy() {
          let { StatusPengaduan } = await import(
            '../pages/dashboard/admin/StatusPengaduan'
          );
          return { Component: StatusPengaduan };
        },
      },
      {
        path: 'detail-pengaduan/:id',
        async lazy() {
          let { DetailLaporan } = await import(
            '../pages/laporan/DetailLaporan'
          );
          return { Component: DetailLaporan };
        },
      },
      {
        path: 'daftar-satgas',
        async lazy() {
          let { DaftarSatgas } = await import(
            '../pages/dashboard/admin/DaftarSatgas'
          );
          return { Component: DaftarSatgas };
        },
      },
      {
        path: 'settings',
        async lazy() {
          let { SettingProfile } = await import(
            '../pages/dashboard/admin/SettingProfile'
          );
          return { Component: SettingProfile };
        },
      },
      {
        path: 'edit-satgas',
        async lazy() {
          let { EditSatgas } = await import(
            '../pages/dashboard/admin/EditSatgas'
          );
          return { Component: EditSatgas };
        },
      },
    ],
  },
  {
    path: '/dashboard/taskforce',
    element: (
      <ProtectedRoute userRole="taskforce">
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        async lazy() {
          let { SatgasDashboardHome } = await import(
            '../pages/dashboard/satgas/SatgasDashboardHome'
          );
          return { Component: SatgasDashboardHome };
        },
      },
      {
        path: 'detail-pengaduan/:id',
        async lazy() {
          let { DetailLaporan } = await import(
            '../pages/laporan/DetailLaporan'
          );
          return { Component: DetailLaporan };
        },
      },
      {
        path: 'daftar-pengaduan',
        async lazy() {
          let { StatusPengaduan } = await import(
            '../pages/dashboard/admin/StatusPengaduan'
          );
          return { Component: StatusPengaduan };
        },
      },
      {
        path: 'settings',
        async lazy() {
          let { SettingProfile } = await import(
            '../pages/dashboard/satgas/SettingProfile'
          );
          return { Component: SettingProfile };
        },
      },
    ],
  },
]);
