import React, {useState} from 'react';
import {Button, Form, FormGroup, Input, Label} from "reactstrap";

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
        
        fetch('anketa',
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
                    <Label for="Series">
                        Cерия
                    </Label>
                    <Input
                        placeholder="Cерия"
                        type="number"
                        name="series"
                        onChange={onChangeHandler}
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
                    >
                        <option value="have">
                            Было
                        </option>
                        <option value="not have">
                            Не было
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

                <FormGroup>
                    <Label for="availabilityOfOtherLoans">
                        Наличие других кредитов
                    </Label>
                    <Input
                        type="select"
                        name="availabilityOfOtherLoans"
                        onChange={onChangeHandler}
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
                
                <Button>Submit</Button>
            </Form>
        </div>
    )
}

export default PersonForm;