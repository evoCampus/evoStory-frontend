import "./EndingScreen.css";
import NewGame from "./newGame.tsx";

type EndingScreenProps = {
  onBack: (page: "newGame" | "menu") => void;
};

export default function EndingScreen({ onBack }: EndingScreenProps) {
  return (
    <div className="container">
      <h1 className="gameEndingText">Game over</h1>
      <button className="btn" onClick={() => onBack("newGame")}>
        New Game
      </button>
      <button className="btn" onClick={() => onBack("menu")}>
        Back to starting screen
      </button>
    </div>
  );
}
