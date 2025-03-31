import "./EndingScreen.css";
import NewGame from "./newGame.js";

export default function EndingScreen({ onBack }) {
  return (
    <div className="container">
      <h1 className="gameEndingText">Game over</h1>
      <button className="newGameBtn" onClick={() => onBack("newGame")}>New Game</button>
      <button className="backToStartingScreen" onClick={() => onBack("menu")}>Back to starting screen</button>
    </div>
  );
}
