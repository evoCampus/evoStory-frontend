import { useState } from "react";

export default function VolumeSlider() {
  const [volume, setVolume] = useState(50);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(Number(e.target.value));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="text-center p-6 bg-gray-800 rounded-lg shadow-lg">
        <div className="flex flex-col gap-4">
          <label htmlFor="volume" className="text-xl font-medium text-gray-300">
            Volume: {volume}%
          </label>
          <input
            id="volume"
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={handleChange}
            className="w-full max-w-xs h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
          />
        </div>
      </div>
    </div>
  );
}
