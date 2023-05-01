using HealthySwitcher.Models;

namespace HealthySwitcher.Dtos;

public class DishWithVotes : Dish
{
    public float? VotesAverage { get; set; }
    public int? VotesTotal { get; set; }
}