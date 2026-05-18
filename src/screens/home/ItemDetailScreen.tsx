import React, { useMemo, useState } from "react";
import {
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { COLORS } from "../../constants/colors";
import { ROUTES } from "../../constants/routes";
import { foodItems, restaurants } from "../../constants/data";
import { RestaurantStackParamList } from "../../types/navigation";
import { TYPOGRAPHY } from "../../styles/typography";
import { globalStyles } from "../../styles/globalStyles";
import { useCart } from "../../context/CartContext";

import CustomButton from "../../components/CustomButton";

type Props = NativeStackScreenProps<RestaurantStackParamList, "ItemDetail">;

const ItemDetailScreen = ({ route, navigation }: Props) => {
  const { itemId } = route.params;
  const { addToCart, cartCount } = useCart();
  const [quantity, setQuantity] = useState(1);

  const item = useMemo(() => {
    return foodItems.find((food) => food.id === itemId);
  }, [itemId]);

  const restaurant = restaurants.find((res) => res.id === item?.restaurantId);

  if (!item) {
    return (
      <View style={[globalStyles.screen, styles.centerBox]}>
        <Text style={styles.notFoundTitle}>Item not found</Text>
        <CustomButton title="Go Back" onPress={() => navigation.goBack()} />
      </View>
    );
  }

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => Math.max(prev - 1, 1));
  };

  const handleAddToCart = () => {
    addToCart(item, quantity);
  };

  return (
    <View style={globalStyles.screen}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <ImageBackground source={{ uri: item.image }} style={styles.heroImage}>
          <View style={styles.overlay}>
            <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back" size={22} color={COLORS.surface} />
            </Pressable>

            <View style={styles.categoryBadge}>
              <Text style={styles.categoryText}>{item.category}</Text>
            </View>
          </View>
        </ImageBackground>

        <View style={styles.content}>
          <View style={globalStyles.rowBetween}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.price}>₹{item.price}</Text>
          </View>

          <View style={styles.metaRow}>
            <Ionicons name="star" size={16} color={COLORS.warning} />
            <Text style={styles.metaText}>{item.rating}</Text>
            <Text style={styles.dot}>•</Text>
            <Text style={styles.metaText}>{restaurant?.time}</Text>
            <Text style={styles.dot}>•</Text>
            <Text style={styles.metaText}>{restaurant?.name}</Text>
          </View>

          <Text style={styles.sectionTitle}>Description</Text>
          <Text style={styles.description}>{item.description}</Text>

          <View style={[globalStyles.card, styles.hotelCard]}>
            <View style={styles.hotelIcon}>
              <Ionicons name="storefront-outline" size={22} color={COLORS.primary} />
            </View>

            <View style={styles.hotelInfo}>
              <Text style={styles.hotelName}>{restaurant?.name}</Text>
              <Text style={styles.hotelAddress}>{restaurant?.address}</Text>
            </View>
          </View>

          <Text style={styles.sectionTitle}>Quantity</Text>

          <View style={styles.quantityBox}>
            <Pressable style={styles.qtyButton} onPress={decreaseQuantity}>
              <Ionicons name="remove" size={18} color={COLORS.text} />
            </Pressable>

            <Text style={styles.quantity}>{quantity}</Text>

            <Pressable style={styles.qtyButton} onPress={increaseQuantity}>
              <Ionicons name="add" size={18} color={COLORS.text} />
            </Pressable>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <CustomButton
          title={`Add to Cart • ₹${item.price * quantity}`}
          onPress={handleAddToCart}
        />

        <CustomButton
          title={cartCount > 0 ? `Go to Cart (${cartCount})` : "Go to Cart"}
          variant="outline"
          onPress={() => navigation.navigate(ROUTES.CART)}
          style={styles.cartButton}
        />
      </View>
    </View>
  );
};

export default ItemDetailScreen;

const styles = StyleSheet.create({
  scrollContent: {
    paddingBottom: 150,
  },
  heroImage: {
    width: "100%",
    height: 330,
    backgroundColor: COLORS.border,
  },
  overlay: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    justifyContent: "space-between",
    paddingBottom: 20,
    backgroundColor: "rgba(0,0,0,0.25)",
  },
  backButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "rgba(0,0,0,0.35)",
    alignItems: "center",
    justifyContent: "center",
  },
  categoryBadge: {
    alignSelf: "flex-start",
    backgroundColor: COLORS.primary,
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  categoryText: {
    color: COLORS.surface,
    fontWeight: "900",
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 24,
  },
  itemName: {
    ...TYPOGRAPHY.h2,
    color: COLORS.text,
    flex: 1,
    marginRight: 12,
  },
  price: {
    ...TYPOGRAPHY.h3,
    color: COLORS.primary,
  },
  metaRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
    flexWrap: "wrap",
  },
  metaText: {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.textLight,
    marginLeft: 4,
  },
  dot: {
    color: COLORS.textMuted,
    marginHorizontal: 7,
  },
  sectionTitle: {
    ...TYPOGRAPHY.h3,
    color: COLORS.text,
    marginTop: 26,
    marginBottom: 10,
  },
  description: {
    ...TYPOGRAPHY.body,
    color: COLORS.textLight,
  },
  hotelCard: {
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 22,
  },
  hotelIcon: {
    width: 46,
    height: 46,
    borderRadius: 15,
    backgroundColor: "#FFE8DD",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  hotelInfo: {
    flex: 1,
  },
  hotelName: {
    ...TYPOGRAPHY.body,
    color: COLORS.text,
    fontWeight: "900",
  },
  hotelAddress: {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.textLight,
    marginTop: 3,
  },
  quantityBox: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    backgroundColor: COLORS.surface,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
    padding: 6,
    marginBottom: 40,
  },
  qtyButton: {
    width: 38,
    height: 38,
    borderRadius: 13,
    backgroundColor: COLORS.inputBg,
    alignItems: "center",
    justifyContent: "center",
  },
  quantity: {
    ...TYPOGRAPHY.h3,
    color: COLORS.text,
    marginHorizontal: 22,
  },
  footer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    padding: 20,
    backgroundColor: COLORS.background,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
  },
  cartButton: {
    marginTop: 12,
  },
  centerBox: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  notFoundTitle: {
    ...TYPOGRAPHY.h3,
    color: COLORS.text,
    marginBottom: 20,
  },
});