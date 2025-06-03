import { JSX } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';
import DashboardPage from './Dashboard';
import AuthProvider from '../auth/AuthContext';
import ContinueGame from './ContinueGame';
import ChapterPage from './chapter/ChapterPage';
import Settings from './Settings';
import EndingScreen from './EndingScreen';
import RegisterPage from './RegisterPage';
import RequireAuth from '../auth/RequireAuth';


export default function AppRouter(): JSX.Element {
    return (
      <Router>
        <AuthProvider>
          <Routes>
              <Route path="/login" element={<LoginPage/>} />
              <Route path="/register" element={<RegisterPage/>} />

              <Route path="/" element={<RequireAuth> <HomePage /> </RequireAuth>} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/chapter" element={<ChapterPage />} />
              <Route path="/continue" element={<ContinueGame />} />
              <Route path="/new" element={<ChapterPage />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/ending" element={<EndingScreen />} />

              <Route path="*" element={<div>404 - Oldal nem található</div>} />
          </Routes>
        </AuthProvider>
      </Router>
    );
}