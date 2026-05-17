import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants/colors";
import { orders } from "../../constants/data";
import { TYPOGRAPHY } from "../../styles/typography";
import { globalStyles } from "../../styles/globalStyles";
import OrderCard from "../../components/OrderCard";

const OrdersScreen = () => {
  const activeOrder = orders[0];
  const pastOrders = orders.slice(1);

  return (
    <View style={globalStyles.screen}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <Text style={styles.title}>My Orders</Text>
        <Text style={styles.subtitle}>Track your current and past orders.</Text>

        <Text style={styles.sectionTitle}>Current Order</Text>

        <View style={[globalStyles.card, styles.activeCard]}>
          <View style={styles.iconCircle}>
            <Ionicons name="bicycle" size={28} color={COLORS.surface} />
          </View>

          <View style={styles.activeInfo}>
            <Text style={styles.restaurant}>{activeOrder.restaurant}</Text>
            <Text style={styles.activeMeta}>
              {activeOrder.items} • ₹{activeOrder.amount}
            </Text>
            <Text style={styles.status}>Preparing your food</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Past Orders</Text>

        {pastOrders.map((order) => (
          <OrderCard
            key={order.id}
            id={order.id}
            restaurant={order.restaurant}
            items={order.items}
            amount={order.amount}
            status={order.status}
            date={order.date}
          />
        ))}
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
    marginBottom: 26,
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
  },
  activeMeta: {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.textLight,
    marginTop: 4,
  },
  status: {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.primary,
    fontWeight: "800",
    marginTop: 6,
  },
});