import { useMemo, useState, useEffect } from 'react';
import '../../index.css';
import Button from '../../components/Button';
import ChapterPageBox from './components/ChapterPageBox';
import HomeButton from '../../components/HomeButton';
import Client from '../../Client';
import { SceneDTO } from '../../api';
import { useParams } from 'react-router-dom';



function ChapterPage() {
    const client = useMemo(() => new Client(), []);
    const { chapterId } = useParams();
    const [currentScene, setCurrentScene] = useState<SceneDTO | null>(null);

    const handleChoiceClick = async (nextSceneId: string) => {
        try {
            const nextScene = await client.getSceneById(nextSceneId);
            setCurrentScene(nextScene);
            localStorage.setItem("lastSceneId", nextSceneId);
        } catch (error) {
            console.error("Error while loading scene:", error);
        }
    };


    useEffect(() => {
        const loadInitialScene = async () => {
            try {
                const scene = await client.getSceneById(chapterId);
                setCurrentScene(scene);
            } catch (error) {
                console.error("Error while loading first scene:", error);
            }
        };

        loadInitialScene();
    }, [client]);

    return (
        <div className="flex-auto items-center justify-center h-screen w-screen bg-[url(./assets/backgroundIMG.jpg)] pt-50">
            <div className="flex-auto p-4 mx-auto w-4/5 gap-4 rounded-xl">
                <div className="flex items-center justify-center font-bold text-2xl">
                    <span className="text-center">Chapter 1</span>
                </div>

                <ChapterPageBox text="" className="rounded-xl bg-linear-to-t from-sky-500/50 to-indigo-500/50 bg-[url(./assets/otherBG.jpg)] shadow-xl/30" />

                {currentScene?.content && (
                    <>
                        <ChapterPageBox
                            text={currentScene.content.text}
                            className="rounded-xl pr-1.5 pl-1.5 bg-linear-to-t from-gray-800 to-black shadow-xl/30 transition-normal"
                        />
                        <div className="flex items-center content-center place-content-evenly">
                            {currentScene.choices?.map((choice) => (
                                <Button
                                    key={choice.id}
                                    text={choice.choiceText}
                                    className="mt-4"
                                    onClick={() => handleChoiceClick(choice.nextSceneId)}
                                />
                            ))}
                        </div>
                    </>
                )}
                <div className="flex justify-center">
                    <HomeButton />
                </div>
            </div>
        </div>
    );
}

export default ChapterPage;

