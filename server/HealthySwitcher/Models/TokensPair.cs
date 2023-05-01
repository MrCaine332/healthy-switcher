using System.IdentityModel.Tokens.Jwt;

namespace HealthySwitcher.Models
{
    public class TokensPair
    {
        public string AccessToken { get; set; }
        public string RefreshToken { get; set; }
    }
}