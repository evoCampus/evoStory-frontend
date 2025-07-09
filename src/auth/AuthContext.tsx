import React, { createContext, useContext, useState, useEffect, JSX } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreateUserDTO, LoginDTO, UserDTO } from '../api/api';
import { ClientContext } from '../App';

export interface User {
    id: string;
    userName: string;
    email: string;
}

export interface AuthContextValue {
    user: User | null;
    login: (username: string, password: string) => Promise<boolean>;
    logout: () => void;
    register: (username: string, password: string, email: string) => Promise<boolean>;
    getUserProfileById: (userId: string) => Promise<User | null>;
    deleteUser: (userId: string) => Promise<boolean>;
}

const AuthContext = createContext<AuthContextValue | null>(null);

interface AuthProviderProps {
    children: React.ReactNode;
}

export default function AuthProvider({ children }: AuthProviderProps): JSX.Element {
    const [user, setUser] = useState<User | null>(null);
    const navigate = useNavigate();
    const client = useContext(ClientContext);

    const login = async (username: string, password: string): Promise<boolean> => {
        try {
            if(!client){
                return false;
            }
            const loginCredentials: LoginDTO = { userName: username, password: password };
            const response: UserDTO = await client?.loginUser(loginCredentials);

            if (response.id && response.userName && response.email) {
                setUser({
                    id: response.id,
                    userName: response.userName,
                    email: response.email,
                });
                console.log('Login successful, user data received. Token (if present) ignored by frontend.');
                return true;
            } else {
                console.error('Login failed: Invalid response from API (missing ID, username, or email).');
                return false;
            }
        } catch (error) {
            console.error('Error during login:', error);
            return false;
        }
    };

    const logout = () => {
        setUser(null);
        console.log('User logged out.');
        navigate('/login');
    };

    const register = async (username: string, password: string, email: string): Promise<boolean> => {
        try {
            if(!client){
                return false;
            }
            const registerData: CreateUserDTO = { userName: username, password: password, email: email };
            await client.registerUser(registerData);

            return true;
        } catch (error) {
            console.error('Error during registration:', error);
            return false;
        }
    };

    const getUserProfileById = async (userId: string): Promise<User | null> => {
        try {
            if(!client){
                return null;
            }
            const userData: UserDTO = await client.getUser(userId);
            /*bad type on backend thats why the !*/
            return {
                id: userData.id,
                userName: userData.userName!,
                email: userData.email!,
            };
        } catch (error) {
            console.error(`Failed to fetch user profile for ID ${userId}:`, error);
            return null;
        }
    }

    const deleteUser = async (userId: string): Promise<boolean> => {
        try {
            await client?.deleteUser(userId);
            console.log(`User with ID ${userId} deleted.`);
            if (user?.id === userId) {
                logout();
            }
            return true;
        } catch (error) {
            console.error(`Failed to delete user with ID ${userId}:`, error);
            return false;
        }
    };

    useEffect(() => {
        console.log("AuthContext: No token handling, user state will not persist across refreshes.");
    }, []);

    const authContextValue: AuthContextValue = {
        user,
        login,
        logout,
        register,
        getUserProfileById,
        deleteUser,
    };

    return (
        <AuthContext.Provider value={authContextValue}>
            {children}
        </AuthContext.Provider>
    );
}
//useAuth was copied here. 
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};