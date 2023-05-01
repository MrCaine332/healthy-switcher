using System.Configuration;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using HealthySwitcher.Exceptions;
using HealthySwitcher.DataAccess;
using HealthySwitcher.Dtos;
using HealthySwitcher.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;

namespace HealthySwitcher.Services
{
    public class TokensServices
    {
        private readonly IConfiguration _configuration;
        private readonly MySQLDbContext _context;

        public TokensServices(IConfiguration configuration, MySQLDbContext context)
        {
            _configuration = configuration;
            _context = context;
        }

        public TokensPair GenerateTokens(UserDto userDto, string deviceId)
        {
            var accessTokenSecurityKey =
                new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:AccessTokenKey"]));
            var accessTokenCredentials = new SigningCredentials(accessTokenSecurityKey, SecurityAlgorithms.HmacSha256);

            var refreshTokenSecurityKey =
                new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:RefreshTokenKey"]));
            var refreshTokenCredentials =
                new SigningCredentials(refreshTokenSecurityKey, SecurityAlgorithms.HmacSha256);

            var claims = new[]
            {
                new Claim("userId", Convert.ToString(userDto.Id)),
                new Claim("email", userDto.Email),
                new Claim("firstName", userDto.FirstName),
                new Claim("lastName", userDto.LastName),
                new Claim("deviceId", deviceId),
            };

            var accessTokenData = new JwtSecurityToken(_configuration["Jwt:Issuer"],
                _configuration["Jwt:Audience"],
                claims,
                expires: DateTime.Now.AddMinutes(5),
                signingCredentials: accessTokenCredentials);

            var refreshTokenData = new JwtSecurityToken(_configuration["Jwt:Issuer"],
                _configuration["Jwt:Audience"],
                claims,
                expires: DateTime.Now.AddMinutes(15),
                signingCredentials: refreshTokenCredentials);

            var accessToken = new JwtSecurityTokenHandler().WriteToken(accessTokenData);
            var refreshToken = new JwtSecurityTokenHandler().WriteToken(refreshTokenData);

            return new TokensPair() { AccessToken = accessToken, RefreshToken = refreshToken };
        }

        public async Task SaveToken(int userId, string refreshToken, string deviceId)
        {
            var existingRecord = await _context.Tokens
                .FirstOrDefaultAsync(x => x.UserId == userId && x.DeviceId == deviceId);

            if (existingRecord is not null)
            {
                existingRecord.RefreshToken = refreshToken;
                await _context.SaveChangesAsync();
                return;
            }

            var token = new Token()
            {
                UserId = userId,
                RefreshToken = refreshToken,
                DeviceId = deviceId
            };

            _context.Tokens.Add(token);
            await _context.SaveChangesAsync();
        }

        public TokenClaims? ValidateRefreshToken(string refreshToken)
        {
            try
            {
                var validationParameters = new TokenValidationParameters()
                {
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey =
                        new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:RefreshTokenKey"])),
                    ValidIssuer = _configuration["Jwt:Issuer"],
                    ValidAudience = _configuration["Jwt:Audience"],
                };
                
                var principal = new JwtSecurityTokenHandler().ValidateToken(refreshToken, validationParameters, out var validToken);
                JwtSecurityToken validJwt = validToken as JwtSecurityToken;

                TokenClaims tokenClaims = new TokenClaims()
                {
                    UserId = Convert.ToInt16(validJwt.Claims.ElementAt(0).Value),
                    Email = validJwt.Claims.ElementAt(1).Value,
                    FirstName = validJwt.Claims.ElementAt(2).Value,
                    LastName = validJwt.Claims.ElementAt(3).Value,
                    DeviceId = validJwt.Claims.ElementAt(4).Value,
                };

                return tokenClaims;
            }
            catch (Exception ex)
            {
                return null;
            }
        }
    }
}