import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { COLORS } from "../../constants/colors";
import { ROUTES } from "../../constants/routes";
import { TYPOGRAPHY } from "../../styles/typography";
import { globalStyles } from "../../styles/globalStyles";
import { RestaurantStackParamList } from "../../types/navigation";

import CustomButton from "../../components/CustomButton";

type Props = NativeStackScreenProps<RestaurantStackParamList, "Cart">;

const cartItems = [
  {
    id: "1",
    name: "Margherita Pizza",
    price: 199,
    quantity: 1,
  },
  {
    id: "2",
    name: "Garlic Bread",
    price: 129,
    quantity: 1,
  },
];

const CartScreen = ({ navigation }: Props) => {
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handlePlaceOrder = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: ROUTES.HOME }],
    });
  };

  return (
    <View style={globalStyles.screen}>
      <View style={styles.container}>
        <Text style={styles.title}>Your Cart</Text>
        <Text style={styles.subtitle}>Review your items before ordering.</Text>

        <View style={styles.list}>
          {cartItems.map((item) => (
            <View key={item.id} style={[globalStyles.card, styles.cartItem]}>
              <View>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemPrice}>₹{item.price}</Text>
              </View>

              <View style={styles.quantityBox}>
                <Pressable style={styles.qtyButton}>
                  <Ionicons name="remove" size={16} color={COLORS.text} />
                </Pressable>

                <Text style={styles.quantity}>{item.quantity}</Text>

                <Pressable style={styles.qtyButton}>
                  <Ionicons name="add" size={16} color={COLORS.text} />
                </Pressable>
              </View>
            </View>
          ))}
        </View>

        <View style={[globalStyles.card, styles.billCard]}>
          <View style={globalStyles.rowBetween}>
            <Text style={styles.billText}>Item Total</Text>
            <Text style={styles.billText}>₹{total}</Text>
          </View>

          <View style={globalStyles.rowBetween}>
            <Text style={styles.billText}>Delivery Fee</Text>
            <Text style={styles.billText}>₹30</Text>
          </View>

          <View style={styles.divider} />

          <View style={globalStyles.rowBetween}>
            <Text style={styles.totalText}>Total</Text>
            <Text style={styles.totalText}>₹{total + 30}</Text>
          </View>
        </View>

        <CustomButton
          title="Place Order"
          onPress={handlePlaceOrder}
          style={styles.button}
        />

        <CustomButton
          title="Continue Shopping"
          variant="ghost"
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        />
      </View>
    </View>
  );
};

export default CartScreen;

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
  },
  list: {
    marginTop: 24,
  },
  cartItem: {
    padding: 16,
    marginBottom: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  itemName: {
    ...TYPOGRAPHY.body,
    color: COLORS.text,
    fontWeight: "800",
  },
  itemPrice: {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.textLight,
    marginTop: 4,
  },
  quantityBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.inputBg,
    borderRadius: 12,
    padding: 4,
  },
  qtyButton: {
    width: 28,
    height: 28,
    borderRadius: 9,
    backgroundColor: COLORS.surface,
    alignItems: "center",
    justifyContent: "center",
  },
  quantity: {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.text,
    fontWeight: "800",
    marginHorizontal: 12,
  },
  billCard: {
    padding: 18,
    marginTop: 12,
  },
  billText: {
    ...TYPOGRAPHY.body,
    color: COLORS.textLight,
    marginBottom: 12,
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.border,
    marginVertical: 8,
  },
  totalText: {
    ...TYPOGRAPHY.h3,
    color: COLORS.text,
  },
  button: {
    marginTop: 22,
  },
  backButton: {
    marginTop: 8,
  },
});