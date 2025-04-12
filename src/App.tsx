import { useState } from "react";
import Settings from "./Settings";
/*import NewGame from "./newGame";
import ContinueGame from "./continueGame";
import EndingScreen from "./endingScreen";*/

type Page = "menu" | "continue" | "newGame" | "settings" | "endingScreen";

export default function App() {
  const [page, setPage] = useState<Page>("menu");

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="text-center p-6">
        {page === "menu" && (
          <>
            <h1 className="text-4xl font-bold mb-8">Name of the Game</h1>

            <button
              className="btn mb-4 py-2 px-6 bg-blue-500 hover:bg-blue-600 rounded-lg text-lg"
              onClick={() => setPage("continue")}
            >
              Continue
            </button>
            <button
              className="btn mb-4 py-2 px-6 bg-green-500 hover:bg-green-600 rounded-lg text-lg"
              onClick={() => setPage("newGame")}
            >
              New Game
            </button>
            <button
              className="btn mb-4 py-2 px-6 bg-yellow-500 hover:bg-yellow-600 rounded-lg text-lg"
              onClick={() => setPage("settings")}
            >
              Settings
            </button>
            <button
              className="btn mb-4 py-2 px-6 bg-red-500 hover:bg-red-600 rounded-lg text-lg"
              onClick={() => setPage("endingScreen")}
            >
              Ending screen test
            </button>
          </>
        )}

        {(() => {
          switch (page) {
            /*case "continue":
              return <ContinueGame onBack={() => setPage("menu")} />;
            case "newGame":
              return <NewGame onBack={() => setPage("menu")} />;*/
            case "settings":
              return <Settings onBack={() => setPage("menu")} />;
            /*case "endingScreen":
              return (
                <EndingScreen
                  goToNewGame={() => setPage("newGame")}
                  goToMenu={() => setPage("menu")}
                />
              );*/
            default:
              return null;
          }
        })()}
      </div>
    </div>
  );
}
