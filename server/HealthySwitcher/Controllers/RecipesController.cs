using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HealthySwitcher.Dtos;
using HealthySwitcher.Models;
using HealthySwitcher.Models.QueryParameters;
using HealthySwitcher.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HealthySwitcher.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RecipesController : ControllerBase
    {
        private readonly RecipesServices _recipesServices;
        
        public RecipesController(RecipesServices recipesServices)
        {
            _recipesServices = recipesServices;
        }
        
        [HttpGet("Test")]
        public async Task<ActionResult> Test()
        {
            var a = 1682508718574;
            var totalMilliseconds = DateTime.UtcNow
                .Subtract(new DateTime(1970,1,1,0,0,0,DateTimeKind.Utc))
                .TotalMilliseconds;
            Console.WriteLine(totalMilliseconds);
            return Ok(true);
        }
        
        [HttpGet]
        public async Task<ActionResult<RecipesManyDto>> GetMany([FromQuery] RecipesParameters recipesParameters)
        {
            var recipes = await _recipesServices.GetMany(recipesParameters);
            return Ok(recipes);
        }
        
        [HttpGet("{id}")]
        public async Task<ActionResult<RecipesSingleDto?>> Get(int id)
        {
            var recipe = await _recipesServices.GetById(id);
            if (recipe is null)
                return NotFound();
            return Ok(recipe);
        }
        
        [HttpPost]
        public async Task<ActionResult<Recipe>> Post([FromBody] RecipesSingleDto recipe)
        {
            var createdRecipe = await _recipesServices.Create(recipe);
            return Ok(createdRecipe);
        }
        
        [HttpPut("{id:int}")]
        public async Task<ActionResult<Recipe>> Put(int id, [FromBody] Recipe recipe)
        {
            var updatedRecipe = await _recipesServices.Update(id, recipe);
            if (updatedRecipe is null)
                return NotFound();
            return Ok(updatedRecipe);
        }
        
        [HttpDelete("{id:int}")]
        public async Task<ActionResult<Recipe>> Delete(int id)
        {
            var deletedRecipe = await _recipesServices.Delete(id);
            if (deletedRecipe is null)
                return NotFound();
            return Ok(deletedRecipe);
        }
    }
}
