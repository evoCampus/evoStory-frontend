import VolumeSlider from "../Volume";
import { useState } from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

export default function Settings() {
  const navigate = useNavigate();

  const [showControls, setShowControls] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-linear-to-t from-black to-gray-800  ">
      <div className="flex-col w-full bg-gray-700 rounded-2xl items-center justify-center">
        <h1 className="font-bold text-center text-white">
          Beállítások
        </h1>
        <div className="m-5">
        </div>

        <div className="m-5 ">
          <VolumeSlider />
        </div>
        <div className="flex items-center justify-center">
          <button
            className= "bg-gray-900 rounded-xl text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outlinetransition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500  ${className || ''}"
            onClick={() => setShowControls((prev) => !prev)}
          >
            {showControls ? "Irányítás elrejtése" : "Irányítás mutatása"}
          </button>
        </div>
        {showControls && (
          <div className="flex items-center justify-center bg-black rounded text-white m-5">
            <h2 className="font-semibold">Irányítás</h2>
            {/* Controls will be here */}
          </div>
        )}
        <div className="flex justify-center mt-6">
          <Button
            text="Főoldal"
            className="mt-4"
            onClick={() => {
              navigate("/");
            }}
          />
        </div>
      </div>
    </div>
  );
}
