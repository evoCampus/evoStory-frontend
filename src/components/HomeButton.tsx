import React from "react";
import { useNavigate } from "react-router-dom";


interface BackButtonProps {

    className?: string;

}

export const HomeButton: React.FC<BackButtonProps> = ({ className }) => {

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


