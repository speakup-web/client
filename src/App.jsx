import { Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage";
import Lapor from "./pages/LaporPage";
import SignInPage from "./pages/SignInPage";


function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lapor" element={<Lapor />} />
          <Route path="/login" element={<SignInPage />} />
        </Routes>
    </div>
  );
}

export default App;
