﻿namespace HealthySwitcher.Models;

public class Token
{
    public int Id { get; set; }
    public int UserId { get; set; }
    public string RefreshToken { get; set; }
    public string DeviceId { get; set; }
}