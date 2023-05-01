using AutoMapper;
using HealthySwitcher.DataAccess;
using HealthySwitcher.Dtos;
using HealthySwitcher.Exceptions;
using HealthySwitcher.Models;
using HealthySwitcher.Models.QueryParameters;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;

namespace HealthySwitcher.Services
{
    public class DishesServices
    {
        private readonly MySQLDbContext _context;
        private readonly IMapper _mapper;

        public DishesServices(MySQLDbContext context, IMapper mapper, TokensServices tokensServices)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<DishesDto> GetMany(DishesParameters dishesParameters)
        {
            var dishes = _context.Dishes
                .Select(dish => new DishWithVotes()
                {
                    Id = dish.Id,
                    Title = dish.Title,
                    CategoryId = dish.CategoryId,
                    BasePrice = dish.BasePrice,
                    Composition = dish.Composition,
                    ImageLink = dish.ImageLink,
                    ServedWith = dish.ServedWith,
                    VotesAverage = _context.Votes
                        .Where(v => v.DishId == dish.Id)
                        .Average(v => v.VoteNum),
                    VotesTotal = _context.Votes.Count(v => v.DishId == dish.Id)
                });

            if (!dishesParameters.Title.IsNullOrEmpty())
            {
                dishes = dishes.Where(d => d.Title.Contains(dishesParameters.Title));
            }
            if (dishesParameters.CategoryId != 0)
            {
                dishes = dishes.Where(d => d.CategoryId == dishesParameters.CategoryId);
            }
            if (dishesParameters.RatingMin <= dishesParameters.RatingMax)
            {
                dishes = dishes.Where(d =>
                    (d.VotesAverage ?? 0) >= dishesParameters.RatingMin &&
                    (d.VotesAverage ?? 0) <= dishesParameters.RatingMax);
            }
            
            var filteredDishes = dishes                
                .OrderBy(dish => dish.Id)
                .Skip((dishesParameters.Page - 1) * dishesParameters.Amount)
                .Take(dishesParameters.Amount)
                .ToList();
            
            return new DishesDto()
            {
                Dishes = filteredDishes,
                Count = dishes.Count()
            };
        }
        
        public async Task<Dish?> GetById(int id)
        {
            var dish = await _context.Dishes.FindAsync(id);
            return dish;
        }
        
        public async Task<List<DishWithVotes>> GetDaily()
        {
            var dishes = await _context.Dishes
                .Select(dish => new DishWithVotes()
                {
                    Id = dish.Id,
                    Title = dish.Title,
                    CategoryId = dish.CategoryId,
                    BasePrice = dish.BasePrice,
                    Composition = dish.Composition,
                    ImageLink = dish.ImageLink,
                    ServedWith = dish.ServedWith,
                    VotesAverage = _context.Votes
                        .Where(v => v.DishId == dish.Id)
                        .Average(v => v.VoteNum),
                    VotesTotal = _context.Votes.Count(v => v.DishId == dish.Id)
                })
                .ToListAsync();

            var randomedDishes = dishes
                .OrderBy(x => Guid.NewGuid())
                .Take(6)
                .ToList();

            return randomedDishes;
        }
        
        public async Task<Dish> Create(Dish dish)
        {
            _context.Dishes.Add(dish);
            await _context.SaveChangesAsync();

            return dish;
        }
        
        public async Task<Dish?> Update(int id, Dish body)
        {
            var dish = await _context.Dishes.FindAsync(id);

            if (dish is null)
                return null;

            dish.Title = body.Title;
            dish.ServedWith = body.Composition;
            dish.Composition = body.Composition;
            dish.BasePrice = body.BasePrice;
            dish.ImageLink = body.ImageLink;
            
            await _context.SaveChangesAsync();

            return dish;
        }
        
        public async Task<Dish?> Delete(int id)
        {
            var dish = await _context.Dishes.FindAsync(id);

            if (dish is null)
                return null;
            
            _context.Dishes.Remove(dish);
            
            await _context.SaveChangesAsync();

            return dish;
        }
    }   
}