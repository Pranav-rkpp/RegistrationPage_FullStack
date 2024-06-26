import React, { useState } from 'react'
import './FormInput.css'

const FormInput = (props) => {

    const { label, id, onChange, errorMessage, ...inputProps } = props;

    const [focused, setFocused] = useState(false);

    function handleFocus(e) {
        setFocused(true)
    }

    return (
        <div className='formInput'>
            <label>{label}</label>
            <input
                {...inputProps}
                onChange={onChange}
                required
                onBlur={handleFocus}
                focused={focused.toString()}
                onFocus={()=>inputProps.name === "confirmPassword" && setFocused(true)}
            />
            <span>{errorMessage}</span>
        </div>
    )
}

export default FormInput