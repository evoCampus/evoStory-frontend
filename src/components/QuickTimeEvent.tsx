import React, { useState, useEffect, useCallback, useRef } from 'react';

type QTEStatus = 'idle' | 'active' | 'success' | 'failed' | 'timeout';
type QTEChoice = 'optionA' | 'optionB';

interface QTEProps {
    timeLimit?: number;
    onSuccess?: () => void;
    onFailure?: () => void;
    onChoice?: (choice: QTEChoice) => void;
    active?: boolean;
}

const QuickTimeEvent: React.FC<QTEProps> = ({
    timeLimit = 5,
    onSuccess,
    onFailure,
    onChoice,
    active = false
}) => {
    const [status, setStatus] = useState<QTEStatus>('idle');
    const [timeLeft, setTimeLeft] = useState(timeLimit);
    const [selectedChoice, setSelectedChoice] = useState<QTEChoice | null>(null);
    const [correctChoice, setCorrectChoice] = useState<QTEChoice>('optionA');

    const timerRef = useRef<number | null>(null);

    useEffect(() => {
        if (active && status === 'idle') {
            startQTE();
        }
    }, [active]);

    const startQTE = useCallback(() => {
        setStatus('active');
        setTimeLeft(timeLimit);
        setSelectedChoice(null);
        const randomChoice = Math.random() > 0.5 ? 'optionA' : 'optionB';
        setCorrectChoice(randomChoice);

        if (timerRef.current) {
            clearInterval(timerRef.current);
        }
    }, [timeLimit]);

    useEffect(() => {
        if (status === 'active' && timeLeft > 0) {
            timerRef.current = window.setInterval(() => {
                setTimeLeft(prev => {
                    if (prev <= 0.1) {
                        handleTimeout();
                        return 0;
                    }
                    return Math.max(0, prev - 0.1);
                });
            }, 100);
        }

        return () => {
            if (timerRef.current) {
                clearInterval(timerRef.current);
                timerRef.current = null;
            }
        };
    }, [status, timeLeft]);

    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            if (status !== 'active') return;

            if (e.key === 'q' || e.key === 'Q') {
                handleChoice('optionA');
            } else if (e.key === 'e' || e.key === 'E') {
                handleChoice('optionB');
            }
        };

        window.addEventListener('keydown', handleKeyPress);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [status]);

    const handleTimeout = () => {
        if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
        }
        setStatus('timeout');
        onFailure?.();
    };

    const handleChoice = (choice: QTEChoice) => {
        if (status !== 'active') return;

        if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
        }

        setSelectedChoice(choice);
        onChoice?.(choice);

        if (choice === correctChoice) {
            setStatus('success');
            onSuccess?.();
        } else {
            setStatus('failed');
            onFailure?.();
        }
    };

    const resetQTE = () => {
        if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
        }
        setStatus('idle');
        setTimeLeft(timeLimit);
        setSelectedChoice(null);
    };

    const statusConfig = {
        idle: { message: 'Get ready!', color: 'text-info' },
        active: { message: 'Quick! Choose!', color: 'text-warning' },
        success: { message: 'Success! Well done!', color: 'text-success' },
        failed: { message: 'Wrong choice!', color: 'text-error' },
        timeout: { message: 'Too slow!', color: 'text-error' },
    };

    const displaySeconds = Math.floor(timeLeft);
    const displayTenths = Math.floor((timeLeft % 1) * 10);

    return (
        <div className="card w-full max-w-md bg-base-100 shadow-xl p-6">
            <div className="text-center mb-6">
                <h2 className="text-2xl font-bold mb-2">Quick Time Event</h2>
                <div className={`text-lg font-semibold ${statusConfig[status].color}`}>
                    {statusConfig[status].message}
                </div>

                {status === 'active' && (
                    <div className="mt-4">
                        <div className="text-sm text-gray-500 mb-2">Time remaining:</div>

                        <div className="flex justify-center">
                            <div className="radial-progress text-warning border-4 border-warning/20"
                                style={{
                                    '--value': (timeLeft / timeLimit) * 100,
                                    '--size': '8rem',
                                    '--thickness': '8px'
                                } as React.CSSProperties}
                                role="progressbar">
                                <div className="text-center">
                                    <div className="countdown font-mono text-3xl">
                                        <span style={{ '--value': displaySeconds } as React.CSSProperties}></span>
                                    </div>
                                    <div className="text-xs text-gray-500 mt-1">
                                        {displayTenths > 0 ? `.${displayTenths}` : '.0'}s
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {(status === 'success' || status === 'failed' || status === 'timeout') && (
                    <div className="mt-4">
                        {status === 'success' && (
                            <div className="alert alert-success">
                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>Correct choice! You picked the right option.</span>
                            </div>
                        )}
                        {status === 'failed' && (
                            <div className="alert alert-error">
                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>Wrong choice! The correct option was {correctChoice === 'optionA' ? 'A' : 'B'}.</span>
                            </div>
                        )}
                        {status === 'timeout' && (
                            <div className="alert alert-error">
                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span>Time's up! You were too slow to decide.</span>
                            </div>
                        )}
                    </div>
                )}
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
                <button
                    className={`btn btn-lg h-24 flex-col gap-2 transition-all duration-200 ${selectedChoice === 'optionA'
                        ? status === 'success' && correctChoice === 'optionA'
                            ? 'btn-success animate-pulse'
                            : status === 'failed' && selectedChoice === 'optionA'
                                ? 'btn-error'
                                : 'btn-primary'
                        : 'btn-outline hover:scale-[1.02]'
                        } ${status !== 'active' ? 'btn-disabled' : 'hover:shadow-lg'}`}
                    onClick={() => handleChoice('optionA')}
                    disabled={status !== 'active'}
                >
                    <span className="text-2xl">A</span>
                    <span className="text-sm">Attack</span>
                    {status === 'active' && (
                        <kbd className="kbd kbd-xs mt-1 opacity-50">Q</kbd>
                    )}
                </button>

                <button
                    className={`btn btn-lg h-24 flex-col gap-2 transition-all duration-200 ${selectedChoice === 'optionB'
                        ? status === 'success' && correctChoice === 'optionB'
                            ? 'btn-success animate-pulse'
                            : status === 'failed' && selectedChoice === 'optionB'
                                ? 'btn-error'
                                : 'btn-primary'
                        : 'btn-outline hover:scale-[1.02]'
                        } ${status !== 'active' ? 'btn-disabled' : 'hover:shadow-lg'}`}
                    onClick={() => handleChoice('optionB')}
                    disabled={status !== 'active'}
                >
                    <span className="text-2xl">B</span>
                    <span className="text-sm">Defend</span>
                    {status === 'active' && (
                        <kbd className="kbd kbd-xs mt-1 opacity-50">E</kbd>
                    )}
                </button>
            </div>

            <div className="text-center text-sm text-gray-500 mb-4">
                {status === 'idle' && "Click Start to begin the QTE"}
                {status === 'active' && (
                    <div>
                        <p>Quick! Choose the correct option before time runs out!</p>
                        <p className="text-xs mt-1">Press Q for Option A or E for Option B</p>
                    </div>
                )}
                {status === 'success' && "You successfully completed the QTE!"}
                {status === 'failed' && "You chose the wrong option. Try again!"}
                {status === 'timeout' && "Time ran out. Be quicker next time!"}
            </div>

            <div className="flex justify-center gap-4">
                {(status === 'idle' || status === 'success' || status === 'failed' || status === 'timeout') ? (
                    <button
                        className="btn btn-primary gap-2"
                        onClick={startQTE}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                        {status === 'idle' ? 'Start QTE' : 'Try Again'}
                    </button>
                ) : (
                    <button
                        className="btn btn-ghost gap-2"
                        onClick={resetQTE}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z" clipRule="evenodd" />
                        </svg>
                        Cancel
                    </button>
                )}
            </div>

            <div className="mt-6 pt-4 border-t border-base-300">
                <div className="stats shadow">
                    <div className="stat">
                        <div className="stat-title">Time Limit</div>
                        <div className="stat-value text-primary">{timeLimit}s</div>
                        <div className="stat-desc">Maximum time</div>
                    </div>
                    <div className="stat">
                        <div className="stat-title">Status</div>
                        <div className={`stat-value ${statusConfig[status].color.replace('text-', 'text-')}`}>
                            {status.charAt(0).toUpperCase() + status.slice(1)}
                        </div>
                        <div className="stat-desc">{statusConfig[status].message}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuickTimeEvent;