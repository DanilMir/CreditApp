import React, {useState} from 'react';
import {Button, Form, FormFeedback, FormGroup, Input, Label} from "reactstrap";
import ResultForm from "./Result";
import Person from "../interfaces/Person";
import Validation from "../interfaces/Validation";
import Result from "../interfaces/Result";
import Validator from "../services/Validator";

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
        procents: 0,
        errors: []
    });
    
    
    function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        
        const errors = Validator(person);
        
        if(errors.length > 0){
            updateResult({
                status: "errors",
                procents: 0,
                errors: errors
            })
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
                    ?????????????? ????????????????????
                </Label>
                <Input
                    placeholder="?????????????? ????????????????????"
                    type="number"
                    name="ageOfCar"
                    onChange={onChangeHandler}
                />
            </FormGroup>
        )
    }
    
    return (
        <div className="App">
            <h2>????????????</h2>
            <Form 
                className="form"
                onSubmit={onSubmit}>

                <FormGroup
                >
                    <Label for="Surname">
                        ??????????????
                    </Label>
                    <Input
                        placeholder="??????????????"
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
                        ??????
                    </Label>
                    <Input
                        name="name"
                        placeholder="??????"
                        type="text"
                        onChange={onChangeHandler}
                        invalid={validation.name}
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="Middlename">
                        ????????????????
                    </Label>
                    <Input
                        placeholder="????????????????"
                        name="middlename"
                        type="text"
                        onChange={onChangeHandler}
                        invalid={validation.middlename}
                    />
                </FormGroup>
                
                <FormGroup>
                    <Label for="Series">
                        C????????
                    </Label>
                    <Input
                        placeholder="C????????"
                        type="number"
                        name="series"
                        onChange={onChangeHandler}
                        invalid={validation.series}
                    />
                </FormGroup>
                
                <FormGroup>
                    <Label for="Number">
                        ??????????
                    </Label>
                    <Input
                        placeholder="??????????"
                        type="number"
                        name="number"
                        onChange={onChangeHandler}
                        invalid={validation.number}
                    />
                </FormGroup>
                
                <FormGroup>
                    <Label for="Issued By">
                        ?????? ??????????
                    </Label>
                    <Input
                        placeholder="?????? ??????????"
                        type="text"
                        name="issuedBy"
                        onChange={onChangeHandler}
                        invalid={validation.issuedBy}
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="DateOfIssue">
                        ???????? ????????????
                    </Label>
                    <Input
                        placeholder="???????? ????????????"
                        type="date"
                        name="dateOfIssue"
                        onChange={onChangeHandler}
                        invalid={validation.dateOfIssue}
                    />
                </FormGroup>
                
                <FormGroup>
                    <Label for="ResidencyInfo">
                        ???????????????????? ?? ????????????????
                    </Label>
                    <Input
                        placeholder="???????????????????? ?? ????????????????"
                        type="text"
                        name="residencyInfo"
                        onChange={onChangeHandler}
                        invalid={validation.residencyInfo}
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="age">
                        ??????????????
                    </Label>
                    <Input
                        placeholder="??????????????"
                        type="number"
                        name="age"
                        onChange={onChangeHandler}
                        invalid={validation.age}
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="criminalRecordInfo">
                        ???????????????? ?? ??????????????????
                    </Label>
                    <Input
                        placeholder="???????????????? ?? ??????????????????"
                        type="select"
                        name="criminalRecordInfo"
                        onChange={onChangeHandler}
                        invalid={validation.criminalRecordInfo}
                    >
                        <option value="not have">
                            ???? ????????
                        </option>
                        <option value="have">
                            ????????
                        </option>
                    </Input>
                </FormGroup>

                <FormGroup>
                    <Label for="amount">
                        ?????????? ??????????????
                    </Label>
                    <Input
                        placeholder="?????????? ??????????????"
                        type="number"
                        name="amount"
                        onChange={onChangeHandler}
                        invalid={validation.amount}
                    />
                </FormGroup>
                
                <FormGroup>
                    <Label for="purpose">
                        ????????
                    </Label>
                    <Input
                        type="select"
                        name="purpose"
                        onChange={onChangeHandler}
                        invalid={validation.purpose}
                    >
                        <option value="consumer loan">
                            ?????????????????????????????? ????????????
                        </option>
                        <option value="property">
                            ????????????????????????
                        </option>
                        <option value="re-crediting">
                            ????????????????????????????????
                        </option>
                    </Input>
                </FormGroup>

                <FormGroup>
                    <Label for="bail">
                        ??????????
                    </Label>
                    <Input
                        type="select"
                        name="bail"
                        onChange={onChangeHandler}
                        invalid={validation.bail}
                    >
                        <option value="no bail">
                            ?????? ????????????
                        </option>
                        <option value="property">
                            ????????????????????????
                        </option>
                        <option value="car">
                            ????????????????????
                        </option>
                        <option value="surety">
                            ????????????????????????????
                        </option>
                    </Input>
                </FormGroup>

                { person.bail ===  'car' ? renderAutoChoose() : ""}
                
                <FormGroup>
                    <Label for="availabilityOfOtherLoans">
                        ?????????????? ???????????? ????????????????
                    </Label>
                    <Input
                        type="select"
                        name="availabilityOfOtherLoans"
                        onChange={onChangeHandler}
                        invalid={validation.availabilityOfOtherLoans}
                    >
                        <option value="0">
                            ??????
                        </option>
                        <option value="1">
                            ????????
                        </option>
                    </Input>
                </FormGroup>

                <FormGroup>
                    <Label for="employment">
                        ??????????????????????????????
                    </Label>
                    <Input
                        type="select"
                        name="employment"
                        onChange={onChangeHandler}
                        invalid={validation.employment}
                    >
                        <option value="employed under an employment contract">
                            ???????????????????????? ???? ?????????????????? ????????????????
                        </option>
                        <option value="own Individual enterprise">
                            ?????????????????????? ????
                        </option>
                        <option value="freelancer">
                            ??????????????????
                        </option>
                        <option value="pensioner">
                            ??????????????????
                        </option>
                        <option value="unemployed">
                            ??????????????????????
                        </option>
                    </Input>
                </FormGroup>
                
                <Button>??????????????????</Button>
            </Form>
            <
                ResultForm
                status={result.status}
                procents={result.procents}
                errors={result.errors}
            />
        </div>
    )
}

export default PersonForm;