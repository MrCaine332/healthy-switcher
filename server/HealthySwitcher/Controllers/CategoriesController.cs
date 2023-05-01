using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HealthySwitcher.Models;
using HealthySwitcher.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HealthySwitcher.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriesController : ControllerBase
    {
        private readonly CategoriesServices _categoriesServices;
        
        public CategoriesController(CategoriesServices categoriesServices)
        {
            _categoriesServices = categoriesServices;
        }
        
        [HttpGet]
        public async Task<ActionResult<List<Category>>> GetAll()
        {
            var categories = await _categoriesServices.GetAll();
            return Ok(categories);
        }
        
        [HttpGet("{id}")]
        public async Task<ActionResult<Category?>> Get(int id)
        {
            var category = await _categoriesServices.GetById(id);
            return Ok(category);
        }
        
        [HttpPost]
        public async Task<ActionResult<Category>> Post([FromBody] Category category)
        {
            var createdCategory = await _categoriesServices.Create(category);
            return Ok(createdCategory);
        }
        
        [HttpPut("{id:int}")]
        public async Task<ActionResult<Dish>> Put(int id, [FromBody] Category category)
        {
            var updatedCategory = await _categoriesServices.Update(id, category);
            if (updatedCategory is null)
                return NotFound();
            return Ok(updatedCategory);
        }
        
        [HttpDelete("{id:int}")]
        public async Task<ActionResult<Dish>> Delete(int id)
        {
            var deletedCategory = await _categoriesServices.Delete(id);
            if (deletedCategory is null)
                return NotFound();
            return Ok(deletedCategory);
        }
    }
}
