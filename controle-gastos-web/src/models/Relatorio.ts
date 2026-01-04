export interface TotalPorPessoaDto {
  pessoaId: number;
  nome: string;
  totalReceitas: number;
  totalDespesas: number;
}

export interface TotalGeralDto {
  totalReceitas: number;
  totalDespesas: number;
}

export interface RelatorioPorPessoaDto {
  pessoas: TotalPorPessoaDto[];
  totalGeral: TotalGeralDto;
}
