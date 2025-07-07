import  { JSX } from 'react';

interface BlueButtonProps {
    text?: string;
    onClick?: () => void;
    className?: string;
}


export default function Button({ text, onClick, className }: Readonly<BlueButtonProps>): JSX.Element {
    return (
        <button
            onClick={onClick}
            className={`bg-gray-900 rounded-xl text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outlinetransition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500  ${className || ''}`}
        >
            {text}
        </button>
    );
}
