import { useState, FormEvent, JSX } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import { setCookie, getCookie } from 'typescript-cookie';

interface LoginFormProps { }

export default function LoginForm({ }: LoginFormProps): JSX.Element {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const { login } = useAuth();
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        setError(null);

        if (!username || !password) {
            setError('Kérjük, töltse ki az összes mezőt.');
            return;
        }

        try {
            const loginSuccessful = await login(username, password);

            if (loginSuccessful) {
                setCookie("username", username);
                console.log(`${getCookie("username")} stored`);
                navigate('/');
            } else {
                setError('Hibás felhasználónév vagy jelszó. Kérjük, próbálja újra.');
            }
        } catch (err: any) {

            console.error('Login API error:', err);
            setError('Hiba történt a bejelentkezés során. Kérjük, próbálja meg később.');

        }
    };

    return (
        <form onSubmit={handleSubmit} className='space-y-4'>
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
            {error && (
                <div className="text-red-600 text-sm mt-2">
                    {error}
                </div>
            )}
            <button
                className='bg-gray-900 rounded-xl text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outlinetransition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-green-500'
                type="submit">
                Bejelentkezés
            </button>
        </form>
    );
}