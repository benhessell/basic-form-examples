import React from 'react';

export default function InputField(props) {

    const inputHandler = (e) => {
        props.onChange(e)
    }

    return (
        <div className="inputfield_container">
            <label className="inputfield_label" htmlFor={props.name}>{props.label}</label>
            <input
                className="inputfield"
                name={props.name}
                type="text"
                placeholder={props.placeholder}
                value={props.value}
                onChange={inputHandler}
            />
      </div>
    );
}