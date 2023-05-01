namespace HealthySwitcher.Models
{
    public class Dish
    {
        public int Id { get; set; }
        public int CategoryId { get; set; }
        public string Title { get; set; } = String.Empty;
        public string ServedWith { get; set; } = String.Empty;
        public string Composition { get; set; } = String.Empty;
        public float BasePrice { get; set; } = 0;
        public string? ImageLink { get; set; }
    }   
}