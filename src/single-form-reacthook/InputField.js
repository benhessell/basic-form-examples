import React from 'react';
import { useFormContext } from 'react-hook-form';

export default function InputField(props) {

    const {name, placeholder, label, required, minLength} = props;
    const { register, formState: {errors } } = useFormContext();

    let classes = "inputfield";
    {errors[name] && (classes = "inputfield inputfield-error")}

    return (
        <div className="inputfield_container">
            <label className="inputfield_label" htmlFor={name}>{label}</label>
            <input
                className={classes}
                type="text"
                placeholder={placeholder}
                {...register(name, {required: required, minLength: minLength})}
            />
            {errors[name]?.type === 'required' && <p>This is a required field</p>}
            {errors[name]?.type === 'minLength' && <p>This must be greater than 2 characters</p>}
        </div>
    );
}