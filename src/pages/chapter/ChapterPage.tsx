
import { useMemo, useState, useEffect } from 'react';
import '../../index.css';
import Button from '../../components/Button';
import ChapterPageBox from './components/ChapterPageBox';
import Client from '../../Client';
import { SceneDTO } from '../../api';
import { useNavigate, useParams } from 'react-router-dom';

export default function ChapterPage() {
    const client = useMemo(() => new Client(), []);
    const { chapterId } = useParams();
    const [currentScene, setCurrentScene] = useState<SceneDTO | null>(null);
    const navigate = useNavigate();

    const handleChoiceClick = async (nextSceneId: string) => {
        try {
            const nextScene = await client.getSceneById(nextSceneId);
            if (!nextScene) {
                navigate("/ending");
                return;
            }
            setCurrentScene(nextScene);
            localStorage.setItem("lastSceneId", nextSceneId);
        } catch (error: any) {
            console.error("Error while loading scene:", error);
            if (error?.response?.status === 404) {
                navigate("/ending");
                localStorage.removeItem("lastSceneId");
            } else {
                alert("Error while loading scene.");
            }
        }
    };

    useEffect(() => {
        const loadInitialScene = async () => {
            try {
                if (chapterId) {
                    const scene = await client.getSceneById(chapterId);
                    setCurrentScene(scene);
                }
            } catch (error) {
                console.error("Error while loading first scene:", error);
            }
        };

        loadInitialScene();
    }, [client, chapterId]);

    return (
        <div className="flex flex-col items-center justify-center h-screen w-screen bg-[url(./assets/backgroundIMG.jpg)] bg-cover bg-center">
            {currentScene?.content?.text && (
                <ChapterPageBox
                    text={currentScene.content.text}
                    className="rounded-xl pr-1.5 pl-1.5 bg-gradient-to-t from-gray-800 to-black shadow-xl transition-all"
                />
            )}

            <div className="flex items-center justify-evenly gap-4 mt-4 flex-wrap">
                {currentScene?.choices && currentScene.choices.length > 0 ? (
                    currentScene.choices.map((choice) => (
                        <Button
                            key={choice.id}
                            text={choice.choiceText ?? ""}
                            className="mt-4"
                            onClick={() => {
                                if (choice.nextSceneId) {
                                    handleChoiceClick(choice.nextSceneId);
                                } else {
                                    navigate("/ending");
                                    localStorage.removeItem("lastSceneId");
                                }
                            }}
                        />

                    ))
                ) : (
                    <Button
                        text="Tovább"
                        className="mt-4"
                        onClick={() => {
                            navigate("/ending");
                            localStorage.removeItem("lastSceneId");
                        }}
                    />

                )}
            </div>

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
    );
}
