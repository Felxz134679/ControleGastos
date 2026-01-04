export enum TipoTransacao {
  Despesa = 1,
  Receita = 2
}

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