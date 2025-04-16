/*import { useState } from "react";

export default function MainPage() {

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="text-center">
        {page === "menu" && (
          <>
            <h1 className="font-italic">
              Name of the Game
            </h1>

            <div className="flex flex-col items-center">
              <button
                className="w-3/4 bg-white text-black rounded-lg hover:bg-gray-100 transition"
                onClick={() => setPage("continue")}
              >
                Continue
              </button>
              <button
                className="w-3/4 bg-white text-black rounded-lg hover:bg-gray-100 transition"
                onClick={() => setPage("newGame")}
              >
                New Game
              </button>
              <button
                className="w-3/4 bg-white text-black rounded-lg hover:bg-gray-100 transition"
                onClick={() => setPage("settings")}
              >
                Settings
              </button>
              <button
                className="w-3/4 bg-white text-black rounded-lg hover:bg-gray-100 transition"
                onClick={() => setPage("endingScreen")}
              >
                Ending screen test
              </button>
            </div>
          </>
        )}

        {(() => {
          switch (page) {
            case "continue":
              return <ContinueGame onBack={() => setPage("menu")} />;
            case "newGame":
              return <NewGame onBack={() => setPage("menu")} />;
            case "settings":
              return <Settings onBack={() => setPage("menu")} />;
            case "endingScreen":
              return (
                <EndingScreen
                  goToNewGame={() => setPage("newGame")}
                  goToMenu={() => setPage("menu")}
                />
              );
            default:
              return null;
          }
        })()}
      </div>
    </div>
  );
}*/