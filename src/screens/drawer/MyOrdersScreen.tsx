import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants/colors";
import { TYPOGRAPHY } from "../../styles/typography";
import { globalStyles } from "../../styles/globalStyles";
import { useOrders } from "../../context/OrderContext";

const MyOrdersScreen = () => {
  const { orders } = useOrders();

  return (
    <View style={globalStyles.screen}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <Text style={styles.title}>My Orders</Text>
        <Text style={styles.subtitle}>
          Complete history of your placed orders.
        </Text>

        {orders.map((order) => (
          <View key={order.id} style={[globalStyles.card, styles.card]}>
            <View style={globalStyles.rowBetween}>
              <Text style={styles.orderId}>Order #{order.id}</Text>
              <Text
                style={[
                  styles.status,
                  {
                    color:
                      order.status === "Preparing"
                        ? COLORS.warning
                        : order.status === "Delivered"
                        ? COLORS.success
                        : COLORS.danger,
                  },
                ]}
              >
                {order.status}
              </Text>
            </View>

            <Text style={styles.restaurant}>{order.restaurantName}</Text>

            <Text style={styles.items}>
              {order.items.length > 0
                ? order.items
                    .map((item) => `${item.name} x${item.quantity}`)
                    .join(", ")
                : "Demo order"}
            </Text>

            <View style={styles.bottomRow}>
              <View style={styles.dateBox}>
                <Ionicons
                  name="calendar-outline"
                  size={15}
                  color={COLORS.textLight}
                />
                <Text style={styles.date}>{order.date}</Text>
              </View>

              <Text style={styles.amount}>₹{order.totalAmount}</Text>
            </View>
          </View>
        ))}

        {orders.length === 0 && (
          <View style={styles.emptyBox}>
            <Ionicons name="receipt-outline" size={48} color={COLORS.textMuted} />
            <Text style={styles.emptyTitle}>No orders yet</Text>
            <Text style={styles.emptyText}>
              Your placed orders will appear here.
            </Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default MyOrdersScreen;

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
    marginBottom: 24,
  },
  card: {
    padding: 18,
    marginBottom: 14,
  },
  orderId: {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.textLight,
    fontWeight: "800",
  },
  status: {
    ...TYPOGRAPHY.bodySmall,
    fontWeight: "900",
  },
  restaurant: {
    ...TYPOGRAPHY.body,
    color: COLORS.text,
    fontWeight: "900",
    marginTop: 12,
  },
  items: {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.textLight,
    marginTop: 6,
  },
  bottomRow: {
    ...globalStyles.rowBetween,
    marginTop: 14,
  },
  dateBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  date: {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.textLight,
    marginLeft: 5,
  },
  amount: {
    ...TYPOGRAPHY.h3,
    color: COLORS.primary,
  },
  emptyBox: {
    marginTop: 40,
    backgroundColor: COLORS.surface,
    borderRadius: 22,
    padding: 30,
    borderWidth: 1,
    borderColor: COLORS.border,
    alignItems: "center",
  },
  emptyTitle: {
    ...TYPOGRAPHY.h3,
    color: COLORS.text,
    marginTop: 12,
  },
  emptyText: {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.textLight,
    marginTop: 4,
  },
});