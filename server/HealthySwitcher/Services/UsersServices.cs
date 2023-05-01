using AutoMapper;
using HealthySwitcher.DataAccess;
using HealthySwitcher.Dtos;
using HealthySwitcher.Exceptions;
using HealthySwitcher.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace HealthySwitcher.Services
{
    public class UsersServices
    {

        private readonly MySQLDbContext _context;
        private readonly IMapper _mapper;
        private readonly TokensServices _tokensServices;

        public UsersServices(MySQLDbContext context, IMapper mapper, TokensServices tokensServices)
        {
            _context = context;
            _mapper = mapper;
            _tokensServices = tokensServices;
        }

        
        public async Task<User?> Register(User user)
        {
            bool isEmailInUse = await _context.Users.AnyAsync(x => x.Email == user.Email);
            if (isEmailInUse)
            {
                throw ApiError.BadRequest("This e-mail already is used");
            }

            string? hashPassword = BCrypt.Net.BCrypt.HashPassword(user.Password);
            user.Password = hashPassword;

            _context.Users.Add(user);
            await _context.SaveChangesAsync();
            
            User? addedUser = await _context.Users.FirstOrDefaultAsync(x => x.Email == user.Email);
            return addedUser;
        }
        
        
        public async Task<(TokensPair, User)> Login(string email, string password)
        {
            User? user = await _context.Users.FirstOrDefaultAsync(x => x.Email == email);
            if (user is null)
            {
                throw ApiError.BadRequest("Incorrect email or password");
            }

            bool isPasswordValid = BCrypt.Net.BCrypt.Verify(password, user.Password);
            if (!isPasswordValid)
            {
                throw ApiError.BadRequest("Incorrect email or password");
            }

            string deviceId = Guid.NewGuid().ToString();
            UserDto userDto = _mapper.Map<UserDto>(user);
            TokensPair tokens = _tokensServices.GenerateTokens(userDto, deviceId);
            
            await _tokensServices.SaveToken(userDto.Id, tokens.RefreshToken, deviceId);
            
            return (tokens, user);
        }
        
        
        public async Task<bool> Logout(string? refreshToken)
        {
            if (refreshToken is null) { return true; }
            TokenClaims? tokenData = _tokensServices.ValidateRefreshToken(refreshToken);

            Token? tokenToRemove = _context.Tokens.SingleOrDefault(x => 
                x.RefreshToken == refreshToken 
                && x.DeviceId == tokenData.DeviceId 
                && x.UserId == tokenData.UserId );

            if (tokenToRemove is not null)
            {
                _context.Tokens.Remove(tokenToRemove);
                await _context.SaveChangesAsync();
            }

            return true;
        }


        public async Task<(TokensPair, User)> Refresh(string? refreshToken)
        {
            if (refreshToken is null)
            {
                throw ApiError.UnauthorizedError();
            }

            TokenClaims? tokenData = _tokensServices.ValidateRefreshToken(refreshToken);
            bool isTokenInDb = await _context.Tokens.AnyAsync(x => x.RefreshToken == refreshToken);
            if (!isTokenInDb || tokenData is null)
            {
                throw ApiError.UnauthorizedError();
            }
            
            User? user = await _context.Users.FindAsync(tokenData.UserId);
            UserDto userDto = _mapper.Map<UserDto>(user);
            TokensPair tokens = _tokensServices.GenerateTokens(userDto, tokenData.DeviceId);

            await _tokensServices.SaveToken(userDto.Id, tokens.RefreshToken, tokenData.DeviceId);
            
            return (tokens, user);;
        }
        
        public async Task<List<User>> GetAll()
        {
            List<User> users = await _context.Users.Select(user => user).ToListAsync();
            return users;
        }

    }
}
