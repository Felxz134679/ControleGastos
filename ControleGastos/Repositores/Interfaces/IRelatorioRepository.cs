using ControleGastos.Api.DTOs;

namespace ControleGastos.Api.Repositores.Interfaces
{
   
    public interface IRelatorioRepository
    {
        Task<RelatorioPorPessoaDto> GetTotaisPorPessoaAsync();
        Task<RelatorioPorCategoriaDto> GetTotaisPorCategoriaAsync();

    }  

}
