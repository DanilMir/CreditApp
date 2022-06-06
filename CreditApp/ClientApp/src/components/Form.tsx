import React, {useState} from 'react';

const Form = () => {
    
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
        const response = fetch('anketa',
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(person)
            }).then(res => res.text())
            .then(info => console.log(info));
    }
    
    
    
    return (
        <form onSubmit={onSubmit}
        >
            <div className="form-group row">
                <label htmlFor="surname" className="col-4 col-form-label">Фамилия</label>
                <div className="col-8">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <i className="fa fa-address-card"></i>
                            </div>
                        </div>
                        <input id="surname" name="surname" placeholder="Фамилия" type="text" className="form-control"/>
                    </div>
                </div>
            </div>
            <div className="form-group row">
                <label className="col-4 col-form-label" htmlFor="name">Имя</label>
                <div className="col-8">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <i className="fa fa-address-card"></i>
                            </div>
                        </div>
                        <input id="name" name="name" placeholder="Имя" type="text" className="form-control"/>
                    </div>
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="middlename" className="col-4 col-form-label">Отчество</label>
                <div className="col-8">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <i className="fa fa-address-card"></i>
                            </div>
                        </div>
                        <input id="middlename" name="middlename" placeholder="Отчество" type="text"
                               className="form-control"/>
                    </div>
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="text" className="col-4 col-form-label">Серия</label>
                <div className="col-8">
                    <input id="text" name="text" type="text" className="form-control"/>
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="text1" className="col-4 col-form-label">Номер</label>
                <div className="col-8">
                    <input id="text1" name="text1" type="text" className="form-control"/>
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="text2" className="col-4 col-form-label">Кем выдан</label>
                <div className="col-8">
                    <input id="text2" name="text2" type="text" className="form-control"/>
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="text3" className="col-4 col-form-label">Дата выдачи</label>
                <div className="col-8">
                    <input id="text3" name="text3" type="text" className="form-control"/>
                </div>
            </div>
            <div className="form-group row">
                <label htmlFor="text4" className="col-4 col-form-label">Информация о прописке</label>
                <div className="col-8">
                    <input id="text4" name="text4" type="text" className="form-control"/>
                </div>
            </div>
            <div className="form-group row">
                <div className="offset-4 col-8">
                    <button name="submit" type="submit" className="btn btn-primary">Submit</button>
                </div>
            </div>
        </form>
    )
}

export default Form;