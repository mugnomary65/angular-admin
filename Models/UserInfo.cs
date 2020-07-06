using AutoMapper;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
namespace angular_admin.Models
{
    
    public class UserInfo
    {
         public string Email { get; set; }
        public string Password { get; set; }
        public string FirstName {get;set;}
        public string LastName {get;set;}
        public string Location { get; set; }    
    }
}