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
    
    if(person.series.length > 0 && Array.from(person.series)[0] === '-'){
        errors.push("Серия паспорта должна быть больше нуля");
    }

    if(person.number.length > 0 && Array.from(person.series)[0] === '-'){
        errors.push("Номер паспорта должен быть больше нуля");
    }
    
    if(person.age < -1)
    {
        errors.push("Укажите корректный возраст");
    }

    if(person.amount < -1)
    {
        errors.push("Укажите корректную сумму кредита");
    }
    
    return errors;
}

export default Validator;