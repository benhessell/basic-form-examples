import React from 'react';

import SingleFormStep1 from './SingleFormStep1.js';
import SingleFormStep2 from './SingleFormStep2.js';
import SingleFormStep3 from './SingleFormStep3.js';
import StepIndicator from '../shared-components/StepIndicator.js';

class SingleFormClass extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentStep: 1,
            name: '',
            age: '',
            favColor: '',
            favCheese: '',
            favAnimal: '',
            favCountry: '',
        }
    }

    formSteps = 3; // This number is for deciding how many pages the form will contain

    // Change and Submit Logic ---------------------------------------
    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const { name, age, favColor, favCheese, favAnimal, favCountry } = this.state
        alert(`Your registration detail: \n 
        Name: ${name} \n 
        Age: ${age} \n
        Favourite Colour: ${favColor} \n
        Favourite Cheese: ${favCheese} \n
        Favourite Animal: ${favAnimal} \n
        Favourite Country: ${favCountry} \n`)
    }

    // Button Logic ---------------------------------------

    nextStep = () => {
      let step = this.state.currentStep
      const nextStep = step !== this.formSteps? step+1 : this.formSteps;
      this.setState({
        currentStep: nextStep
      })
    }
    
    prevStep = () => {
      let step = this.state.currentStep
      const nextStep = step == 1? 1: step-1;
      this.setState({
          currentStep: nextStep
      })
    }

    get previousButton(){
        let currentStep = this.state.currentStep;
        if(currentStep !==1){
          return (
            <button 
            className="btn prev-btn" 
            type="button" 
            onClick={this.prevStep}>
                Previous
            </button>
          )
        }
        return null;
      }
      
    get nextButton(){
      let currentStep = this.state.currentStep;
      if(currentStep < this.formSteps){
        return (
          <button 
          className="btn next-btn" 
          type="button" 
          onClick={this.nextStep}>
            Next
          </button> 
        )
      }
      return null;
    }

    get submitButton(){
        let currentStep = this.state.currentStep;
        if(currentStep == this.formSteps) {
            return (
              <button 
              className="btn submit-btn" 
              type="button" 
              onClick={this.handleSubmit}>
                Submit
              </button> 
            )
        }
    }

    render() {
        return (
            <div className="single-form">

                <a className="back-button" href="#/">{"<-"}</a>
                <div className="single-form_welcome">
                    <h1>Welcome to the Single Form using classes</h1>
                </div>

                <div className="single-form_form-container">

                    <form onSubmit={this.handleSubmit}>
                        <SingleFormStep1
                            currentStep={this.state.currentStep}
                            handleChange={this.handleChange}
                            name={this.state.name}
                            age={this.state.age}
                        />
                        <SingleFormStep2
                            currentStep={this.state.currentStep}
                            handleChange={this.handleChange}
                            favColor={this.state.favColor}
                            favCheese={this.state.favCheese}
                        />
                        <SingleFormStep3
                            currentStep={this.state.currentStep}
                            handleChange={this.handleChange}
                            favAnimal={this.state.favAnimal}
                            favCountry={this.state.favCountry}
                        />
                        <div className="form-buttons">
                          {this.previousButton}
                          {this.nextButton}
                          {this.submitButton}
                        </div>
                    </form>   

                    {this.formSteps>1 &&
                    <StepIndicator currentStep={this.state.currentStep} steps={this.formSteps} /> }

                </div>

            </div>
        )
    }
}

export default SingleFormClass
        

