import { useState, FormEvent, JSX } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import { mockUsers, mockPasswords } from '../../mock/mockUser';

interface LoginFormProps {}

export default function LoginForm({}: LoginFormProps): JSX.Element {
    const [username, setUsername] = useState<string | undefined>(undefined);
    const [password, setPassword] = useState<string | undefined>(undefined);
    const authContext = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();

        if (!authContext) {
            console.error("AuthContext nem elérhető");
            alert("Hiba: Hitelesítési szolgáltatás nem elérhető.");
            return;
        }

        if (username === undefined || username === '' || password === undefined || password === '') {
            alert('Kérjük, töltse ki a felhasználónév és jelszó mezőket.');
            return;
        }

        const foundUser = mockUsers.find(user => user.username === username);

        if (foundUser && mockPasswords[username] === password) {
            authContext.login({ username: foundUser.username, email: foundUser.email || undefined });
            navigate('/');
        } else {
            alert('Hibás felhasználónév vagy jelszó.');
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
                    value={username || ''}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div className='mb-5 mr-5'>
                <label htmlFor="password">Jelszó:</label>
                <input
                    className='peer mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm border-3'
                    type="password"
                    id="password"
                    value={password || ''}
                    onChange={(e) => setPassword(e.target.value)}
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
