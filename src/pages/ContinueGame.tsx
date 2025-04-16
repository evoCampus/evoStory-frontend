  import Button from "../components/Button.tsx";
  import { useNavigate } from 'react-router-dom';
  
  export default function ContinueGame() {
    const navigate = useNavigate();

    const handleNavigateToHome = () => {
      navigate('/home');
    }

    return (
      <div className="flex items-center justify-center min-h-screen w-screen bg-black text-white">
        <div className="text-center">
          <h1 className="font-bold">Continue Game</h1>
          <Button 
            onClick={handleNavigateToHome} 
            text="Back to Home page" 
            className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors"
          />
        </div>
      </div>
    );
  }
  