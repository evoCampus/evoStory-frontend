import { useEffect, useRef, useState } from 'react';

interface Props {
  className?: string;
  checked?: boolean;
  onClick?: () => void;
}

export default function ThemeToggle({
  className = '',
  checked,
  onClick,
}: Readonly<Props>) {
  const isControlled = typeof checked === 'boolean';
  const bodyRef = useRef<HTMLElement | null>(null);

  const [localChecked, setLocalChecked] = useState<boolean>(() => {
    if (isControlled) return !!checked;

    try {
      const saved = localStorage.getItem('theme');
      if (saved === 'dark') return true;
      if (saved === 'light') return false;
    } catch (e) {
      console.debug('ThemeToggle: failed to read theme from localStorage', e);
    }

    return true;
  });

  useEffect(() => {
    const appElement = document.getElementById('app');
    if (!appElement) return;
    bodyRef.current = appElement;

    const theme = localChecked ? 'dark' : 'light';
    appElement.dataset.theme = theme;
  }, [localChecked]);

  useEffect(() => {
    if (isControlled) setLocalChecked(!!checked);
  }, [checked, isControlled]);

  const checkedState = isControlled ? !!checked : localChecked;

  useEffect(() => {
    const appElement = document.getElementById('app');
    if (!appElement) return;
    bodyRef.current = appElement;

    const theme = checkedState ? 'dark' : 'light';

    try {
      localStorage.setItem('theme', theme);
    } catch (e) {
      console.debug('ThemeToggle: failed to persist theme', e);
    }

    appElement.dataset.theme = theme;
  }, [checkedState]);

  const handleClick = () => {
    const next = !checkedState;
    if (!isControlled) setLocalChecked(next);
    if (onClick) onClick();
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
              Theme
            </div>
            <div className="text-sm text-gray-400">
              {checkedState ? 'Dark' : 'Light'}
            </div>
          </div>

          <button
            type="button"
            onClick={handleClick}
            aria-pressed={checkedState}
            aria-label={
              checkedState ? 'Switch to light theme' : 'Switch to dark theme'
            }
            className={`inline-flex items-center ${className}`}
          >
            <span className="sr-only">
              {checkedState ? 'Switch to light theme' : 'Switch to dark theme'}
            </span>

            <div
              className={`
                relative w-14 h-8 rounded-full transition-colors duration-200
                ${checkedState ? 'bg-indigo-600' : 'bg-gray-300'}
              `}
            >
              <span
                className={`
                  absolute top-0.5 left-0.5 w-7 h-7 bg-white rounded-full shadow
                  transform transition-transform duration-200
                  ${checkedState ? 'translate-x-6' : 'translate-x-0'}
                `}
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
