import { useEffect, useState } from "react";
import { getTransacoes } from "../services/transacaoService";
import TransacaoForm from "../components/TransacaoForm";
import type { Transacao } from "../models/Transacao";

export default function TransacoesPage() {
  const [transacoes, setTransacoes] = useState<Transacao[]>([]);

  const carregarTransacoes = async () => {
    const dados = await getTransacoes();
    setTransacoes(dados);
  };

  useEffect(() => {
    carregarTransacoes();
  }, []);

  return (
    <div>
      <h2>Transações</h2>
      <ul>
        {transacoes.map(t => (
          <li key={t.id}>
            {t.descricao} - {t.valor.toFixed(2)} - {t.tipo} - {t.pessoa?.nome} - {t.categoria?.descricao}
          </li>
        ))}
      </ul>

      <h3>Nova Transação</h3>
      <TransacaoForm onCreated={carregarTransacoes} />
    </div>
  );
}
