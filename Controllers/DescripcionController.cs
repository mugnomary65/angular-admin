using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using angular_admin.Models;

namespace angular_admin.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DescripcionController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public DescripcionController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: api/Descripcion
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Descripcion>>> GetDescripcion()
        {
            return await _context.Descripcion.ToListAsync();
        }

        // GET: api/Descripcion/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Descripcion>> GetDescripcion(int id)
        {
            var descripcion = await _context.Descripcion.FindAsync(id);

            if (descripcion == null)
            {
                return NotFound();
            }

            return descripcion;
        }

        // PUT: api/Descripcion/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDescripcion(int id, Descripcion descripcion)
        {
            if (id != descripcion.Id)
            {
                return BadRequest();
            }

            _context.Entry(descripcion).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DescripcionExists(id))
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

        // POST: api/Descripcion
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Descripcion>> PostDescripcion(Descripcion descripcion)
        {
            _context.Descripcion.Add(descripcion);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDescripcion", new { id = descripcion.Id }, descripcion);
        }

        // DELETE: api/Descripcion/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Descripcion>> DeleteDescripcion(int id)
        {
            var descripcion = await _context.Descripcion.FindAsync(id);
            if (descripcion == null)
            {
                return NotFound();
            }

            _context.Descripcion.Remove(descripcion);
            await _context.SaveChangesAsync();

            return descripcion;
        }
            
       private bool DescripcionExists(int id)
        {
            return _context.Descripcion.Any(e => e.Id == id);
        }
        [HttpPost("delete/list")]
       public IActionResult DeleteList([FromBody] List<int> ids)
        {
            try
            {
                List<Descripcion> direcciones = ids.Select(id => new Descripcion() { Id = id }).ToList();
                _context.RemoveRange(direcciones);
                _context.SaveChanges();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

            return Ok();
        }
    }
}
