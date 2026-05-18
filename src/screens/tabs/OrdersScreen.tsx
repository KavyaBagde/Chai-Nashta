import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { COLORS } from "../../constants/colors";
import { TYPOGRAPHY } from "../../styles/typography";
import { globalStyles } from "../../styles/globalStyles";
import { useOrders } from "../../context/OrderContext";

const OrdersScreen = () => {
  const { orders } = useOrders();

  const activeOrders = orders.filter((order) => order.status === "Preparing");
  const pastOrders = orders.filter((order) => order.status !== "Preparing");

  return (
    <View style={globalStyles.screen}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <Text style={styles.title}>My Orders</Text>
        <Text style={styles.subtitle}>Track your current and past orders.</Text>

        <Text style={styles.sectionTitle}>Current Orders</Text>

        {activeOrders.length > 0 ? (
          activeOrders.map((order) => (
            <View key={order.id} style={[globalStyles.card, styles.activeCard]}>
              <View style={styles.iconCircle}>
                <Ionicons name="bicycle" size={28} color={COLORS.surface} />
              </View>

              <View style={styles.activeInfo}>
                <View style={globalStyles.rowBetween}>
                  <Text style={styles.restaurant}>{order.restaurantName}</Text>
                  <Text style={styles.status}>{order.status}</Text>
                </View>

                <Text style={styles.activeMeta}>
                  {order.items.length > 0
                    ? `${order.items.length} items`
                    : "Demo order"}{" "}
                  • ₹{order.totalAmount}
                </Text>

                <Text style={styles.date}>{order.date}</Text>
              </View>
            </View>
          ))
        ) : (
          <View style={styles.emptyMini}>
            <Text style={styles.emptyText}>No active orders.</Text>
          </View>
        )}

        <Text style={styles.sectionTitle}>Past Orders</Text>

        {pastOrders.length > 0 ? (
          pastOrders.map((order) => (
            <View key={order.id} style={[globalStyles.card, styles.orderCard]}>
              <View style={globalStyles.rowBetween}>
                <Text style={styles.orderId}>Order #{order.id}</Text>
                <Text
                  style={[
                    styles.pastStatus,
                    {
                      color:
                        order.status === "Delivered"
                          ? COLORS.success
                          : COLORS.danger,
                    },
                  ]}
                >
                  {order.status}
                </Text>
              </View>

              <Text style={styles.restaurant}>{order.restaurantName}</Text>

              <View style={globalStyles.rowBetween}>
                <Text style={styles.activeMeta}>
                  {order.items.length > 0
                    ? `${order.items.length} items`
                    : "Demo order"}{" "}
                  • ₹{order.totalAmount}
                </Text>
                <Text style={styles.date}>{order.date}</Text>
              </View>
            </View>
          ))
        ) : (
          <View style={styles.emptyMini}>
            <Text style={styles.emptyText}>No past orders yet.</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default OrdersScreen;

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
  sectionTitle: {
    ...TYPOGRAPHY.h3,
    color: COLORS.text,
    marginBottom: 14,
    marginTop: 8,
  },
  activeCard: {
    padding: 18,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 14,
    backgroundColor: "#FFE8DD",
  },
  iconCircle: {
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  activeInfo: {
    flex: 1,
    marginLeft: 14,
  },
  restaurant: {
    ...TYPOGRAPHY.body,
    color: COLORS.text,
    fontWeight: "800",
    flex: 1,
  },
  activeMeta: {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.textLight,
    marginTop: 4,
  },
  status: {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.primary,
    fontWeight: "900",
  },
  date: {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.textMuted,
    marginTop: 5,
  },
  orderCard: {
    padding: 16,
    marginBottom: 14,
  },
  orderId: {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.textLight,
    fontWeight: "700",
  },
  pastStatus: {
    ...TYPOGRAPHY.bodySmall,
    fontWeight: "900",
  },
  emptyMini: {
    backgroundColor: COLORS.surface,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: 18,
    marginBottom: 18,
  },
  emptyText: {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.textLight,
    textAlign: "center",
  },
});