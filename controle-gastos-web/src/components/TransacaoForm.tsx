import { useState, useEffect } from "react";
import { criarTransacao } from "../services/transacaoService";
import type { TipoTransacao, Transacao } from "../models/Transacao";
import { getPessoas } from "../services/pessoaService";
import { getCategorias } from "../services/categoriaService";
import type { Pessoa } from "../models/Pessoa";
import type { Categoria, FinalidadeCategoria } from "../models/Categoria";

interface Props {
  onCreated: () => void;
}

export default function TransacaoForm({ onCreated }: Props) {
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState(0);
  const [tipo, setTipo] = useState<TipoTransacao>("Despesa"); // inicialização correta
  const [pessoaId, setPessoaId] = useState<number>(0);
  const [categoriaId, setCategoriaId] = useState<number>(0);

  const [pessoas, setPessoas] = useState<Pessoa[]>([]);
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  const finalidadeMap: Record<FinalidadeCategoria, number> = {
    "Despesa": 1,
    "Receita": 2,
    "Ambas": 3
  };

  useEffect(() => {
    const carregar = async () => {
      setPessoas(await getPessoas());
      setCategorias(await getCategorias());
    };
    carregar();
  }, []);

  const salvar = async () => {
    
    await criarTransacao(descricao, valor, finalidadeMap[tipo], pessoaId, categoriaId);
    setDescricao("");
    setValor(0);
    setPessoaId(0);
    setCategoriaId(0);
    onCreated();
  };

  const categoriasFiltradas = categorias.filter(c => {
    if (tipo === "Despesa") return c.finalidade !== "Receita";
    if (tipo === "Receita") return c.finalidade !== "Despesa";
    return true;
  });

  return (
    <div className="form-container">
      <input
        placeholder="Descrição"
        value={descricao}
        onChange={e => setDescricao(e.target.value)}
      />
      <input
        type="number"
        placeholder="Valor"
        value={valor}
        onChange={e => setValor(Number(e.target.value))}
      />
      <select value={tipo} onChange={e => setTipo(e.target.value as TipoTransacao)}>
        <option value="Despesa">Despesa</option>
        <option value="Receita">Receita</option>
      </select>
      <select value={pessoaId} onChange={e => setPessoaId(Number(e.target.value))}>
        <option value={0}>Selecione a pessoa</option>
        {pessoas.map(p => (
          <option key={p.id} value={p.id}>{p.nome}</option>
        ))}
      </select>
      <select value={categoriaId} onChange={e => setCategoriaId(Number(e.target.value))}>
        <option value={0}>Selecione a categoria</option>
        {categoriasFiltradas.map(c => (
          <option key={c.id} value={c.id}>{c.descricao}</option>
        ))}
      </select>
      <button onClick={salvar}>Salvar</button>
    </div>
  );
}
