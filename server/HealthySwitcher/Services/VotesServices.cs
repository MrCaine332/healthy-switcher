using AutoMapper;
using HealthySwitcher.DataAccess;
using HealthySwitcher.Models;
using Microsoft.EntityFrameworkCore;

namespace HealthySwitcher.Services;

public class VotesServices
{
    private readonly MySQLDbContext _context;
    private readonly IMapper _mapper;

    public VotesServices(MySQLDbContext context, IMapper mapper, TokensServices tokensServices)
    {
        _context = context;
        _mapper = mapper;
    }
    
    public async Task<List<Vote>> GetAll()
    {
        var votes = await _context.Votes
            .Select(v => v)
            .ToListAsync();
        return votes;
    }
    
    public async Task<List<Vote>> GetByDishId(int id)
    {
        var votes = await _context.Votes
            .Select(v => v)
            .Where(v => v.DishId == id)
            .ToListAsync();

        return votes;
    }
    
    public async Task<Vote> Create(Vote vote)
    {
        _context.Votes.Add(vote);
        await _context.SaveChangesAsync();

        return vote;
    }
}