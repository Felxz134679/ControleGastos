import { Routes, Route, NavLink } from "react-router-dom";
import PessoasPage from "./pages/PessoasPage";
import CategoriasPage from "./pages/CategoriaPage";
import TransacoesPage from "./pages/TransacaoPage";
import RelatoriosPage from "./pages/RelatorioPage";
function App() {
  return (
    <>
      <header className="header">
        <h1 className="logo">Controle de Gastos</h1>

        <nav className="nav">
          <NavLink to="/" end> Pessoas </NavLink>
          <NavLink to="/categorias"> Categorias </NavLink>
          <NavLink to="/transacoes"> Transações </NavLink>
          <NavLink to="/relatorios"> Relatórios </NavLink>
        </nav>
      </header>

      <main className="content">
        <Routes>
          <Route path="/" element={<PessoasPage />} />
          <Route path="/categorias" element={<CategoriasPage />} />
          <Route path="/transacoes" element={<TransacoesPage />} />
          <Route path="/relatorios" element={<RelatoriosPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
