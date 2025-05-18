import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'
import ChapterPage from './pages/chapter/ChapterPage';
import HomePage from './pages/HomePage';
import Settings from './pages/Settings';
import EndingScreen from './pages/EndingScreen';
import ContinueGame from './pages/ContinueGame';
import AuthProvider from './pages/auth/AuthContext';
import LoginPage from './pages/LoginPage';


export default function App() {
  return (
      <Router>
        <AuthProvider>
          <Routes>
              <Route path="/login" element={<LoginPage/>} />
              <Route path="/" element={<HomePage />} />
              <Route path="/chapter" element={<ChapterPage />} />
              <Route path="/continue" element={<ContinueGame />} />
              <Route path="/new" element={<ChapterPage />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/ending" element={<EndingScreen />} />
          </Routes>
        </AuthProvider>
      </Router>
  );
}
