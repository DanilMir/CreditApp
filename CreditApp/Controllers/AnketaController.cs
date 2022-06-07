using System.Text.Json;
using Microsoft.AspNetCore.Mvc;

namespace CreditApp.Controllers;


[ApiController]
[Route("[controller]")]
public class AnketaController : Controller
{
    [HttpPost]
    public IActionResult Get([FromBody]Person person)
    {
        string jsonString = JsonSerializer.Serialize(person);
        Console.WriteLine(jsonString);
        // return Ok("Its good day, to be not ded");
        return Ok(jsonString);
    }
}