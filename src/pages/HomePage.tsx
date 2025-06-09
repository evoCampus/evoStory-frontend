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
    } else {
      navigate(`/chapter/${stories[0].startingSceneId}`);
      console.log(stories[0].startingSceneId);
    }
  };

  const handleNavigateToChapter = () => {
    navigate(`/chapter/${stories[0].startingSceneId}`);
    console.log(stories[0].startingSceneId);
  }

  const handleNavigateToSettings = () => {
    navigate('/settings');
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-linear-to-t from-black to-gray-800 ">
      <div className="border border-gray-400 p-8 mx-auto w-4/5 max-w-md bg-gray-700 rounded-lg shadow-md">
        <div className="flex flex-col gap-4">
          <p><strong>The Game</strong></p>
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
        </div>
      </div>
    </div>
  );
}
