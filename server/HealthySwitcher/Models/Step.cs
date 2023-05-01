namespace HealthySwitcher.Models;

public class Step
{
    public int Id { get; set; }
    public int RecipeId { get; set; }
    public string StepTitle { get; set; } = String.Empty;
    public string StepText { get; set; } = String.Empty;
}