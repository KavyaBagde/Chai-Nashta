import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../constants/colors";
import { ROUTES } from "../constants/routes";
import { TYPOGRAPHY } from "../styles/typography";
import { useAuth } from "../context/AuthContext";

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  const { logout } = useAuth();
  
  const handleLogout = async () => {
  await logout();
};;

  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={styles.container}
    >
      <View style={styles.profileBox}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>K</Text>
        </View>

        <Text style={styles.name}>Kavya Bagde</Text>
        <Text style={styles.email}>kavyabagde0606@gmail.com</Text>
      </View>

      <View style={styles.drawerItems}>
        <DrawerItem
          label="My Orders"
          icon={({ color, size }) => (
            <Ionicons name="receipt-outline" size={size} color={color} />
          )}
          onPress={() => props.navigation.navigate(ROUTES.MY_ORDERS)}
        />

        <DrawerItem
          label="Settings"
          icon={({ color, size }) => (
            <Ionicons name="settings-outline" size={size} color={color} />
          )}
          onPress={() => props.navigation.navigate(ROUTES.SETTINGS)}
        />

        <DrawerItem
          label="Help"
          icon={({ color, size }) => (
            <Ionicons name="help-circle-outline" size={size} color={color} />
          )}
          onPress={() => props.navigation.navigate(ROUTES.HELP)}
        />
      </View>

      <View style={styles.logoutBox}>
        <DrawerItem
          label="Logout"
          icon={({ color, size }) => (
            <Ionicons name="log-out-outline" size={size} color={color} />
          )}
          onPress={handleLogout}
          labelStyle={styles.logoutLabel}
        />
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
  },
  profileBox: {
    paddingHorizontal: 20,
    paddingVertical: 28,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 14,
  },
  avatarText: {
    color: COLORS.surface,
    fontSize: 26,
    fontWeight: "900",
  },
  name: {
    ...TYPOGRAPHY.body,
    color: COLORS.text,
    fontWeight: "800",
  },
  email: {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.textLight,
    marginTop: 4,
  },
  drawerItems: {
    paddingTop: 12,
  },
  logoutBox: {
    marginTop: "auto",
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
    paddingTop: 12,
    paddingBottom: 18,
  },
  logoutLabel: {
    color: COLORS.danger,
    fontWeight: "700",
  },
});