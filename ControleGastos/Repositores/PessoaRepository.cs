using ControleGastos.Api.Data;
using ControleGastos.Api.Models;
using ControleGastos.Api.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace ControleGastos.Api.Repositories
{
    public class PessoaRepository : IPessoaRepository
    {
        private readonly AppDbContext _context;

        public PessoaRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task<List<Pessoa>> GetAllPessoasAsync()
        {
            return await _context.Pessoas.ToListAsync();
        }

        public async Task<Pessoa> CreatePessoaAsync(Pessoa pessoa)
        {
            _context.Pessoas.Add(pessoa);
            await _context.SaveChangesAsync();
            return pessoa;
        }
        /// <summary>
        /// Primeiro eu encontro esta pessoa e depois eu deleto ela. Se tiver transações associadas, o EF Core ira exluir junto.
        /// </summary>
        public async Task<bool> DeletePessoaAsync(int id)
        {
            var pessoa = await _context.Pessoas.FindAsync(id);
            if (pessoa == null)
                return false;

            _context.Pessoas.Remove(pessoa);
            await _context.SaveChangesAsync();
            return true;
        }
    }
}
