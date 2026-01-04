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
    <div className="page-container">
      <h2>Transações</h2>

      <div className="transacoes-container">
        {/* LISTA */}
        <div className="transacoes-list">
          {transacoes.length === 0 && (
            <p>Nenhuma transação cadastrada.</p>
          )}

          {transacoes.map(t => (
            <div className="transacao-card" key={t.id}>
              <div className="transacao-linha">
                <strong>{t.descricao}</strong>
                <span
                  className={
                    t.tipo === "Receita"
                      ? "valor receita"
                      : "valor despesa"
                  }
                >
                  R$ {t.valor.toFixed(2)}
                </span>
              </div>

              <div className="transacao-detalhes">
                <span><b>Pessoa:</b> {t.pessoaNome}</span>
                <span><b>Categoria:</b> {t.categoriaDescricao}</span>
                <span><b>Tipo:</b> {t.tipo}</span>
              </div>
            </div>
          ))}
        </div>

        {/* FORM */}
        <div className="transacoes-form">
          <h3>Nova Transação</h3>
          <TransacaoForm onCreated={carregarTransacoes} />
        </div>
      </div>
    </div>
  );
}
