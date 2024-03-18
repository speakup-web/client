import { Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage";
import Lapor from "./pages/LaporPage";


function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Lapor" element={<Lapor />} />
        </Routes>
    </div>
  );
}

export default App;
