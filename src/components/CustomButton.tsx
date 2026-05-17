import React from "react";
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  ViewStyle,
} from "react-native";
import { COLORS } from "../constants/colors";
import { TYPOGRAPHY } from "../styles/typography";

type CustomButtonProps = {
  title: string;
  onPress?: () => void;
  variant?: "primary" | "outline" | "ghost";
  loading?: boolean;
  disabled?: boolean;
  style?: ViewStyle;
};

const CustomButton = ({
  title,
  onPress,
  variant = "primary",
  loading = false,
  disabled = false,
  style,
}: CustomButtonProps) => {
  const isOutline = variant === "outline";
  const isGhost = variant === "ghost";

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled || loading}
      style={({ pressed }) => [
        styles.button,
        isOutline && styles.outlineButton,
        isGhost && styles.ghostButton,
        (pressed || disabled) && styles.pressed,
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator color={isOutline ? COLORS.primary : COLORS.surface} />
      ) : (
        <Text
          style={[
            styles.buttonText,
            isOutline && styles.outlineText,
            isGhost && styles.ghostText,
          ]}
        >
          {title}
        </Text>
      )}
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    height: 54,
    borderRadius: 14,
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  outlineButton: {
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  ghostButton: {
    backgroundColor: "transparent",
    height: 42,
  },
  pressed: {
    opacity: 0.75,
  },
  buttonText: {
    ...TYPOGRAPHY.button,
    color: COLORS.surface,
  },
  outlineText: {
    color: COLORS.text,
  },
  ghostText: {
    color: COLORS.primary,
  },
});