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
    <div className="relatorios">
      <h2>Relatórios</h2>

    <div className="layout">
        
    
        <div className="col-esquerda">

        {relatorioPessoa && (
            <div className="box">
            <h3>Totais por Pessoa</h3>

            <div className="linha">
                <span>Receitas</span>
                <strong>{relatorioPessoa.totalGeral.totalReceitas.toFixed(2)}</strong>
            </div>

            <div className="linha">
                <span>Despesas</span>
                <strong>{relatorioPessoa.totalGeral.totalDespesas.toFixed(2)}</strong>
            </div>

            <div className="linha total">
                <span>Saldo</span>
                <strong>{relatorioPessoa.totalGeral.saldo.toFixed(2)}</strong>
            </div>
            </div>
        )}

        {relatorioCategoria && (
            <div className="box">
            <h3>Totais por Categoria</h3>

            <div className="linha">
                <span>Receitas</span>
                <strong>{relatorioCategoria.totalGeral.totalReceitas.toFixed(2)}</strong>
            </div>

            <div className="linha">
                <span>Despesas</span>
                <strong>{relatorioCategoria.totalGeral.totalDespesas.toFixed(2)}</strong>
            </div>

            <div className="linha total">
                <span>Saldo</span>
                <strong>
                {(
                    relatorioCategoria.totalGeral.totalReceitas -
                    relatorioCategoria.totalGeral.totalDespesas
                ).toFixed(2)}
                </strong>
            </div>
            </div>
        )}

        </div>

        {/* COLUNA DIREITA */}
        <div className="col-direita">

        {relatorioPessoa && (
            <div className="box">
            <h3>Relatório por Pessoa</h3>

            <table>
                <thead>
                <tr>
                    <th>Nome</th>
                    <th>Receitas</th>
                    <th>Despesas</th>
                    <th>Saldo</th>
                </tr>
                </thead>
                <tbody>
                {relatorioPessoa.pessoas.map(p => (
                    <tr key={p.pessoaId}>
                    <td>{p.nome}</td>
                    <td>{p.totalReceitas.toFixed(2)}</td>
                    <td>{p.totalDespesas.toFixed(2)}</td>
                    <td>{(p.totalReceitas - p.totalDespesas).toFixed(2)}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
        )}

        {relatorioCategoria && (
            <div className="box">
            <h3>Relatório por Categoria</h3>

            <table>
                <thead>
                <tr>
                    <th>Categoria</th>
                    <th>Receitas</th>
                    <th>Despesas</th>
                    <th>Saldo</th>
                </tr>
                </thead>
                <tbody>
                {relatorioCategoria.categorias.map(c => (
                    <tr key={c.categoriaId}>
                    <td>{c.nome}</td>
                    <td>{c.totalReceitas.toFixed(2)}</td>
                    <td>{c.totalDespesas.toFixed(2)}</td>
                    <td>{(c.totalReceitas - c.totalDespesas).toFixed(2)}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>
        )}

        </div>
    </div>
</div>
  );
}