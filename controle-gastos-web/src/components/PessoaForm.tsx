import { useState } from "react";

interface Props {
  onSalvar: (nome: string, idade: number) => void;
}

export default function PessoaForm({ onSalvar }: Props) {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nome || idade <= 0) return;
    onSalvar(nome, idade);
    setNome("");
    setIdade(0);
  };

  return (
    <form onSubmit={handleSubmit} className="pessoa-form">
      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={e => setNome(e.target.value)}
      />
      <input
        type="number"
        placeholder="Idade"
        value={idade}
        onChange={e => setIdade(Number(e.target.value))}
      />
      <button type="submit">Salvar</button>
    </form>
  );
}