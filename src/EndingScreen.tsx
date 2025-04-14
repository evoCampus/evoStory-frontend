type EndingScreenProps = {
    goToNewGame: () => void;
    goToMenu: () => void;
  };
  
  export default function EndingScreen({ goToNewGame, goToMenu }: EndingScreenProps) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
        <div className="text-center">
          <h1 className="font bold">Game Over</h1>
  
          <button
            onClick={goToNewGame}
            className="w-3/4 bg-white text-black rounded-lg hover:bg-gray-100 transition"
          >
            New Game
          </button>
  
          <button
            onClick={goToMenu}
            className="w-3/4 bg-white text-black rounded-lg hover:bg-gray-100 transition"
          >
            Back to starting screen
          </button>
        </div>
      </div>
    );
  }
  