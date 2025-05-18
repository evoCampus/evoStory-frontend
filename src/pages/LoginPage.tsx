import React, { JSX } from 'react';
import LoginForm from './auth/LoginForm';
import '../index.css';

interface LoginPageProps {}

export default function LoginPage({}: LoginPageProps): JSX.Element {
    return (
        <div className="flex flex-col items-center justify-center h-screen w-screen bg-linear-to-t from-black to-gray-800 ">
            <div className="border border-gray-400 p-8 mx-auto w-4/5 max-w-md bg-gray-700 rounded-lg shadow-md">
                <div className="flex flex-col gap-4">
                    <p><strong>Bejelentkezés</strong></p>
                    <LoginForm />
                </div>
            </div>
        </div>
    );
}