import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../constants/colors";
import { TYPOGRAPHY } from "../styles/typography";

type CategoryCardProps = {
  name: string;
  icon: keyof typeof Ionicons.glyphMap;
  onPress?: () => void;
};

const CategoryCard = ({ name, icon, onPress }: CategoryCardProps) => {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <Ionicons name={icon} size={26} color={COLORS.primary} />
      <Text style={styles.name}>{name}</Text>
    </Pressable>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  card: {
    width: 78,
    height: 82,
    borderRadius: 18,
    backgroundColor: "#FFE8DD",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },
  name: {
    ...TYPOGRAPHY.bodySmall,
    marginTop: 8,
    color: COLORS.text,
    fontWeight: "700",
  },
});