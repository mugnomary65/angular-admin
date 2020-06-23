using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using angular_admin.Models;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace angular_admin.Controllers
{
  [Produces("application/json")]
   [Route("api/[controller]")]
     
   
   
    [ApiController]
    public class GananciasController : ControllerBase
    {
         private readonly ApplicationDbContext _context;
                   double enero = 0;
          double febrero = 0;
          double marzo = 0;
          double abril = 0;
          double mayo = 0;
          double junio = 0;
          double julio = 0;
          double agosto = 0;
          double septiembre = 0;
          double octubre = 0;
          double noviembre = 0;
          double diciembre = 0;
         
          double x;
          
          List<double> meses = new List<double>();
         public GananciasController(ApplicationDbContext context)
         {
             _context = context;
         }
         [HttpGet]
        public async Task<ActionResult<double>> GetGanancias()
        {           
          var servicios = _context.Servicio.ToList();
          double cant = 0;
          
      for (int i = 0; i < servicios.Count; i++)
          {              
          cant += servicios[i].Ganancias;
                         
          }
          double x = Math.Round(cant,2);
          return x;
               
        }
        [HttpGet("gananciasDashb")]
        public async Task<ActionResult<List<double>>> GetGananciasDashboard()
        {           
          var servicios = _context.Servicio.ToList();

          for (int i = 0; i < servicios.Count; i++)
          {
              if(servicios[i].Date.Month == 1)
                 { 
                   enero += servicios[i].Ganancias;
                   enero = Math.Round(enero,2);               
                 }
               else  if(servicios[i].Date.Month == 2)
                 { 
                   febrero += servicios[i].Ganancias;
                   febrero = Math.Round(febrero,2);               
                 }
               else  if(servicios[i].Date.Month == 3)
                 { 
                   marzo += servicios[i].Ganancias;
                   marzo = Math.Round(marzo,2);               
                 }
               else  if(servicios[i].Date.Month == 4)
                 { 
                   abril += servicios[i].Ganancias;
                   abril = Math.Round(abril,2);               
                 }
                else if(servicios[i].Date.Month == 5)
                 { 
                   mayo += servicios[i].Ganancias;
                   mayo = Math.Round(mayo,2);               
                 }
                else if(servicios[i].Date.Month == 6)
                 { 
                   junio += servicios[i].Ganancias;
                   junio = Math.Round(junio,2);               
                 }
                else if(servicios[i].Date.Month == 7)
                 { 
                   julio += servicios[i].Ganancias;
                   julio = Math.Round(julio,2);               
                 }
                   else if(servicios[i].Date.Month == 8)
                 { 
                   agosto += servicios[i].GastosNetos;
                   agosto = Math.Round(agosto,2);               
                 }
                 else if(servicios[i].Date.Month == 9)
                 { 
                   septiembre += servicios[i].GastosNetos;
                   septiembre = Math.Round(septiembre,2);               
                 }
                    else if(servicios[i].Date.Month == 10)
                 { 
                   octubre += servicios[i].GastosNetos;
                   octubre = Math.Round(octubre,2);               
                 }
                 else if(servicios[i].Date.Month == 11)
                 { 
                   noviembre += servicios[i].GastosNetos;
                   noviembre = Math.Round(noviembre,2);               
                 }
                  else if(servicios[i].Date.Month == 12)
                 { 
                   diciembre += servicios[i].GastosNetos;
                   diciembre = Math.Round(diciembre,2);               
                 }
                                
          }
           meses.Add(enero);
           meses.Add(febrero);
           meses.Add(marzo);
           meses.Add(abril);
           meses.Add(mayo);
           meses.Add(junio);
           meses.Add(julio);
            meses.Add(agosto);
           meses.Add(septiembre);
           meses.Add(octubre);
           meses.Add(noviembre);
            meses.Add(diciembre);
           
          return meses;               
        }
         [HttpGet("gastosDashb")]
        public async Task<ActionResult<List<double>>> GetGastosDashboard()
        {           
          var servicios = _context.Servicio.ToList();

          for (int i = 0; i < servicios.Count; i++)
          {
              if(servicios[i].Date.Month == 1)
                 { 
                   enero += servicios[i].GastosNetos;
                   enero = Math.Round(enero,2);               
                 }
               else  if(servicios[i].Date.Month == 2)
                 { 
                   febrero += servicios[i].GastosNetos;
                   febrero = Math.Round(febrero,2);               
                 }
               else  if(servicios[i].Date.Month == 3)
                 { 
                   marzo += servicios[i].GastosNetos;
                   marzo = Math.Round(marzo,2);               
                 }
               else  if(servicios[i].Date.Month == 4)
                 { 
                   abril += servicios[i].GastosNetos;
                   abril = Math.Round(abril,2);               
                 }
                else if(servicios[i].Date.Month == 5)
                 { 
                   mayo += servicios[i].GastosNetos;
                   mayo = Math.Round(mayo,2);               
                 }
                else if(servicios[i].Date.Month == 6)
                 { 
                   junio += servicios[i].GastosNetos;
                   junio = Math.Round(junio,2);               
                 }
                else if(servicios[i].Date.Month == 7)
                 { 
                   julio += servicios[i].GastosNetos;
                   julio = Math.Round(julio,2);               
                 }
                 else if(servicios[i].Date.Month == 8)
                 { 
                   agosto += servicios[i].GastosNetos;
                   agosto = Math.Round(agosto,2);               
                 }
                 else if(servicios[i].Date.Month == 9)
                 { 
                   septiembre += servicios[i].GastosNetos;
                   septiembre = Math.Round(septiembre,2);               
                 }
                  else if(servicios[i].Date.Month == 10)
                 { 
                   octubre += servicios[i].GastosNetos;
                   octubre = Math.Round(octubre,2);               
                 }
                 else if(servicios[i].Date.Month == 11)
                 { 
                   noviembre += servicios[i].GastosNetos;
                   noviembre = Math.Round(noviembre,2);               
                 }
                 else if(servicios[i].Date.Month == 12)
                 { 
                   diciembre += servicios[i].GastosNetos;
                   diciembre = Math.Round(diciembre,2);               
                 }
               
                                
          }
         meses.Add(enero);
           meses.Add(febrero);
           meses.Add(marzo);
           meses.Add(abril);
           meses.Add(mayo);
           meses.Add(junio);
           meses.Add(julio);
            meses.Add(agosto);
           meses.Add(septiembre);
           meses.Add(octubre);
           meses.Add(noviembre);
            meses.Add(diciembre);
          return meses;               
        }
        
    }
}