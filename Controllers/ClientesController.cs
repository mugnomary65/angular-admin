using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using angular_admin.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Authentication.JwtBearer;

namespace angular_admin.Controllers
{
     [Produces("application/json")]
     [Route("api/[controller]")]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
   
    
    [ApiController]
    public class ClientesController : ControllerBase
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
        public ClientesController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Clientes
        
    
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Cliente>>> GetClientes()
        {
            return _context.Clientes.OrderByDescending(f => f.Date.Date).ToList();
               
        }
     
        // GET: api/Clientes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Cliente>> GetCliente(int id)
        {
            var cliente = await _context.Clientes.FindAsync(id);

            if (cliente == null)
            {
                return NotFound();
            }

            return cliente;
        }

        // PUT: api/Clientes/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{clienteId}")]
        public async Task<IActionResult> PutCliente([FromRoute] int clienteId,  [FromBody] Cliente cliente)
        {
   
            if (clienteId != cliente.ClienteId)
            {
                return BadRequest();
            }

            _context.Entry(cliente).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ClienteExists(clienteId))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Clientes
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Cliente>> PostCliente(Cliente cliente)
        {
            _context.Clientes.Add(cliente);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCliente", new { id = cliente.ClienteId }, cliente);
        }

        // DELETE: api/Clientes/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Cliente>> DeleteCliente(int id)
        {
            var cliente = await _context.Clientes.FindAsync(id);
            if (cliente == null)
            {
                return NotFound();
            }

            _context.Clientes.Remove(cliente);
            await _context.SaveChangesAsync();

            return cliente;
        }

        private bool ClienteExists(int id)
        {
            return _context.Clientes.Any(e => e.ClienteId == id);
        }
         [HttpGet("cantClientes")]
        public async Task<ActionResult<List<double>>> GetGananciasDashboard()
        {           
          var clientes = _context.Clientes.ToList();

          for (int i = 0; i < clientes.Count; i++)
          {
              if(clientes[i].Date.Month == 1)
                 { 
                   enero ++;
                               
                 }
               else  if(clientes[i].Date.Month == 2)
                 { 
                   febrero ++;
                               
                 }
               else  if(clientes[i].Date.Month == 3)
                 { 
                   marzo ++;
                                
                 }
               else  if(clientes[i].Date.Month == 4)
                 { 
                   abril ++;
               
                 }
                else if(clientes[i].Date.Month == 5)
                 { 
                   mayo ++;
                               
                 }
                else if(clientes[i].Date.Month == 6)
                 { 
                   junio ++;
                         
                 }
                else if(clientes[i].Date.Month == 7)
                 { 
                   julio ++;
                           
                 }
                   else if(clientes[i].Date.Month == 8)
                 { 
                   agosto ++;
               
                 }
                 else if(clientes[i].Date.Month == 9)
                 { 
                   septiembre ++;
                  
                 }
                    else if(clientes[i].Date.Month == 10)
                 { 
                   octubre ++;
                   
                 }
                 else if(clientes[i].Date.Month == 11)
                 { 
                   noviembre ++;
                                 
                 }
                  else if(clientes[i].Date.Month == 12)
                 { 
                   diciembre ++;
                     
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
