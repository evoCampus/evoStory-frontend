type NewGameProps = {
    onBack: () => void;
  };
  
  export default function NewGame({ onBack }: NewGameProps) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 px-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-6 sm:p-8 space-y-6 text-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">New Game</h1>
  
          <button
            onClick={onBack}
            className="w-full py-2 sm:py-3 px-4 bg-gray-300 text-gray-800 text-base sm:text-lg rounded hover:bg-gray-400 transition"
          >
            Back to starting screen
          </button>
        </div>
      </div>
    );
  }
  
