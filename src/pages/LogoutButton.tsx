import { JSX } from 'react';
import { useAuth } from '../auth/AuthContext';
import { getCookie, removeCookie } from 'typescript-cookie';
import { useTranslation } from 'react-i18next';

export default function LogoutButton(): JSX.Element {
  const { logout } = useAuth();
  const { t } = useTranslation();

  const handleLogout = () => {
    logout();
    console.log(`${getCookie("username")} deleted`);
    removeCookie("username");
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-gray-900 rounded-xl text-white font-bold py-3 px-4 transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-gray-600 hover:text-black focus:outline-none focus:shadow-outline"
    >
      {t('logout.button')}
    </button>
  );
}
