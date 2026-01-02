using Microsoft.EntityFrameworkCore;

namespace ControleGastos.Api.Data
{
    /// <summary>
    /// Neste momento, apenas configura a conexão com o banco de dados. 
    /// </summary>
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options)
        {
        }

       
    }
}