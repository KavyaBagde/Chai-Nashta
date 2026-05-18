import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { COLORS } from "../constants/colors";
import { restaurants } from "../constants/data";
import { FoodItem } from "../types/navigation";
import { TYPOGRAPHY } from "../styles/typography";
import { globalStyles } from "../styles/globalStyles";

type FoodItemCardProps = {
  item: FoodItem;
  onPress?: () => void;
};

const FoodItemCard = ({ item, onPress }: FoodItemCardProps) => {
  const restaurant = restaurants.find((res) => res.id === item.restaurantId);

  return (
    <Pressable style={[globalStyles.card, styles.card]} onPress={onPress}>
      <Image source={{ uri: item.image }} style={styles.image} />

      <View style={styles.content}>
        <View style={styles.topRow}>
          <Text style={styles.name} numberOfLines={1}>
            {item.name}
          </Text>

          <Text style={styles.price}>₹{item.price}</Text>
        </View>

        <Text style={styles.description} numberOfLines={2}>
          {item.description}
        </Text>

        <View style={styles.metaRow}>
          <Ionicons name="star" size={14} color={COLORS.warning} />
          <Text style={styles.metaText}>{item.rating}</Text>

          <Text style={styles.dot}>•</Text>

          <Text style={styles.metaText}>{restaurant?.name}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default FoodItemCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    padding: 10,
    marginBottom: 14,
  },
  image: {
    width: 86,
    height: 86,
    borderRadius: 16,
    backgroundColor: COLORS.border,
  },
  content: {
    flex: 1,
    marginLeft: 12,
    justifyContent: "center",
  },
  topRow: {
    ...globalStyles.rowBetween,
    alignItems: "flex-start",
  },
  name: {
    ...TYPOGRAPHY.body,
    color: COLORS.text,
    fontWeight: "900",
    flex: 1,
    marginRight: 10,
  },
  price: {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.primary,
    fontWeight: "900",
  },
  description: {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.textLight,
    marginTop: 5,
  },
  metaRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
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
});