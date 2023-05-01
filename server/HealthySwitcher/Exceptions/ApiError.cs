using System.Net;
using Microsoft.AspNetCore.Mvc;

namespace HealthySwitcher.Exceptions;

public class ApiError : Exception
{
    public readonly HttpStatusCode StatusCode;
    
    private ApiError(HttpStatusCode statusCode, string message)
        : base(message)
    {
        StatusCode = statusCode;
    }

    public static ApiError BadRequest(string message)
    {
        return new ApiError(HttpStatusCode.BadRequest, message);
    }
    
    public static ApiError UnauthorizedError()
    {
        return new ApiError(HttpStatusCode.Unauthorized, "User is not authorized");
    }
    
    public static ApiError InternalServerError ()
    {
        return new ApiError(HttpStatusCode.InternalServerError, "Something went wrong");
    }
}