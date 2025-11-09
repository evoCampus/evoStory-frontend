import { useEffect, useState } from 'react';

interface Props {
  className?: string;
  checked?: boolean;
  onClick?: () => void;
}

export default function ThemeToggle({ className = '', checked, onClick }: Readonly<Props>) {
  const isControlled = typeof checked === 'boolean';

  const [localChecked, setLocalChecked] = useState<boolean>(() => {
    if (isControlled) return !!checked;
    const hasGlobal = typeof globalThis !== 'undefined';
    if (!hasGlobal) return true;
    const saved = globalThis.localStorage?.getItem?.('theme');
    if (saved === 'dark') return true;
    if (saved === 'light') return false;
    return true;
  });

  useEffect(() => {
    if (isControlled) setLocalChecked(!!checked);
  }, [checked, isControlled]);

  useEffect(() => {
    const docEl = globalThis.document?.documentElement;
    if (!docEl) return;
    docEl.dataset.theme = 'dark';
    docEl.classList.add('dark');
    docEl.classList.remove('light');
  }, []);

  const checkedState = isControlled ? !!checked : localChecked;

  useEffect(() => {
    const theme = checkedState ? 'dark' : 'light';
    if (typeof globalThis === 'undefined') return;
    try {
      globalThis.localStorage?.setItem?.('theme', theme);
    } catch (e) {
      console.debug?.('ThemeToggle: failed to persist theme', e);
    }
    const docEl = globalThis.document?.documentElement;
    if (!docEl) return;
    docEl.dataset.theme = theme;
    if (theme === 'dark') {
      docEl.classList.add('dark');
      docEl.classList.remove('light');
    } else {
      docEl.classList.add('light');
      docEl.classList.remove('dark');
    }
  }, [checkedState]);

  const handleClick = () => {
    const next = !checkedState;
    if (!isControlled) setLocalChecked(next);
    if (onClick) onClick();
  };

  return (
    <div className="h-full text-white">
      <div className="h-full rounded-xl shadow-lg p-4 sm:p-6 flex items-center
                    [data-theme='dark']:bg-gray-800
                    [data-theme='light']:bg-gray-200">
        <div className="flex items-center justify-between w-full">
          <div>
            <div className="text-lg sm:text-xl font-medium text-gray-300">Theme</div>
            <div className="text-sm text-gray-400">{checkedState ? 'Dark' : 'Light'}</div>
          </div>

          <button
            type="button"
            onClick={handleClick}
            aria-pressed={checkedState}
            aria-label={checkedState ? 'Switch to light theme' : 'Switch to dark theme'}
            className={`inline-flex items-center ${className}`}
          >
            <span className="sr-only">{checkedState ? 'Switch to light theme' : 'Switch to dark theme'}</span>
            <div className={`relative w-14 h-8 rounded-full transition-colors duration-200 ${checkedState ? 'bg-indigo-600' : 'bg-gray-300'}`}>
              <span className={`absolute top-0.5 left-0.5 w-7 h-7 bg-white rounded-full shadow transform transition-transform duration-200 ${checkedState ? 'translate-x-6' : 'translate-x-0'}`} />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

