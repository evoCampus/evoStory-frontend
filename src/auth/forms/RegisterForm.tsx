import React, { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

const RegisterForm: React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const { register } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();

        if (!username || !email || !password) {
            alert('Kérjük, töltse ki az összes mezőt.');
            return;
        }

        const registrationSuccessful = await register(username, password, email);

        if (registrationSuccessful) {
            alert('Sikeres regisztráció! Most már bejelentkezhetsz.');
            navigate('/login');
        } else {
            alert('Sikertelen regisztráció. Kérjük, próbálja újra.');
        }
    };

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="reg-username">Felhasználónév:</label>
                <input
                    className='peer mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm border-3'
                    type="text"
                    id="reg-username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="reg-email">Email:</label>
                <input
                    className='peer mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm border-3'
                    type="email"
                    id="reg-email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="reg-password">Jelszó:</label>
                <input
                    className='peer mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm border-3'
                    type="password"
                    id="reg-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <button
            className='mt-2 ml-2 items-center bg-gray-900 rounded-xl text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outlinetransition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500'
            type='submit'>
            Regisztráció
            </button>
            
        </form>
        </div>
    );
};

export default RegisterForm;