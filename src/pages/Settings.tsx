import DifficultySelector from "../DifficultySelector";
import VolumeSlider from "../Volume";
import { useState } from "react";

type SettingsProps = {
  onBack: () => void;
};

export default function Settings({ onBack }: SettingsProps) {
  const [showControls, setShowControls] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="w-full bg-white rounded-2xl">
        <h1 className="font-bold text-center text-white">
          Settings
        </h1>

        <DifficultySelector />
        <VolumeSlider />

        <button
          className="bg-white text-black rounded hover:bg-gray-100 transition"
          onClick={() => setShowControls((prev) => !prev)}
        >
          {showControls ? "Hide Controls" : "Show Controls"}
        </button>

        {showControls && (
          <div className="bg-white rounded text-black">
            <h2 className="font-semibold">Controls</h2>
            {/* Controls will be here */}
          </div>
        )}

        <button
          className="bg-white text-black rounded hover:bg-gray-100 transition"
          onClick={onBack}
        >
          Back
        </button>
      </div>
    </div>
  );
}
