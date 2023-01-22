import React, { useState } from 'react';

import FormStep from './FormStep.js';
import StepIndicator from '../shared-components/StepIndicator.js';

const SingleFormFunc = () =>  {

    const [currentStep, changeCurrentStep] = useState(1);
    const [inputs, setInputs] = useState({});

    const formSteps = 3; // This number is for deciding how many pages the form will contain

    // Change and Submit Logic ---------------------------------------
    const handleChange = (event) => {
        setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const { name, age, favColor, favCheese, favAnimal, favCountry } = inputs
        alert(`Your registration detail: \n 
        Name: ${inputs.name} \n 
        Age: ${age} \n
        Favourite Colour: ${favColor} \n
        Favourite Cheese: ${favCheese} \n
        Favourite Animal: ${favAnimal} \n
        Favourite Country: ${favCountry} \n`)
    }

    // Button Logic ---------------------------------------

    const nextStep = () => {
      const step = currentStep
      const nextStep = step !== formSteps? step+1 : formSteps;
      changeCurrentStep(nextStep)
    }
    
    const prevStep = () => {
      const step = currentStep
      const nextStep = step == 1? 1: step-1;
      changeCurrentStep(nextStep)
    }

    const previousButton = () => {
        if(currentStep !==1){
          return (
            <button className="btn prev-btn" type="button" onClick={prevStep}>Previous</button>
          )
        }
        return null;
      }
      
    const nextButton = () => {
      if(currentStep < formSteps){
        return (
          <button className="btn next-btn" type="button" onClick={nextStep}>Next</button> 
        )
      }
      return null;
    }

    const submitButton = () => {
        if(currentStep == formSteps) {
            return (
              <button className="btn submit-btn" type="button" onClick={handleSubmit}>Submit</button> 
            )
        }
    }

    return (
        <div className="single-form">

            <a className="back-button" href="#/">{"<-"}</a>
            <div className="single-form_welcome">
                <h1>Welcome to the Single Form using functions</h1>
            </div>

            <div className="single-form_form-container">

                <form onSubmit={handleSubmit}>
                    <FormStep
                        step={1}
                        currentStep={currentStep}
                        handler={handleChange}
                        name={["name", "age"]}
                        placeholder={["Enter name:", "Enter age:"]}
                        label={["Name", "Age"]}
                        value={[inputs.name, inputs.age]}
                    />
                    <FormStep
                        step={2}
                        currentStep={currentStep}
                        handler={handleChange}
                        name={["favColor", "favCheese"]}
                        placeholder={["Enter favColor:", "Enter favCheese:"]}
                        label={["favColor", "favCheese"]}
                        value={[inputs.favColor, inputs.favCheese]}
                    />
                    <FormStep
                        step={3}
                        currentStep={currentStep}
                        handler={handleChange}
                        name={["favAnimal", "favCountry"]}
                        placeholder={["Enter favAnimal:", "Enter favCountry:"]}
                        label={["favAnimal", "favCountry"]}
                        value={[inputs.favAnimal, inputs.favCountry]}
                    />
                    <div className="form-buttons">
                        {previousButton()}
                        {nextButton()}
                        {submitButton()}
                    </div>
                </form>   

                {formSteps>1 &&
                <StepIndicator currentStep={currentStep} steps={formSteps} /> }

            </div>

        </div>
    )
}


export default SingleFormFunc