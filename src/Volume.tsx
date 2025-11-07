import { useState } from "react";

export default function VolumeSlider() {
  const [volume, setVolume] = useState(50);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(Number(e.target.value));
  };

  return (
    <div className="h-full text-white">
      <div className="h-full bg-gray-800 rounded-xl shadow-lg p-4 sm:p-6">
        <div className="flex flex-col gap-4">
          <label
            htmlFor="volume"
            className="text-lg sm:text-xl font-medium text-gray-300"
          >
            Volume: {volume}%
          </label>
          <input
            id="volume"
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={handleChange}
            className="w-full bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
          />
        </div>
      </div>
    </div>
  );
}

