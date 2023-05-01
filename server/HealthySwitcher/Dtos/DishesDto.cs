using HealthySwitcher.Models;

namespace HealthySwitcher.Dtos
{
    public class DishesDto
    {
        public List<DishWithVotes> Dishes { get; set; }
        public int Count { get; set; }
    }   
}