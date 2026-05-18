import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { COLORS } from "../../constants/colors";
import { ROUTES } from "../../constants/routes";
import { foodItems, restaurants } from "../../constants/data";
import { RestaurantStackParamList } from "../../types/navigation";
import { TYPOGRAPHY } from "../../styles/typography";
import { globalStyles } from "../../styles/globalStyles";
import { useCart } from "../../context/CartContext";

import MenuItemCard from "../../components/MenuItemCard";
import CustomButton from "../../components/CustomButton";

type Props = NativeStackScreenProps<
  RestaurantStackParamList,
  "RestaurantDetail"
>;

const RestaurantDetailScreen = ({ route, navigation }: Props) => {
  // const { restaurantId, restaurantName, price } = route.params;
  const { restaurantId } = route.params;
  const { addToCart, cartCount } = useCart();

  const restaurant =
    restaurants.find((item) => item.id === restaurantId) || restaurants[0];

  const restaurantMenu = foodItems.filter(
    (item) => item.restaurantId === restaurantId
  );

  return (
    <View style={globalStyles.screen}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <Image source={{ uri: restaurant.image }} style={styles.banner} />

        <View style={styles.content}>
          <Text style={styles.restaurantName}>{restaurant.name}</Text>

          <View style={styles.metaRow}>
            <Ionicons name="star" size={16} color={COLORS.warning} />
            <Text style={styles.metaText}>{restaurant.rating}</Text>
            <Text style={styles.dot}>•</Text>
            <Text style={styles.metaText}>{restaurant.time} delivery</Text>
            <Text style={styles.dot}>•</Text>
            <Text style={styles.metaText}>Starting ₹{restaurant.price}</Text>
          </View>

          <Text style={styles.address}>{restaurant.address}</Text>

          <View style={styles.offerCard}>
            <Ionicons name="pricetag" size={20} color={COLORS.primary} />
            <Text style={styles.offerText}>
              20% off on your first order from this restaurant.
            </Text>
          </View>

          <Text style={styles.sectionTitle}>Recommended Menu</Text>

          {restaurantMenu.map((item) => (
            <MenuItemCard
              key={item.id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
              onAdd={() => addToCart(item)}
            />
          ))}

          {restaurantMenu.length === 0 && (
            <View style={styles.emptyBox}>
              <Text style={styles.emptyText}>No menu items available.</Text>
            </View>
          )}
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <CustomButton
          title={cartCount > 0 ? `Go to Cart (${cartCount})` : "Go to Cart"}
          onPress={() => navigation.navigate(ROUTES.CART)}
        />
      </View>
    </View>
  );
};

export default RestaurantDetailScreen;

const styles = StyleSheet.create({
  scrollContent: {
    paddingBottom: 110,
  },
  banner: {
    width: "100%",
    height: 250,
    backgroundColor: COLORS.border,
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 22,
  },
  restaurantName: {
    ...TYPOGRAPHY.h2,
    color: COLORS.text,
  },
  metaRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
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
  address: {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.textLight,
    marginTop: 8,
  },
  offerCard: {
    marginTop: 22,
    marginBottom: 24,
    padding: 16,
    borderRadius: 18,
    backgroundColor: "#FFE8DD",
    flexDirection: "row",
    alignItems: "center",
  },
  offerText: {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.text,
    fontWeight: "700",
    marginLeft: 10,
    flex: 1,
  },
  sectionTitle: {
    ...TYPOGRAPHY.h3,
    color: COLORS.text,
    marginBottom: 14,
  },
  emptyBox: {
    padding: 20,
    backgroundColor: COLORS.surface,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  emptyText: {
    ...TYPOGRAPHY.body,
    color: COLORS.textLight,
    textAlign: "center",
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
});