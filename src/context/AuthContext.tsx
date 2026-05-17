import React, { createContext, useContext, useEffect, useState } from "react";
import { getAuthState, removeAuthState, saveAuthState } from "../utils/storage";

type AuthContextType = {
  isAuthenticated: boolean;
  isLoading: boolean;
  login: () => Promise<void>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadAuth = async () => {
      const storedAuth = await getAuthState();
      setIsAuthenticated(storedAuth);
      setIsLoading(false);
    };

    loadAuth();
  }, []);

  const login = async () => {
    await saveAuthState();
    setIsAuthenticated(true);
  };

  const logout = async () => {
    await removeAuthState();
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
};