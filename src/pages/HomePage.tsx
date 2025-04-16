import Button from "../components/Button";
import { useNavigate } from 'react-router-dom';


function HomePage() {

  const navigate = useNavigate();

  const handleNavigateToChapter = () => {
      navigate('/chapter');
  };

  const handleNavigateToContinue = () => {
    navigate('/continue');
  }

  const handleNavigateToNewGame = () => {
    navigate('/new');
  }

  const handleNavigateToSettings = () => {
    navigate('/settings');
  }

  const handleNavigateToEnding = () => {
    navigate('/ending');
  }


  return (
    <div className="flex-auto items-center justify-center h-full w-screen">
      <div className="flex-auto border border-gray-400 p-4 mx-auto w-4/5 gap-4 justify-items-center-safe">
      <Button onClick={handleNavigateToChapter} text="Gomb 2" className="mt-4 bg-green-500 hover:bg-green-600" />
      <Button onClick={handleNavigateToContinue} text="Continue game" className="mt-4 bg-green-500 hover:bg-green-600" />
      <Button onClick={handleNavigateToNewGame} text="New game" className="mt-4 bg-green-500 hover:bg-green-600" />
      <Button onClick={handleNavigateToSettings} text="Setings" className="mt-4 bg-green-500 hover:bg-green-600" />
      <Button onClick={handleNavigateToEnding} text="Ending screen test" className="mt-4 bg-green-500 hover:bg-green-600" />
      </div>
    </div>
  );
}

export default HomePage;