import React from 'react';
import RegisterForm from '../auth/forms/RegisterForm';
import '../index.css';
import { Link } from 'react-router-dom';

interface RegisterPageProps {}

export default function RegisterPage({}: RegisterPageProps): React.JSX.Element {
    return (
        <div className="flex flex-col items-center justify-center h-screen w-screen bg-linear-to-t from-black to-gray-800 ">
            <div className="border border-gray-400 p-8 mx-auto w-4/5 max-w-md bg-gray-700 rounded-lg shadow-md">
                <div className="flex flex-col gap-4">
                    <h2>Regisztráció</h2>
                    <RegisterForm />
                    <p className="text-center text-gray-400">
                        Van már fiókod? <Link to="/login" className="text-blue-500 hover:underline">Jelentkezz be</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}