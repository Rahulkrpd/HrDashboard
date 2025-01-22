"use client"
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AppContextProps {
    email: string;
    setEmail: (email: string) => void;
    data: any;
    setData: (data: any) => void;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
    const [email, setEmail] = useState<string>('');
    const [data, setData] = useState<any>();

    return (
        <AppContext.Provider value={{ email, setEmail, data, setData }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};
