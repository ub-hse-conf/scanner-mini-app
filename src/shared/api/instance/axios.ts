import axios from 'axios';
import { btoa } from 'js-base64';

export const api = axios.create({
    baseURL: process.env.NODE_ENV === 'development' ? '/api' : '',
    timeout: 10000,
});

api.interceptors.request.use(
    (config) => {
        // Получаем логин и пароль В МОМЕНТ КАЖДОГО ЗАПРОСА
        const USERNAME = sessionStorage.getItem('login');
        const PASSWORD = sessionStorage.getItem('password');

        if (USERNAME && PASSWORD) {
            config.headers.Authorization = `Basic ${btoa(`${USERNAME}:${PASSWORD}`)}`;
        } else {
            console.warn('Логин или пароль отсутствуют в sessionStorage');
            // Можно выбросить ошибку или обработать иначе
        }

        return config;
    },
    (error) => Promise.reject(error)
);

// Интерцептор для обработки ошибок
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            console.error('Ошибка авторизации: неверные учетные данные');
            // Очищаем невалидные учетные данные
            sessionStorage.removeItem('login');
            sessionStorage.removeItem('password');
        } else if (error.response?.status === 403) {
            console.error('Доступ запрещен: недостаточно прав');
        }
        return Promise.reject(error);
    }
);