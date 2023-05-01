using AutoMapper;
using HealthySwitcher.Dtos;
using HealthySwitcher.Models;

namespace HealthySwitcher.Util
{
    public class AppMappingProfile : Profile
    {
        public AppMappingProfile()
        {			
            CreateMap<RegistrationDto, User>();
            CreateMap<User, UserDto>();
            CreateMap<Recipe, RecipesSingleDto>();
        }
    }
}