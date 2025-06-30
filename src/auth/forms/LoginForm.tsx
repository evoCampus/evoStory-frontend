import { useState, FormEvent, JSX } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

interface LoginFormProps {}

export default function LoginForm({}: LoginFormProps): JSX.Element {
    const [username, setUsername] = useState<string>(''); 
    const [password, setPassword] = useState<string>(''); 
    const { login } = useAuth(); 
    const navigate = useNavigate();

    const handleSubmit = async (event: FormEvent) => { 
        event.preventDefault();



        if (username.trim() === '' || password.trim() === '') {
            alert('Kérjük, töltse ki a felhasználónév és jelszó mezőket.');
            return;
        }

        const loginSuccessful = await login(username, password);

        if (loginSuccessful) {
            navigate('/');
        } else {
            alert('Hibás felhasználónév vagy jelszó. Kérjük, próbálja újra.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className='mb-5 mr-5'>
                <label htmlFor="username">Felhasználónév:</label>
                <input
                    className='peer mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm border-3'
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </div>
            <div className='mb-5 mr-5'>
                <label htmlFor="password">Jelszó:</label>
                <input
                    className='peer mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm border-3'
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <button
                className='bg-gray-900 rounded-xl text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outlinetransition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500'
                type="submit">
                Bejelentkezés
            </button>
        </form>
    );
}