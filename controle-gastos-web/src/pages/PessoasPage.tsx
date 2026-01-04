import { useEffect, useState } from "react";
import type { Pessoa } from "../models/Pessoa";
import { getPessoas, criarPessoa } from "../services/pessoaService";
import PessoaList from "../components/PessoaList";
import PessoaForm from "../components/PessoaForm";


export default function PessoasPage() {
  const [pessoas, setPessoas] = useState<Pessoa[]>([]);

  useEffect(() => {
    carregarPessoas();
  }, []);

  const carregarPessoas = async () => {
    const dados = await getPessoas();
    setPessoas(dados);
  };

  const handleSalvar = async (nome: string, idade: number) => {
    await criarPessoa(nome, idade);
    carregarPessoas();
  };

  return (
    <div className="page-container">
      <h2>Pessoas</h2>
      <PessoaList pessoas={pessoas} />
      <h3>Nova Pessoa</h3>
      <PessoaForm onSalvar={handleSalvar} />
    </div>
  );
}
