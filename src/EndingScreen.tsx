type EndingScreenProps = {
    goToNewGame: () => void;
    goToMenu: () => void;
  };
  
  export default function EndingScreen({ goToNewGame, goToMenu }: EndingScreenProps) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 px-4">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-6 sm:p-8 space-y-6 text-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Game Over</h1>
  
          <button
            onClick={goToNewGame}
            className="w-full py-2 sm:py-3 px-4 bg-green-500 text-white text-base sm:text-lg rounded hover:bg-green-600 transition"
          >
            New Game
          </button>
  
          <button
            onClick={goToMenu}
            className="w-full py-2 sm:py-3 px-4 bg-gray-300 text-gray-800 text-base sm:text-lg rounded hover:bg-gray-400 transition"
          >
            Back to starting screen
          </button>
        </div>
      </div>
    );
  }
  