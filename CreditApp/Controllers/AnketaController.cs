using Microsoft.AspNetCore.Mvc;

namespace CreditApp.Controllers;


[ApiController]
[Route("[controller]")]
public class AnketaController : Controller
{
    [HttpPost]
    public IActionResult Get([FromBody]Anket anket)
    {
        Console.WriteLine(anket.Name);
        Console.WriteLine(anket.Age);

        return Ok("Its good day, to be not ded");
    }
}