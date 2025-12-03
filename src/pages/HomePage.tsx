import Button from "../components/Button";
import { useNavigate } from 'react-router-dom';
import '../index.css'
import { useContext, useEffect, useState } from "react";
import { ClientContext } from "../App";
import { StoryDTO } from "../api";

export default function HomePage() {
  const navigate = useNavigate();

  const client = useContext(ClientContext);

  const [stories, setStories] = useState<StoryDTO[]>([])

  useEffect(() => {
    void (async () => {
      const stories = await client?.getStories();
      if (stories) {
        setStories(stories);
        console.log(stories);
      }
      
    })();
  }, [client]);

  const handleNavigateToContinue = () => {
    const lastSceneId = localStorage.getItem("lastSceneId");
    if (lastSceneId) {
      navigate(`/chapter/${lastSceneId}`);
    } else{
      navigate(`/chapter/${stories[0].startingSceneId}`);
      console.log(stories[0].startingSceneId);
    }
  };

  const handleNavigateToChapter = () => {
    navigate(`/chapter/${stories[0].startingSceneId}`);
    console.log(stories[0].startingSceneId);
  }

  const handleNavigateToDashboard = () => {
    navigate('/dashboard');
  }

  const handleNavigateToSettings = () => {
    navigate('/settings');
  }

  return (
    
    <div className="flex flex-col items-center justify-center h-screen w-screen" style={{ background: 'var(--page-bg)' }}>
      <p className="title antialiased italic fill-cyan-500 drop-shadow-lg drop-shadow-cyan-500/50"><b><strong>evo<a className="decoration-sky-600 noHover">Story</a></strong></b></p>
      <div className="border-3 border-gray-400 p-8 mx-auto w-4/5 max-w-md rounded-lg fill-cyan-500 drop-shadow-lg drop-shadow-indigo-500/50" style={{ backgroundColor: 'var(--box-bg-light)' }}>
        <div className="flex flex-col gap-4">
          <p><strong>Halvány emlékek</strong></p>
          <Button
            onClick={handleNavigateToContinue}
            text="Játék folytatása"
            className="bg-gray-900 rounded-xl text-white font-bold py-3 px-4 focus:outline-none focus:shadow-outlinetransition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
          />
          <Button
            onClick={handleNavigateToChapter}
            text="Új játék"
            className="bg-gray-900 rounded-xl text-white font-bold py-3 px-4 focus:outline-none focus:shadow-outlinetransition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
          />
          <Button
          onClick={handleNavigateToDashboard}
          text="Felhasználói felület"
          className="bg-gray-900 rounded-xl text-white font-bold py-3 px-4 focus:outline-none focus:shadow-outlinetransition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
          />
          <Button
          onClick={handleNavigateToSettings}
          text="Beállítások"
          className="bg-gray-900 rounded-xl text-white font-bold py-3 px-4 focus:outline-none focus:shadow-outlinetransition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
          />
        </div>
      </div>
    </div>
  );
}
