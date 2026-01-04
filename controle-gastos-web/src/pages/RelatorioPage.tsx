import { useEffect, useState } from "react";
import { getRelatorioPorPessoa } from "../services/relatorioService";
import type { RelatorioPorPessoa } from "../services/relatorioService";
import type { RelatorioPorCategoria } from "../services/relatorioService";
import { getRelatorioPorCategoria } from "../services/relatorioService";

export default function RelatoriosPage() {
  const [relatorioPessoa, setRelatorioPessoa] = useState<RelatorioPorPessoa | null>(null);
  const [relatorioCategoria, setRelatorioCategoria] = useState<RelatorioPorCategoria | null>(null);



  useEffect(() => {
  const carregar = async () => {
    setRelatorioPessoa(await getRelatorioPorPessoa());
    setRelatorioCategoria(await getRelatorioPorCategoria());
  };
  carregar();
}, []);


  return (
    <div>
      <h2>Relatório por Pessoa</h2>
      {relatorioPessoa && (
        <>
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
          <h3>Total Geral</h3>
          <p>Receitas: {relatorioPessoa.totalGeral.totalReceitas.toFixed(2)}</p>
          <p>Despesas: {relatorioPessoa.totalGeral.totalDespesas.toFixed(2)}</p>
          <p>Saldo: {relatorioPessoa.totalGeral.saldo.toFixed(2)}</p>
        </>
      )}

        <h2>Relatório por Categoria</h2>

        {relatorioCategoria && (
        <>
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

            <h3>Total Geral por Categoria</h3>
            <p>Receitas: {relatorioCategoria.totalGeral.totalReceitas.toFixed(2)}</p>
            <p>Despesas: {relatorioCategoria.totalGeral.totalDespesas.toFixed(2)}</p>
            <p>
            Saldo:{" "}
            {(relatorioCategoria.totalGeral.totalReceitas -
                relatorioCategoria.totalGeral.totalDespesas).toFixed(2)}
            </p>
        </>
        )}

    </div>
  );
}
