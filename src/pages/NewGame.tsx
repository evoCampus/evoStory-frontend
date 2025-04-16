type NewGameProps = {
    onBack: () => void;
  };
  
  export default function NewGame({ onBack }: NewGameProps) {
    return (
      <div className="fflex items-center justify-center min-h-screen bg-gray-900 text-white">
        <div className="text-center">
          <h1 className="w-3/4 bg-white text-black rounded-lg hover:bg-gray-100 transition">New Game</h1>
  
          <button
            onClick={onBack}
            className="w-3/4 bg-white text-black rounded-lg hover:bg-gray-100 transition"
          >
            Back to starting screen
          </button>
        </div>
      </div>
    );
  }
  
