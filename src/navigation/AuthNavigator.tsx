import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/auth/LoginScreen";
import OnboardingScreen from "../screens/onboarding/OnboardingScreen";
import { AuthStackParamList } from "../types/navigation";
import { ROUTES } from "../constants/routes";
import { COLORS } from "../constants/colors";

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={ROUTES.LOGIN}
      screenOptions={{
        headerShown: false,
        animation: "fade",
        contentStyle: {
          backgroundColor: COLORS.background,
        },
      }}
    >
      <Stack.Screen name={ROUTES.LOGIN} component={LoginScreen} />
      <Stack.Screen name={ROUTES.ONBOARDING} component={OnboardingScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;