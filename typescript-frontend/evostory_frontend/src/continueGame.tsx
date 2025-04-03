import "./Game.css";

type SettingsProps = {
  onBack: () => void;
};

export default function ContinueGame({ onBack }: SettingsProps) {
  return (
    <div className="container">
      <h1 className="title">Continue game</h1>
      <button className="continueBtn" onClick={onBack}>
        Back to starting screen
      </button>
    </div>
  );
}
