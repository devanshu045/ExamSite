import React, { useState } from 'react';

function AddQuestion() {
    const [countOptions, setCountOptions] = useState([0]);

    const handleCountOpt = () => {
        setCountOptions([...countOptions, countOptions.length]);
    };

    return (
        <div className="p-4 bg-gray-100 rounded-lg">
            <label className="block mb-2 text-gray-700 font-bold" htmlFor="question">Enter Question:</label>
            <input type="text" className="w-full p-2 mb-4 border-2 border-black !border-black focus:!border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" id="question" />
            
            <h1 className="mb-4 text-lg font-semibold text-gray-800">Add options</h1>
            <div>
                {countOptions.map((val, index) => (
                    <input key={index} type="text" className="w-full p-2 mb-2 border-2 border-black !border-black focus:!border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                ))}
            </div>
            <button onClick={handleCountOpt} className="w-full p-2 mb-4 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                +
            </button>
            
            <label className="block mb-2 text-gray-700 font-bold" htmlFor="correctAnswer">Correct Answer:</label>
            <input type="text" className="w-full p-2 border-2 border-black !border-black focus:!border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" id="correctAnswer" />
        </div>
    );
}

export default AddQuestion;
