import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../constants/colors";
import { orders } from "../../constants/data";
import OrderCard from "../../components/OrderCard";
import { TYPOGRAPHY } from "../../styles/typography";
import { globalStyles } from "../../styles/globalStyles";

const MyOrdersScreen = () => {
  return (
    <View style={globalStyles.screen}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <Text style={styles.title}>Order History</Text>
        <Text style={styles.subtitle}>
          View all your previous and current food orders.
        </Text>

        <View style={styles.list}>
          {orders.map((order) => (
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
        </View>
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
  },
  list: {
    marginTop: 26,
  },
});