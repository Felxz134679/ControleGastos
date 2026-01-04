import { Routes, Route, Link } from "react-router-dom";
import PessoasPage from "./pages/PessoasPage";
import CategoriasPage from "./pages/CategoriaPage";
import TransacoesPage from "./pages/TransacaoPage";
import RelatoriosPage from "./pages/RelatorioPage";

function App() {
  return (
    <div>
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/" style={{ marginRight: "10px" }}>Pessoas</Link>
        <Link to="/categorias" style={{ marginRight: "10px" }}>Categorias</Link>
        <Link to="/transacoes" style={{ marginRight: "10px" }}>Transações</Link>
        <Link to="/relatorios">Relatórios</Link>
      </nav>

      <Routes>
        <Route path="/" element={<PessoasPage />} />
        <Route path="/categorias" element={<CategoriasPage />} />
        <Route path="/transacoes" element={<TransacoesPage />} />
        <Route path="/relatorios" element={<RelatoriosPage />} />
      </Routes>
    </div>
  );
}

export default App;
