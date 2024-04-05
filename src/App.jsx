import { lazy, Suspense, useState } from "react";
import Layout from "./containers/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Home = lazy(() => import('./pages/HomePage'));
const SignIn = lazy(() => import('./pages/SignIn'));
const PantauPengaduan = lazy(() => import('./pages/PantauPengaduan'));
const FormPengaduan = lazy(() => import('./pages/FormPengaduan'));
const LaporanTerkirim = lazy(() => import('./pages/LaporanTerkirim'));
const DashboardLayout = lazy(() => import('./containers/dashboard/DashboardLayout'));
const AdminDashboardHome = lazy(() => import('./pages/dashboard/admin/AdminDashboardHome'));
const SatgasDashboardHome = lazy(() => import('./pages/dashboard/satgas/SatgasDashboardHome'));
const DaftarPengaduan = lazy(() => import('./pages/dashboard/admin/DaftarPengaduan'));
const StatusPengaduan = lazy(() => import('./pages/dashboard/admin/StatusPengaduan'));
const DaftarSatgas = lazy(() => import('./pages/dashboard/admin/DaftarSatgas'));
const SatgasDaftarPengaduan = lazy(() => import('./pages/dashboard/satgas/DaftarPengaduan'));
const SatgasStatusPengaduan = lazy(() => import('./pages/dashboard/satgas/StatusPengaduan'));

function App() {
  const [accessToken, setAccessToken] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="lapor" element={
            <Suspense fallback={<div>Loading...</div>}>
              <FormPengaduan />
            </Suspense>
          } />
          <Route path="laporan-terkirim" element={
            <Suspense fallback={<div>Loading...</div>}>
              <LaporanTerkirim />
            </Suspense>
          } />
          <Route path="pantau-pengaduan/:reportId" element={
            <Suspense fallback={<div>Loading...</div>}>
              <PantauPengaduan />
            </Suspense>
          } />
        </Route>
        <Route path="/login" element={<SignIn />} />
        <Route path="/dashboard" element={<DashboardLayout accessToken={accessToken} />}>
          <Route path="admin">
            <Route index element={<AdminDashboardHome />} />
            <Route path="daftar-pengaduan" element={<Suspense fallback={<div>Loading...</div>}>
              <DaftarPengaduan />
            </Suspense>} />
            <Route path="status-pengaduan" element={<Suspense fallback={<div>Loading...</div>}>
              <StatusPengaduan />
            </Suspense>} />
            <Route path="daftar-satgas" element={<DaftarSatgas />} />
          </Route>
          <Route path="satgas">
            <Route index element={<SatgasDashboardHome />} />
            <Route path="daftar-pengaduan" element={<Suspense fallback={<div>Loading...</div>}>
              <SatgasDaftarPengaduan />
            </Suspense>} />
            <Route path="status-pengaduan" element={<Suspense fallback={<div>Loading...</div>}>
              <SatgasStatusPengaduan />
            </Suspense>} />
          </Route>
        </Route>
      </Routes>
    </Router >
  );
}

export default App;
