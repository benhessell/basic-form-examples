import React from 'react'
import InputField from '../shared-components/InputField.js'

export default function FormStep(props) {

    const {step, currentStep, name, handler, placeholder, label, value} = props;

    if (currentStep !== step) {
        return null
      }

    const inputHandler = (e) => {
        handler(e)
    }

    const inputs = [];
    for (let i=0; i<name.length; i++) {
        let input = (
            <div className="form_element" key={name[i]}>
                <InputField value={value[i]} onChange={inputHandler} name={name[i]} placeholder={placeholder[i]} label={label[i]} />
            </div>
        )
        inputs.push(input)
    }

    return(
        <div className="singleform_container">
            {inputs}
        </div>
    )
}

  

