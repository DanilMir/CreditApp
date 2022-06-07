using System.Text.Json;
using CreditApp.Services;
using Microsoft.AspNetCore.Mvc;

namespace CreditApp.Controllers;


[ApiController]
[Route("[controller]")]
public class PersonController : Controller
{

    private CreditService _creditService { get; set; }
    private CriminalRecordCheckService _criminal { get; set; }
    public PersonController(CreditService creditService, CriminalRecordCheckService criminalRecordCheckService)
    {
        _creditService = creditService;
        _criminal = criminalRecordCheckService;
    }
    
    [HttpPost]
    public async Task<IActionResult> Post([FromBody]Person person)
    {
        var isCriminal = await  _criminal.IsCriminal(person);
        if (isCriminal && person.CriminalRecordInfo == "not have" ||
            !isCriminal && person.CriminalRecordInfo == "have")
        {
            return Ok(new {status = "errors",errors = new string[]{"Вы обманули нас насчет вашей судимости"}});
        }
        var points = _creditService.GetPoints(person);

        if (points <= 80) return Ok(new {status = "not allowed"});
        var procent = _creditService.GetPercentages(points);

        return Ok(new {status = "allowed", procents = procent});
    }
}