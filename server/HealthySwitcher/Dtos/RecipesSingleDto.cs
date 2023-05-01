using HealthySwitcher.Models;

namespace HealthySwitcher.Dtos;

public class RecipesSingleDto : Recipe
{
    public List<Step> Steps { get; set; } = new List<Step>();
}