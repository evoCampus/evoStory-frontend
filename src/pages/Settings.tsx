import DifficultySelector from "../DifficultySelector";
import VolumeSlider from "../Volume";
import { useState } from "react";

export default function Settings() {
  const [showControls, setShowControls] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen w-screen bg-black">
      <div className="w-full bg-gray-700 rounded-2xl">
        <h1 className="font-bold text-center text-white">
          Settings
        </h1>

        <DifficultySelector />
        <VolumeSlider />

        <button
          className="items-center bg-black text-white rounded hover:bg-gray-100 transition"
          onClick={() => setShowControls((prev) => !prev)}
        >
          {showControls ? "Hide Controls" : "Show Controls"}
        </button>

        {showControls && (
          <div className="items-center bg-black rounded text-white">
            <h2 className="font-semibold">Controls</h2>
            {/* Controls will be here */}
          </div>
        )}
      </div>
    </div>
  );
}
