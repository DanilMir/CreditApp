namespace CreditApp.Services;

public class CreditService
{
    public CreditService()
    {
        
    }
    
    public int GetPoints(Person person)
    {
        var points = 0;

        switch (person.Age)
        {
            case >= 21 and <= 28:
                switch (person.Amount)
                {
                    case < 1000000:
                        points += 12;
                        break;
                    case >= 1000000 and <= 3000000:
                        points += 9;
                        break;
                    default:
                        break;
                }

                break;

            case >= 29 and <= 59:
                points += 14;
                break;

            case >= 60 and <= 72:
                if (person.Bail != "no bail")
                {
                    points += 8;
                }

                break;
        }

        if (person.CriminalRecordInfo == "not have")
        {
            points += 15;
        }

        switch (person.Employment)
        {
            case "employed under an employment contract":
                points += 14;
                break;
            case "own Individual enterprise":
                points += 12;
                break;
            case "freelancer":
                points += 8;
                break;
            case "pensioner":
                points += person.Age < 70 ? 5 : 0;
                break;
            case "unemployed":
                break;
        }

        switch (person.Purpose)
        {
            case "consumer loan":
                points += 14;
                break;
            case "property":
                points += 8;
                break;
            case "re-crediting":
                points += 12;
                break;
        }

        switch (person.Bail)
        {
            case "property":
                points += 14;
                break;
            case "car":
                if (person.AgeOfCar < 3)
                {
                    points += 8;
                }
                else
                {
                    points += 3;
                }

                break;
            case "surety":
                points += 12;
                break;
        }

        switch (person.AvailabilityOfOtherLoans)
        {
            case 0:
                points += person.Purpose == "re-crediting" ? 0 : 15;
                break;
            case 1:
                break;
        }

        switch (person.Amount)
        {
            case <= 1000000:
                points += 12;
                break;
            case > 1000000 and <= 5000000:
                points += 14;
                break;
            case > 5000000 and <= 10000000:
                points += 8;
                break;
        }

        return points;
    }

    public double GetPercentages(int points)
    {
        return points switch
        {
            < 84 => 30,
            >= 84 and < 88 => 26,
            >= 88 and < 92 => 22,
            >= 92 and < 96 => 19,
            >= 96 and < 100 => 15,
            >= 100 => 12.5
        };
    }
}