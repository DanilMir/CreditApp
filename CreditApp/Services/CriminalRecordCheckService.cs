namespace CreditApp.Services;

public class CriminalRecordCheckService
{
    public Task<bool> IsCriminal(Person person)
    {
        return Task.FromResult(new Random((int)DateTime.Now.Ticks).Next(100) < 10);
    }
}