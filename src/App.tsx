import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'
import ChapterPage from './pages/chapter/ChapterPage';
import HomePage from './pages/HomePage';
import Settings from './pages/Settings';
import EndingScreen from './pages/EndingScreen';
import ContinueGame from './pages/ContinueGame';
import { createContext, useMemo } from 'react';
import Client from './Client';
 
export const ClientContext = createContext<Client | undefined>(undefined);

export default function App() {
    const client = useMemo(() => new Client(), []); 
    return (
    <ClientContext.Provider value={client}>
      <Router>
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/chapter/:chapterId" element={<ChapterPage />} />
              <Route path="/continue" element={<ContinueGame />} />
              <Route path="/new" element={<ChapterPage />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/ending" element={<EndingScreen />} />
          </Routes>
      </Router>
    </ClientContext.Provider>
  );
}
