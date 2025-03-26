import "./settings.css";

export default function Settings({ onBack }) {
  return (
    <div className="container">
      <h1 className="title">Settings</h1>
      <button className="settingsBtn" onClick={onBack}>Back</button>
    </div>
  );
}
