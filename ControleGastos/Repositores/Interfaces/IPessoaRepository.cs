using ControleGastos.Api.Models;

namespace ControleGastos.Api.Repositories.Interfaces
{
    public interface IPessoaRepository
    {
        Task<List<Pessoa>> GetAllPessoasAsync();
        Task<Pessoa> CreatePessoaAsync(Pessoa pessoa);
        Task<bool> DeletePessoaAsync(int id);
    }
}