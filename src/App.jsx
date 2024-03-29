import { lazy, Suspense } from "react";
import Layout from "./containers/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignInPage from "./pages/SignInPage";
import PantauPengaduan from "./pages/PantauPengaduan";
import DashboardLayout from "./containers/dashboard/DashboardLayout";

const Home = lazy(() => import('./pages/HomePage'));
const FormPengaduan = lazy(() => import('./pages/FormPengaduan'));
const LaporanTerkirim = lazy(() => import('./pages/LaporanTerkirim'));
const DashboardHome = lazy(() => import('./pages/dashboard/DashboardHome'));

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> {/* Specific index route for Home */}
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
          <Route path="pantau-pengaduan" element={
            <Suspense fallback={<div>Loading...</div>}>
              <PantauPengaduan />
            </Suspense>
          } />
        </Route>
        <Route path="/login" element={<SignInPage />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
        </Route>
      </Routes>
    </Router >
  );
}

export default App;
