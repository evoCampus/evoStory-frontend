import { JSX } from "react";
import { useTranslation } from 'react-i18next';

export default function LogoutButton(): JSX.Element {
  const { t } = useTranslation();

  return (
    <button
      onClick={() => {
        console.log("Logging out...");
      }}
      className="bg-gray-900 rounded-xl text-white font-bold py-3 px-4
                 transition duration-300 ease-in-out
                 hover:-translate-y-1 hover:scale-110 hover:bg-gray-600 hover:text-black
                 focus:outline-none focus:shadow-outline"
    >
      {t('logout')}
    </button>
  );
}
