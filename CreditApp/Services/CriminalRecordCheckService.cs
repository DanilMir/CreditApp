namespace CreditApp.Services;

public class CriminalRecordCheckService
{
    public bool IsCriminal(Person person)
    {
        return new Random((int)DateTime.Now.Ticks).Next(100) < 50;
    }
}