import { JSX } from "react";

interface Box {
    text: string;
    className?: string;
}

export default function ChapterPageBox({text}: Box): JSX.Element {
    return (
        <div className="flex items-center justify-center h-48 border border-gray-400 mt-4" style={{ backgroundColor: 'var(--box-bg-light)' }}>
            <span className="text-center">{text}</span>
        </div>
    );
}
