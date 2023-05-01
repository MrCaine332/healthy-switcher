namespace HealthySwitcher.Models.QueryParameters
{
    public class DishesParameters
    {
        const int MaxPageAmount = 50;
        public int Page { get; set; } = 1;
        private int _amount = 10;
        
        public string? Title { get; set; } = String.Empty;
        public int? CategoryId { get; set; } = 0;
        public float? RatingMin { get; set; } = 0;
        public float? RatingMax { get; set; } = 5;

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