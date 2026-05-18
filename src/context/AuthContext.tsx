import React, { createContext, useContext, useEffect, useState } from "react";

import {
  completeOnboarding,
  getAuthState,
  hasCompletedOnboarding,
  removeAuthState,
  saveAuthState,
} from "../utils/storage";

type AuthContextType = {
  isAuthenticated: boolean;
  isLoading: boolean;
  onboardingCompleted: boolean;

  login: () => Promise<void>;
  logout: () => Promise<void>;
  finishOnboarding: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [onboardingCompleted, setOnboardingCompleted] = useState(false);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadInitialState = async () => {
      const authState = await getAuthState();

      const onboardingState = await hasCompletedOnboarding();

      setIsAuthenticated(authState);

      setOnboardingCompleted(onboardingState);

      setIsLoading(false);
    };

    loadInitialState();
  }, []);

  const login = async () => {
    await saveAuthState();
    setIsAuthenticated(true);
  };

  const logout = async () => {
    await removeAuthState();
    setIsAuthenticated(false);
  };

  const finishOnboarding = async () => {
    await completeOnboarding();
    setOnboardingCompleted(true);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        isLoading,
        onboardingCompleted,
        login,
        logout,
        finishOnboarding,
      }}
    >
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