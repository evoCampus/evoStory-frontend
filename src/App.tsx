import { JSX } from 'react';
import AppRouter from './pages/AppRouter';
import AuthProvider from './auth/AuthContext'; 

interface AppProps {}

export default function App({}: AppProps): JSX.Element {
    return (
        <AuthProvider>
            <AppRouter />
        </AuthProvider>
    );
}