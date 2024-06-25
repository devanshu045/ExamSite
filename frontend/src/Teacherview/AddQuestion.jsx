import React, { useState } from 'react';
import './AddQuestions.scss'

function AddQuestion() {
    const [countOptions, setCountOptions] = useState([0]);
    const [quesArray, setquessArray] = useState([]);

    const handleCountOpt = () => {
        setCountOptions([...countOptions, countOptions.length]);
    };

    const handleRemoveOpt = (index) => {
        setCountOptions(countOptions.filter((_, i) => i !== index));
    };

    return (
        <from className="container">
            <label className="label" htmlFor="question">Enter Question:</label>
            <input type="text" className="input" id="question" />
            
            <h1 className="heading">Add options</h1>
            <div>
                {countOptions.map((val, index) => (
                    <div key={index} className="option-container">
                        <input type="text" className="input option-input" />
                        <button type="button" className="remove-button" onClick={() => handleRemoveOpt(index)}>
                            -
                        </button>
                    </div>
                ))}
            </div>
            <button type="button" onClick={handleCountOpt} className="button">
                +
            </button>
            
            <label className="label" htmlFor="correctAnswer">Correct Answer:</label>
            <input type="text" className="input" id="correctAnswer" />
        </from>
    );
}

export default AddQuestion;
