import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://speakup-api.fly.dev/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const createIncidentReport = async (data) => {
    try {
        const response = await apiClient.post('/incident-reports', data);
        return response.data;
    } catch (error) {
        throw error.response;
    }
};

export const getIncidentReportById = async (id) => {
    try {
        const response = await apiClient.get(`/incident-reports/${id}`);
        return response.data;
    } catch (error) {
        throw error.response;
    }
};

export const getIncidentReport = async (accessToken) => {
    try {
        const response = await apiClient.get(`/incident-reports`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
        return response.data;
    } catch (error) {
        throw error.response;
    }
};

export const login = async (email, password) => {
    try {
        const response = await apiClient.post('/auth/login', { email, password });
        return response.data;
    } catch (error) {
        throw error.response;
    }
};
// Add more functions for other operations if needed.