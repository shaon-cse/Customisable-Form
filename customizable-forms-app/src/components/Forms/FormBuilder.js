import React, { useState } from 'react';

const FormBuilder = () => {
    const [formTitle, setFormTitle] = useState('');
    const [questions, setQuestions] = useState([]);
    const [questionText, setQuestionText] = useState('');

    const addQuestion = () => {
        if (questionText) {
            setQuestions([...questions, questionText]);
            setQuestionText('');
        }
    };

    const saveForm = () => {
        const formData = {
            title: formTitle,
            questions: questions,
        };
        // Save formData to the database or API
        console.log('Form saved:', formData);
    };

    return (
        <div>
            <h1>Create a New Form</h1>
            <input
                type="text"
                placeholder="Form Title"
                value={formTitle}
                onChange={(e) => setFormTitle(e.target.value)}
            />
            <div>
                <input
                    type="text"
                    placeholder="Add a Question"
                    value={questionText}
                    onChange={(e) => setQuestionText(e.target.value)}
                />
                <button onClick={addQuestion}>Add Question</button>
            </div>
            <ul>
                {questions.map((question, index) => (
                    <li key={index}>{question}</li>
                ))}
            </ul>
            <button onClick={saveForm}>Save Form</button>
        </div>
    );
};

export default FormBuilder;