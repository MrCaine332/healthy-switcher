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
    public class VotesController : ControllerBase
    {
        private readonly VotesServices _votesServices;
        
        public VotesController(VotesServices votesServices)
        {
            _votesServices = votesServices;
        }
        
        [HttpGet]
        public async Task<ActionResult<List<Category>>> GetAll()
        {
            var categories = await _votesServices.GetAll();
            return Ok(categories);
        }
        
        [HttpGet("{dishId:int}")]
        public async Task<ActionResult<Category?>> Get(int dishId)
        {
            var category = await _votesServices.GetByDishId(dishId);
            return Ok(category);
        }
        
        [HttpPost]
        public async Task<ActionResult<Category>> Post([FromBody] Vote vote)
        {
            var createdCategory = await _votesServices.Create(vote);
            return Ok(createdCategory);
        }
    }
}
