import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import TabNavigator from "./TabNavigator";
import MyOrdersScreen from "../screens/drawer/MyOrdersScreen";
import SettingsScreen from "../screens/drawer/SettingsScreen";
import HelpScreen from "../screens/drawer/HelpScreen";
import PersonalInfoScreen from "../screens/drawer/PersonalInfoScreen";
import AddressesScreen from "../screens/drawer/AddressesScreen";
import PaymentMethodsScreen from "../screens/drawer/PaymentMethodsScreen";
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

      <Drawer.Screen name={ROUTES.MY_ORDERS} component={MyOrdersScreen} options={{ title: "My Orders" }} />
      <Drawer.Screen name={ROUTES.SETTINGS} component={SettingsScreen} options={{ title: "Settings" }} />
      <Drawer.Screen name={ROUTES.HELP} component={HelpScreen} options={{ title: "Help" }} />
      <Drawer.Screen name={ROUTES.PERSONAL_INFO} component={PersonalInfoScreen} options={{ title: "Personal Info" }} />
      <Drawer.Screen name={ROUTES.ADDRESSES} component={AddressesScreen} options={{ title: "Addresses" }} />
      <Drawer.Screen name={ROUTES.PAYMENT_METHODS} component={PaymentMethodsScreen} options={{ title: "Payment Methods" }} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;