import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChapterPage from './pages/chapter/ChapterPage';
import HomePage from './pages/chapter/ChapterPage';


function App() {
  return (
      <Router>
          <Routes>
              <Route path="/home" element={<HomePage />} />
              <Route path="/chapter" element={<ChapterPage />} />
          </Routes>
      </Router>
  );
}


export default App
