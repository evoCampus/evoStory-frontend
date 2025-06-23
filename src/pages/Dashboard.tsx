import React, { JSX } from 'react';
import useAuth from '../auth/useAuth';
import LogoutButton from './LogoutButton';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

interface DashboardPageProps {}

export default function DashboardPage({}: DashboardPageProps): JSX.Element {
const navigate = useNavigate();
    
  const handleNavigateToHome = () => {
    navigate('/');
  }
    const handleNavigateToLogin = () => {
    navigate('/login');
  }

    const { user } = useAuth(); 

    return (
        <div className="flex flex-col items-center justify-center h-screen w-screen bg-linear-to-t from-black to-gray-800 ">
            <div className="border border-gray-400 p-8 mx-auto w-4/5 max-w-md bg-gray-700 rounded-lg shadow-md">
                <div className="flex flex-col gap-4 text-white"> 
                    <h2>Informations:</h2>
                    {user ? (
                        <>
                            <p>Üdv, {user.username}!</p>
                            <p>E-mail: {user.email}</p>
                            <LogoutButton/>
                            <Button
                            onClick={handleNavigateToHome}
                            text="Home"
                            className="w-full py-3 text-white font-medium rounded-lg transition-colors"
                            />
                        </>
                    ) : (
                    <>
                        <p>Nincs bejelentkezve.</p>
                        <Button
                        onClick={handleNavigateToLogin}
                        text="Login"
                        className="w-full py-3 text-white font-medium rounded-lg transition-colors"
                        />
                    </>
                    )}
                </div>
            </div>
        </div>
    );
}