namespace ControleGastos.Api.DTOs
{
   
    public class TotalPorPessoaDto
    {
        public int PessoaId { get; set; }
        public string Nome { get; set; } = string.Empty;
        public decimal TotalReceitas { get; set; }
        public decimal TotalDespesas { get; set; }
        public decimal Saldo => TotalReceitas - TotalDespesas;
    }

    public class TotalGeralDto
    {
        public decimal TotalReceitas { get; set; }
        public decimal TotalDespesas { get; set; }
        public decimal Saldo => TotalReceitas - TotalDespesas;
    }

    public class RelatorioPorPessoaDto
    {
        public List<TotalPorPessoaDto> Pessoas { get; set; } = new();
        public TotalGeralDto TotalGeral { get; set; } = new();
    }


    public class TotalPorCategoriaDto
    {
        public int CategoriaId { get; set; }
        public string Nome { get; set; } = string.Empty;
        public decimal TotalReceitas { get; set; }
        public decimal TotalDespesas { get; set; }
        public decimal Saldo => TotalReceitas - TotalDespesas;
    }


    public class TotalGeralCategoriaDto
    {
        public decimal TotalReceitas { get; set; }
        public decimal TotalDespesas { get; set; }
        public decimal Saldo => TotalReceitas - TotalDespesas;
    }


    public class RelatorioPorCategoriaDto
    {
        public List<TotalPorCategoriaDto> Categorias { get; set; } = new();
        public TotalGeralCategoriaDto TotalGeral { get; set; } = new();
    }


}
