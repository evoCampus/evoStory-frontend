import '../../index.css';
import  Button from '../../components/Button';
import  ChapterPageBox  from './components/ChapterPageBox';
import  HomeButton  from '../../components/HomeButton';
import { Scene, Choice } from "../../mock/mock";
import Client from "../../mock/client";
import { useMemo, useState, useEffect, useContext, createContext } from 'react';


//useContext

function ChapterPage() {
    const client = useMemo(() => new Client(), []);
    const [currentScene, setCurrentScene] = useState<Scene>();

    const handleChoiceClick = (nextSceneId: string) => {
        const nextScene = client.getScene(nextSceneId);
        setCurrentScene(nextScene);
    };

    useEffect(() => {
        const scene = client.getScene("40d9b19b-8285-43a2-9602-bad661c85c45");
        setCurrentScene(scene);
    }, []);

    return (
        <div className="flex-auto items-center justify-center h-screen w-screen bg-[url(./assets/backgroundIMG.jpg)] pt-50 ">
            <div className="flex-auto p-4 mx-auto w-4/5 gap-4 rounded-xl ">
                <div className="flex items-center justify-center font-bold text-2xl">
                    <span className="text-center">Chapter 1</span>
                </div>
                
                <ChapterPageBox text='' className='rounded-xl bg-linear-to-t from-sky-500/50 to-indigo-500/50 bg-[url(./assets/otherBG.jpg)]  '/>
                
                {currentScene && (<>
                    <ChapterPageBox text={currentScene.content.text} className='rounded-xl pr-1.5 pl-1.5 bg-gray-800' />
                    <div className='flex items-center content-center place-content-evenly'>
                        {currentScene.choices.map(choices => (<Button key={choices.id} text={choices.choiceText} className="mt-4" onClick={() => handleChoiceClick(choices.nextSceneId)} />))}
                    </div>
                </>)}
                <div className='flex justify-center'>
                    <HomeButton />
                </div>
            </div>
        </div>
    );
}

export default ChapterPage;