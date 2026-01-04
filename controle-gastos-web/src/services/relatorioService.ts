import { api } from "../api/api";

export interface TotalPorPessoa {
  pessoaId: number;
  nome: string;
  totalReceitas: number;
  totalDespesas: number;
  saldo: number;
}



export interface RelatorioPorPessoa {
  pessoas: TotalPorPessoa[];
  totalGeral: { totalReceitas: number; totalDespesas: number; saldo: number };
}

export const getRelatorioPorPessoa = async (): Promise<RelatorioPorPessoa> => {
  const response = await api.get<RelatorioPorPessoa>("/Relatorios/GetTotalPorPessoa");
  return response.data;
};




export interface TotalPorCategoria {
  categoriaId: number;
  nome: string;
  totalReceitas: number;
  totalDespesas: number;
  saldo: number;
}

export interface RelatorioPorCategoria {
  categorias: TotalPorCategoria[];
  totalGeral: {
    totalReceitas: number;
    totalDespesas: number;
    saldo: number;
  };
}

export const getRelatorioPorCategoria = async (): Promise<RelatorioPorCategoria> => {
  const response = await api.get<RelatorioPorCategoria>("/Relatorios/GetTotalPorCategoria");
  return response.data;
};
