import React, {useState} from 'react';
import {Alert, Button, Form, FormFeedback, FormGroup, Input, Label} from "reactstrap";

const ResultForm = (props: {status: string, procents: number}) => {
    
    if(props.status == "none"){
        return null
    }
    
    if(props.status == "allowed")
    {
        return (
            <div>
                <Alert>
                    <h4 className="alert-heading">
                        Поздравлеям
                    </h4>
                    <p>
                        Вам был разрешен кредит
                    </p>
                    <hr />
                    <p className="mb-0">
                        Под {props.procents} процентов
                    </p>
                </Alert>
            </div>
        )
    }
    
    if(props.status == "not allowed"){
        return (
            <div>
                <Alert color="danger">
                    <h4 className="alert-heading">
                        Сожалеем
                    </h4>
                    <p>
                        Но мы не можем выдать вам кредит
                    </p>
                </Alert>
            </div>
        )
    }
    
    return (
        <>
            <p>{props.status}</p>
            <p>{props.procents}</p>
        </>
    )
}

export default ResultForm;