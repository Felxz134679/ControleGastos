using ControleGastos.Api.Models;

namespace ControleGastos.Api.DTOs
{
    /// <summary>
    /// DTO usado para criação de transações.
    /// </summary>
    public class TransacaoCreateDto
    {
        public string Descricao { get; set; } = string.Empty;
        public decimal Valor { get; set; }
        public TipoTransacao Tipo { get; set; }
        public int CategoriaId { get; set; }
        public int PessoaId { get; set; }
    }

    public class TransacaoListDto
    {
        public int Id { get; set; }
        public string Descricao { get; set; } = string.Empty;
        public decimal Valor { get; set; }
        public TipoTransacao Tipo { get; set; }

        public string PessoaNome { get; set; } = string.Empty;
        public string CategoriaDescricao { get; set; } = string.Empty;
    }





}
