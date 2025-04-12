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
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="flex items-center space-x-4 p-6 bg-gray-800 rounded-lg">
        <button
          onClick={decrease}
          disabled={index <= 0}
          className="px-4 py-2 bg-gray-300 rounded-lg text-lg hover:bg-gray-400 disabled:opacity-50"
        >
          ◀
        </button>

        <span className="text-xl font-semibold">{selectedDifficulty}</span>

        <button
          onClick={increase}
          disabled={index === difficulties.length - 1}
          className="px-4 py-2 bg-gray-300 rounded-lg text-lg hover:bg-gray-400 disabled:opacity-50"
        >
          ▶
        </button>
      </div>
    </div>
  );
}
