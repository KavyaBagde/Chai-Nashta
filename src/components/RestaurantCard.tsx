import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../constants/colors";
import { TYPOGRAPHY } from "../styles/typography";
import { globalStyles } from "../styles/globalStyles";

type RestaurantCardProps = {
  name: string;
  image: string;
  rating: number;
  time: string;
  price: number;
  cuisine?: string;
  onPress?: () => void;
};

const RestaurantCard = ({
  name,
  image,
  rating,
  time,
  price,
  cuisine,
  onPress,
}: RestaurantCardProps) => {
  return (
    <Pressable style={[globalStyles.card, styles.card]} onPress={onPress}>
      <Image source={{ uri: image }} style={styles.image} />

      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>

        <View style={styles.metaRow}>
          <Ionicons name="star" size={14} color={COLORS.warning} />
          <Text style={styles.metaText}>{rating}</Text>
          <Text style={styles.dot}>•</Text>
          <Text style={styles.metaText}>{time}</Text>
        </View>

        <Text style={styles.price}>Starting ₹{price}</Text>

        {cuisine ? <Text style={styles.cuisine}>{cuisine}</Text> : null}
      </View>
    </Pressable>
  );
};

export default RestaurantCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    padding: 10,
    marginBottom: 14,
  },
  image: {
    width: 92,
    height: 82,
    borderRadius: 14,
    backgroundColor: COLORS.border,
  },
  info: {
    flex: 1,
    marginLeft: 12,
    justifyContent: "center",
  },
  name: {
    ...TYPOGRAPHY.body,
    fontWeight: "800",
    color: COLORS.text,
  },
  metaRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
  },
  metaText: {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.textLight,
    marginLeft: 4,
  },
  dot: {
    color: COLORS.textMuted,
    marginHorizontal: 6,
  },
  price: {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.text,
    marginTop: 6,
    fontWeight: "700",
  },
  cuisine: {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.primary,
    marginTop: 2,
  },
});