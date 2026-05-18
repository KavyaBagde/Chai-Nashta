import React from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import { COLORS } from "../../constants/colors";
import { TYPOGRAPHY } from "../../styles/typography";
import { globalStyles } from "../../styles/globalStyles";
import { useAuth } from "../../context/AuthContext";

import { ROUTES } from "../../constants/routes";

const ProfileScreen = () => {
  const navigation = useNavigation();
  const { logout } = useAuth();

  const handleOpenDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

 const profileItems = [
  {
    id: "1",
    title: "Personal Information",
    subtitle: "Name, email and phone number",
    icon: "person-circle-outline",
    onPress: () => navigation.navigate(ROUTES.PERSONAL_INFO as never),
  },
  {
    id: "2",
    title: "Addresses",
    subtitle: "Manage saved delivery addresses",
    icon: "location-outline",
    onPress: () => navigation.navigate(ROUTES.ADDRESSES as never),
  },
  {
    id: "3",
    title: "Payment Methods",
    subtitle: "UPI, cards and cash options",
    icon: "card-outline",
    onPress: () => navigation.navigate(ROUTES.PAYMENT_METHODS as never),
  },
  {
    id: "4",
    title: "Open Menu",
    subtitle: "More options and settings",
    icon: "list-outline",
    onPress: handleOpenDrawer,
  },
];

  return (
    <View style={globalStyles.screen}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.orangeHeader}>

          <View style={styles.avatar}>
            <Text style={styles.avatarText}>K</Text>
          </View>

          <Text style={styles.name}>Kavya Bagde</Text>
          <Text style={styles.email}>kavyabagde0606@gmail.com</Text>
        </View>

        <View style={styles.whitePanel}>
          {profileItems.map((item) => (
            <Pressable key={item.id} style={styles.profileRow} onPress={item.onPress}>
              <View style={styles.rowLeft}>
                <Ionicons
                  name={item.icon as keyof typeof Ionicons.glyphMap}
                  size={24}
                  color={COLORS.text}
                />

                <View style={styles.rowTextBox}>
                  <Text style={styles.rowTitle}>{item.title}</Text>
                  {item.subtitle ? (
                    <Text style={styles.rowSubtitle}>{item.subtitle}</Text>
                  ) : null}
                </View>
              </View>

              <Ionicons
                name="chevron-forward"
                size={20}
                color={COLORS.textMuted}
              />
            </Pressable>
          ))}

          <Pressable style={styles.logoutRow} onPress={logout}>
            <View style={styles.rowLeft}>
              <Ionicons name="log-out-outline" size={24} color={COLORS.danger} />
              <Text style={styles.logoutText}>Logout</Text>
            </View>

            <Ionicons name="chevron-forward" size={20} color={COLORS.textMuted} />
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  scrollContent: {
    paddingBottom: 30,
  },
  orangeHeader: {
    backgroundColor: COLORS.primary,
    paddingTop: 48,
    paddingHorizontal: 24,
    paddingBottom: 44,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
  },
  avatar: {
    width: 86,
    height: 86,
    borderRadius: 43,
    backgroundColor: COLORS.surface,
    borderWidth: 3,
    borderColor: "#FFE8DD",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  avatarText: {
    color: COLORS.primary,
    fontWeight: "900",
    fontSize: 30,
  },
  name: {
    ...TYPOGRAPHY.h3,
    color: COLORS.surface,
  },
  email: {
    ...TYPOGRAPHY.bodySmall,
    color: "#FFF2EA",
    marginTop: 3,
    fontWeight: "700",
  },
  whitePanel: {
    backgroundColor: COLORS.surface,
    marginHorizontal: 16,
    marginTop: -24,
    borderRadius: 22,
    paddingVertical: 8,
    shadowColor: COLORS.shadow,
    shadowOpacity: 0.08,
    shadowRadius: 14,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    elevation: 4,
  },
  profileRow: {
    paddingHorizontal: 18,
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logoutRow: {
    paddingHorizontal: 18,
    paddingVertical: 18,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  rowLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  rowTextBox: {
    marginLeft: 14,
  },
  rowTitle: {
    ...TYPOGRAPHY.body,
    color: COLORS.text,
    fontWeight: "800",
  },
  rowSubtitle: {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.textLight,
    marginTop: 3,
  },
  logoutText: {
    ...TYPOGRAPHY.body,
    color: COLORS.danger,
    fontWeight: "900",
    marginLeft: 14,
  },
});