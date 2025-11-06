using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using UniversityApi.Data;
using UniversityApi.Models;

namespace UniversityApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LecturersController : ControllerBase
    {
        private readonly AppDbContext _context;
        public LecturersController(AppDbContext context) => _context = context;

        [HttpGet]
        public async Task<IActionResult> GetAll() =>
            Ok(await _context.Lecturers.Include(l => l.Department).ToListAsync());

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var lecturer = await _context.Lecturers.Include(l => l.Department)
                                                   .FirstOrDefaultAsync(l => l.LecturerId == id);
            return lecturer == null ? NotFound() : Ok(lecturer);
        }

        [HttpPost]
        public async Task<IActionResult> Create(Lecturer lecturer)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);
            _context.Lecturers.Add(lecturer);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(Get), new { id = lecturer.LecturerId }, lecturer);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var lecturer = await _context.Lecturers.FindAsync(id);
            if (lecturer == null) return NotFound();
            _context.Lecturers.Remove(lecturer);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}
