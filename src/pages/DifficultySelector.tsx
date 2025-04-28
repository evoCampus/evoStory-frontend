import { useState } from "react";

const difficulties = ["Easy", "Normal", "Hard", "Insane"] as const;
type Difficulty = typeof difficulties[number];

export default function DifficultySelector() {
  const [index, setIndex] = useState(1);

  const decrease = () => {
    setIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const increase = () => {
    setIndex((prev) => (prev < difficulties.length - 1 ? prev + 1 : prev));
  };

  const selectedDifficulty: Difficulty = difficulties[index];

  return (
    <div className="flex items-center justify-center w-full text-white">
      <div className="flex items-center justify-center space-x-4 w-full max-w-md p-4 sm:p-6 bg-gray-800 rounded-xl">
        <button
          onClick={decrease}
          disabled={index <= 0}
          className="px-4 py-2 text-base sm:text-lg bg-gray-300 text-black rounded-lg hover:bg-gray-400 disabled:opacity-50 transition"
        >
          ◀
        </button>

        <span className="text-lg sm:text-xl font-semibold">
          {selectedDifficulty}
        </span>

        <button
          onClick={increase}
          disabled={index === difficulties.length - 1}
          className="px-4 py-2 text-base sm:text-lg bg-gray-300 text-black rounded-lg hover:bg-gray-400 disabled:opacity-50 transition"
        >
          ▶
        </button>
      </div>
    </div>
  );
}
