import { api } from "../api/api";
import type { Pessoa } from "../models/Pessoa";


export const getPessoas = async (): Promise<Pessoa[]> => {
  const response = await api.get<Pessoa[]>("/Pessoas");
  return response.data;
};


export const criarPessoa = async (nome: string, idade: number) => {
  await api.post("/Pessoas", {
    nome,
    idade
  });
};

