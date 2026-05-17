import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../constants/colors";
import { TYPOGRAPHY } from "../styles/typography";
import { globalStyles } from "../styles/globalStyles";

type OrderCardProps = {
  id: string;
  restaurant: string;
  items: string;
  amount: number;
  status: string;
  date: string;
};

const OrderCard = ({
  id,
  restaurant,
  items,
  amount,
  status,
  date,
}: OrderCardProps) => {
  const statusColor =
    status === "Delivered"
      ? COLORS.success
      : status === "Cancelled"
      ? COLORS.danger
      : COLORS.warning;

  return (
    <View style={[globalStyles.card, styles.card]}>
      <View style={globalStyles.rowBetween}>
        <Text style={styles.orderId}>Order #{id}</Text>
        <Text style={[styles.status, { color: statusColor }]}>{status}</Text>
      </View>

      <Text style={styles.restaurant}>{restaurant}</Text>

      <View style={globalStyles.rowBetween}>
        <Text style={styles.meta}>
          {items} • ₹{amount}
        </Text>
        <Text style={styles.date}>{date}</Text>
      </View>
    </View>
  );
};

export default OrderCard;

const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginBottom: 14,
  },
  orderId: {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.textLight,
    fontWeight: "700",
  },
  status: {
    ...TYPOGRAPHY.bodySmall,
    fontWeight: "800",
  },
  restaurant: {
    ...TYPOGRAPHY.body,
    color: COLORS.text,
    fontWeight: "800",
    marginTop: 10,
  },
  meta: {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.textLight,
    marginTop: 6,
  },
  date: {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.textMuted,
  },
});