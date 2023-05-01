using System.ComponentModel.DataAnnotations;

namespace HealthySwitcher.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public string Password { get; set; } = string.Empty;
        
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;

        public DateTime LastLoginAt { get; set; } = DateTime.Now;
        public DateTime RecordCreatedAt { get; set; } = DateTime.Now;
        public DateTime RecordUpdatedAt { get; set; } = DateTime.Now;
    }
}
