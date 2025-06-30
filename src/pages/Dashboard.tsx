import { JSX } from 'react';
import { useAuth } from '../auth/AuthContext';
import LogoutButton from './LogoutButton';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

interface DashboardPageProps {}

export default function DashboardPage({}: DashboardPageProps): JSX.Element {
    const navigate = useNavigate();

    const handleNavigateToHome = () => {
        navigate('/');
    };

    const handleNavigateToLogin = () => {
        navigate('/login');
    };

    const { user, deleteUser } = useAuth();

    const handleDeleteAccount = async () => {
        if (user && window.confirm('Biztosan törölni szeretnéd a fiókodat? Ez a művelet visszavonhatatlan!')) {
            try {
                const success = await deleteUser(user.id);
                if (success) {
                    alert('Fiók sikeresen törölve.');
                } else {
                    alert('Hiba történt a fiók törlésekor.');
                }
            } catch (error: any) {
                console.error('Hiba a fiók törlésekor:', error);
                alert('Hiba történt a fiók törlésekor: ' + (error.message || 'Ismeretlen hiba'));
            }
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen w-screen bg-gradient-to-t from-black to-gray-800">
            <div className="border border-gray-400 p-8 mx-auto w-4/5 max-w-md bg-gray-700 rounded-lg shadow-md">
                <div className="flex flex-col gap-4 text-white text-center">
                    <h2 className="text-2xl font-bold mb-4">Információk:</h2>
                    {user ? (
                        <>
                            <img
                                src={`https://ui-avatars.com/api/?name=${user.userName.charAt(0)}&background=random&color=fff&size=96&bold=true`}
                                alt="Profilkép"
                                className="rounded-full w-24 h-24 mx-auto mb-4 border-2 border-gray-500"
                            />
                            <p className="text-lg">Üdv, {user.userName}!</p>
                            <p className="text-md text-gray-300">E-mail: {user.email}</p>
                            <div className="mt-6 flex flex-col gap-4">
                                <LogoutButton /> 
                                <Button
                                    onClick={handleNavigateToHome}
                                    text="Home"
                                    className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                                />
                                <Button
                                    onClick={handleDeleteAccount}
                                    text="Fiók törlése"
                                    className="w-full py-3 hover:bg-red-500 text-white font-medium rounded-lg transition-colors"
                                />
                            </div>
                        </>
                    ) : (
                        <>
                            <p className="text-lg">Nincs bejelentkezve.</p>
                            <div className="mt-6">
                                <Button
                                    onClick={handleNavigateToLogin}
                                    text="Bejelentkezés"
                                    className="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors"
                                />
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}