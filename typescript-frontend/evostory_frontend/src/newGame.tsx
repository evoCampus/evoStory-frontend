import "./Game.css";

type NewGameProps = {
  onBack: () => void;
};

export default function NewGame({ onBack }: NewGameProps) {
  return (
    <div className="container">
      <h1 className="title">New Game</h1>
      <button className="settingsBtn" onClick={onBack}>
        Back to starting screen
      </button>
    </div>
  );
}
