import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import "../index.css";
import { useContext, useEffect, useState } from "react";
import { ClientContext } from "../App";
import { StoryDTO } from "../api";
import { useTranslation } from "react-i18next";

export default function HomePage() {
  const navigate = useNavigate();
  const client = useContext(ClientContext);
  const [stories, setStories] = useState<StoryDTO[]>([]);
  const { t } = useTranslation();
  const savedSceneId = localStorage.getItem("lastSceneId");

  useEffect(() => {
    void (async () => {
      try {
        const loadedStories = await client?.getStories();
        if (loadedStories) {
          setStories(loadedStories);
        }
      } catch (error) {}
    })();
  }, [client]);

  const handleNavigateToContinue = () => {
    if (savedSceneId) {
      navigate(`/chapter/${savedSceneId}`);
    } else if (stories.length > 0) {
      navigate(`/chapter/${stories[0].startingSceneId}`);
    }
  };

  const handleStartStory = async (startingSceneId: string) => {
    if (client) {
      try {
        await client.clearInventory();
      } catch (error) {}
    }
    localStorage.removeItem("lastSceneId");
    navigate(`/chapter/${startingSceneId}`);
  };

  const handleNavigateToDashboard = () => {
    navigate("/dashboard");
  };

  const handleNavigateToSettings = () => {
    navigate("/settings");
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen w-screen"
      style={{ background: "var(--page-bg)" }}
    >
      <p className="title antialiased italic fill-cyan-500 drop-shadow-lg drop-shadow-cyan-500/50 mb-6 text-4xl">
        <b>
          <strong>
            evo<a className="decoration-sky-600 noHover">Story</a>
          </strong>
        </b>
      </p>

      <div
        className="border-3 border-gray-400 p-8 mx-auto w-4/5 max-w-lg rounded-lg drop-shadow-lg drop-shadow-indigo-500/50 flex flex-col gap-6"
        style={{ backgroundColor: "var(--box-bg-light)" }}
      >
        {savedSceneId && (
          <div className="pb-4 border-b border-gray-500">
            <Button
              onClick={handleNavigateToContinue}
              text={t("homePage.continue")}
              className="w-full bg-green-700 rounded-xl text-white font-bold py-3 px-4 focus:outline-none focus:shadow-outlinetransition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105"
            />
          </div>
        )}

        <div className="flex flex-col gap-3">
          <p className="text-center font-bold text-lg mb-2">
            {t("homePage.title")}
          </p>

          {stories.length > 0 ? (
            stories.map((story) => (
              <div
                key={story.id}
                className="flex justify-between items-center bg-gray-800/50 p-3 rounded-lg border border-gray-600 hover:border-cyan-500 transition"
              >
                <span className="font-semibold text-white ml-2">
                  {story.title}
                </span>
                <Button
                  onClick={() => handleStartStory(story.startingSceneId || "")}
                  text="Start"
                  className="bg-cyan-700 hover:bg-cyan-600 text-white font-bold py-2 px-6 rounded-lg text-sm transition transform hover:scale-105"
                />
              </div>
            ))
          ) : (
            <p className="text-center text-gray-400">{t("homePage.loading")}</p>
          )}
        </div>

        <div className="pt-4 border-t border-gray-500 flex flex-col gap-3">
          <Button
            onClick={handleNavigateToDashboard}
            text={t("homePage.dashboard")}
            className="bg-gray-900 rounded-xl text-white font-bold py-3 px-4 focus:outline-none focus:shadow-outlinetransition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105"
          />
          <Button
            onClick={handleNavigateToSettings}
            text={t("homePage.settings")}
            className="bg-gray-900 rounded-xl text-white font-bold py-3 px-4 focus:outline-none focus:shadow-outlinetransition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
}
