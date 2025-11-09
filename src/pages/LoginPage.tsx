import React from 'react';
import LoginForm from '../auth/forms/LoginForm';
import '../index.css';
import { Link } from 'react-router-dom';

interface LoginPageProps {}

export default function LoginPage({}: LoginPageProps): React.JSX.Element {
    return (
        <div className="flex flex-col items-center justify-center h-screen w-screen 
        [data-theme='dark']:bg-linear-to-t from-black to-gray-800
        [data-theme='light']:bg-gray-200">
            <div className="border border-gray-400 p-8 mx-auto w-4/5 max-w-md rounded-lg shadow-md
            [data-theme='dark']:bg-gray-700
            [data-theme='light']:bg-white">
                <div className="flex flex-col gap-4">
                    <p><strong>Bejelentkezés</strong></p>
                    <LoginForm />
                    <p className="text-center text-gray-400">
                    Nincs még fiókod? <Link to="/register" className="text-blue-500 hover:underline">Regisztrálj</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}