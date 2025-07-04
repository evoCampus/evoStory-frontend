import { Link } from "react-router-dom";
import { JSX } from "react";

interface HomeButtonProps {
    className?: string;
}

export default function HomeButton({ className }: HomeButtonProps): JSX.Element {
    return (
        <div className={"mt-auto p-4 text-center"}>
            <Link to="/" className={`roundButton text-center ${className || ''}`}>
                <span>Főoldal</span>
            </Link>
        </div>
    );
}
