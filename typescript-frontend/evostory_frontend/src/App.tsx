import "./App.css";
import { useState, useEffect } from "react";
import Settings from "./settings.tsx";
import NewGame from "./newGame.tsx";
import ContinueGame from "./continueGame.tsx";
import EndingScreen from "./endingScreen.tsx";

type Page = "menu" | "continue" | "newGame" | "settings" | "endingScreen";

export default function App() {
  const [page, setPage] = useState<Page>("menu");
  const [difficulty, setDifficulty] = useState<string>("Normal");
  const [volume, setVolume] = useState<number>(50);

  // Betöltés localStorage-ból induláskor
  useEffect(() => {
    const savedDifficulty = localStorage.getItem("gameDifficulty");
    const savedVolume = localStorage.getItem("gameVolume");

    if (savedDifficulty) setDifficulty(savedDifficulty);
    if (savedVolume) setVolume(parseInt(savedVolume));
  }, []);

  return (
    <div className="container">
      {page === "menu" && (
        <>
          <h1 className="title">Name of the Game</h1>

          <div className="settings-info">
            <p><strong>Difficulty:</strong> {difficulty}</p>
            <p><strong>Volume:</strong> {volume}%</p>
          </div>

          <button className="btn" onClick={() => setPage("continue")}>
            Continue
          </button>
          <button className="btn" onClick={() => setPage("newGame")}>
            New Game
          </button>
          <button className="btn" onClick={() => setPage("settings")}>
            Settings
          </button>
          <button className="btn" onClick={() => setPage("endingScreen")}>
            Ending screen test
          </button>
        </>
      )}

      {page === "continue" && <ContinueGame onBack={() => setPage("menu")} />}
      {page === "newGame" && <NewGame onBack={() => setPage("menu")} />}
      {page === "settings" && <Settings onBack={() => setPage("menu")} />}
      {page === "endingScreen" && (
        <EndingScreen
          goToNewGame={() => setPage("newGame")}
          goToMenu={() => setPage("menu")}
        />
      )}
    </div>
  );
}



