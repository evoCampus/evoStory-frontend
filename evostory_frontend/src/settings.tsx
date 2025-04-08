
import "./Settings.css";
import DifficultySelector from "./difficultySelector";
import VolumeSlider from "./volume";
import { useState } from "react";

type SettingsProps = {
  onBack: () => void;
};

export default function Settings({ onBack }: SettingsProps) {
  const [showControls, setShowControls] = useState(false);

  return (
    <div className="container">
      <h1 className="title">Settings</h1>

      <DifficultySelector />
      <VolumeSlider />

      <button className="btn" onClick={() => setShowControls(!showControls)}>
        {showControls ? "Hide Controls" : "Show Controls"}
      </button>

      {showControls && (
        <div className="controls">
          <h2>Controls</h2>
        </div>
      )}

      <button className="btn" onClick={onBack}>Back</button>
    </div>
  );
}
