import React from "react";

interface Box {
    text: string;
    className?: string;
}

const ChapterPageBox: React.FC<Box> = ({text, className}) => {
    return(
    <div className={`flex items-center justify-center h-48 border border-gray-400 mt-4 ${className || ''}`}>
    <span className="text-center">{text}</span>
    </div>
    );
}

export default ChapterPageBox;