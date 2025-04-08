import { useState } from "react";
import "./DifficultySelector.css";

const difficulties = ["Easy", "Normal", "Hard", "Insane"] as const;
type Difficulty = typeof difficulties[number];

export default function DifficultySelector() {
  const [index, setIndex] = useState(1); 

  const goLeft = () => {
    setIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const goRight = () => {
    setIndex((prev) => (prev < difficulties.length - 1 ? prev + 1 : prev));
  };

  const selectedDifficulty: Difficulty = difficulties[index];

  return (
    <div className="difficulty-selector">
      <button onClick={goLeft} disabled={index === 0}>
        ◀
      </button>

      <span className="difficulty-label">{selectedDifficulty}</span>

      <button onClick={goRight} disabled={index === difficulties.length - 1}>
        ▶
      </button>
    </div>
  );
}
