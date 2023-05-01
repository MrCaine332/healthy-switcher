namespace HealthySwitcher.Models;

public class TokenClaims
{
    public int UserId { get; set; }
    public string Email { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string DeviceId { get; set; }
}