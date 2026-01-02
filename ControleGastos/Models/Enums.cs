namespace ControleGastos.Api.Models
{

    /// Define o tipo da transação financeira.
 
    public enum TipoTransacao
    {
        Despesa = 1,
        Receita = 2
    }
 
    /// Define a finalidade de uso de uma categoria.
    public enum FinalidadeCategoria
    {
        Despesa = 1,
        Receita = 2,
        Ambas = 3
    }
}