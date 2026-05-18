import React, { useState } from "react";
import { Pressable, StyleSheet, Switch, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants/colors";
import { TYPOGRAPHY } from "../../styles/typography";
import { globalStyles } from "../../styles/globalStyles";

const SettingsScreen = () => {
  const [notifications, setNotifications] = useState(true);
  const [offers, setOffers] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const settings = [
    {
      id: "1",
      title: "Push Notifications",
      subtitle: "Receive order updates instantly",
      icon: "notifications-outline",
      value: notifications,
      onChange: setNotifications,
    },
    {
      id: "2",
      title: "Offers & Discounts",
      subtitle: "Get promo and coupon alerts",
      icon: "pricetag-outline",
      value: offers,
      onChange: setOffers,
    },
    {
      id: "3",
      title: "Dark Mode",
      subtitle: "Coming soon UI preference",
      icon: "moon-outline",
      value: darkMode,
      onChange: setDarkMode,
    },
  ];

  return (
    <View style={globalStyles.screen}>
      <View style={styles.container}>
        <Text style={styles.title}>Settings</Text>
        <Text style={styles.subtitle}>Control your food app preferences.</Text>

        {settings.map((item) => (
          <View key={item.id} style={[globalStyles.card, styles.card]}>
            <View style={styles.left}>
              <View style={styles.iconBox}>
                <Ionicons
                  name={item.icon as keyof typeof Ionicons.glyphMap}
                  size={22}
                  color={COLORS.primary}
                />
              </View>

              <View style={styles.textBox}>
                <Text style={styles.settingTitle}>{item.title}</Text>
                <Text style={styles.settingSubtitle}>{item.subtitle}</Text>
              </View>
            </View>

            <Switch
              value={item.value}
              onValueChange={item.onChange}
              thumbColor={COLORS.surface}
              trackColor={{
                false: COLORS.border,
                true: COLORS.primary,
              }}
            />
          </View>
        ))}

        <Pressable style={[globalStyles.card, styles.versionCard]}>
          <View>
            <Text style={styles.settingTitle}>App Version</Text>
            <Text style={styles.settingSubtitle}>FoodieGo v1.0.0</Text>
          </View>

          <Ionicons name="information-circle-outline" size={24} color={COLORS.primary} />
        </Pressable>
      </View>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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
    marginBottom: 24,
  },
  card: {
    padding: 16,
    marginBottom: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  iconBox: {
    width: 46,
    height: 46,
    borderRadius: 15,
    backgroundColor: "#FFE8DD",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  textBox: {
    flex: 1,
  },
  settingTitle: {
    ...TYPOGRAPHY.body,
    color: COLORS.text,
    fontWeight: "900",
  },
  settingSubtitle: {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.textLight,
    marginTop: 3,
  },
  versionCard: {
    marginTop: 10,
    padding: 16,
  },
});