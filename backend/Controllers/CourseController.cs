using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CourseController : ControllerBase
{
    [HttpGet]
    public IActionResult GetCourses()
    {
        var courses = new[]
        {
            "Stock Market Basics",
            "Technical Analysis",
            "Fundamental Analysis"
        };

        return Ok(courses);
    }
}
