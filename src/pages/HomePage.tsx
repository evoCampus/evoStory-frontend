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

  const handleNavigateToDashboard = () => {
    navigate('/dashboard');
  }

  return (
    
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-linear-to-t from-black to-gray-800">
      <p className="title antialiased italic fill-cyan-500 drop-shadow-lg drop-shadow-cyan-500/50"><b><strong>evo<a className="decoration-sky-600 noHover">Story</a></strong></b></p>
      <div className="border-3 border-gray-400 p-8 mx-auto w-4/5 max-w-md bg-gray-700 rounded-lg fill-cyan-500 drop-shadow-lg drop-shadow-indigo-500/50">
        <div className="flex flex-col gap-4">
          <Button
            onClick={handleNavigateToContinue}
            text="Játék folytatása"
            className="w-full py-3 text-white font-medium rounded-lg transition-colors"
          />
          <Button
            onClick={handleNavigateToChapter}
            text="Új játék"
            className="w-full py-3 text-white font-medium rounded-lg transition-colors"
          />
          <Button
            onClick={handleNavigateToSettings}
            text="Beállítások"
            className="w-full py-3 text-white font-medium rounded-lg transition-colors"
          />
          <Button
          onClick={handleNavigateToDashboard}
          text="Felhasználói felület"
          className="w-full py-3 text-white font-medium rounded-lg transition-colors"
          />
        </div>
      </div>
    </div>
  );
}
