import React from 'react';
import { useAuth } from './AuthContext';

function UserInfo() {
    const { user } = useAuth();

    if (user) {
        return (
            <div>
                Bejelentkezve mint: {user.username} ({user.email})
            </div>
        );
    } else {
        return (
            <div>
                Nincs bejelentkezve.
            </div>
        );
    }
}

export default UserInfo;