import React from 'react';

export default function StepIndicator(props) {

    const items = [];
    for (let i=1; i<=props.steps; i++) {
        items.push(i)
    }
    console.log(items)
    return (
        <div className="stepindicator">

            {items.map((item, idx) => (
                <span key={idx} className={props.currentStep === idx+1 ? "step step-active" : "step"}></span>
            ))}
        </div>
    );
}