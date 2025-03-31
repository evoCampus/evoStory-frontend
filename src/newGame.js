import "./Game.css";

export default function NewGame({ onBack }) {
  return (
    <div className="container">
      <h1 className="title">New Game</h1>
      <button className="settingsBtn" onClick={onBack}>Back to starting screen</button>
    </div>
  );
}