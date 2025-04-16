import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChapterPage from './pages/chapter/ChapterPage';
import HomePage from './pages/HomePage';
import Settings from './pages/Settings';
import EndingScreen from './pages/EndingScreen';


export default function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/chapter" element={<ChapterPage />} />
              <Route path="/continue" element={<ChapterPage />} />
              <Route path="/new" element={<ChapterPage />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/ending" element={<EndingScreen />} />
          </Routes>
      </Router>
  );
}
