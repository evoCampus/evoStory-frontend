import '../../index.css';
import Button from '../../components/Button';
import Box from './components/ChapterPageBox';
import HomeButton from '../../components/HomeButton';

function ChapterPage() {

    return (
        <div className="flex-auto items-center justify-center h-screen w-screen bg-[url(./assets/backgroundIMG.jpg)] pt-50 ">
            <div className="flex-auto p-4 mx-auto w-4/5 gap-4 rounded-xl ">
                <div className="flex items-center justify-center font-bold text-2xl">
                    <span className="text-center">Chapter 1</span>
                </div>
                <Box text='' className='rounded-xl bg-linear-to-t from-sky-500/50 to-indigo-500/50 bg-[url(./assets/otherBG.jpg)] scale-100 hover:scale-120 duration-200'/>
                <Box text='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.' className='rounded-xl pr-1.5 pl-1.5 bg-gray-800 '/>
                <div className='flex  items-center content-center place-content-evenly'>
                <Button text="Choice 1" className="mt-4"/>
                <Button text="Choice 2" className="mt-4"/>
                </div>
                
            <div className='flex justify-center'>
            <HomeButton/>
            </div>
            </div>
        </div>
    );
}

export default ChapterPage;