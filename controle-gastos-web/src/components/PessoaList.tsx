import type { Pessoa } from "../models/Pessoa";

interface Props {
  pessoas: Pessoa[];
  onExcluir: (id: number) => void;
}

export default function PessoaList({ pessoas,  onExcluir }: Props) {
  if (pessoas.length === 0) return <p>Nenhuma pessoa cadastrada.</p>;

  return (
    <ul className="pessoa-list">
      {pessoas.map(p => (
        <li key={p.id}>
          {p.nome} - {p.idade} anos

           <button className="btn-excluir"  onClick={() => onExcluir(p.id)}  >
            Excluir
          </button>

        </li>
      ))}
    </ul>
  );
}
