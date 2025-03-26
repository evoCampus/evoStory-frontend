import "./App.css";
import { useState } from "react";
import Settings from "./settings.js";
import NewGame from "./newGame.js";
import ContinueGame from "./continueGame.js";

export default function App() {
  const [page, setPage] = useState("menu"); // "menu" vagy "settings"

  return (
    <div className="container">
      {page === "menu" && (
        <>
          <h1 className="title">Name of the Game</h1>
          <button className="continueBtn" onClick={() => setPage("continue")}>Continue</button>
          <button className="newGameBtn" onClick={() => setPage("newGame")}>New Game</button>
          <button className="settingsBtn" onClick={() => setPage("settings")}>Settings</button>
        </>
      )}

      {page === "continue" && <ContinueGame onBack={() => setPage("menu")} />}
      {page === "newGame" && <NewGame onBack={() => setPage("menu")} />}
      {page === "settings" && <Settings onBack={() => setPage("menu")} />}
    </div>
  );
}



