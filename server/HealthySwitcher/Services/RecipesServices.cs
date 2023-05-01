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
    public class RecipesServices
    {
        private readonly MySQLDbContext _context;
        private readonly IMapper _mapper;

        public RecipesServices(MySQLDbContext context, IMapper mapper, TokensServices tokensServices)
        {
            _context = context;
            _mapper = mapper;
        }

        public async Task<RecipesManyDto> GetMany(RecipesParameters recipesParameters)
        {
            var recipes = _context.Recipes.Select(x => x);
            
            if (!recipesParameters.Title.IsNullOrEmpty())
            {
                recipes = recipes.Where(d => d.RecipeTitle.Contains(recipesParameters.Title));
            }
            if (!recipesParameters.Badge.IsNullOrEmpty())
            {
                recipes = recipes.Where(d => d.Badge.Contains(recipesParameters.Badge));
            }
            if (!recipesParameters.TimeFrom.IsNullOrEmpty())
            {
                DateTime date = DateTime.Parse(recipesParameters.TimeFrom, null, System.Globalization.DateTimeStyles.RoundtripKind);
                recipes = recipes.Where(d => d.PublishedAt >= date );
            }
            
            var filteredRecipes = recipes                
                .OrderBy(recipe => recipe.Id)
                .Skip((recipesParameters.Page - 1) * recipesParameters.Amount)
                .Take(recipesParameters.Amount)
                .ToList();
            
            return new RecipesManyDto()
            {
                Recipes = filteredRecipes,
                Count = recipes.Count()
            };
        }
        
        public async Task<RecipesSingleDto?> GetById(int id)
        {

            var recipe = await _context.Recipes.FindAsync(id);
            if (recipe == null)
                return null;

            RecipesSingleDto finalRecipe = _mapper.Map<RecipesSingleDto>(recipe);
            
            var steps = await _context.Steps
                .Select(s => s)
                .Where(s => s.RecipeId == recipe.Id)
                .ToListAsync();

            finalRecipe.Steps = steps;
            
            return finalRecipe;
        }
        

        public async Task<Recipe> Create(RecipesSingleDto recipe)
        {
            _context.Recipes.Add(recipe);

            await _context.SaveChangesAsync();
            
            foreach (var step in recipe.Steps)
            {
                step.RecipeId = recipe.Id;
                _context.Steps.Add(step);

                await _context.SaveChangesAsync();
            }

            return recipe;
        }
        
        public async Task<Recipe?> Update(int id, Recipe body)
        {
            var recipe = await _context.Recipes.FindAsync(id);

            if (recipe is null)
                return null;

            recipe.RecipeTitle = body.RecipeTitle;
            recipe.PublishedAt = body.PublishedAt;
            recipe.Author = body.Author;
            recipe.Badge = body.Badge;
            recipe.ViewsNum = body.ViewsNum;
            recipe.CommentsNum = body.CommentsNum;
            recipe.Style = body.Style;
            recipe.ImageLink = body.ImageLink;
            
            await _context.SaveChangesAsync();

            return recipe;
        }
        
        public async Task<Recipe?> Delete(int id)
        {
            var recipe = await _context.Recipes.FindAsync(id);

            if (recipe is null)
                return null;
            
            _context.Recipes.Remove(recipe);
            
            await _context.SaveChangesAsync();

            return recipe;
        }
    }   
}