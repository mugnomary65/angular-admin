using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using angular_admin.Models;

namespace angular_admin.Models
{
    public class ApplicationDbContext :IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        :base(options)
        {
            
        }
        public DbSet<Cliente> Clientes {get; set;}
      protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        
     optionsBuilder.UseSqlServer("Data Source=tcp:admin-vidaldbserver.database.windows.net,1433;Initial Catalog=admin-vidal_db;User Id=admin-vidal@admin-vidaldbserver;Password=Liveg0.c0m");
      
    }
   protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
           
          modelBuilder.Entity<Cliente>().ToTable("Clientes");
            modelBuilder.Entity<Servicio>().ToTable("Servicios");
            modelBuilder.Entity<Estado>().ToTable("Estados");
              modelBuilder.Entity<Descripcion>().ToTable("Descripcion");
               base.OnModelCreating(modelBuilder);
           
        }
        
    public DbSet<angular_admin.Models.Servicio> Servicio { get; set; }
    public DbSet<angular_admin.Models.Estado> Estado { get; set; }
    public DbSet<angular_admin.Models.Descripcion> Descripcion { get; set; }
         
    }

    }

