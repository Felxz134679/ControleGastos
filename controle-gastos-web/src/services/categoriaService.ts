import { api } from "../api/api";
import type { Categoria } from "../models/Categoria";

export const getCategorias = async (): Promise<Categoria[]> => {
  const response = await api.get<Categoria[]>("/Categorias");
  return response.data;
};



export const criarCategoria = async (descricao: string, finalidadeId: number) => {
  await api.post("/Categorias", {
    descricao,
    finalidade: finalidadeId
  });
};
