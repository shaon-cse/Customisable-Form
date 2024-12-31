import React from 'react';

const FormTemplate = ({ template }) => {
    return (
        <div className="form-template">
            <h2>{template.title}</h2>
            <p>{template.description}</p>
            <form>
                {template.questions.map((question, index) => (
                    <div key={index} className="form-question">
                        <label>{question.label}</label>
                        <input type={question.type} name={question.name} required={question.required} />
                    </div>
                ))}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default FormTemplate;