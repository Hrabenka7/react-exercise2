import React from 'react';
import './ValidationComponent.css'

const validation = (props) => {
    let validationMessage = "Text too short"
    let short = true;

    if(props.inputLength > 4) {
        validationMessage = "Text long enough"
        short = false;
    }
    return (
        <div>
            <p className={short ? 'red' : 'green'}>{validationMessage}</p>
        </div>
    );
};

export default validation
