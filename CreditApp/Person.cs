using System.ComponentModel.DataAnnotations;

namespace CreditApp;

public class Person
{
    [Required]
    [StringLength(50, MinimumLength = 3)]
    public string Surname { get; set; }
    
    [Required]
    [StringLength(50, MinimumLength = 3)]
    public string Name { get; set; }
    
    public string Middlename { get; set; }
    
    [Required]
    [StringLength(4, MinimumLength = 6)]
    public string Series { get; set; }
    [Required]
    [StringLength(6, MinimumLength = 6)]
    public string Number { get; set; }
    [Required]
    public string IssuedBy  { get; set; }   
    [Required]
    public DateTime DateOfIssue  { get; set; }
    [Required]
    public string ResidencyInfo { get; set; }
    
    [Required]
    public int Age { get; set; }
    [Required]
    public string CriminalRecordInfo { get; set; }
    [Required]
    public int Amount { get; set; }
    [Required]
    public string Purpose { get; set; }
    [Required]
    public string Bail { get; set; }
    public int AgeOfCar { get; set; }
    [Required]
    public int AvailabilityOfOtherLoans { get; set; }
    [Required]
    public string Employment { get; set; }
    
    
}