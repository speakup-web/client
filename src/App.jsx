import { Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage";
import Lapor from "./pages/LaporPage";
import SignInPage from "./pages/SignInPage";
import LaporanTerkirimPage from "./pages/LaporanTerkirimPage";
import PantauPage from "./pages/PantauPage";


function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lapor" element={<Lapor />} />
          <Route path="/login" element={<SignInPage />} />
          <Route path="/laporan-terkirim" element={<LaporanTerkirimPage />} />
          <Route path="/pantau-pengaduan" element={<PantauPage />} />
        </Routes>
    </div>
  );
}

export default App;
