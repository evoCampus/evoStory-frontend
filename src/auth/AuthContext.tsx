import React, { createContext, useState, useContext, JSX } from 'react';
import { addMockUser } from '../mock/mockUser'; 

export interface User {
    username: string | undefined;
    email: string | undefined
    password: string | undefined;
}

export interface AuthContextValue {
    user: User | null;
    login: (user: User) => void;
    logout: () => void;
    register: (username: string, password: string, email: string) => boolean;
}

export const AuthContext = createContext<AuthContextValue | null>(null);

interface AuthProviderProps {
    children: React.ReactNode;
}

export default function AuthProvider({ children }: AuthProviderProps): JSX.Element {
    const [user, setUser] = useState<User | null>(null);

    const login = (mockedUser: User) => {
        setUser(mockedUser);
        console.log('User logged in:', mockedUser.username);
    };

    const logout = () => {
        setUser(null);
        console.log('User logged out.');
    };
        const register = (username: string, password: string, email: string): boolean => {
            
        const isSuccess = addMockUser(username, password, email);
        if (isSuccess) {
            console.log('User registered:', username);

        } else {
            console.warn('Registration failed: Username might already exist.');
        }
        return isSuccess;
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, register }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    return useContext(AuthContext);
};
