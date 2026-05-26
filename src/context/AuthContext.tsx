import React, { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged, User, GoogleAuthProvider, signInWithPopup } from 'supabase/auth';
import { auth } from '../supabase';
import { client } from '../api/client';

type AuthType = {
    user: User | null;
    isAdmin: boolean;
    logout: () => void;
    signInWithGoogle: () => Promise<void>;
    loading: boolean;
};

const AuthContext = createContext<AuthType | undefined>(undefined);

const ADMIN_EMAILS = [
    'admin@example.com',
    'villamolix@gmail.com'
];

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    const isAdmin = user ? ADMIN_EMAILS.includes(user.email ?? '') : false;

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (u) => {
            if (u) {
                setUser(u);

                try {
                    await client.post("/api/users", {
                        uid: u.uid,
                        email: u.email,
                        name: u.displayName || u.email,
                        address: null,
                    });
                } catch (error: any) {
                    console.error("Error de sincronización con la base de datos:", error.response?.data?.details || error.message);
                }
            } else {
                setUser(null);
            }
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    const logout = async () => {
        await auth.signOut();
    };

    const signInWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
        } catch (error: any) {
            console.error("Error al iniciar sesión con Google:", error);
            alert("No se pudo iniciar sesión. Por favor, revisa la consola.");
        }
    };


    return <AuthContext.Provider value={{ user, isAdmin, logout, signInWithGoogle, loading }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error('useAuth must be used within AuthProvider');
    return ctx;
};