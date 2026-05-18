import React from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants/colors";
import { TYPOGRAPHY } from "../../styles/typography";
import { globalStyles } from "../../styles/globalStyles";

const HelpScreen = () => {
  const options = [
    {
      id: "1",
      title: "Track My Order",
      subtitle: "Learn how live order tracking works",
      icon: "navigate-outline",
    },
    {
      id: "2",
      title: "Cancel Order",
      subtitle: "Check cancellation rules and refund details",
      icon: "close-circle-outline",
    },
    {
      id: "3",
      title: "Payment Issue",
      subtitle: "Solve failed payment or refund problems",
      icon: "card-outline",
    },
    {
      id: "4",
      title: "Contact Support",
      subtitle: "Chat with our customer support team",
      icon: "chatbubble-ellipses-outline",
    },
  ];

  return (
    <View style={globalStyles.screen}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <Text style={styles.title}>Help Center</Text>
        <Text style={styles.subtitle}>How can we help you today?</Text>

        <View style={styles.supportCard}>
          <View style={styles.supportIcon}>
            <Ionicons name="headset" size={34} color={COLORS.surface} />
          </View>

          <Text style={styles.supportTitle}>Need quick support?</Text>
          <Text style={styles.supportText}>
            Our support team is available for order, payment and delivery help.
          </Text>
        </View>

        {options.map((item) => (
          <Pressable key={item.id} style={[globalStyles.card, styles.optionCard]}>
            <View style={styles.left}>
              <View style={styles.iconBox}>
                <Ionicons
                  name={item.icon as keyof typeof Ionicons.glyphMap}
                  size={22}
                  color={COLORS.primary}
                />
              </View>

              <View style={styles.textBox}>
                <Text style={styles.optionTitle}>{item.title}</Text>
                <Text style={styles.optionSubtitle}>{item.subtitle}</Text>
              </View>
            </View>

            <Ionicons name="chevron-forward" size={20} color={COLORS.textMuted} />
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

export default HelpScreen;

const styles = StyleSheet.create({
  scrollContent: {
    padding: 20,
    paddingTop: 54,
    paddingBottom: 28,
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
  supportCard: {
    backgroundColor: COLORS.primary,
    borderRadius: 24,
    padding: 24,
    marginBottom: 22,
  },
  supportIcon: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "rgba(255,255,255,0.2)",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  supportTitle: {
    ...TYPOGRAPHY.h3,
    color: COLORS.surface,
  },
  supportText: {
    ...TYPOGRAPHY.bodySmall,
    color: "#FFF2EA",
    marginTop: 6,
  },
  optionCard: {
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
  optionTitle: {
    ...TYPOGRAPHY.body,
    color: COLORS.text,
    fontWeight: "900",
  },
  optionSubtitle: {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.textLight,
    marginTop: 3,
  },
});