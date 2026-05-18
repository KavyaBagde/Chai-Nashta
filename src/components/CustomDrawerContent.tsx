import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

import { COLORS } from "../constants/colors";
import { ROUTES } from "../constants/routes";
import { TYPOGRAPHY } from "../styles/typography";
import { useAuth } from "../context/AuthContext";

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  const { logout } = useAuth();

  const drawerItems = [
    {
      id: "1",
      label: "My Orders",
      icon: "receipt-outline",
      onPress: () => props.navigation.navigate(ROUTES.MY_ORDERS),
    },
    {
      id: "2",
      label: "Settings",
      icon: "settings-outline",
      onPress: () => props.navigation.navigate(ROUTES.SETTINGS),
    },
    {
      id: "3",
      label: "Help",
      icon: "help-circle-outline",
      onPress: () => props.navigation.navigate(ROUTES.HELP),
    },
  ];

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

      <View style={styles.menuBox}>
        {drawerItems.map((item) => (
          <Pressable key={item.id} style={styles.drawerRow} onPress={item.onPress}>
            <View style={styles.rowLeft}>
              <Ionicons
                name={item.icon as keyof typeof Ionicons.glyphMap}
                size={23}
                color={COLORS.text}
              />
              <Text style={styles.drawerLabel}>{item.label}</Text>
            </View>
          </Pressable>
        ))}

        <Pressable style={styles.logoutRow} onPress={logout}>
          <View style={styles.rowLeft}>
            <Ionicons name="log-out-outline" size={23} color={COLORS.danger} />
            <Text style={styles.logoutLabel}>Logout</Text>
          </View>
        </Pressable>
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.surface,
  },
  profileBox: {
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 26,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  avatar: {
    width: 76,
    height: 76,
    borderRadius: 38,
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  avatarText: {
    color: COLORS.surface,
    fontSize: 28,
    fontWeight: "900",
  },
  name: {
    ...TYPOGRAPHY.h3,
    color: COLORS.text,
  },
  email: {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.textLight,
    marginTop: 4,
  },
  menuBox: {
    paddingTop: 14,
  },
  drawerRow: {
    paddingVertical: 18,
    paddingHorizontal: 24,
  },
  logoutRow: {
    paddingVertical: 18,
    paddingHorizontal: 24,
    marginTop: 8,
  },
  rowLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  drawerLabel: {
    ...TYPOGRAPHY.body,
    color: COLORS.text,
    fontWeight: "800",
    marginLeft: 18,
  },
  logoutLabel: {
    ...TYPOGRAPHY.body,
    color: COLORS.danger,
    fontWeight: "900",
    marginLeft: 18,
  },
});