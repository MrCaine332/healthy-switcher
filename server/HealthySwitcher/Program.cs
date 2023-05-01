using System.Configuration;
using System.Text;
using HealthySwitcher.DataAccess;
using HealthySwitcher.middlewares;
using HealthySwitcher.Models;
using HealthySwitcher.Services;
using HealthySwitcher.Util;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;

var builder = WebApplication.CreateBuilder(args);

ConfigureServices();
ConfigureDatabase();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(policy =>
{
    policy.AllowAnyHeader();
    policy.AllowAnyMethod();
    policy.AllowAnyOrigin();
    policy.SetIsOriginAllowed(x => true);
});

app.UseHttpsRedirection();

app.UseRouting();

app.UseMiddleware<ErrorMiddleware>();

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();



void ConfigureServices()
{
    builder.Services.AddAutoMapper(typeof(AppMappingProfile));
    builder.Services.AddRouting(options => options.LowercaseUrls = true);
    builder.Services.AddControllers();
    builder.Services.AddCors();
    builder.Services.AddSwaggerGen();
    builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
        .AddJwtBearer(options =>
        {
            options.TokenValidationParameters = new TokenValidationParameters
            {
                ValidateIssuer = true,
                ValidateAudience = true,
                ValidateLifetime = true,
                ValidateIssuerSigningKey = true,
                ValidIssuer = builder.Configuration["Jwt:Issuer"],
                ValidAudience = builder.Configuration["Jwt:Audience"],
                IssuerSigningKey = new SymmetricSecurityKey(
                    Encoding.UTF8.GetBytes(builder.Configuration["Jwt:AccessTokenKey"]))
            };
        });
    
    builder.Services.AddScoped<UsersServices>();
    builder.Services.AddScoped<TokensServices>();
    builder.Services.AddScoped<CategoriesServices>();
    builder.Services.AddScoped<DishesServices>();
    builder.Services.AddScoped<VotesServices>();
    builder.Services.AddScoped<RecipesServices>();
}

void ConfigureDatabase()
{
    string? connectionString = builder.Configuration.GetConnectionString("DefaultConnectionMySQL");
    builder.Services.AddDbContextPool<MySQLDbContext>(options
        => options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString)));
}