import Person from "../interfaces/Person";

const Validator = (person: Person) : string[] => {
    const errors : string[] = [];
    
    if(person.surname.length === 0){
        errors.push("Фамилия отсуствует");
    }
    if(person.name.length === 0){
        errors.push("Имя отсуствует");
    }
    
    if(person.series.length !== 4)
    {
        errors.push("Серия должна состоять из 4 цифр");
    }

    if(person.number.length !== 6)
    {
        errors.push("Номер паспорта должен состоять из 6 цифр");
    }

    if(person.issuedBy.length === 0)
    {
        errors.push("Кем выдан отсуствует");
    }

    if(person.residencyInfo.length === 0)
    {
        errors.push("Информация о прописке отсуствует");
    }

    if(person.age === -1)
    {
        errors.push("Возраст отсуствует");
    }

    if(person.amount === -1)
    {
        errors.push("Сумма кредита отсуствует");
    }
    
    return errors;
}

export default Validator;