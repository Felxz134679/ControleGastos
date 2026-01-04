import type { Pessoa } from "../models/Pessoa";

interface Props {
  pessoas: Pessoa[];
}

export default function PessoaList({ pessoas }: Props) {
  if (pessoas.length === 0) return <p>Nenhuma pessoa cadastrada.</p>;

  return (
    <ul className="pessoa-list">
      {pessoas.map(p => (
        <li key={p.id}>
          {p.nome} - {p.idade} anos
        </li>
      ))}
    </ul>
  );
}
