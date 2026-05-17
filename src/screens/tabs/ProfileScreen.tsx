import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants/colors";
import { TYPOGRAPHY } from "../../styles/typography";
import { globalStyles } from "../../styles/globalStyles";
import CustomButton from "../../components/CustomButton";
import { DrawerActions, useNavigation } from "@react-navigation/native";

const ProfileScreen = () => {
  const navigation = useNavigation();

  const handleOpenDrawer = () => {
  navigation.dispatch(DrawerActions.openDrawer());
};

  const menuItems = [
    {
      id: "1",
      title: "My Orders",
      icon: "receipt-outline",
    },
    {
      id: "2",
      title: "Settings",
      icon: "settings-outline",
    },
    {
      id: "3",
      title: "Help",
      icon: "help-circle-outline",
    },
  ];

  return (
    <View style={globalStyles.screen}>
      <View style={styles.container}>
        <View style={styles.profileHeader}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>K</Text>
          </View>

          <Text style={styles.name}>Kavya Bagde</Text>
          <Text style={styles.email}>kavyabagde0606@gmail.com</Text>
        </View>

        <View style={styles.menuList}>
          {menuItems.map((item) => (
            <Pressable key={item.id} style={[globalStyles.card, styles.menuCard]}>
              <View style={styles.menuLeft}>
                <View style={styles.iconBox}>
                  <Ionicons
                    name={item.icon as keyof typeof Ionicons.glyphMap}
                    size={22}
                    color={COLORS.primary}
                  />
                </View>

                <Text style={styles.menuTitle}>{item.title}</Text>
              </View>

              <Ionicons
                name="chevron-forward"
                size={20}
                color={COLORS.textMuted}
              />
            </Pressable>
          ))}
        </View>

        <CustomButton
          title="Open Drawer Menu"
          onPress={handleOpenDrawer}
          style={styles.drawerButton}
        />

        <CustomButton
          title="Logout"
          variant="outline"
          onPress={() => console.log("Logout pressed")}
          style={styles.logoutButton}
        />
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 54,
  },
  profileHeader: {
    alignItems: "center",
    marginBottom: 34,
  },
  avatar: {
    width: 94,
    height: 94,
    borderRadius: 47,
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  avatarText: {
    color: COLORS.surface,
    fontWeight: "900",
    fontSize: 32,
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
  menuList: {
    gap: 14,
  },
  menuCard: {
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  menuLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconBox: {
    width: 42,
    height: 42,
    borderRadius: 14,
    backgroundColor: "#FFE8DD",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  menuTitle: {
    ...TYPOGRAPHY.body,
    color: COLORS.text,
    fontWeight: "800",
  },
  drawerButton: {
    marginTop: 28,
  },
  logoutButton: {
    marginTop: 14,
  },
});