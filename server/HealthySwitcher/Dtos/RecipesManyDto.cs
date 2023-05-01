using HealthySwitcher.Models;

namespace HealthySwitcher.Dtos
{
    public class RecipesManyDto
    {
        public List<Recipe> Recipes { get; set; }
        public int Count { get; set; }
    }   
}