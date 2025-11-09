import ThemeToggle from "../components/ThemeToggle";
import LanguageToggle from "../components/LanguageToggle";
import { useState } from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

export default function Settings() {
  const navigate = useNavigate();

  const [showControls, setShowControls] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen
                [data-theme='dark']:bg-linear-to-t from-black to-gray-800
                [data-theme='light']:bg-gray-100">
      <div className="flex-col w-full rounded-2xl items-center justify-center
                [data-theme='dark']:bg-gray-700 
                [data-theme='light']:bg-white">
        <h1 className="font-bold text-center
                [data-theme='dark']:text-white
                [data-theme='light']:text-gray-900">
          Beállítások
        </h1>
        <div className="m-5">
        </div>

        <div className="m-5">
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ThemeToggle />
              <LanguageToggle />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button
            className="rounded-xl text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outlinetransition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500  ${className || ''}
                     [data-theme='dark']:bg-gray-900
                     [data-theme='light']:bg-gray-200 [data-theme='light']:text-gray-900"
            onClick={() => setShowControls((prev) => !prev)}
          >
            {showControls ? "Irányítás elrejtése" : "Irányítás mutatása"}
          </button>
        </div>
        {showControls && (
          <div className="lex items-center justify-center m-5
                       [data-theme='dark']:bg-black
                       [data-theme='light']:bg-gray-100 [data-theme='light']:text-gray-900">
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
