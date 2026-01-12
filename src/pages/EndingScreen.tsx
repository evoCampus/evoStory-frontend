import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Button from "../components/Button";
import { ClientContext } from "../App";
import { StoryDTO } from "../api";
import { useTranslation } from 'react-i18next';

export default function EndingScreen() {
  const navigate = useNavigate();
  const { t } = useTranslation();

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

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-black text-white">
      <div className="text-center">
        <h1 className="font bold">{t('endingScreen.gameOver')}</h1>
        <Button
          onClick={() => navigate(`/chapter/${stories[0].startingSceneId}`)}
          text={t('endingScreen.newGame')}
          className="w-full py-3 text-white font-medium rounded-lg transition-colors"
        />
        <div className="flex justify-center mt-6">
          <Button
            text={t('endingScreen.home')}
            className="mt-4"
            onClick={() => {
              navigate("/");
            }}
          />
        </div>
      </div>
    </div>
  );
}
