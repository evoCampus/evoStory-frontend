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
                className={` roundButton text-center ${className || ''}`}
            >
                <span>Main</span>
            </button>
        </div>
    );
}
