using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace angular_admin.Models
{
    public class JobSeeker
    {
        public int Id { get; set; }     
        public string IdentityId { get; set; }   
        public ApplicationUser Identity { get; set; }  // navigation property
        public string Location {get; set;}
    }
}