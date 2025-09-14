import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App.tsx';
import "./styles.css"

const rootEl = document.getElementById('root');
if (rootEl) {
    const root = ReactDOM.createRoot(rootEl);


    const searchParams = new URLSearchParams(window.location.search);
    console.log(searchParams.size);
    const login = searchParams.get("login");
    const password = searchParams.get("password");


    if (login && password) {
        sessionStorage.setItem('login', login)
        sessionStorage.setItem('password', password)

        window.history.replaceState({}, '', window.location.pathname);

        root.render(
            <App />
        );
    }

    else {

        const login = sessionStorage.getItem('login')
        const password = sessionStorage.getItem('password')

        if (login && password) {
            sessionStorage.setItem('login', login)
            sessionStorage.setItem('password', password)

            window.history.replaceState({}, '', window.location.pathname);

            root.render(
                <App />
            );
        }

        else {
            root.render(
                <h1>Вы не авторизованы!</h1>
            )
        }

    }

}
