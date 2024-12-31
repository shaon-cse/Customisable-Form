import React from 'react';
import { useAuth } from '../hooks/useAuth';
import FormTemplate from '../components/Forms/FormTemplate';
import './Dashboard.css';

const Dashboard = () => {
    const { user, templates } = useAuth();

    return (
        <div className="dashboard">
            <h1>Welcome, {user.name}</h1>
            <h2>Your Templates</h2>
            <div className="template-list">
                {templates.map(template => (
                    <FormTemplate key={template.id} template={template} />
                ))}
            </div>
        </div>
    );
};

export default Dashboard;