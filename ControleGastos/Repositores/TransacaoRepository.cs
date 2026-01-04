using ControleGastos.Api.Data;
using ControleGastos.Api.DTOs;
using ControleGastos.Api.Models;
using ControleGastos.Api.Repositores.Interfaces;
using Microsoft.EntityFrameworkCore;



namespace ControleGastos.Api.Repositores
{
    public class TransacaoRepository : ITransacaoRepository
    {
        private readonly AppDbContext _context;

        public TransacaoRepository(AppDbContext context)
        {
            _context = context;
        }
        /// <summary>
        /// Ao criar uma transação ele valida algumas regras de negócio antes de salvar
        /// </summary>
        public async Task<Transacao> CreateTransacaoAsync(TransacaoCreateDto dto)
        {
            var pessoa = await _context.Pessoas.FindAsync(dto.PessoaId);
            if (pessoa == null)
                throw new Exception("Pessoa não encontrada.");

            var categoria = await _context.Categorias.FindAsync(dto.CategoriaId);
            if (categoria == null)
                throw new Exception("Categoria não encontrada.");

            // REGRA: menor de idade só pode despesa
            if (pessoa.Idade < 18 && dto.Tipo == TipoTransacao.Receita)
                throw new Exception("Pessoa menor de idade não pode registrar receitas.");

            // REGRA: categoria compatível com tipo
            if (dto.Tipo == TipoTransacao.Despesa &&
                categoria.Finalidade == FinalidadeCategoria.Receita)
                throw new Exception("Categoria incompatível com despesa.");

            if (dto.Tipo == TipoTransacao.Receita &&
                categoria.Finalidade == FinalidadeCategoria.Despesa)
                throw new Exception("Categoria incompatível com receita.");

            var transacao = new Transacao
            {
                Descricao = dto.Descricao,
                Valor = dto.Valor,
                Tipo = dto.Tipo,
                CategoriaId = dto.CategoriaId,
                PessoaId = dto.PessoaId
            };

            _context.Transacoes.Add(transacao);
            await _context.SaveChangesAsync();

            return transacao;
        }

        public async Task<List<TransacaoListDto>> GetAllTransacaoAsync()
        {

            
            var transacoes = await _context.Transacoes
            .Select(t => new TransacaoListDto
            {
                Id = t.Id,
                Descricao = t.Descricao,
                Valor = t.Valor,
                Tipo = t.Tipo,
                PessoaNome = t.Pessoa.Nome,
                CategoriaDescricao = t.Categoria.Descricao
            })
            .ToListAsync();


            return transacoes;

        }

    }
}
