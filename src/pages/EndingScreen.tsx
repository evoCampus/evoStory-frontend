import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Button from "../components/Button";
import { ClientContext } from "../App";
import { StoryDTO } from "../api";

export default function EndingScreen() {
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

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-black text-white">
      <div className="text-center">
        <h1 className="font bold">Játék vége</h1>
        <Button
          onClick={() => navigate(`/chapter/${stories[0].startingSceneId}`)}
          text="Új játék"
          className="w-full py-3 text-white font-medium rounded-lg transition-colors"
        />
        <div className="flex justify-center mt-6">
          <Button
            text="Főoldal"
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
