using AutoMapper;
using HealthySwitcher.DataAccess;
using HealthySwitcher.Models;
using HealthySwitcher.Models.QueryParameters;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;

namespace HealthySwitcher.Services;

public class CategoriesServices
{
    private readonly MySQLDbContext _context;
    private readonly IMapper _mapper;

    public CategoriesServices(MySQLDbContext context, IMapper mapper, TokensServices tokensServices)
    {
        _context = context;
        _mapper = mapper;
    }
    
    public async Task<List<Category>> GetAll()
    {
        var categories = await _context.Categories
            .Select(c => c)
            .ToListAsync();
        return categories;
    }
    
    public async Task<Category?> GetById(int id)
    {
        var category = await _context.Categories.FindAsync(id);
        return category;
    }
    
    public async Task<Category> Create(Category category)
    {
        _context.Categories.Add(category);
        await _context.SaveChangesAsync();

        return category;
    }
    
    public async Task<Category?> Update(int id, Category body)
    {
        var category = await _context.Categories.FindAsync(id);

        if (category is null)
            return null;

        category.CategoryName = body.CategoryName;

        await _context.SaveChangesAsync();

        return category;
    }
        
    public async Task<Category?> Delete(int id)
    {
        var category = await _context.Categories.FindAsync(id);

        if (category is null)
            return null;
            
        _context.Categories.Remove(category);
            
        await _context.SaveChangesAsync();

        return category;
    }
}