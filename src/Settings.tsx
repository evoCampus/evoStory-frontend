import DifficultySelector from "./DifficultySelector";
import VolumeSlider from "./Volume";
import { useState } from "react";

type SettingsProps = {
  onBack: () => void;
};

export default function Settings({ onBack }: SettingsProps) {
  const [showControls, setShowControls] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="max-w-xl w-full p-6 bg-white rounded-2xl shadow-md space-y-6">
        <h1 className="text-3xl font-bold text-center text-gray-800">Settings</h1>

        <DifficultySelector />
        <VolumeSlider />

        <button
          className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          onClick={() => setShowControls(prev => !prev)}
        >
          {showControls ? "Hide Controls" : "Show Controls"}
        </button>

        {showControls && (
          <div className="bg-gray-100 p-4 rounded">
            <h2 className="text-xl font-semibold mb-2">Controls</h2>
            {/* Controls will be here */}
          </div>
        )}

        <button
          className="w-full py-2 px-4 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition"
          onClick={onBack}
        >
          Back
        </button>
      </div>
    </div>
  );
}