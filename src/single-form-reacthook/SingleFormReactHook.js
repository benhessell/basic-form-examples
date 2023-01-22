import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';

import ReactHookStep1 from './ReactHookStep1.js';
import StepIndicator from '../shared-components/StepIndicator.js';

const SingleFormFunc = () =>  {

    const [currentStep, changeCurrentStep] = useState(1);
    const methods = useForm();
    const { handleSubmit } = methods;

    const formSteps = 1; // This number is for deciding how many pages the form will contain

    // Submit Logic ---------------------------------------
    const onSubmit = (data) => {
      const { name, age, favColor, favCheese, favAnimal, favCountry } = data
      alert(`Your registration detail: \n 
      Name: ${name} \n 
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
      if(currentStep <formSteps){
        return (
          <button className="btn next-btn" type="button" onClick={nextStep}>Next</button> 
        )
      }
      return null;
    }

    const submitButton = () => {
        if(currentStep == formSteps) {
            return (
              <button className="btn submit-btn" type="button" onClick={handleSubmit(onSubmit)}>Submit</button> 
            )
        }
    }

    return (
        <div className="single-form">

            <a className="back-button" href="#/">{"<-"}</a>
            <div className="single-form_welcome">
                <h1>Welcome to the Single Form using React Hooks</h1>
            </div>

            <div className="single-form_form-container">
              <FormProvider {...methods} >

                <form onSubmit={handleSubmit(onSubmit)}>
                    <ReactHookStep1
                        step={1}
                        currentStep={currentStep}
                    />
                    <div className="form-buttons">
                        {previousButton()}
                        {nextButton()}
                        {submitButton()}
                    </div>
                </form>
              </FormProvider>
              {formSteps>1 &&
              <StepIndicator currentStep={currentStep} steps={formSteps} /> }

            </div>

        </div>
    )
}


export default SingleFormFunc