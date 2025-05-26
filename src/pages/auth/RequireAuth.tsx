import React, { JSX } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from './useAuth';

interface RequireAuthProps {
    children: React.ReactNode;
}

export default function RequireAuth({ children }: RequireAuthProps): JSX.Element {
    const { user } = useAuth();
    const location = useLocation(); 

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    
    return <>{children}</>;
}