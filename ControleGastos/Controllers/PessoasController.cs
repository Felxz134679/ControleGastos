using ControleGastos.Api.Data;
using ControleGastos.Api.Models;
using ControleGastos.Api.Repositories.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ControleGastos.Api.Controllers
{
    /// <summary>
    /// Controller responsável pelo gerenciamento de pessoas.
    /// </summary>
    [ApiController]
    [Route("api/[controller]")]
    public class PessoasController : ControllerBase
    {
        private readonly IPessoaRepository _repository;

        public PessoasController(IPessoaRepository repository)
        {
            _repository = repository;
        }

        /// <summary>
        /// Lista todas as pessoas cadastradas.
        /// </summary>
        [HttpGet]
        public async Task<ActionResult<List<Pessoa>>> GetAllPessoas()
        {


            var pessoas = await _repository.GetAllPessoasAsync();
            return Ok(pessoas);
        }

      

        /// <summary>
        /// Cria uma nova pessoa.
        /// </summary>
        [HttpPost]
        public async Task<ActionResult<Pessoa>> CreatePessoa(Pessoa pessoa)
        {
            var criada = await _repository.CreatePessoaAsync(pessoa);

            return Ok();
        }

        /// <summary>
        /// Remove uma pessoa e todas as suas transações.
        /// </summary>
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePessoa(int id)
        {
            var removido = await _repository.DeletePessoaAsync(id);

            if (!removido)
                return NotFound();

            return NoContent();
        }
    }
}
