using ControleGastos.Api.Models;

namespace ControleGastos.Api.Repositores.Interfaces
{
    public interface ICategoriaRepository
    {
        Task<List<Categoria>> GetAllCategorias();
        Task<Categoria> CreateCategoria(Categoria categoria);

    }
}
