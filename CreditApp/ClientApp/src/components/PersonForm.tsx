import React, {useState} from 'react';
import {Button, Col, Form, FormGroup, FormText, Input, Label, Row} from "reactstrap";

const PersonForm = () => {
    
    interface Person{
        surname: string,
        name: string,
        middlename: string,
        series: number,
        number: number,
        issuedBy: string,
        dateOfIssue: Date,
        residencyInfo: string,
        age: number,
        criminalRecordInfo: string,
        amount: number,
        purpose: string,
        bail: string,
        availabilityOfOtherLoans: number,
        employment: string,
    }
    
    const [person, updatePerson] = useState<Person>({
        surname: "",
        name: "",
        middlename: "",
        series: -1,
        number: -1,
        issuedBy: "",
        dateOfIssue: new Date(),
        residencyInfo: "",
        age: -1,
        criminalRecordInfo: "",
        amount: -1,
        purpose: "",
        bail: "",
        availabilityOfOtherLoans: -1,
        employment: "",
    });
    
    function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        
        //if(data.isCorrect) then => 
        //else return <error text>
        
        const response = fetch('anketa',
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(person)
            })
            .then(res => res.text())
            .then(info => console.log(info));
    }

    const onChangeHandler = (e : React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        updatePerson((prevState) => ({ ...prevState, [name]: value }));
        console.log(person)
    };
    
    
    return (
        <div className="App">
            <h2>Person form</h2>
            <Form 
                className="form"
                onSubmit={onSubmit}>

                <FormGroup>
                    <Label for="Surname">
                        Surname
                    </Label>
                    <Input
                        placeholder="Surname"
                        name="surname"
                        type="text"
                        onChange={onChangeHandler}
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="Name">
                        Name
                    </Label>
                    <Input
                        name="name"
                        placeholder="Name"
                        type="text"
                        onChange={onChangeHandler}
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="Middlename">
                        Middlename
                    </Label>
                    <Input
                        placeholder="Middlename"
                        name="middlename"
                        type="text"
                        onChange={onChangeHandler}
                    />
                </FormGroup>


                <FormGroup>
                    <Label for="Middlename">
                        Cерия
                    </Label>
                    <Input
                        placeholder="Cерия"
                        type="number"
                    />
                </FormGroup>


                <FormGroup>
                    <Label for="Middlename">
                        Номер
                    </Label>
                    <Input
                        placeholder="Номер"
                        type="number"
                    />
                </FormGroup>


                <FormGroup>
                    <Label for="Middlename">
                        Кем выдан
                    </Label>
                    <Input
                        placeholder="Кем выдан"
                        type="text"
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="Middlename">
                        Дата выдачи
                    </Label>
                    <Input
                        placeholder="Дата выдачи"
                        type="date"
                    />
                </FormGroup>
                
                <FormGroup>
                    <Label for="Middlename">
                        Информация о прописке
                    </Label>
                    <Input
                        placeholder="Информация о прописке"
                        type="text"
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="Middlename">
                        Возраст
                    </Label>
                    <Input
                        placeholder="Возраст"
                        type="number"
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="Middlename">
                        Сведения о судимости
                    </Label>
                    <Input
                        placeholder="Сведения о судимости"
                        type="select">
                        <option>
                            Было
                        </option>
                        <option>
                            Не было
                        </option>
                    </Input>
                </FormGroup>

                <FormGroup>
                    <Label for="Middlename">
                        Сумма кредита
                    </Label>
                    <Input
                        placeholder="Сумма кредита"
                        type="number"
                    />
                </FormGroup>


                <FormGroup>
                    <Label for="Middlename">
                        Цель
                    </Label>
                    <Input
                        type="select">
                        <option>
                            Потребительский кредит
                        </option>
                        <option>
                            Недвижимость
                        </option>
                        <option>
                            Перекредитование
                        </option>
                    </Input>
                </FormGroup>

                <FormGroup>
                    <Label for="Middlename">
                        Залог
                    </Label>
                    <Input
                        type="select">
                        <option>
                            Недвижимость
                        </option>
                        <option>
                            Автомобиль
                        </option>
                        <option>
                            Поручительство
                        </option>
                    </Input>
                </FormGroup>

                <FormGroup>
                    <Label for="Middlename">
                        Наличие других кредитов
                    </Label>
                    <Input
                        type="select">
                        <option>
                            Нет
                        </option>
                        <option>
                            Есть
                        </option>
                    </Input>
                </FormGroup>

                <FormGroup>
                    <Label for="Middlename">
                        Трудоустройство
                    </Label>
                    <Input
                        type="select">
                        <option>
                            Трудоустроен по трудовому договору
                        </option>
                        <option>
                            Собственное ИП
                        </option>
                        <option>
                            Фрилансер
                        </option>
                        <option>
                            Пенсионер
                        </option>
                        <option>
                            Безработный
                        </option>
                    </Input>
                </FormGroup>
                
                <Button>Submit</Button>
            </Form>
        </div>
    )
}

export default PersonForm;