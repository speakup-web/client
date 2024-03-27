import { lazy, Suspense } from "react";
import Layout from "./containers/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignInPage from "./pages/SignInPage";
import PantauPengaduan from "./pages/PantauPengaduanPage";

const Home = lazy(() => import('./pages/HomePage'));
const Lapor = lazy(() => import('./pages/LaporPage'));
const LaporanTerkirim = lazy(() => import('./pages/LaporanTerkirimPage'));

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> {/* Specific index route for Home */}
          <Route path="lapor" element={
            <Suspense fallback={<div>Loading...</div>}>
              <Lapor />
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
      </Routes>
    </Router>
  );
}

export default App;
