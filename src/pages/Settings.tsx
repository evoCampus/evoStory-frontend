import ThemeToggle from "../components/ThemeToggle";
import LanguageToggle from "../components/LanguageToggle";
import { useState } from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

export default function Settings() {
  const navigate = useNavigate();

  const [showControls, setShowControls] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen" style={{ background: 'var(--page-bg)' }}>
      <div className="flex flex-col w-full rounded-2xl items-center justify-center p-6" style={{ backgroundColor: 'var(--box-bg)' }}>
        <h1 className="font-bold text-center mb-6" style={{ color: 'var(--text-primary)' }}>
          Beállítások
        </h1>

        <div className="w-full mb-6">
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ThemeToggle />
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-center mb-6">
          <button
            className="bg-gray-900 rounded-xl text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outlinetransition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500"
            onClick={() => setShowControls((prev) => !prev)}
          >
            {showControls ? "Irányítás elrejtése" : "Irányítás mutatása"}
          </button>
        </div>
        
        {showControls && (
          <div className="flex flex-col items-center justify-center w-full m-5 p-4 rounded" style={{ backgroundColor: 'var(--bg-secondary)', color: 'var(--text-primary)' }}>
            <h2 className="font-semibold mb-2">Irányítás</h2>
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
