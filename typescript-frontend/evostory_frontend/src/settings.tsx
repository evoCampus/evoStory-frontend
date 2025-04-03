import "./Settings.css";

type SettingsProps = {
  onBack: () => void;
};

export default function Settings({ onBack }: SettingsProps) {
  return (
    <div className="container">
      <h1 className="title">Settings</h1>
      <button className="btn" onClick={onBack}>Back</button>
    </div>
  );
}
