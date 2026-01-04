import { useEffect, useState } from "react";
import { getCategorias } from "../services/categoriaService";
import CategoriaForm from "../components/CategoriaForm";
import type { Categoria } from "../models/Categoria";

export default function CategoriasPage() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  const carregarCategorias = async () => {
    const dados = await getCategorias();
    setCategorias(dados);
  };

  useEffect(() => {
    carregarCategorias();
  }, []);

  return (
    <div className="page-container">
      <h2>Categorias</h2>

      <div className="pessoas-layout">
        {/* LISTA */}
        <div className="pessoas-lista">
          {categorias.length === 0 ? (
            <p>Nenhuma categoria cadastrada.</p>
          ) : (
            <ul className="pessoa-list">
              {categorias.map(c => (
                <li key={c.id}>
                  <span>{c.descricao}</span>
                  <span>{c.finalidade}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* FORM */}
        <div className="pessoas-formulario">
          <h3>Nova Categoria</h3>
          <CategoriaForm onCreated={carregarCategorias} />
        </div>
      </div>
    </div>
  );
}
