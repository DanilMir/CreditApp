import React, {useState} from 'react';
import {Button, Col, Form, FormGroup, FormText, Input, Label, Row} from "reactstrap";

const PersonForm = () => {
    
    interface Person{
        Name: string,
        Age: number
    }
    
    const [person, updatePerson] = useState<Person>({
        Name: 'Danil',
        Age: 19
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
                        id="Surname"
                        name="Surname"
                        placeholder="Surname"
                        type="text"
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="Name">
                        Name
                    </Label>
                    <Input
                        id="Name"
                        name="Name"
                        placeholder="Name"
                        type="text"
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="Middlename">
                        Middlename
                    </Label>
                    <Input
                        id="Middlename"
                        name="Middlename"
                        placeholder="Middlename"
                        type="text"
                    />
                </FormGroup>


                <FormGroup>
                    <Label for="Middlename">
                        Cерия
                    </Label>
                    <Input
                        id="Middlename"
                        name="Middlename"
                        placeholder="Cерия"
                        type="number"
                    />
                </FormGroup>


                <FormGroup>
                    <Label for="Middlename">
                        Номер
                    </Label>
                    <Input
                        id="Middlename"
                        name="Middlename"
                        placeholder="Номер"
                        type="number"
                    />
                </FormGroup>


                <FormGroup>
                    <Label for="Middlename">
                        Кем выдан
                    </Label>
                    <Input
                        id="Middlename"
                        name="Middlename"
                        placeholder="Кем выдан"
                        type="text"
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="Middlename">
                        Дата выдачи
                    </Label>
                    <Input
                        id="Middlename"
                        name="Middlename"
                        placeholder="Дата выдачи"
                        type="date"
                    />
                </FormGroup>
                
                <FormGroup>
                    <Label for="Middlename">
                        Информация о прописке
                    </Label>
                    <Input
                        id="Middlename"
                        name="Middlename"
                        placeholder="Информация о прописке"
                        type="text"
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="Middlename">
                        Возраст
                    </Label>
                    <Input
                        id="Middlename"
                        name="Middlename"
                        placeholder="Возраст"
                        type="number"
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="Middlename">
                        Сведения о судимости
                    </Label>
                    <Input
                        id="Middlename"
                        name="Middlename"
                        placeholder="Сведения о судимости"
                        type="select">
                        <option>
                            была
                        </option>
                        <option>
                            не было
                        </option>
                    </Input>
                </FormGroup>

                <FormGroup>
                    <Label for="Middlename">
                        Сумма кредита
                    </Label>
                    <Input
                        id="Middlename"
                        name="Middlename"
                        placeholder="Сумма кредита"
                        type="number"
                    />
                </FormGroup>


                <FormGroup>
                    <Label for="Middlename">
                        Цель
                    </Label>
                    <Input
                        id="Middlename"
                        name="Middlename"
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
                        id="Middlename"
                        name="Middlename"
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
                        id="Middlename"
                        name="Middlename"
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
                        id="Middlename"
                        name="Middlename"
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

                <FormGroup>
                    <Label for="exampleText">
                        Информация о залоге
                    </Label>
                    <Input
                        id="exampleText"
                        name="text"
                        type="textarea"
                    />
                </FormGroup>
                
                <Button>Submit</Button>
            </Form>
        </div>
    )
}

export default PersonForm;