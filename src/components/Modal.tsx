import React, { JSX } from 'react';
import Button from './Button';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
    confirmText?: string;
    onConfirm?: () => void;
    cancelText?: string;
    onCancel?: () => void;
    showCancelButton?: boolean;
    showConfirmButton?: boolean;
    modalClassName?: string;
    overlayClassName?: string;
}

export default function Modal({
    isOpen,
    onClose,
    title,
    children,
    confirmText = 'Igen',
    onConfirm,
    cancelText = 'Nem',
    onCancel,
    showCancelButton = true,
    showConfirmButton = true,
    modalClassName = '',
    overlayClassName = '',
}: ModalProps): JSX.Element | null {
    if (!isOpen) {
        return null;
    }

    const handleConfirm = () => {
        onConfirm?.();
        onClose();
    };

    const handleCancel = () => {
        onCancel?.();
        onClose();
    };

    return (
        <div
            className={`fixed inset-0 bg-linear-to-t from-black to-gray-800 flex items-center justify-center z-50 ${overlayClassName}`}
            onClick={onClose}
        >
            <div
                className={`bg-gray-800 rounded-lg shadow-xl p-6 w-full max-w-sm mx-4 transform transition-all duration-300 ease-out scale-95 opacity-0 animate-modal-in ${modalClassName}`}
                onClick={(e) => e.stopPropagation()}
            >
                <h3 className="text-xl font-bold text-white mb-4 border-b border-gray-600 pb-2">{title}</h3>
                <div className="text-gray-300 mb-6">{children}</div>

                <div className="flex justify-end space-x-3">
                    {showCancelButton && (
                        <Button
                            onClick={handleCancel}
                            text={cancelText}
                            className="rounded-xl text-white font-bold py-3 px-4 focus:outline-none focus:shadow-outlinetransition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
                        />
                    )}
                    {showConfirmButton && (
                        <Button
                            onClick={handleConfirm}
                            text={confirmText}
                            className="bg-blue-600 hover:bg-red-600 rounded-xl text-white font-bold py-3 px-4 focus:outline-none focus:shadow-outlinetransition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
                        />
                    )}
                </div>
            </div>
        </div>
    );
}