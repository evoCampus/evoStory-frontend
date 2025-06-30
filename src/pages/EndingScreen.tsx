 import HomeButton from "../components/HomeButton";
 import Button from "../components/Button";
 import handleNavigateToChapter from "../pages/HomePage"
 
 export default function EndingScreen() {
    return (
      <div className="flex items-center justify-center h-screen w-screen bg-black text-white">
        <div className="text-center">
          <h1 className="font bold">Game Over</h1>
          <Button 
            onClick={handleNavigateToChapter} 
            text="New Game" 
            className="w-full py-3 text-white font-medium rounded-lg transition-colors"
          />
          <HomeButton />
        </div>
      </div>
    );
  }
  