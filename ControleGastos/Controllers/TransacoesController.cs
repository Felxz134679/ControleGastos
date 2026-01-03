using ControleGastos.Api.DTOs;
using ControleGastos.Api.Repositores.Interfaces;
using ControleGastos.Api.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace ControleGastos.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TransacoesController : ControllerBase
    {
        private readonly ITransacaoRepository _repository;

        public TransacoesController(ITransacaoRepository repository)
        {
            _repository = repository;
        }

        [HttpPost]
        public async Task<IActionResult> CreateTransacao(TransacaoCreateDto dto)
        {
            try
            {
                var transacao = await _repository.CreateTransacaoAsync(dto);
                return Created("", transacao);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet]
        public async Task<IActionResult> GetAllTransacoes()
        {
            var transacoes = await _repository.GetAllTransacaoAsync();
            return Ok(transacoes);
        }
    }
}
