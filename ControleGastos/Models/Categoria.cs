namespace ControleGastos.Api.Models
{

    //Representa uma Categoria 
    public class Categoria
    {
        public int Id { get; set; }

        public string Descricao { get; set; } = string.Empty;

        public FinalidadeCategoria Finalidade { get; set; }
    }
}
