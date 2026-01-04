import { Routes, Route, Link } from "react-router-dom";
import PessoasPage from "./pages/PessoasPage";

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Pessoas</Link>
      </nav>

      <Routes>
        <Route path="/" element={<PessoasPage />} />
      </Routes>
    </div>
  );
}

export default App;
