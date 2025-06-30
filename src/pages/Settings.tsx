import VolumeSlider from "../Volume";
import { useState } from "react";
import  HomeButton  from "../components/HomeButton";

export default function Settings() {


  const [showControls, setShowControls] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen w-screen bg-black ">
      <div className="flex-col w-full bg-gray-700 rounded-2xl items-center justify-center">
        <h1 className="font-bold text-center text-white">
          Settings
        </h1>
        <div className="m-5">
        </div>

        <div className="m-5 ">
        <VolumeSlider />
        </div>
        <div className="flex items-center justify-center">
        <button
          className="items-center bg-black text-white rounded hover:bg-gray-100 transition m-5"
          onClick={() => setShowControls((prev) => !prev)}
        >
          {showControls ? "Hide Controls" : "Show Controls"}
        </button>
        </div>
        {showControls && (
          <div className="flex items-center justify-center bg-black rounded text-white m-5">
            <h2 className="font-semibold">Controls</h2>
            {/* Controls will be here */}
          </div>
        )}
        <HomeButton/>
      </div>
    </div>
  );
}
