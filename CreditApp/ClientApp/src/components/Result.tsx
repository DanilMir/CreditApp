import React from 'react';
import {Alert, ListGroup, ListGroupItem} from "reactstrap";

const ResultForm = (props: {status: string, procents: number, errors: string[]}) => {
    
    if(props.status === "allowed")
    {
        return (
            <div>
                <Alert>
                    <h4 className="alert-heading">
                        Поздравлеям
                    </h4>
                    <p>
                        Вам был одобрен кредит
                    </p>
                    <hr />
                    <p className="mb-0">
                        Под {props.procents} процентов
                    </p>
                </Alert>
            </div>
        )
    }
    
    if(props.status === "not allowed"){
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
    
    if(props.status === "errors") {
        return (
                <Alert color="danger">
                    <ListGroup>
                        {
                            props.errors.map((item, key) => {
                                return (
                                    <ListGroupItem key={key}>
                                        {item}
                                    </ListGroupItem>
                                )
                            })
                        }
                    </ListGroup>
                </Alert>
        )
    }
    
    return (
        <>
        </>
    )
}

export default ResultForm;