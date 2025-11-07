import { useEffect, useState } from 'react';

interface Props {
  className?: string;
  checked?: boolean;
  onClick?: () => void;
}

export default function ThemeToggle({ className = '', checked, onClick }: Readonly<Props>) {
  const isControlled = typeof checked === 'boolean';
  const [isChecked, setChecked] = useState<boolean>(checked ?? false);

  useEffect(() => {
    if (isControlled) setChecked(!!checked);
  }, [checked, isControlled]);

  const current = isControlled ? !!checked : isChecked;

  const handleClick = () => {
    if (!isControlled) setChecked((c) => !c);
    if (onClick) onClick();
  };

  return (
    <div className="h-full text-white">
      <div className="h-full bg-gray-800 rounded-xl shadow-lg p-4 sm:p-6 flex items-center">
        <div className="flex items-center justify-between w-full">
          <div>
            <div className="text-lg sm:text-xl font-medium text-gray-300">Theme</div>
            <div className="text-sm text-gray-400">{current ? 'Dark' : 'Light'}</div>
          </div>

          <button
            type="button"
            onClick={handleClick}
            aria-pressed={current}
            aria-label="Toggle theme"
            className={`inline-flex items-center ${className}`}
          >
            <span className="sr-only">Toggle theme</span>
            <div className={`relative w-14 h-8 rounded-full transition-colors duration-200 ${current ? 'bg-indigo-600' : 'bg-gray-300'}`}>
              <span className={`absolute top-0.5 left-0.5 w-7 h-7 bg-white rounded-full shadow transform transition-transform duration-200 ${current ? 'translate-x-6' : 'translate-x-0'}`} />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

