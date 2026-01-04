export type TipoTransacao  = "Despesa" | "Receita" | "Ambas";

export interface Transacao {
  id: number;
  descricao: string;
  valor: number;
  tipo: TipoTransacao;
  pessoaNome: string;
  categoriaDescricao: string;
}

