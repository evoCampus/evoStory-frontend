import { useEffect, useRef, useState } from 'react';

interface Props {
  className?: string;
  value?: 'en' | 'hu';
  onChange?: (lang: 'en' | 'hu') => void;
}

export default function LanguageToggle({ className = '', value, onChange }: Readonly<Props>) {
  const isControlled = typeof value === 'string';
  const bodyRef = useRef<HTMLElement | null>(null);

  const [localValue, setLocalValue] = useState<'en' | 'hu'>(() => {
    if (isControlled && value) return value;

    try {
      const saved = localStorage.getItem('language');
      if (saved === 'en' || saved === 'hu') return saved;
    } catch {
      // ignore
    }

    return 'hu';
  });

  const current: 'en' | 'hu' = isControlled && value ? value : localValue;

  useEffect(() => {
    bodyRef.current = document.documentElement;
    if (!bodyRef.current) return;

    bodyRef.current.dataset.language = current;
    bodyRef.current.classList.add(current);
    bodyRef.current.classList.remove(current === 'en' ? 'hu' : 'en');
  }, []);

  useEffect(() => {
    if (!bodyRef.current) return;

    try {
      localStorage.setItem('language', current);
    } catch { /* ignore */ }

    bodyRef.current.dataset.language = current;
    bodyRef.current.classList.add(current);
    bodyRef.current.classList.remove(current === 'en' ? 'hu' : 'en');
  }, [current]);

  const handleToggle = () => {
    const next = current === 'en' ? 'hu' : 'en';
    if (!isControlled) setLocalValue(next);
    onChange?.(next);
  };

  return (
    <div className="h-full text-white">
      <div className={`h-full rounded-xl shadow-lg p-4 sm:p-6 flex items-center bg-gray-200 dark:bg-gray-800`}>
        <div className="flex items-center justify-between w-full">
          <div>
            <div className="text-lg sm:text-xl font-medium text-gray-300">
              {current === 'hu' ? 'Nyelv' : 'Language'}
            </div>
            <div className="text-sm text-gray-400">
              {current === 'hu' ? 'Magyar' : 'English'}
            </div>
          </div>

          <button
            type="button"
            onClick={handleToggle}
            aria-pressed={current === 'en'}
            aria-label={current === 'hu' ? `Nyelv váltása` : `Switch language`}
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
