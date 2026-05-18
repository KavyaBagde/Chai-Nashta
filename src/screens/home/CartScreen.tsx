import React from "react";
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { COLORS } from "../../constants/colors";
import { ROUTES } from "../../constants/routes";
import { TYPOGRAPHY } from "../../styles/typography";
import { globalStyles } from "../../styles/globalStyles";
import { RestaurantStackParamList } from "../../types/navigation";
import { useCart } from "../../context/CartContext";
import { useOrders } from "../../context/OrderContext";

import CustomButton from "../../components/CustomButton";

type Props = NativeStackScreenProps<RestaurantStackParamList, "Cart">;

const DELIVERY_FEE = 30;

const CartScreen = ({ navigation }: Props) => {
  const {
    cartItems,
    cartTotal,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  const { createOrder } = useOrders();

  const grandTotal = cartTotal + DELIVERY_FEE;

  const handlePlaceOrder = () => {
    if (cartItems.length === 0) return;

    createOrder(cartItems, grandTotal);
    clearCart();

    navigation.reset({
      index: 0,
      routes: [{ name: ROUTES.HOME }],
    });
  };

  return (
    <View style={globalStyles.screen}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <Text style={styles.title}>Your Cart</Text>
        <Text style={styles.subtitle}>Review your items before ordering.</Text>

        {cartItems.length === 0 ? (
          <View style={styles.emptyBox}>
            <Ionicons name="cart-outline" size={54} color={COLORS.textMuted} />
            <Text style={styles.emptyTitle}>Your cart is empty</Text>
            <Text style={styles.emptyText}>
              Add something delicious from restaurants.
            </Text>

            <CustomButton
              title="Browse Restaurants"
              onPress={() =>
                navigation.reset({
                  index: 0,
                  routes: [{ name: ROUTES.HOME }],
                })
              }
              style={styles.emptyButton}
            />
          </View>
        ) : (
          <>
            <View style={styles.list}>
              {cartItems.map((item) => (
                <View key={item.id} style={[globalStyles.card, styles.cartItem]}>
                  <Image source={{ uri: item.image }} style={styles.itemImage} />

                  <View style={styles.itemInfo}>
                    <Text style={styles.itemName} numberOfLines={1}>
                      {item.name}
                    </Text>

                    <Text style={styles.restaurantName} numberOfLines={1}>
                      {item.restaurantName}
                    </Text>

                    <Text style={styles.itemPrice}>₹{item.price}</Text>
                  </View>

                  <View style={styles.rightBox}>
                    <Pressable
                      style={styles.removeBtn}
                      onPress={() => removeFromCart(item.id)}
                    >
                      <Ionicons
                        name="trash-outline"
                        size={16}
                        color={COLORS.danger}
                      />
                    </Pressable>

                    <View style={styles.quantityBox}>
                      <Pressable
                        style={styles.qtyButton}
                        onPress={() => decreaseQuantity(item.id)}
                      >
                        <Ionicons name="remove" size={15} color={COLORS.text} />
                      </Pressable>

                      <Text style={styles.quantity}>{item.quantity}</Text>

                      <Pressable
                        style={styles.qtyButton}
                        onPress={() => increaseQuantity(item.id)}
                      >
                        <Ionicons name="add" size={15} color={COLORS.text} />
                      </Pressable>
                    </View>
                  </View>
                </View>
              ))}
            </View>

            <View style={[globalStyles.card, styles.billCard]}>
              <View style={globalStyles.rowBetween}>
                <Text style={styles.billText}>Item Total</Text>
                <Text style={styles.billText}>₹{cartTotal}</Text>
              </View>

              <View style={globalStyles.rowBetween}>
                <Text style={styles.billText}>Delivery Fee</Text>
                <Text style={styles.billText}>₹{DELIVERY_FEE}</Text>
              </View>

              <View style={styles.divider} />

              <View style={globalStyles.rowBetween}>
                <Text style={styles.totalText}>Total Amount</Text>
                <Text style={styles.totalText}>₹{grandTotal}</Text>
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
          </>
        )}
      </ScrollView>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 54,
    paddingBottom: 34,
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
    padding: 12,
    marginBottom: 14,
    flexDirection: "row",
    alignItems: "center",
  },
  itemImage: {
    width: 68,
    height: 68,
    borderRadius: 14,
    backgroundColor: COLORS.border,
  },
  itemInfo: {
    flex: 1,
    marginLeft: 12,
  },
  itemName: {
    ...TYPOGRAPHY.body,
    color: COLORS.text,
    fontWeight: "800",
  },
  restaurantName: {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.textLight,
    marginTop: 3,
  },
  itemPrice: {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.primary,
    fontWeight: "900",
    marginTop: 6,
  },
  rightBox: {
    alignItems: "flex-end",
    gap: 10,
  },
  removeBtn: {
    width: 30,
    height: 30,
    borderRadius: 10,
    backgroundColor: "#FEE2E2",
    alignItems: "center",
    justifyContent: "center",
  },
  quantityBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.inputBg,
    borderRadius: 12,
    padding: 4,
  },
  qtyButton: {
    width: 26,
    height: 26,
    borderRadius: 9,
    backgroundColor: COLORS.surface,
    alignItems: "center",
    justifyContent: "center",
  },
  quantity: {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.text,
    fontWeight: "900",
    marginHorizontal: 10,
  },
  billCard: {
    padding: 18,
    marginTop: 10,
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
  emptyBox: {
    marginTop: 50,
    backgroundColor: COLORS.surface,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: COLORS.border,
    alignItems: "center",
    padding: 30,
  },
  emptyTitle: {
    ...TYPOGRAPHY.h3,
    color: COLORS.text,
    marginTop: 14,
  },
  emptyText: {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.textLight,
    textAlign: "center",
    marginTop: 6,
  },
  emptyButton: {
    marginTop: 24,
    width: "100%",
  },
});