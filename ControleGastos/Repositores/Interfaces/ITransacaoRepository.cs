using ControleGastos.Api.DTOs;
using ControleGastos.Api.Models;

namespace ControleGastos.Api.Repositores.Interfaces
{
    public interface ITransacaoRepository
    {
        Task<Transacao> CreateTransacaoAsync(TransacaoCreateDto dto);
        Task<List<Transacao>> GetAllTransacaoAsync();
    }
}
