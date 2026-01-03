using ControleGastos.Api.DTOs;
using ControleGastos.Api.Repositores.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace ControleGastos.Api.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class RelatoriosController : ControllerBase
    {

        private readonly IRelatorioRepository  _repository;

        public RelatoriosController(IRelatorioRepository repository)
        {
            _repository = repository;
        }


        [HttpGet("GetPorPessoa")]
        public async Task<ActionResult<RelatorioPorPessoaDto>> GetTotaisPorPessoa()
        {
            var relatorio = await _repository.GetTotaisPorPessoaAsync();
            return Ok(relatorio);
        }

        [HttpGet("GetPorCategoria")]
        public async Task<ActionResult<RelatorioPorCategoriaDto>> GetTotaisPorCategoria()
        {
            var relatorio = await _repository.GetTotaisPorCategoriaAsync();
            return Ok(relatorio);
        }

    }
}
