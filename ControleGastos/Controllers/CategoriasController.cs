using ControleGastos.Api.Models;
using ControleGastos.Api.Repositores.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace ControleGastos.Api.Controllers
{


    [ApiController]
    [Route("api/[controller]")]


    public class CategoriasController : ControllerBase
    {

        private readonly ICategoriaRepository _repository;

        public CategoriasController(ICategoriaRepository repository)
        {
            _repository = repository;
        }



        [HttpGet]

        /// <summary>
        /// Pega todas as categorias.
        /// </summary>
        public async Task<ActionResult<List<Categoria>>> GetAllCategorias()
        {
            var categorias = await _repository.GetAllCategorias();
            return Ok(categorias);
        }

        [HttpPost]
        /// <summary>
        /// Cria uma categoria.
        /// </summary>
        public async Task<ActionResult<Categoria>> CreateCategoria(Categoria categoria) { 
        
        
            var createCategoria = await _repository.CreateCategoria(categoria);

            return Ok();
        }
        

    }
}
