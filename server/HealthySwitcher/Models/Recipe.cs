namespace HealthySwitcher.Models
{
    public class Recipe
    {
        public int Id { get; set; }
        public string RecipeTitle { get; set; } = String.Empty;
        public string Author { get; set; } = String.Empty;
        public string Badge { get; set; } = String.Empty;
        public int ViewsNum { get; set; } = 0;
        public int CommentsNum { get; set; } = 0;
        public string Style { get; set; } = "Primary";
        public string? ImageLink { get; set; } = null;
        public DateTime PublishedAt { get; set; } = DateTime.Now;
    }   
}