import { JSX } from "react";
import { useNavigate } from "react-router-dom";

interface BackButtonProps {
    className?: string;
}

export default function HomeButton({ className }: BackButtonProps): JSX.Element {
    const navigate = useNavigate();

    const handleNavigateToHome = () => {
        navigate('/');
    }

    return (
        <div className={"mt-auto p-4 text-center"}>
            <button
                onClick={handleNavigateToHome}
                className={`bg-gray-900 rounded-xl text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outlinetransition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500  ${className || ''}`}
            >
                <span>Main</span>
            </button>
        </div>
    );
}