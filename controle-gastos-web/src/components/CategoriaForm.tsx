import { useState } from "react";
import { criarCategoria } from "../services/categoriaService";
import type { FinalidadeCategoria } from "../models/Categoria";

interface Props {
  onCreated: () => void;
}

export default function CategoriaForm({ onCreated }: Props) {
  const [descricao, setDescricao] = useState("");
  const [finalidade, setFinalidade] = useState<FinalidadeCategoria>("Despesa");



  const finalidadeMap: Record<FinalidadeCategoria, number> = {
    "Despesa": 1,
    "Receita": 2,
    "Ambas": 3
    };


  const salvar = async () => {
    console.log(descricao, finalidade);

    await criarCategoria(descricao, finalidadeMap[finalidade]);
    setDescricao("");
    onCreated();
   };

  return (
    <form className="pessoa-form" onSubmit={e => e.preventDefault()}>
      <input value={descricao} onChange={e => setDescricao(e.target.value)} placeholder="Descrição" />
     <select value={finalidade} onChange={e => setFinalidade(e.target.value as FinalidadeCategoria)}>
        <option value="Despesa">Despesa</option>
        <option value="Receita">Receita</option>
        <option value="Ambas">Ambas</option>
        </select>
      <button onClick={salvar}>Salvar</button>
    </form>
  );
}
