namespace HealthySwitcher.Models.QueryParameters
{
    public class RecipesParameters
    {
        const int MaxPageAmount = 50;
        public int Page { get; set; } = 1;
        private int _amount = 10;
        
        public string? Title { get; set; } = String.Empty;
        public string? Badge { get; set; } = String.Empty;
        public string? TimeFrom { get; set; } = String.Empty;

        public int Amount
        {
            get
            {
                return _amount;
            }
            set
            {
                _amount = (value > MaxPageAmount) ? MaxPageAmount : value;
            }
        }
    }   
}