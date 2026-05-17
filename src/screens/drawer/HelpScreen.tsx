import React from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants/colors";
import { TYPOGRAPHY } from "../../styles/typography";
import { globalStyles } from "../../styles/globalStyles";

const HelpScreen = () => {
  const faqs = [
    "How can I track my order?",
    "How do I cancel an order?",
    "How can I update my address?",
    "What payment methods are supported?",
  ];

  return (
    <View style={globalStyles.screen}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <Text style={styles.title}>Help Center</Text>
        <Text style={styles.subtitle}>
          Need support? Find quick answers or contact us.
        </Text>

        <View style={[globalStyles.card, styles.supportCard]}>
          <View style={styles.supportIcon}>
            <Ionicons name="headset" size={32} color={COLORS.surface} />
          </View>

          <Text style={styles.supportTitle}>24/7 Customer Support</Text>
          <Text style={styles.supportText}>
            We are always available to help you with your orders.
          </Text>

          <Pressable style={styles.contactButton}>
            <Text style={styles.contactText}>Contact Support</Text>
          </Pressable>
        </View>

        <Text style={styles.sectionTitle}>FAQs</Text>

        {faqs.map((faq, index) => (
          <Pressable key={index} style={[globalStyles.card, styles.faqCard]}>
            <Text style={styles.faqText}>{faq}</Text>
            <Ionicons
              name="chevron-forward"
              size={20}
              color={COLORS.textMuted}
            />
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

export default HelpScreen;

const styles = StyleSheet.create({
  scrollContent: {
    paddingHorizontal: 20,
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
    marginBottom: 26,
  },
  supportCard: {
    padding: 22,
    alignItems: "center",
    backgroundColor: "#FFE8DD",
    marginBottom: 28,
  },
  supportIcon: {
    width: 66,
    height: 66,
    borderRadius: 33,
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  supportTitle: {
    ...TYPOGRAPHY.h3,
    color: COLORS.text,
  },
  supportText: {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.textLight,
    textAlign: "center",
    marginTop: 8,
  },
  contactButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 12,
    paddingHorizontal: 18,
    paddingVertical: 10,
    marginTop: 18,
  },
  contactText: {
    color: COLORS.surface,
    fontWeight: "800",
  },
  sectionTitle: {
    ...TYPOGRAPHY.h3,
    color: COLORS.text,
    marginBottom: 14,
  },
  faqCard: {
    padding: 16,
    marginBottom: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  faqText: {
    ...TYPOGRAPHY.body,
    color: COLORS.text,
    fontWeight: "700",
    flex: 1,
  },
});