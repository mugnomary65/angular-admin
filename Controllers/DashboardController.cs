using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using angular_admin.Models;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;

namespace angular_admin.Controllers
{
  [Produces("application/json")]
     [Route("api/[controller]")]
   
   
 
    [ApiController]
    public class DashboardController : ControllerBase
    {
         private readonly ApplicationDbContext _context;

         public DashboardController(ApplicationDbContext context)
        {
            _context = context;
        }
         [HttpGet("totalClientes")]
        public async Task<ActionResult<int>> GetTotalClientes()
        {           
          var cliente = _context.Clientes.ToList();
          int cant = cliente.Count;
          return cant;
               
        }
      
      [HttpGet("totalServicios")]
        public async Task<ActionResult<int>> GetTotalServicios()
        {           
          var servicios = _context.Servicio.ToList();
          int cant = servicios.Count;
          return cant;
               
        }
        
        [HttpGet("gastosnetos")]
        public async Task<ActionResult<double>> GetGastosNetos()
        {           
          var servicios = _context.Servicio.ToList();
          double cant = 0;
          for (int i = 0; i < servicios.Count; i++)
          {
              cant += servicios[i].Subtotal;
          }
          
        double y = Math.Round(cant,2);
               return y;
        }


    }
}