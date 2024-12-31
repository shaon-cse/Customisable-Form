import React, { createContext, useState, useEffect } from 'react';
import { auth } from '../services/auth'; // Assuming you have an auth service for API calls

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const login = async (email, password) => {
        const userCredential = await auth.signInWithEmailAndPassword(email, password);
        setUser(userCredential.user);
    };

    const signup = async (email, password) => {
        const userCredential = await auth.createUserWithEmailAndPassword(email, password);
        setUser(userCredential.user);
    };

    const logout = async () => {
        await auth.signOut();
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, signup, logout }}>
            {children}
        </AuthContext.Provider>
    );
};