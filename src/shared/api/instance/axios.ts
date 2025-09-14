import axios from 'axios';
import { btoa } from 'js-base64';

export const api = axios.create({
    baseURL: process.env.NODE_ENV === 'development' ? '/api' : '',
    timeout: 10000,
});

api.interceptors.request.use(
    (config) => {
        const USERNAME = sessionStorage.getItem('login');
        const PASSWORD = sessionStorage.getItem('password');

        if (USERNAME && PASSWORD) {
            config.headers.Authorization = `Basic ${btoa(`${USERNAME}:${PASSWORD}`)}`;
        } else {
            console.warn('Логин или пароль отсутствуют в sessionStorage');
        }

        return config;
    },
    (error) => Promise.reject(error)
);


api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            console.error('Ошибка авторизации: неверные учетные данные');
            if (error.response?.headers) {
                delete error.response.headers['www-authenticate'];
            }
        } else if (error.response?.status === 403) {
            console.error('Доступ запрещен: недостаточно прав');
        }
        return Promise.reject(error);
    }
);