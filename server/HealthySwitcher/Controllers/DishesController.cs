using HealthySwitcher.Dtos;
using HealthySwitcher.Models;
using HealthySwitcher.Models.QueryParameters;
using HealthySwitcher.Services;
using Microsoft.AspNetCore.Mvc;

namespace HealthySwitcher.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DishesController : ControllerBase
    {
        private readonly DishesServices _dishesServices;
        
        public DishesController(DishesServices dishesServices)
        {
            _dishesServices = dishesServices;
        }
        
        [HttpGet]
        public async Task<ActionResult<DishesDto>> GetMany([FromQuery] DishesParameters dishesParameters)
        {
            var dishes = await _dishesServices.GetMany(dishesParameters);
            return Ok(dishes);
        }

        [HttpGet("daily")]
        public async Task<ActionResult<DishesDto>> GetDaily()
        {
            var dishes = await _dishesServices.GetDaily();
            return Ok(dishes);
        }
        
        [HttpGet("{id}")]
        public async Task<ActionResult<Dish?>> Get(int id)
        {
            var dish = await _dishesServices.GetById(id);
            if (dish is null)
                return NotFound();
            return Ok(dish);
        }
        
        [HttpPost]
        public async Task<ActionResult<Dish>> Post([FromBody] Dish dish)
        {
            var createdDish = await _dishesServices.Create(dish);
            return Ok(createdDish);
        }
        
        [HttpPut("{id:int}")]
        public async Task<ActionResult<Dish>> Put(int id, [FromBody] Dish dish)
        {
            var updatedDish = await _dishesServices.Update(id, dish);
            if (updatedDish is null)
                return NotFound();
            return Ok(updatedDish);
        }
        
        [HttpDelete("{id:int}")]
        public async Task<ActionResult<Dish>> Delete(int id)
        {
            var deletedDish = await _dishesServices.Delete(id);
            if (deletedDish is null)
                return NotFound();
            return Ok(deletedDish);
        }
    }
}
