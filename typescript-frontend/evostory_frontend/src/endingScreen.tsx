import "./EndingScreen.css";

type EndingScreenProps = {
  goToNewGame: () => void;
  goToMenu: () => void;
};

export default function EndingScreen({ goToNewGame, goToMenu }: EndingScreenProps) {
  return (
    <div className="container">
      <h1 className="gameEndingText">Game over</h1>
      <button className="btn" onClick={goToNewGame}>New Game</button>
      <button className="btn" onClick={goToMenu}>Back to starting screen</button>
    </div>
  );
}

