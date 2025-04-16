type SettingsProps = {
    onBack: () => void;
  };
  
  export default function ContinueGame({ onBack }: SettingsProps) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
        <div className="text-center">
          <h1 className="font-bold">Continue Game</h1>
  
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
  