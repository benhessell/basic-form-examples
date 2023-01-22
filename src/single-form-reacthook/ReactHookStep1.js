import React from 'react'
import InputField from './InputField.js';

export default function ReactHookStep1(props) {

    const {step, currentStep} = props;

    if (currentStep !== step) {
        return null
      }

    return(
        <div className="singleformstep1_container">
          <div className="singleformstep1_element form_element">
            <InputField 
              name="name" 
              placeholder="Enter name" 
              label="Name" 
              required
            />
          </div>
          <div className="singleformstep1_element form_element">
            <InputField
              name="age" 
              placeholder="Enter age" 
              label="Age"
              minLength={2}
            />
          </div>
          <div className="singleformstep1_element form_element">
            <InputField
              name="nationality" 
              placeholder="Enter nationality" 
              label="Nationality" />
          </div>
          <div className="singleformstep1_element form_element">
            <InputField
              name="occupation" 
              placeholder="Enter occupation" 
              label="Occupation" 
              required
            />
          </div>
        </div>
    )
}