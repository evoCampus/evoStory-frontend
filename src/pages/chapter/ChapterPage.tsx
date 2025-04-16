import '../../index.css';
import Button from '../../components/Button';

function ChapterPage() {
    return (
        <div className="flex-auto items-center justify-center h-full w-screen">
            <div className="flex-auto border border-gray-400 p-4 mx-auto w-4/5 gap-4">
                <div className="text-center text-white"></div>
                <div className="flex items-center justify-center">
                    <span className="text-center">Game</span>
                </div>
                <div className="flex items-center justify-center h-48 border border-gray-400 mt-4">
                    <span className="text-center">Ez a szöveg az 1. dobozban van.</span>
                </div>
                <div className="flex items-center justify-center h-48 border border-gray-400 mt-4">
                    <span className="text-center">Ez a szöveg a 2. dobozban van.</span>
                </div>
                <div className="flex items-center justify-center h-48 border border-gray-400 mt-4">
                    <span className="text-center">Ez a szöveg a 3. dobozban van.</span>
                </div>
                <div className='flex  items-center content-center place-content-evenly'>
                <Button text="Gomb 1" className="mt-4"/>
                <Button text="Gomb 2" className="mt-4 bg-green-500 hover:bg-green-600" />
                </div>
            </div>
        </div>
    );
}

export default ChapterPage;