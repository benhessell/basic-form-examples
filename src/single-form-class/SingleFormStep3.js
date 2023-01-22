import React from 'react'
import InputField from '../shared-components/InputField.js'

export default class SingleFormStep3 extends React.Component {render() {
    if (this.props.currentStep !== 3) {
      return null
    }

    return(
      <div className="singleformstep3_container">
          <div className="singleformstep3_element form_element">
            <InputField value={this.props.favAnimal} onChange={this.props.handleChange} name="favAnimal" placeholder="Enter animal" label="Favourite animal" />
          </div>
          <div className="singleformstep3_element form_element">
            <InputField value={this.props.favCountry} onChange={this.props.handleChange} name="favCountry" placeholder="Enter country" label="Favourite country" />
          </div>
      </div>
    )}
  }