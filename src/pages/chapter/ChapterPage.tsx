import '../../index.css';
import  Button  from '../../components/Button';
import  ChapterPageBox from './components/ChapterPageBox';
import  HomeButton  from '../../components/HomeButton';
import { Scene } from "../../mock/mock";
import Client from "../../mock/client";
import { useMemo, useState, useEffect } from 'react';


function ChapterPage() {
    const client = useMemo(() => new Client(), []);
    const [currentScene, setCurrentScene] = useState<Scene>();

    useEffect(() => {
        const scene = client.getScene("40d9b19b-8285-43a2-9602-bad661c85c45");
        // other requests if needed
        setCurrentScene(scene);
    }, []);

    return (
        <div className="flex-auto items-center justify-center h-screen w-screen bg-[url(./assets/backgroundIMG.jpg)] pt-50 ">
            <div className="flex-auto p-4 mx-auto w-4/5 gap-4 rounded-xl ">
                <div className="flex items-center justify-center font-bold text-2xl">
                    <span className="text-center">Chapter 1</span>
                </div>
                <Box text='' className='rounded-xl bg-linear-to-t from-sky-500/50 to-indigo-500/50 bg-[url(./assets/otherBG.jpg)]' />
                {currentScene && (<>
                    <Box text={currentScene.content.text} className='rounded-xl pr-1.5 pl-1.5 bg-gray-800 ' />
                    <div className='flex  items-center content-center place-content-evenly'>
                        <Button text="Choice 1" className="mt-4" />
                        <Button text="Choice 2" className="mt-4" />
                        {currentScene.choices.map(choice => (<Button text={choice.choiceText} className="mt-4" />))}
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
