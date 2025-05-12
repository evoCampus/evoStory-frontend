import { JSX } from "react";

interface Box {
    text: string;
    className?: string;
}

export default function ChapterPageBox({ text, className}: Box): JSX.Element {
    return (
        <div className={`flex items-center justify-center h-48 border border-gray-400 mt-4 ${className || ''}`}>
            <span className="text-center">{text}</span>
        </div>
    );
}
