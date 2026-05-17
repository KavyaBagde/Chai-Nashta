import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { COLORS } from "../constants/colors";
import { TYPOGRAPHY } from "../styles/typography";
import { globalStyles } from "../styles/globalStyles";

type MenuItemCardProps = {
  name: string;
  description: string;
  price: number;
  image: string;
  onAdd?: () => void;
};

const MenuItemCard = ({
  name,
  description,
  price,
  image,
  onAdd,
}: MenuItemCardProps) => {
  return (
    <View style={[globalStyles.card, styles.card]}>
      <Image source={{ uri: image }} style={styles.image} />

      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {description}
        </Text>
        <Text style={styles.price}>₹{price}</Text>
      </View>

      <Pressable style={styles.addButton} onPress={onAdd}>
        <Text style={styles.addText}>Add</Text>
      </Pressable>
    </View>
  );
};

export default MenuItemCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    padding: 10,
    marginBottom: 14,
    alignItems: "center",
  },
  image: {
    width: 72,
    height: 72,
    borderRadius: 14,
    backgroundColor: COLORS.border,
  },
  content: {
    flex: 1,
    marginLeft: 12,
  },
  name: {
    ...TYPOGRAPHY.body,
    color: COLORS.text,
    fontWeight: "800",
  },
  description: {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.textLight,
    marginTop: 4,
  },
  price: {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.text,
    fontWeight: "800",
    marginTop: 6,
  },
  addButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  addText: {
    color: COLORS.surface,
    fontWeight: "800",
    fontSize: 12,
  },
});