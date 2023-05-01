using System.ComponentModel.DataAnnotations;
using HealthySwitcher.Models;

namespace HealthySwitcher.Dtos
{
    public class UserDto
    {
        public int Id { get; set; }
        public string Email { get; set; }

        public string? FirstName { get; set; }
        public string? LastName { get; set; }

        public DateTime LastLoginAt { get; set; } = DateTime.Now;
        public DateTime RecordCreatedAt { get; set; } = DateTime.Now;
        public DateTime RecordUpdatedAt { get; set; } = DateTime.Now;
    }
}
