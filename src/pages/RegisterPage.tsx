import RegisterForm from '../auth/forms/RegisterForm';
import '../index.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface RegisterPageProps { }

export default function RegisterPage({ }: RegisterPageProps): React.JSX.Element {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col items-center justify-center h-screen w-screen" style={{ background: 'var(--page-bg)' }}>
            <div className="border border-gray-400 p-8 mx-auto w-4/5 max-w-md rounded-lg shadow-md" style={{ backgroundColor: 'var(--box-bg)' }}>
                <div className="flex flex-col gap-4">
                    <h2>{t('register')}</h2>
                    <RegisterForm />
                    <p className="text-center text-gray-400">
                        {t('haveAccount')} <Link to="/login" className="text-blue-500 hover:underline">{t('login')}</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}