import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import TabNavigator from "./TabNavigator";
import MyOrdersScreen from "../screens/drawer/MyOrdersScreen";
import SettingsScreen from "../screens/drawer/SettingsScreen";
import HelpScreen from "../screens/drawer/HelpScreen";
import CustomDrawerContent from "../components/CustomDrawerContent";

import { DrawerParamList } from "../types/navigation";
import { ROUTES } from "../constants/routes";
import { COLORS } from "../constants/colors";

const Drawer = createDrawerNavigator<DrawerParamList>();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
        headerTintColor: COLORS.surface,
        headerTitleStyle: {
          fontWeight: "800",
        },
        drawerActiveTintColor: COLORS.primary,
        drawerInactiveTintColor: COLORS.textLight,
        drawerStyle: {
          backgroundColor: COLORS.surface,
          width: 290,
        },
      }}
    >
      <Drawer.Screen
        name={ROUTES.MAIN_TABS}
        component={TabNavigator}
        options={{
          title: "FoodieGo",
          headerShown: false,
        }}
      />

      <Drawer.Screen
        name={ROUTES.MY_ORDERS}
        component={MyOrdersScreen}
        options={{
          title: "My Orders",
        }}
      />

      <Drawer.Screen
        name={ROUTES.SETTINGS}
        component={SettingsScreen}
        options={{
          title: "Settings",
        }}
      />

      <Drawer.Screen
        name={ROUTES.HELP}
        component={HelpScreen}
        options={{
          title: "Help",
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;