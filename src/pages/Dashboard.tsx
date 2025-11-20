import { JSX, useState } from 'react';
import { useAuth } from '../auth/AuthContext';
import LogoutButton from './LogoutButton';
import Button from '../components/Button';
import Modal from '../components/Modal';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface DashboardPageProps { }

export default function DashboardPage({ }: DashboardPageProps): JSX.Element {
    const navigate = useNavigate();
    const { user, deleteUser } = useAuth();

    const [showConfirmModal, setShowConfirmModal] = useState<boolean>(false);
    const [showMessageModal, setShowMessageModal] = useState<boolean>(false);
    const [messageModalTitle, setMessageModalTitle] = useState<string>('');
    const [messageModalContent, setMessageModalContent] = useState<string>('');
    const [messageModalIsSuccess, setMessageModalIsSuccess] = useState<boolean>(false);

    const handleNavigateToHome = () => {
        navigate('/');
    };

    const handleNavigateToLogin = () => {
        navigate('/login');
    };

    const requestDeleteAccount = () => {
        setShowConfirmModal(true);
    };

    const { t } = useTranslation();

    const confirmDeleteAccount = async () => {
        if (user) {
            try {
                await deleteUser(user.id);

                setMessageModalTitle(t('success'));
                setMessageModalContent(t('accountDeleted'));
                setMessageModalIsSuccess(true);
                setShowMessageModal(true);

            } catch (error: any) {
                console.error('Hiba a fiók törlésekor:', error);
                setMessageModalTitle(t('error'));
                setMessageModalContent(t('deleteError') + (error.message || 'Ismeretlen hiba'));
                setMessageModalIsSuccess(false);
                setShowMessageModal(true);
            }
        }
    };

    const displayProfilePicture = `https://ui-avatars.com/api/?name=${user?.userName?.charAt(0) || '?'}&background=random&color=fff&size=96&bold=true`;

    return (
        <div className="flex flex-col items-center justify-center h-screen w-screen bg-gradient-to-t from-black to-gray-800">
            <div className="border border-gray-400 p-8 mx-auto w-4/5 max-w-md bg-gray-700 rounded-lg shadow-md">
                <div className="flex flex-col gap-4 text-white text-center">
                    <h2 className="text-2xl font-bold mb-4">{t('info')}</h2>
                    {user ? (
                        <>
                            <img
                                src={displayProfilePicture}
                                alt={t('profilePicture')}
                                className="rounded-full w-24 h-24 mx-auto mb-4 border-2 border-gray-500 object-cover"
                            />

                            <p className="text-lg">{t('welcome')}, {user.userName}!</p>
                            <p className="text-md text-gray-300">{t('email')}: {user.email}</p>
                            <div className="mt-6 flex flex-col gap-4">
                                <LogoutButton />
                                <Button
                                    onClick={handleNavigateToHome}
                                    text={t('home')}
                                    className="bg-gray-900 rounded-xl text-white font-bold py-3 px-4 focus:outline-none focus:shadow-outlinetransition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
                                />
                                <Button
                                    onClick={requestDeleteAccount}
                                    text={t('deleteAccount')}
                                    className="bg-blue-600 hover:bg-red-600 rounded-xl text-white font-bold py-3 px-4 focus:outline-none focus:shadow-outlinetransition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
                                />
                            </div>
                        </>
                    ) : (
                        <>
                            <p className="text-lg">{t('noUser')}</p>
                            <div className="mt-6">
                                <Button
                                    onClick={handleNavigateToLogin}
                                    text={t('login')}
                                    className="w-full py-3 bg-blue-600 hover:bg-teal-500 text-white font-medium rounded-lg transition-colors"
                                />
                            </div>
                        </>
                    )}
                </div>
            </div>

            <Modal
                isOpen={showConfirmModal}
                onClose={() => setShowConfirmModal(false)}
                title={t('deleteAccountTitle')}
                confirmText={t('deleteAccountConfirm')}
                onConfirm={confirmDeleteAccount}
                cancelText={t('deleteAccountCancel')}
                onCancel={() => setShowConfirmModal(false)}
                showConfirmButton={true}
                showCancelButton={true}
            >
                <p>{t('deleteAccountQuestion')}</p>
                <p className="text-sm text-yellow-400 mt-2">{t('deleteAccountWarning')}</p>
            </Modal>

            <Modal
                isOpen={showMessageModal}
                onClose={() => setShowMessageModal(false)}
                title={messageModalTitle}
                showConfirmButton={true}
                showCancelButton={false}
                confirmText={t('ok')}
                onConfirm={() => setShowMessageModal(false)}
                modalClassName={messageModalIsSuccess ? 'border-t-4 border-green-500' : 'border-t-4 border-red-500'}
            >
                <p>{messageModalContent}</p>
            </Modal>
        </div>
    );
}
