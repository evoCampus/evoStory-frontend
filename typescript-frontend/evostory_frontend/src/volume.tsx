import { useState } from "react";
import "./Volume.css";

export default function VolumeSlider() {
  const [volume, setVolume] = useState(50); 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(Number(e.target.value));
  };

  return (
    <div className="volume-slider">
      <label htmlFor="volume">Volume: {volume}%</label>
      <input
        id="volume"
        type="range"
        min="0"
        max="100"
        value={volume}
        onChange={handleChange}
      />
    </div>
  );
}
