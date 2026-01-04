import { useEffect, useState } from "react";
import { getRelatorioPorPessoa } from "../services/relatorioService";
import type { RelatorioPorPessoa } from "../services/relatorioService";
import type { RelatorioPorCategoria } from "../services/relatorioService";
import { getRelatorioPorCategoria } from "../services/relatorioService";
export default function RelatoriosPage() {
  const [relatorioPessoa, setRelatorioPessoa] =
    useState<RelatorioPorPessoa | null>(null);
  const [relatorioCategoria, setRelatorioCategoria] =
    useState<RelatorioPorCategoria | null>(null);

  useEffect(() => {
    const carregar = async () => {
      setRelatorioPessoa(await getRelatorioPorPessoa());
      setRelatorioCategoria(await getRelatorioPorCategoria());
    };
    carregar();
  }, []);

  return (
    <div className="page-container">
      <h2>Relatórios</h2>

      {/* CARDS TOTAIS */}
      {relatorioPessoa && (
        <div className="cards-resumo">
          <div className="card receita">
            <span>Receitas</span>
            <strong>R$ {relatorioPessoa.totalGeral.totalReceitas.toFixed(2)}</strong>
          </div>

          <div className="card despesa">
            <span>Despesas</span>
            <strong>R$ {relatorioPessoa.totalGeral.totalDespesas.toFixed(2)}</strong>
          </div>

          <div className="card saldo">
            <span>Saldo</span>
            <strong>
              R$ {relatorioPessoa.totalGeral.saldo.toFixed(2)}
            </strong>
          </div>
        </div>
      )}

      {/* RELATÓRIO POR PESSOA */}
      {relatorioPessoa && (



        <div className="box">



            
          <h3>Relatório por Pessoa</h3>

          <table className="tabela">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Receitas</th>
                <th>Despesas</th>
                <th>Saldo</th>
              </tr>
            </thead>
            <tbody>
              {relatorioPessoa.pessoas.map(p => {
                const saldo = p.totalReceitas - p.totalDespesas;

                return (
                  <tr key={p.pessoaId}>
                    <td>{p.nome}</td>
                    <td className="receita">
                      R$ {p.totalReceitas.toFixed(2)}
                    </td>
                    <td className="despesa">
                      R$ {p.totalDespesas.toFixed(2)}
                    </td>
                    <td className={saldo >= 0 ? "receita" : "despesa"}>
                      R$ {saldo.toFixed(2)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {/* RELATÓRIO POR CATEGORIA */}
      {relatorioCategoria && (



        <div className="box">

<div className="cards-resumo">
  <div className="card receita">
    <span>Total Receitas</span>
    <strong>
      R$ {relatorioCategoria.totalGeral.totalReceitas.toFixed(2)}
    </strong>
  </div>

  <div className="card despesa">
    <span>Total Despesas</span>
    <strong>
      R$ {relatorioCategoria.totalGeral.totalDespesas.toFixed(2)}
    </strong>
  </div>

  <div className="card saldo">
    <span>Saldo Geral</span>
    <strong>
      R$ {(
        relatorioCategoria.totalGeral.totalReceitas -
        relatorioCategoria.totalGeral.totalDespesas
      ).toFixed(2)}
    </strong>
  </div>
</div>

          <h3>Relatório por Categoria</h3>

          <table className="tabela">
            <thead>
              <tr>
                <th>Categoria</th>
                <th>Receitas</th>
                <th>Despesas</th>
                <th>Saldo</th>
              </tr>
            </thead>
            <tbody>
              {relatorioCategoria.categorias.map(c => {
                const saldo = c.totalReceitas - c.totalDespesas;

                return (
                  <tr key={c.categoriaId}>
                    <td>{c.nome}</td>
                    <td className="receita">
                      R$ {c.totalReceitas.toFixed(2)}
                    </td>
                    <td className="despesa">
                      R$ {c.totalDespesas.toFixed(2)}
                    </td>
                    <td className={saldo >= 0 ? "receita" : "despesa"}>
                      R$ {saldo.toFixed(2)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>


          
        </div>






      )}
    </div>
  );
}

