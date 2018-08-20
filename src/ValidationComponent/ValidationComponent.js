import React from 'react';

const validation = (props) => {
    return (
        <div>
            {
                props.inputLength > 4 ?
                 <p>Text long enough</p>: 
                 <p>Text too short </p>
            }
        </div>
    );
};

export default validation