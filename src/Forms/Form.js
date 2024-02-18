import { useState } from "react"
import  COLORS  from '../config/system-design/colors';
export default function Form() {
    const [formValues, setFormValues] = useState({
        name: '',
        age: '',
        country: '',
        acceptConditions : '',
    });
    const handlChange = (e) => {
        let currentTarget = e.currentTarget;
        let id = currentTarget.id;
        let value = currentTarget.value;
        if (currentTarget.type === 'checkbox') {
            value = currentTarget.checked;
        }
        setFormValues((prevState) => {
        return { ...prevState, [id]: value };
        });

    }
    return (
        <>
        <div className="container">
             {JSON.stringify(formValues)}
        <div className="row mt-4">
            <div className="col-md-2"></div>
                <div className="col-md-6">
                <h1 style={{ color: COLORS.primary }}>Formulaire</h1>
                <form>
                    <div className="form-group" >
                        <label>Name:</label>
                            <input id="name" type="text" className="form-control" onChange={handlChange} />
                        </div>
                    <div className="form-group mt-2" >
                        <label>Age:</label>
                        <input id="age" type="text" className="form-control"      onChange={handlChange} />
                        </div>
                    <div className="form-check mt-2" >
                        <input type="checkbox" id="acceptConditions"   className="form-check-input"       onChange={handlChange} />
                        <label htmlFor="accept" className="form-check-label">
                            accept our rules
                        </label>    
                    </div>
                    <div className="form-group" >
                        <select className="form-control" id="country" onChange={handlChange}>
                            <option value="ma">maroc</option>  
                            <option value="ang">angola</option>           
                        </select>     
                    </div>    
                    <div className="form-submit mt-2" >
                        <input type="submit" className="btn btn-primary" value="Submit the form" />
                    </div>
                </form>
            </div>
        </div>        
        </div>
        </>
    )
}