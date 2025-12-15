import LoginForm from '../auth/forms/LoginForm';
import '../index.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface LoginPageProps { }


export default function LoginPage({ }: LoginPageProps): React.JSX.Element {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col items-center justify-center h-screen w-screen" style={{ background: 'var(--page-bg)' }}>
            <div className="border border-gray-400 p-8 mx-auto w-4/5 max-w-md rounded-lg shadow-md" style={{ backgroundColor: 'var(--box-bg-light)' }}>
                <div className="flex flex-col gap-4">
                    <p><strong>{t('login')}</strong></p>
                    <LoginForm />
                    <p className="text-center text-gray-400">
                        {t('noAccount')} <Link to="/register" className="text-blue-500 hover:underline">{t('register')}</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}