import { JSX } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthProvider from './auth/AuthContext';

import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/Dashboard'
import ContinueGame from './pages/ContinueGame';
import ChapterPage from './pages/chapter/ChapterPage';
import EndingScreen from './pages/EndingScreen';
import RegisterPage from './pages/RegisterPage';
import RequireAuth from './auth/RequireAuth';
import { createContext, useMemo } from 'react';
import Client from './Client';

export const ClientContext = createContext<Client | undefined>(undefined);


export default function App(): JSX.Element {
    const client = useMemo(() => new Client(), []);
    return (
        <ClientContext.Provider value={client}>
            <Router>
                <AuthProvider>
                    <Routes>
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/register" element={<RegisterPage />} />
                        <Route path="/" element={<RequireAuth> <HomePage /> </RequireAuth>} />
                        <Route path="/dashboard" element={<DashboardPage />} />
                        <Route path="/chapter/:chapterId" element={<ChapterPage />} />
                        <Route path="/continue" element={<ContinueGame />} />
                        <Route path="/new" element={<ChapterPage />} />
                        <Route path="/ending" element={<EndingScreen />} />

                        <Route path="*" element={<div>404 - Oldal nem található</div>} />
                    </Routes>
                </AuthProvider>
            </Router>
        </ClientContext.Provider>
    );
}
