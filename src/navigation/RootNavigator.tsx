import React from "react";
import { ActivityIndicator, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import AuthNavigator from "./AuthNavigator";
import DrawerNavigator from "./DrawerNavigator";
import OnboardingScreen from "../screens/onboarding/OnboardingScreen";

import { AuthProvider, useAuth } from "../context/AuthContext";
import { CartProvider } from "../context/CartContext";
import { OrderProvider } from "../context/OrderContext";

import { COLORS } from "../constants/colors";
import { ROUTES } from "../constants/routes";

const linking: any = {
  prefixes: ["foodapp://"],
  config: {
    screens: {
      [ROUTES.MAIN_TABS]: {
        screens: {
          [ROUTES.HOME_STACK]: {
            screens: {
              [ROUTES.RESTAURANT_DETAIL]: {
                path: "restaurant/:restaurantId",
              },
            },
          },
        },
      },
    },
  },
};

const RootNavigationContent = () => {
  const { isAuthenticated, isLoading, onboardingCompleted } = useAuth();

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: COLORS.background,
        }}
      >
        <ActivityIndicator size="large" color={COLORS.primary} />
      </View>
    );
  }

  return (
    <NavigationContainer linking={linking}>
      {isAuthenticated ? (
        <DrawerNavigator />
      ) : onboardingCompleted ? (
        <AuthNavigator />
      ) : (
        <OnboardingScreen />
      )}
    </NavigationContainer>
  );
};

const RootNavigator = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <OrderProvider>
          <RootNavigationContent />
        </OrderProvider>
      </CartProvider>
    </AuthProvider>
  );
};

export default RootNavigator;
