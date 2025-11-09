import { useEffect, useState } from 'react';

interface Props {
  className?: string;
  value?: 'en' | 'hu';
  onChange?: (lang: 'en' | 'hu') => void;
}

export default function LanguageToggle({ className = '', value, onChange }: Readonly<Props>) {
  const isControlled = typeof value === 'string';
  const [localValue, setValue] = useState<'en' | 'hu'>(value ?? 'hu');

  useEffect(() => {
    if (isControlled && value) setValue(value);
  }, [value, isControlled]);

  const current: 'en' | 'hu' = isControlled && value ? value : localValue;

  const handleToggle = () => {
    const next = current === 'en' ? 'hu' : 'en';
    if (!isControlled) setValue(next);
    onChange?.(next);
  };

  return (
    <div className="h-full text-white">
      <div className="h-fullrounded-xl shadow-lg p-4 sm:p-6
      [data-theme='dark']:bg-gray-800
      [data-theme='light']:bg-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-lg sm:text-xl font-medium text-gray-300">
              {current === 'hu' ? 'Nyelv' : 'Language'}
            </div>
            <div className="text-sm text-gray-400">{current === 'hu' ? 'Magyar' : 'English'}</div>
          </div>

          <button
            type="button"
            onClick={handleToggle}
            aria-pressed={current === 'en'}
            aria-label={current === 'hu' ? `Nyelv váltása (jelenlegi: ${current})` : `Switch language (current: ${current})`}
            className={`inline-flex items-center ${className}`}
          >
            <span className="sr-only">{current === 'hu' ? 'Nyelv váltása' : 'Switch language'}</span>
            <div className={`relative w-14 h-8 rounded-full transition-colors duration-200 ${current === 'en' ? 'bg-indigo-600' : 'bg-gray-300'}`}>
              <span className={`absolute top-0.5 left-0.5 w-7 h-7 bg-white rounded-full shadow transform transition-transform duration-200 ${current === 'en' ? 'translate-x-6' : 'translate-x-0'}`} />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
