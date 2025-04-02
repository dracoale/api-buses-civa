import "./App.css";
import BuscarBusPorId from "./components/BuscarBusPorId";
import TablaBuses from "./components/TablaBuses";
import { Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>Aplicación de Buses</h1>

      {/* Botones para redirigir a las rutas */}
      <div>
        <button CLAS>
          <Link
            to="/listar-buses"
            style={{ color: "white", textDecoration: "none" }}
          >
            Listar Buses
          </Link>
        </button>
        <button>
          <Link
            to="/buscar-bus"
            style={{ color: "white", textDecoration: "none" }}
          >
            Buscar por ID
          </Link>
        </button>
      </div>

      <Routes>
        <Route path="/listar-buses" element={<TablaBuses />} />
        <Route path="/buscar-bus" element={<BuscarBusPorId />} />
      </Routes>
    </div>
  );
}

export default App;
