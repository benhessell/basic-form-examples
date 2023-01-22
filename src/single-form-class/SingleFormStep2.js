import React from 'react'
import InputField from '../shared-components/InputField.js'

export default class SingleFormStep2 extends React.Component {render() {
    if (this.props.currentStep !== 2) {
      return null
    }

    return(
      <div className="singleformstep2_container">
          <div className="singleformstep2_element form_element">
          <InputField value={this.props.favColor} onChange={this.props.handleChange} name="favColor" placeholder="Enter color" label="Favourite color" />
          </div>
          <div className="singleformstep2_element form_element">
          <InputField value={this.props.favCheese} onChange={this.props.handleChange} name="favCheese" placeholder="Enter cheese" label="Favourite cheese" />
          </div>
      </div>
    )}
  }