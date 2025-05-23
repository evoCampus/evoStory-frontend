import  Button  from "../components/Button";
import { useNavigate } from 'react-router-dom';
import '../index.css'

export default function HomePage() {
  const navigate = useNavigate();


  const handleNavigateToContinue = () => {
    navigate('/continue');
  }

  const handleNavigateToChapter = () => {
    navigate('/chapter');
  }

  const handleNavigateToSettings = () => {
    navigate('/settings');
  }

  const handleNavigateToEnding = () => {
    navigate('/ending');
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-linear-to-t from-black to-gray-800 ">
      <div className="border border-gray-400 p-8 mx-auto w-4/5 max-w-md bg-gray-700 rounded-lg shadow-md">
        <div className="flex flex-col gap-4">
          <p><strong>The Game</strong></p>
          <Button
            onClick={handleNavigateToChapter}
            text="Chapter Select"
            className="w-full py-3 text-white font-medium rounded-lg transition-colors"
          />
          <Button
            onClick={handleNavigateToContinue}
            text="Continue Game"
            className="w-full py-3 text-white font-medium rounded-lg transition-colors "
          />
          <Button
            onClick={handleNavigateToChapter}
            text="New Game"
            className="w-full py-3 text-white font-medium rounded-lg transition-colors"
          />
          <Button
            onClick={handleNavigateToSettings}
            text="Settings"
            className="w-full py-3 text-white font-medium rounded-lg transition-colors"
          />
          <Button
            onClick={handleNavigateToEnding}
            text="Ending Screen Test"
            className="w-full py-3 text-white font-medium rounded-lg transition-colors"
          />
        </div>
      </div>
    </div>
  );
}
