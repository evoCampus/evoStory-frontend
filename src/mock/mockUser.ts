import { User } from "../auth/AuthContext";

const USERS_STORAGE_KEY = 'mockUsers';
const PASSWORDS_STORAGE_KEY = 'mockPasswords';

const defaultUsers: User[] = [
    { username: 'testuser', email: 'test@example.com' },
    { username: 'admin', email: 'admin@example.com' },
    { username: 'janedoe', email: 'jane@example.com' }
];

const defaultPasswords: { [username: string]: string } = {
    'testuser': 'password',
    'admin': 'adminpass',
    'janedoe': 'janepass'
};

const loadUsers = (): User[] => {
    try {
        const storedUsers = localStorage.getItem(USERS_STORAGE_KEY);
        return storedUsers ? JSON.parse(storedUsers) : defaultUsers;
    } catch (e) {
        console.error("Error loading users from local storage, using defaults:", e);
        return defaultUsers;
    }
};

const loadPasswords = (): { [username: string]: string } => {
    try {
        const storedPasswords = localStorage.getItem(PASSWORDS_STORAGE_KEY);
        return storedPasswords ? JSON.parse(storedPasswords) : defaultPasswords;
    } catch (e) {
        console.error("Error loading passwords from local storage, using defaults:", e);
        return defaultPasswords;
    }
};

const saveUsers = (users: User[]) => {
    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
};

const savePasswords = (passwords: { [username: string]: string }) => {
    localStorage.setItem(PASSWORDS_STORAGE_KEY, JSON.stringify(passwords));
};

export let mockUsers: User[] = loadUsers();
export let mockPasswords: { [username: string]: string } = loadPasswords();

export const addMockUser = (username: string, password: string, email: string): boolean => {
    if (mockUsers.some(user => user.username === username)) {
        console.log(`Username '${username}' already exists.`);
        return false;
    }

    const newUser: User = { username, email };

    mockUsers.push(newUser);
    mockPasswords[username] = password;

    saveUsers(mockUsers);
    savePasswords(mockPasswords);

    console.log(`User '${username}' registered and added to mock data.`);
    console.log('Current mock users (in memory):', mockUsers.map(u => u.username));
    return true;
};