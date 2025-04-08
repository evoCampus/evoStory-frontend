
import "./App.css";
import { useState, useEffect } from "react";
import Settings from "./settings";
import NewGame from "./newGame";
import ContinueGame from "./continueGame";
import EndingScreen from "./endingScreen";

type Page = "menu" | "continue" | "newGame" | "settings" | "endingScreen";

export default function App() {
  const [page, setPage] = useState<Page>("menu");

  return (
    <div className="container">
      {page === "menu" && (
        <>
          <h1 className="title">Name of the Game</h1>

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

