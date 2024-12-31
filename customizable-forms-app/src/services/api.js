import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Replace with your backend URL

export const fetchTemplates = async () => {
    const response = await axios.get(`${API_URL}/templates`);
    return response.data;
};

export const createTemplate = async (templateData) => {
    const response = await axios.post(`${API_URL}/templates`, templateData);
    return response.data;
};

export const updateTemplate = async (templateId, templateData) => {
    const response = await axios.put(`${API_URL}/templates/${templateId}`, templateData);
    return response.data;
};

export const deleteTemplate = async (templateId) => {
    const response = await axios.delete(`${API_URL}/templates/${templateId}`);
    return response.data;
};

export const fetchFormResponses = async (templateId) => {
    const response = await axios.get(`${API_URL}/templates/${templateId}/responses`);
    return response.data;
};