import React, { useState } from "react";
import { Pressable, StyleSheet, Switch, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants/colors";
import { TYPOGRAPHY } from "../../styles/typography";
import { globalStyles } from "../../styles/globalStyles";

const SettingsScreen = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const settingItems = [
    {
      id: "1",
      title: "Delivery Address",
      subtitle: "Manage saved addresses",
      icon: "location-outline",
    },
    {
      id: "2",
      title: "Payment Methods",
      subtitle: "Cards, UPI and wallets",
      icon: "card-outline",
    },
    {
      id: "3",
      title: "App Theme",
      subtitle: "Light mode",
      icon: "color-palette-outline",
    },
  ];

  return (
    <View style={globalStyles.screen}>
      <View style={styles.container}>
        <Text style={styles.title}>Settings</Text>
        <Text style={styles.subtitle}>Manage your app preferences.</Text>

        <View style={[globalStyles.card, styles.notificationCard]}>
          <View style={styles.settingLeft}>
            <View style={styles.iconBox}>
              <Ionicons
                name="notifications-outline"
                size={22}
                color={COLORS.primary}
              />
            </View>

            <View>
              <Text style={styles.settingTitle}>Notifications</Text>
              <Text style={styles.settingSubtitle}>Order updates and offers</Text>
            </View>
          </View>

          <Switch
            value={notificationsEnabled}
            onValueChange={setNotificationsEnabled}
            thumbColor={COLORS.surface}
            trackColor={{
              false: COLORS.border,
              true: COLORS.primary,
            }}
          />
        </View>

        <View style={styles.list}>
          {settingItems.map((item) => (
            <Pressable key={item.id} style={[globalStyles.card, styles.itemCard]}>
              <View style={styles.settingLeft}>
                <View style={styles.iconBox}>
                  <Ionicons
                    name={item.icon as keyof typeof Ionicons.glyphMap}
                    size={22}
                    color={COLORS.primary}
                  />
                </View>

                <View>
                  <Text style={styles.settingTitle}>{item.title}</Text>
                  <Text style={styles.settingSubtitle}>{item.subtitle}</Text>
                </View>
              </View>

              <Ionicons
                name="chevron-forward"
                size={20}
                color={COLORS.textMuted}
              />
            </Pressable>
          ))}
        </View>
      </View>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 54,
  },
  title: {
    ...TYPOGRAPHY.h2,
    color: COLORS.text,
  },
  subtitle: {
    ...TYPOGRAPHY.body,
    color: COLORS.textLight,
    marginTop: 6,
    marginBottom: 26,
  },
  notificationCard: {
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  list: {
    marginTop: 16,
    gap: 14,
  },
  itemCard: {
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  settingLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
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
  settingTitle: {
    ...TYPOGRAPHY.body,
    color: COLORS.text,
    fontWeight: "800",
  },
  settingSubtitle: {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.textLight,
    marginTop: 2,
  },
});