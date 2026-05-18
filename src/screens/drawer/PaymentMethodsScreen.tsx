import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants/colors";
import { TYPOGRAPHY } from "../../styles/typography";
import { globalStyles } from "../../styles/globalStyles";
import CustomButton from "../../components/CustomButton";

const PaymentMethodsScreen = () => {
  const methods = [
    {
      id: "1",
      title: "UPI",
      subtitle: "kavya@upi",
      icon: "phone-portrait-outline",
    },
    {
      id: "2",
      title: "Cash on Delivery",
      subtitle: "Pay when food arrives",
      icon: "cash-outline",
    },
    {
      id: "3",
      title: "Debit Card",
      subtitle: "**** **** **** 1234",
      icon: "card-outline",
    },
  ];

  return (
    <View style={globalStyles.screen}>
      <View style={styles.container}>
        <Text style={styles.title}>Payment Methods</Text>
        <Text style={styles.subtitle}>Manage cards, UPI and cash options.</Text>

        {methods.map((method) => (
          <Pressable key={method.id} style={[globalStyles.card, styles.card]}>
            <View style={styles.iconBox}>
              <Ionicons
                name={method.icon as keyof typeof Ionicons.glyphMap}
                size={22}
                color={COLORS.primary}
              />
            </View>

            <View style={styles.info}>
              <Text style={styles.methodTitle}>{method.title}</Text>
              <Text style={styles.methodSubtitle}>{method.subtitle}</Text>
            </View>

            <Ionicons name="chevron-forward" size={20} color={COLORS.textMuted} />
          </Pressable>
        ))}

        <CustomButton title="Add Payment Method" style={styles.button} />
      </View>
    </View>
  );
};

export default PaymentMethodsScreen;

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
  info: {
    flex: 1,
  },
  methodTitle: {
    ...TYPOGRAPHY.body,
    color: COLORS.text,
    fontWeight: "900",
  },
  methodSubtitle: {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.textLight,
    marginTop: 4,
  },
  button: {
    marginTop: 16,
  },
});