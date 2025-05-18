import React, { useState, FormEvent, JSX } from 'react';
import { useNavigate } from 'react-router-dom';

interface LoginFormProps {}

export default function LoginForm({}: LoginFormProps): JSX.Element {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const navigate = useNavigate();

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        if (username === 'testuser' && password === 'password') {
            login({ username: 'Test User', email: 'test@example.com' });
            navigate('/dashboard');
        } else {
            alert('Hibás felhasználónév vagy jelszó.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Felhasználónév:</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="password">Jelszó:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button type="submit">Bejelentkezés</button>
        </form>
    );
}