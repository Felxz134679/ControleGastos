export type TipoTransacao  = "Despesa" | "Receita" | "Ambas";

export interface Transacao {
  id: number;
  descricao: string;
  valor: number;
  tipo: TipoTransacao;
  pessoaId: number;
  categoriaId: number;
  pessoa?: { nome: string };
  categoria?: { descricao: string };
}