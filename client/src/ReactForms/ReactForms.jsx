import React, { useState } from 'react'
import FormInput from './FormInput'
import './ReactForms.css'
import axios from 'axios';

const ReactForms = () => {

    //Also can use useRef() Hook and FormData() -  which return object, inside it we have entries. 

    const [values, setValues] = useState({
        username: "",
        email: "",
        birthday: "",
        password: "",
        confirmPassword: "",
    })

    const inputs = [
        {
            id: 1,
            name: "username",
            type: "text",
            placeholder: "Username",
            errorMessage: "Username should be 3-16 characters and shouldn't include any special character!",
            label: "Username",
            pattern:"^[A-Z0-9a-z]{3,16}$",
            required: true
        },
        {
            id: 2,
            name: "email",
            type: "email",
            placeholder: "Email",
            errorMessage: "It should be a valid email address!",
            label: "Email",
            required: true
        },
        {
            id: 3,
            name: "birthday",
            type: "date",
            placeholder: "Birthday",
            label: "Birthday",
            required: true
        },
        {
            id: 4,
            name: "password",
            type: "password",
            placeholder: "Password",
            errorMessage: "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
            label: "Password",
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
            required: true
        },
        {
            id: 5,
            name: "confirmPassword",
            type: "password",
            placeholder: "Confirm Password",
            errorMessage: "Passwords don't match!",
            label: "Confirm Password",
            pattern: values.password, //works like pattern:"john"
            required: true
        },
    ]

    const newUser = {
        username:values.username,
        email:values.email,
        password:values.password,
        birthday:values.birthday
    };

    async function handleSubmit(e) {
        e.preventDefault();
        try{
            const response = await axios.post('http://localhost:3000/register',newUser);
            alert("Registration Successfull...");
        }
        catch(err){
            alert("Registration Failed...");
        }
    }

    function onChange(e) {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    return (
        <div className='app'>
            <form onSubmit={handleSubmit}>
                <h1>Register</h1>
                {inputs.map(input => (
                    <FormInput
                        key={input.id}
                        {...input}
                        value={values[input.name]}
                        onChange={onChange}
                    />
                ))}
                <button type='sumbit'>Submit</button>
            </form>
        </div>
    )
}

export default ReactForms