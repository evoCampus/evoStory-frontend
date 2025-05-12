 import  HomeButton from "../components/HomeButton.tsx";
  
  export default function ContinueGame() {

    return (
      <div className="flex-col h-screen w-screen border-2">
        <div className="flex items-center justify-center">
          <h1 className="m-5">Title</h1>
        </div>
        <div className="flex flex-row items-center justify-center">
        <div className="flex flex-row items-center justify-center basis-800 w-screen rounded border-2 border-indigo-400">
          Content
        </div>
        <div className="flex flex-row items-center justify-center basis-auto w-screen  rounded border-2 border-indigo-200">
          Picture
        </div>
        </div>

        <div className="flex-col items-center justify-center">
        <HomeButton/>
        </div>

      </div>
    );
  }
  