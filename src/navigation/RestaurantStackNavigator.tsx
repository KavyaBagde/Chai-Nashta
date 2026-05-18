import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/home/HomeScreen";
import RestaurantDetailScreen from "../screens/home/RestaurantDetailScreen";
import CartScreen from "../screens/home/CartScreen";
import AllRestaurantsScreen from "../screens/home/AllRestaurantsScreen";
import ItemDetailScreen from "../screens/home/ItemDetailScreen";

import { RestaurantStackParamList } from "../types/navigation";
import { ROUTES } from "../constants/routes";
import { COLORS } from "../constants/colors";

const Stack = createNativeStackNavigator<RestaurantStackParamList>();

const RestaurantStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={ROUTES.HOME}
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
        headerTintColor: COLORS.surface,
        headerTitleStyle: {
          fontWeight: "800",
        },
        headerBackTitle: "Back",
        animation: "slide_from_right",
        contentStyle: {
          backgroundColor: COLORS.background,
        },
      }}
    >
      <Stack.Screen
        name={ROUTES.HOME}
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name={ROUTES.ALL_RESTAURANTS}
        component={AllRestaurantsScreen}
        options={{
          title: "All Restaurants",
        }}
      />

      <Stack.Screen
        name={ROUTES.RESTAURANT_DETAIL}
        component={RestaurantDetailScreen}
        options={({ route }) => ({
          title: route.params?.restaurantName || "Restaurant",
          headerBackTitle: "Back",
        })}
      />

      <Stack.Screen
        name={ROUTES.ITEM_DETAIL}
        component={ItemDetailScreen}
        options={{
          title: "Item Detail",
          headerShown: false,
          animation: "slide_from_right",
        }}
      />

      <Stack.Screen
        name={ROUTES.CART}
        component={CartScreen}
        options={{
          title: "Your Cart",
          presentation: "modal",
          animation: "slide_from_bottom",
        }}
      />
    </Stack.Navigator>
  );
};

export default RestaurantStackNavigator;
