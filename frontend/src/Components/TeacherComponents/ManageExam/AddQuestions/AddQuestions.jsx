import React, { useState } from 'react';
import './AddQuestions.scss'; // Import your SCSS file
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddQuestions = () => {
    const [questions, setQuestions] = useState([]);
    const navigate = useNavigate();

    const handleAddQuestion = () => {
        setQuestions([...questions, {
            uniqueId: '',
            question: '',
            optionA: '',
            optionB: '',
            optionC: '',
            optionD: '',
            answere: ''
        }]);
    };

    const handleChange = (e, index) => {
        const { name, value } = e.target;
        const updatedQuestions = [...questions];
        updatedQuestions[index][name] = value;
        setQuestions(updatedQuestions);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const uniqueId = localStorage.getItem('uniqueId');

        const updatedQuestions = questions.map(question => ({
            ...question,
            uniqueId: uniqueId
        }));

        try {
            const response = await axios.post("http://localhost:8080/teacher/AddQuestions", updatedQuestions);
            console.log(response);
            navigate('/teacher/dashboard');
        } catch (error) {
            console.error("Error adding questions:", error);
        }
    };

    const handleDeleteQuestion = (index) => {
        setQuestions(questions.filter((_, ind) => ind !== index));
    }

    return (
        <div className="Ques_Container">
            <form onSubmit={handleSubmit}>
                {questions.map((question, index) => (
                    <div key={index} className="question-box">
                        <label htmlFor={`question_${index}`}>Enter Question {index + 1}</label>
                        <input
                            type="text"
                            id={`question_${index}`}
                            name="question"
                            value={question.question}
                            onChange={(e) => handleChange(e, index)}
                            required
                        />
                        <label htmlFor={`optionA_${index}`}>Enter Option A</label>
                        <input
                            type="text"
                            id={`optionA_${index}`}
                            name="optionA"
                            value={question.optionA}
                            onChange={(e) => handleChange(e, index)}
                            required
                        />
                        <label htmlFor={`optionB_${index}`}>Enter Option B</label>
                        <input
                            type="text"
                            id={`optionB_${index}`}
                            name="optionB"
                            value={question.optionB}
                            onChange={(e) => handleChange(e, index)}
                            required
                        />
                        <label htmlFor={`optionC_${index}`}>Enter Option C</label>
                        <input
                            type="text"
                            id={`optionC_${index}`}
                            name="optionC"
                            value={question.optionC}
                            onChange={(e) => handleChange(e, index)}
                            required
                        />
                        <label htmlFor={`optionD_${index}`}>Enter Option D</label>
                        <input
                            type="text"
                            id={`optionD_${index}`}
                            name="optionD"
                            value={question.optionD}
                            onChange={(e) => handleChange(e, index)}
                            required
                        />
                        <label htmlFor={`answere_${index}`}>Correct Answere</label>
                        <input
                            type="text"
                            id={`answere_${index}`}
                            name="answere"
                            value={question.answere}
                            onChange={(e) => handleChange(e, index)}
                            required
                        />
                        <button type="button" onClick={() => handleDeleteQuestion(index)}>Delete</button>
                    </div>
                ))}
                <button type="button" onClick={handleAddQuestion}>Add Question</button>
                <button type="submit">Submit Questions</button>
            </form>
        </div>
    );
};

export default AddQuestions;
