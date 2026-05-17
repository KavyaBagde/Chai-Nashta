import AsyncStorage from "@react-native-async-storage/async-storage";

const AUTH_KEY = "FOOD_APP_AUTH";

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
