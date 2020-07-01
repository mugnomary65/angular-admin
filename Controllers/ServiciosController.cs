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
    //[Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]




    [ApiController]

    public class ServiciosController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public ServiciosController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Servicios
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Servicio>>> GetServicio()
        {
            var servicio = _context.Servicio.Include(x=> x.Clientes).Include(d => d.Estados).Include(x=> x.Descripcions).OrderByDescending(f => f.Date.Date).ToList();;

            return servicio;
        }

        // GET: api/Servicios/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Servicio>> GetServicio([FromRoute] int id, bool incluirDescripcion = false)
        {
           
           Servicio servicio;
           if(incluirDescripcion)
           {
                 servicio =  await _context.Servicio.Include(x=> x.Clientes).Include(d => d.Estados).Include(a => a.Descripcions).SingleOrDefaultAsync(i => i.Id == id);
           }
           else{
                servicio = await _context.Servicio.Include(x=> x.Clientes).Include(d => d.Estados).SingleOrDefaultAsync(i => i.Id == id);
           }         
            
            if (servicio == null)
            {
                return NotFound();
            }

            return servicio;
        }
        private async Task CrearoEditarDescripciones(List<Descripcion> descripcion)
        {
            List<Descripcion> descripcionesAcrear = descripcion.Where(x => x.Id ==0).ToList();
            List<Descripcion> descripcionesAeditar = descripcion.Where(x => x.Id !=0).ToList();
          
          if(descripcionesAcrear.Any())
          {
            await  _context.AddRangeAsync(descripcionesAcrear);
          }   
          if(descripcionesAeditar.Any())
          {
              _context.UpdateRange(descripcionesAeditar);
          }
     }

        // PUT: api/Servicios/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
    
        [HttpPut("{id}")]
        public async Task<IActionResult> PutServicio([FromRoute] int id,  [FromBody] Servicio servicio)
        {
            if (id != servicio.Id)
            {
                return BadRequest();
            }

            _context.Entry(servicio).State = EntityState.Modified;

            try
            {
                 await CrearoEditarDescripciones(servicio.Descripcions.ToList());
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ServicioExists(id))
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

        // POST: api/Servicios
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Servicio>> PostServicio(Servicio servicio)
        {
            
            _context.Servicio.Add(servicio);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetServicio", new { id = servicio.Id }, servicio);
        }

        // DELETE: api/Servicios/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Servicio>> DeleteServicio(int id)
        {
            var servicio = await _context.Servicio.FindAsync(id);
            if (servicio == null)
            {
                return NotFound();
            }

            _context.Servicio.Remove(servicio);
            await _context.SaveChangesAsync();

            return servicio;
        }

        private bool ServicioExists(int id)
        {
            return _context.Servicio.Any(e => e.Id == id);
        }
     
    }
}
