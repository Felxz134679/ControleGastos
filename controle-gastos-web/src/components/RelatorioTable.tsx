import type { TotalPorPessoaDto } from "../models/Relatorio";

interface Props {
  dados: TotalPorPessoaDto[];
  totalGeral: { totalReceitas: number; totalDespesas: number; saldo: number };
}

export default function RelatorioTable({ dados, totalGeral }: Props) {
  return (
    <div className="relatorio-container">
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
          {dados.map(d => (
            <tr key={d.pessoaId}>
              <td>{d.nome}</td>
              <td>{d.totalReceitas.toFixed(2)}</td>
              <td>{d.totalDespesas.toFixed(2)}</td>
              <td>{(d.totalReceitas - d.totalDespesas).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr style={{ fontWeight: "bold" }}>
            <td>Total Geral</td>
            <td>{totalGeral.totalReceitas.toFixed(2)}</td>
            <td>{totalGeral.totalDespesas.toFixed(2)}</td>
            <td>{totalGeral.saldo.toFixed(2)}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
