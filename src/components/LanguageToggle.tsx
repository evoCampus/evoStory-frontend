import { useTranslation } from 'react-i18next';
import { SupportedLanguage } from '../i18n/config';

interface Props {
  className?: string;
  value?: SupportedLanguage;
  onChange?: (lang: SupportedLanguage) => void;
}

export default function LanguageToggle({ className = '', value, onChange }: Readonly<Props>) {
  const { i18n, t } = useTranslation();
  const current = (value || i18n.language) as SupportedLanguage;

  const handleToggle = () => {
    const next: SupportedLanguage = current === 'en' ? 'hu' : 'en';
    i18n.changeLanguage(next);
    onChange?.(next);
  };

  return (
    <div className="h-full text-white">
      <div
        className="h-full rounded-xl shadow-lg p-4 sm:p-6 flex items-center"
        style={{ backgroundColor: 'var(--toggle-bg)' }}
      >
        <div className="flex items-center justify-between w-full">
          <div>
            <div className="text-lg sm:text-xl font-medium text-gray-300">
              {t('languageToggle.title')}
            </div>
            <div className="text-sm text-gray-400">
              {t('languageToggle.currentLanguage')}
            </div>
          </div>

          <button
            type="button"
            onClick={handleToggle}
            aria-pressed={current === 'en'}
            aria-label={t('languageToggle.switchLanguage')}
            className={`inline-flex items-center ${className}`}
          >
            <span className="sr-only">{t('languageToggle.switchLanguage')}</span>
            <div className={`relative w-14 h-8 rounded-full transition-colors duration-200 ${current === 'en' ? 'bg-indigo-600' : 'bg-gray-300'}`}>
              <span className={`absolute top-0.5 left-0.5 w-7 h-7 bg-white rounded-full shadow transform transition-transform duration-200 ${current === 'en' ? 'translate-x-6' : 'translate-x-0'}`} />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
