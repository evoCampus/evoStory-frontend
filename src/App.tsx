// src/App.tsx
import { useState } from 'react';
import QuickTimeEvent from './components/QuickTimeEvent';
import './index.css';

function App() {
  const [isQTEActive, setIsQTEActive] = useState(false);

  const handleSuccess = () => {
    console.log('QTE succeeded!');
  };

  const handleFailure = () => {
    console.log('QTE failed!');
  };

  const handleChoice = (choice: 'optionA' | 'optionB') => {
    console.log(`User chose: ${choice}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-200 to-base-300 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-primary mb-4">QTE Challenge</h1>
          <p className="text-lg">Test your reflexes with Quick Time Events!</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="flex flex-col items-center">
              <div className="mb-6">
                <button
                  className={`btn ${isQTEActive ? 'btn-error' : 'btn-success'}`}
                  onClick={() => setIsQTEActive(!isQTEActive)}
                >
                  {isQTEActive ? 'Deactivate QTE' : 'Activate QTE'}
                </button>
              </div>

              <QuickTimeEvent
                active={isQTEActive}
                timeLimit={4}
                onSuccess={handleSuccess}
                onFailure={handleFailure}
                onChoice={handleChoice}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;