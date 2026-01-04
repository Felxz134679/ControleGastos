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
    <div>
      <h2>Categorias</h2>
      <ul>
        {categorias.map(c => (
          <li key={c.id}>
            {c.descricao} - {c.finalidade}
          </li>
        ))}
      </ul>

      <h3>Nova Categoria</h3>
      <CategoriaForm onCreated={carregarCategorias} />
    </div>
  );
}