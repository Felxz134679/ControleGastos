using ControleGastos.Api.Data;
using ControleGastos.Api.Models;
using ControleGastos.Api.Repositores.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace ControleGastos.Api.Repositores
{
    public class CategoriaRepository : ICategoriaRepository
    {

        private readonly AppDbContext _context;

        public CategoriaRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task<List<Categoria>> GetAllCategorias() {

            return await _context.Categorias.ToListAsync();

        }

        public async Task<Categoria> CreateCategoria(Categoria categoria)
        {
            _context.Categorias.Add(categoria);
            await _context.SaveChangesAsync();
            return categoria;
        }

        
    }
}
