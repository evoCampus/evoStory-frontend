import { useState, FormEvent, JSX} from 'react';
import useAuth from '../useAuth';
import { useNavigate } from 'react-router-dom';

interface RegisterFormProps {}

export default function RegisterForm({}: RegisterFormProps): JSX.Element {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const { register, login } = useAuth(); 
    const navigate = useNavigate();

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert('A jelszavak nem egyeznek!');
            return;
        }
        if (username.length < 3 || password.length < 6) {
            alert('A felhasználónévnek legalább 3, a jelszónak legalább 6 karakter hosszúnak kell lennie.');
            return;
        }

        const success = register(username, password, email);

        if (success) {
            alert('Sikeres regisztráció! Most már bejelentkezhetsz.');
            login({ username, email });
            navigate('/dashboard');
        } else {
            alert('Regisztráció sikertelen. Lehet, hogy a felhasználónév már foglalt.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className='mb-5'>
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
            <div className='mb-5'>
                <label htmlFor="reg-email">E-mail:</label>
                <input
                    className='peer mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm border-3'
                    type="email"
                    id="reg-email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div className='mb-5'>
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
            <div className='mb-5'>
                <label htmlFor="reg-confirm-password">Jelszó megerősítése:</label>
                <input
                    className='peer mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm border-3'
                    type="password"
                    id="reg-confirm-password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
            </div>
            <button className='bg-gray-900 rounded-xl text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outlinetransition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500' type="submit">Regisztráció</button>
        </form>
    );
}