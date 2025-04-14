import { useState } from "react";
import Settings from "./Settings";
import NewGame from "./NewGame";
import ContinueGame from "./ContinueGame";
import EndingScreen from "./EndingScreen";

type Page = "menu" | "continue" | "newGame" | "settings" | "endingScreen";

export default function App() {
  const [page, setPage] = useState<Page>("menu");

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white px-4">
      <div className="text-center p-6 sm:p-8 md:p-10 space-y-6 max-w-md w-full">
        {page === "menu" && (
          <>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
              Name of the Game
            </h1>

            <div className="flex flex-col items-center space-y-4">
              <button
                className="w-3/4 py-2 text-base sm:text-lg bg-white text-black rounded-lg hover:bg-gray-100 transition"
                onClick={() => setPage("continue")}
              >
                Continue
              </button>
              <button
                className="w-3/4 py-2 text-base sm:text-lg bg-white text-black rounded-lg hover:bg-gray-100 transition"
                onClick={() => setPage("newGame")}
              >
                New Game
              </button>
              <button
                className="w-3/4 py-2 text-base sm:text-lg bg-white text-black rounded-lg hover:bg-gray-100 transition"
                onClick={() => setPage("settings")}
              >
                Settings
              </button>
              <button
                className="w-3/4 py-2 text-base sm:text-lg bg-white text-black rounded-lg hover:bg-gray-100 transition"
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
}

