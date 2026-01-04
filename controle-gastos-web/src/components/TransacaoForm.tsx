import { useState, useEffect } from "react";
import { criarTransacao } from "../services/transacaoService";
import type { TipoTransacao } from "../models/Transacao";
import { getPessoas } from "../services/pessoaService";
import { getCategorias } from "../services/categoriaService";
import type { Pessoa } from "../models/Pessoa";
import type { Categoria, FinalidadeCategoria } from "../models/Categoria";
import { NumericFormat } from "react-number-format";
import axios from "axios";

interface Props {
  onCreated: () => void;
}

export default function TransacaoForm({ onCreated }: Props) {
    const [descricao, setDescricao] = useState("");
    const [valor, setValor] = useState<number | 0>(0);

    const [tipo, setTipo] = useState<TipoTransacao>("Despesa"); 
    const [pessoaId, setPessoaId] = useState<number>(0);
    const [categoriaId, setCategoriaId] = useState<number>(0);

    const [pessoas, setPessoas] = useState<Pessoa[]>([]);
    const [categorias, setCategorias] = useState<Categoria[]>([]);

    const [erro, setErro] = useState<string | null>(null);


    const finalidadeMap: Record<FinalidadeCategoria, number> = {
        "Despesa": 1,
        "Receita": 2,
        "Ambas": 3
    };

    useEffect(() => {
        const carregar = async () => {
        setPessoas(await getPessoas());
        setCategorias(await getCategorias());
        };
        carregar();
    }, []);



   const salvar = async () => {
        setErro(null);

        try {
            await criarTransacao(descricao,valor,finalidadeMap[tipo],pessoaId,categoriaId);
            setDescricao("");
            setValor(0);
            setPessoaId(0);
            setCategoriaId(0);

            onCreated();
        } catch (err: any) {
            if (axios.isAxiosError(err)) {
            
            const mensagem =
                err.response?.data?.message ||
                err.response?.data ||
                "Erro ao salvar transação.";

            setErro(mensagem);
            } else {
            setErro("Erro inesperado.");
            }
        }
    };


    const categoriasFiltradas = categorias.filter(c => {
        if (tipo === "Despesa") return c.finalidade !== "Receita";
        if (tipo === "Receita") return c.finalidade !== "Despesa";
        return true;
    });

    return (
        <form className="form">


            <input
                placeholder="Descrição"
                value={descricao}
                onChange={e => setDescricao(e.target.value)}
            />

            <NumericFormat
                value={valor}
                onValueChange={(values) => setValor(values.floatValue ?? 0)}
                thousandSeparator="."
                decimalSeparator=","
                prefix="R$ "
                decimalScale={2}
                fixedDecimalScale
                placeholder="Valor"
                />

            <select value={tipo} onChange={e => setTipo(e.target.value as TipoTransacao)}>
                <option value="Despesa">Despesa</option>
                <option value="Receita">Receita</option>
            </select>

            <select value={pessoaId} onChange={e => setPessoaId(Number(e.target.value))}>
                <option value={0}>Selecione a pessoa</option>
                {pessoas.map(p => (
                <option key={p.id} value={p.id}>{p.nome}</option>
                ))}
            </select>

            <select value={categoriaId} onChange={e => setCategoriaId(Number(e.target.value))}>
                <option value={0}>Selecione a categoria</option>
                {categoriasFiltradas.map(c => (
                <option key={c.id} value={c.id}>{c.descricao}</option>
                ))}
            </select>

            <button type="button" onClick={salvar}>Salvar</button>


            {erro && (
            <div className="alert-erro">
                {erro}
            </div>
            )}
        </form>
    );
}
