import AsyncStorage from "@react-native-async-storage/async-storage";

const AUTH_KEY = "FOOD_APP_AUTH";
const ONBOARDING_KEY = "FOOD_APP_ONBOARDING";

export const saveAuthState = async () => {
  await AsyncStorage.setItem(AUTH_KEY, "true");
};

export const getAuthState = async () => {
  const value = await AsyncStorage.getItem(AUTH_KEY);
  return value === "true";
};

export const removeAuthState = async () => {
  await AsyncStorage.removeItem(AUTH_KEY);
};

export const completeOnboarding = async () => {
  await AsyncStorage.setItem(ONBOARDING_KEY, "true");
};

export const hasCompletedOnboarding = async () => {
  const value = await AsyncStorage.getItem(ONBOARDING_KEY);
  return value === "true";
};

export const resetStorage = async () => {
  await AsyncStorage.clear();
};
