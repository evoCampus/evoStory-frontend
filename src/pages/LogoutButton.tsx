import { JSX } from 'react';
import { useAuth } from '../auth/AuthContext';

interface LogoutButtonProps {}

export default function LogoutButton({}: LogoutButtonProps): JSX.Element {
    const { logout } = useAuth();

    const handleLogout = () => {
        logout();
    };

    return (
        <button onClick={handleLogout}
        className={`bg-gray-900 rounded-xl text-white font-bold py-3 px-4 focus:outline-none focus:shadow-outlinetransition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-gray-600`}
        >Kijelentkezés</button>
    );
}