import React from 'react'
import InputField from '../shared-components/InputField.js'

export default class SingleFormStep1 extends React.Component { render() {
    if (this.props.currentStep !== 1) {
      return null
    }

    return(
      <div className="singleformstep1_container">
          <div className="singleformstep1_element form_element">
            <InputField value={this.props.name} onChange={this.props.handleChange} name="name" placeholder="Enter name" label="Name" />
          </div>
          <div className="singleformstep1_element form_element">
            <InputField value={this.props.age} onChange={this.props.handleChange} name="age" placeholder="Enter age" label="Age" />
          </div>
      </div>
    )}
  }