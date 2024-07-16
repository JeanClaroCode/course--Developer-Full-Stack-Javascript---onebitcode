import React, {Fragment, useState} from "react";

const initialState = {
    name: '',
}

const FormSatellites = (props) => {
    const [fields, setFields] = useState(initialState)

    const handleFieldsChange = (e) => setFields({
        ...fields,
        [e.currentTarget.name]: e.currentTarget.value
    });
// Aqui estamos pegando os fields e implementando um novo name 

    const handleSubmit = (event) => {
        props.addSatellites(fields)
        event.preventDefault()
        setFields(initialState)
    }

    return (
        <Fragment>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Satellite Name: </label>
                    <input id="name" type="text" name="name" value={fields.name} onChange={handleFieldsChange} />
                </div>
                <br />
                <input type="submit" />
            </form>
        </Fragment>
    )
}
export default FormSatellites;