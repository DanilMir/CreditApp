import React, {useState} from 'react';
import {Button, Form, FormFeedback, FormGroup, Input, Label} from "reactstrap";
import ResultForm from "./Result";
import Person from "../interfaces/Person";
import Validation from "../interfaces/Validation";
import Result from "../interfaces/Result";

const PersonForm = () => {
    
    
    const [person, updatePerson] = useState<Person>({
        surname: "",
        name: "",
        middlename: "",
        series: "",
        number: "",
        issuedBy: "",
        dateOfIssue: new Date(),
        residencyInfo: "",
        age: -1,
        criminalRecordInfo: "not have",
        amount: -1,
        purpose: "consumer loan",
        bail: "no bail",
        ageOfCar: -1,
        availabilityOfOtherLoans: 0,
        employment: "employed under an employment contract",
    });
    const [validation, updateValidation] = useState<Validation>({
        surname: false,
        name: false,
        middlename: false,
        series: false,
        number: false,
        issuedBy: false,
        dateOfIssue: false,
        residencyInfo: false,
        age: false,
        criminalRecordInfo: false,
        amount: false,
        purpose: false,
        bail: false,
        ageOfCar: false,
        availabilityOfOtherLoans: false,
        employment: false,
    })
    
    const [result, updateResult] = useState<Result>({
        status: "none",
        procents: 0
    });
    
    
    function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        
        if(!isDataCorrect()){
            return;
        }
        else{
            fetch('person',
                {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(person)
                })
                .then(res => res.json())
                .then(res => {
                    updateResult({...res})
                })
        }
    }

    function isDataCorrect() : boolean {
        let status = true;
        
        if(person.surname.length < 3 || person.surname.length > 50)
        {
            validation.surname = true;
            status = false;
        }
        else {validation.surname = false}
        
        return status;
    }
    
    const onChangeHandler = (e : React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        updatePerson((prevState) => ({ ...prevState, [name]: value }));
        console.log(person)
    };
    
    function renderAutoChoose(){
        return (
            <FormGroup>
                <Label for="ageOfCar">
                    Возраст автомобиля
                </Label>
                <Input
                    placeholder="Возраст автомобиля"
                    type="number"
                    name="ageOfCar"
                    onChange={onChangeHandler}
                />
            </FormGroup>
        )
    }
    
    return (
        <div className="App">
            <h2>Person form</h2>
            <Form 
                className="form"
                onSubmit={onSubmit}>

                <FormGroup
                >
                    <Label for="Surname">
                        Фамилия
                    </Label>
                    <Input
                        placeholder="Фамилия"
                        name="surname"
                        type="text"
                        onChange={onChangeHandler}
                        invalid={validation.surname}
                    />
                    <FormFeedback>
                        Oh noes! that name is already taken
                    </FormFeedback>
                </FormGroup>

                <FormGroup>
                    <Label for="Name">
                        Имя
                    </Label>
                    <Input
                        name="name"
                        placeholder="Имя"
                        type="text"
                        onChange={onChangeHandler}
                        invalid={validation.name}
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="Middlename">
                        Отчество
                    </Label>
                    <Input
                        placeholder="Отчество"
                        name="middlename"
                        type="text"
                        onChange={onChangeHandler}
                        invalid={validation.middlename}
                    />
                </FormGroup>
                
                <FormGroup>
                    <Label for="Series">
                        Cерия
                    </Label>
                    <Input
                        placeholder="Cерия"
                        type="number"
                        name="series"
                        onChange={onChangeHandler}
                        invalid={validation.series}
                    />
                </FormGroup>
                
                <FormGroup>
                    <Label for="Number">
                        Номер
                    </Label>
                    <Input
                        placeholder="Номер"
                        type="number"
                        name="number"
                        onChange={onChangeHandler}
                        invalid={validation.number}
                    />
                </FormGroup>
                
                <FormGroup>
                    <Label for="Issued By">
                        Кем выдан
                    </Label>
                    <Input
                        placeholder="Кем выдан"
                        type="text"
                        name="issuedBy"
                        onChange={onChangeHandler}
                        invalid={validation.issuedBy}
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="DateOfIssue">
                        Дата выдачи
                    </Label>
                    <Input
                        placeholder="Дата выдачи"
                        type="date"
                        name="dateOfIssue"
                        onChange={onChangeHandler}
                        invalid={validation.dateOfIssue}
                    />
                </FormGroup>
                
                <FormGroup>
                    <Label for="ResidencyInfo">
                        Информация о прописке
                    </Label>
                    <Input
                        placeholder="Информация о прописке"
                        type="text"
                        name="residencyInfo"
                        onChange={onChangeHandler}
                        invalid={validation.residencyInfo}
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="age">
                        Возраст
                    </Label>
                    <Input
                        placeholder="Возраст"
                        type="number"
                        name="age"
                        onChange={onChangeHandler}
                        invalid={validation.age}
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="criminalRecordInfo">
                        Сведения о судимости
                    </Label>
                    <Input
                        placeholder="Сведения о судимости"
                        type="select"
                        name="criminalRecordInfo"
                        onChange={onChangeHandler}
                        invalid={validation.criminalRecordInfo}
                    >
                        <option value="not have">
                            Не было
                        </option>
                        <option value="have">
                            Было
                        </option>
                    </Input>
                </FormGroup>

                <FormGroup>
                    <Label for="amount">
                        Сумма кредита
                    </Label>
                    <Input
                        placeholder="Сумма кредита"
                        type="number"
                        name="amount"
                        onChange={onChangeHandler}
                        invalid={validation.amount}
                    />
                </FormGroup>
                
                <FormGroup>
                    <Label for="purpose">
                        Цель
                    </Label>
                    <Input
                        type="select"
                        name="purpose"
                        onChange={onChangeHandler}
                        invalid={validation.purpose}
                    >
                        <option value="consumer loan">
                            Потребительский кредит
                        </option>
                        <option value="property">
                            Недвижимость
                        </option>
                        <option value="re-crediting">
                            Перекредитование
                        </option>
                    </Input>
                </FormGroup>

                <FormGroup>
                    <Label for="bail">
                        Залог
                    </Label>
                    <Input
                        type="select"
                        name="bail"
                        onChange={onChangeHandler}
                        invalid={validation.bail}
                    >
                        <option value="no bail">
                            Нет залога
                        </option>
                        <option value="property">
                            Недвижимость
                        </option>
                        <option value="car">
                            Автомобиль
                        </option>
                        <option value="surety">
                            Поручительство
                        </option>
                    </Input>
                </FormGroup>

                { person.bail ===  'car' ? renderAutoChoose() : ""}
                
                <FormGroup>
                    <Label for="availabilityOfOtherLoans">
                        Наличие других кредитов
                    </Label>
                    <Input
                        type="select"
                        name="availabilityOfOtherLoans"
                        onChange={onChangeHandler}
                        invalid={validation.availabilityOfOtherLoans}
                    >
                        <option value="0">
                            Нет
                        </option>
                        <option value="1">
                            Есть
                        </option>
                    </Input>
                </FormGroup>

                <FormGroup>
                    <Label for="employment">
                        Трудоустройство
                    </Label>
                    <Input
                        type="select"
                        name="employment"
                        onChange={onChangeHandler}
                        invalid={validation.employment}
                    >
                        <option value="employed under an employment contract">
                            Трудоустроен по трудовому договору
                        </option>
                        <option value="own Individual enterprise">
                            Собственное ИП
                        </option>
                        <option value="freelancer">
                            Фрилансер
                        </option>
                        <option value="pensioner">
                            Пенсионер
                        </option>
                        <option value="unemployed">
                            Безработный
                        </option>
                    </Input>
                </FormGroup>
                
                <Button>Отправить</Button>
            </Form>
            <
                ResultForm
                status={result.status}
                procents={result.procents}
            />
        </div>
    )
}

export default PersonForm;