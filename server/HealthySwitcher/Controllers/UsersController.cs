using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using HealthySwitcher.Dtos;
using HealthySwitcher.Exceptions;
using HealthySwitcher.Models;
using HealthySwitcher.Services;
using Microsoft.AspNetCore.Authorization;
using IHostingEnvironment = Microsoft.Extensions.Hosting.IHostingEnvironment;

namespace HealthySwitcher.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly UsersServices _usersServices;
        private readonly IMapper _mapper;
        private readonly IHostingEnvironment _env;

        public UsersController(UsersServices usersServices, IMapper mapper, IHostingEnvironment env)
        {
            _usersServices = usersServices;
            _mapper = mapper;
            _env = env;
        }


        // [HttpGet]
        // [Authorize]
        // public async Task<ActionResult<List<User>>> Get(int id)
        // {
        //     List<User> users = await _usersServices.GetAll();
        //     return Ok(users);
        // }
        //
        //
        // [AllowAnonymous]
        // [HttpPost("register")]
        // public async Task<ActionResult<UserDto>> Register([FromBody] RegistrationDto userDto)
        // {
        //     User candidate = _mapper.Map<User>(userDto);
        //     User? user = await _usersServices.Register(candidate);
        //     if (user is null)
        //     {
        //         throw ApiError.InternalServerError();
        //     }
        //
        //     UserDto createdUser = _mapper.Map<UserDto>(user);
        //
        //     return Created("users", createdUser);
        // }
        //
        //
        // [AllowAnonymous]
        // [HttpPost("login")]
        // public async Task<ActionResult<AuthorizedDto>> Login([FromBody] LoginDto userDto)
        // {
        //     (TokensPair tokens, User user) = await _usersServices.Login(userDto.Email, userDto.Password);
        //     Response.Cookies.Append("RefreshToken", tokens.RefreshToken,
        //         new CookieOptions()
        //         {
        //             HttpOnly = true
        //         });
        //
        //     return Ok(new AuthorizedDto() { AccessToken = tokens.AccessToken, UserData = _mapper.Map<UserDto>(user) });
        // }
        //
        //
        // [AllowAnonymous]
        // [HttpPost("logout")]
        // public async Task<ActionResult<bool>> Logout()
        // {
        //     var refreshToken = Request.Cookies["RefreshToken"];
        //     var isLogoutSuccessful = await _usersServices.Logout(refreshToken);
        //     Response.Cookies.Delete("RefreshToken");
        //
        //     return Ok(isLogoutSuccessful);
        // }
        //
        //
        // [AllowAnonymous]
        // [HttpPost("refresh")]
        // public async Task<ActionResult<AuthorizedDto>> Refresh()
        // {
        //     var refreshToken = Request.Cookies["RefreshToken"];
        //     (TokensPair tokens, User user) = await _usersServices.Refresh(refreshToken);
        //     Response.Cookies.Append("RefreshToken", tokens.RefreshToken,
        //         new CookieOptions()
        //         {
        //             HttpOnly = true
        //         });
        //
        //     return Ok(new AuthorizedDto() { AccessToken = tokens.AccessToken, UserData = _mapper.Map<UserDto>(user) });
        // }
    }
}