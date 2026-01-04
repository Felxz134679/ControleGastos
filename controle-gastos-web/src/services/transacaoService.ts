import { api } from "../api/api";
import type { Transacao, TipoTransacao } from "../models/Transacao";

export const getTransacoes = async (): Promise<Transacao[]> => {
  const response = await api.get<Transacao[]>("/Transacoes");
  return response.data;
};

export const criarTransacao = async (
  descricao: string,
  valor: number,
  tipo: number,
  pessoaId: number,
  categoriaId: number
) => {
  await api.post("/Transacoes", { descricao, valor, tipo, pessoaId, categoriaId });
};