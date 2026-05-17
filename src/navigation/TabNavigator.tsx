import React from "react";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import RestaurantStackNavigator from "./RestaurantStackNavigator";
import SearchScreen from "../screens/tabs/SearchScreen";
import OrdersScreen from "../screens/tabs/OrdersScreen";
import ProfileScreen from "../screens/tabs/ProfileScreen";

import { TabParamList } from "../types/navigation";
import { ROUTES } from "../constants/routes";
import { COLORS } from "../constants/colors";

const Tab = createBottomTabNavigator<TabParamList>();

const getTabBarStyle = (route: any) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? ROUTES.HOME;

  if (
    routeName === ROUTES.RESTAURANT_DETAIL ||
    routeName === ROUTES.CART
  ) {
    return {
      display: "none" as const,
    };
  }

  return {
    height: 68,
    paddingBottom: 10,
    paddingTop: 8,
    backgroundColor: COLORS.surface,
    borderTopColor: COLORS.border,
  };
};

const TabNavigator = () => {
  const cartItemCount = 1;

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.tabInactive,
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "700",
        },
        tabBarIcon: ({ color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap = "home-outline";

          if (route.name === ROUTES.HOME_STACK) {
            iconName = "home-outline";
          } else if (route.name === ROUTES.SEARCH) {
            iconName = "search-outline";
          } else if (route.name === ROUTES.ORDERS) {
            iconName = "receipt-outline";
          } else if (route.name === ROUTES.PROFILE) {
            iconName = "person-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name={ROUTES.HOME_STACK}
        component={RestaurantStackNavigator}
        options={({ route }) => ({
          title: "Home",
          tabBarStyle: getTabBarStyle(route),
        })}
      />

      <Tab.Screen
        name={ROUTES.SEARCH}
        component={SearchScreen}
        options={{
          title: "Search",
        }}
      />

      <Tab.Screen
        name={ROUTES.ORDERS}
        component={OrdersScreen}
        options={{
          title: "Orders",
          tabBarBadge: cartItemCount > 0 ? cartItemCount : undefined,
          tabBarBadgeStyle: {
            backgroundColor: COLORS.primary,
            color: COLORS.surface,
          },
        }}
      />

      <Tab.Screen
        name={ROUTES.PROFILE}
        component={ProfileScreen}
        options={{
          title: "Profile",
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;