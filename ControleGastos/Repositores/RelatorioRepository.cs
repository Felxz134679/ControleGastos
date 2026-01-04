using ControleGastos.Api.Data;
using ControleGastos.Api.DTOs;
using ControleGastos.Api.Models;
using ControleGastos.Api.Repositores.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace ControleGastos.Api.Repositores
{
    public class RelatorioRepository : IRelatorioRepository
    {

        private readonly AppDbContext _context;

        public RelatorioRepository(AppDbContext context)
        {
            _context = context;
        }

        /// <summary>
        /// Basicamente eu faço uma consulta agrupando por pessoa e somando receitas e despesas
        /// </summary>
        public async Task<RelatorioPorPessoaDto> GetTotaisPorPessoaAsync()
        {
            var pessoas = await _context.Pessoas
                .Select(p => new TotalPorPessoaDto
                {
                    PessoaId = p.Id,
                    Nome = p.Nome,
                    TotalReceitas = p.Transacoes
                        .Where(t => t.Tipo == TipoTransacao.Receita)
                        .Sum(t => (decimal?)t.Valor) ?? 0,

                    TotalDespesas = p.Transacoes
                        .Where(t => t.Tipo == TipoTransacao.Despesa)
                        .Sum(t => (decimal?)t.Valor) ?? 0
                })
                .ToListAsync();

            var totalGeral = new TotalGeralDto
            {
                TotalReceitas = pessoas.Sum(p => p.TotalReceitas),
                TotalDespesas = pessoas.Sum(p => p.TotalDespesas)
            };

            return new RelatorioPorPessoaDto
            {
                Pessoas = pessoas,
                TotalGeral = totalGeral
            };
        }

        /// <summary>
        /// aqui eu faço uma consulta agrupando por categoria e somando receitas e despesas
        /// </summary>
        public async Task<RelatorioPorCategoriaDto> GetTotaisPorCategoriaAsync()
        {
            var categorias = await _context.Categorias
                .Select(c => new TotalPorCategoriaDto
                {
                    CategoriaId = c.Id,
                    Nome = c.Descricao,

                    TotalReceitas = _context.Transacoes
                        .Where(t => t.CategoriaId == c.Id && t.Tipo == TipoTransacao.Receita)
                        .Sum(t => (decimal?)t.Valor) ?? 0,

                    TotalDespesas = _context.Transacoes
                        .Where(t => t.CategoriaId == c.Id && t.Tipo == TipoTransacao.Despesa)
                        .Sum(t => (decimal?)t.Valor) ?? 0
                })
                .ToListAsync();

            var totalGeral = new TotalGeralCategoriaDto
            {
                TotalReceitas = categorias.Sum(c => c.TotalReceitas),
                TotalDespesas = categorias.Sum(c => c.TotalDespesas)
            };

            return new RelatorioPorCategoriaDto
            {
                Categorias = categorias,
                TotalGeral = totalGeral
            };
        }




    }
}
