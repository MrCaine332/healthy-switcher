namespace HealthySwitcher.Models
{
    public class Vote
    {
        public int Id { get; set; }
        public int DishId { get; set; }
        public float VoteNum { get; set; } = 0;
    }
}