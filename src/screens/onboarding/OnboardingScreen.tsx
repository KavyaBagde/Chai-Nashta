import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { COLORS } from "../../constants/colors";
import { TYPOGRAPHY } from "../../styles/typography";
import { globalStyles } from "../../styles/globalStyles";
import CustomButton from "../../components/CustomButton";
import { useAuth } from "../../context/AuthContext";
import { ROUTES } from "../../constants/routes";
import { useNavigation } from "@react-navigation/native";

const OnboardingScreen = () => {
  const { finishOnboarding } = useAuth();
  const navigation = useNavigation<any>();

  const handleGetStarted = async () => {
    await finishOnboarding();

    navigation.reset({
      index: 0,
      routes: [{ name: ROUTES.LOGIN }],
    });
  };

  return (
    <View style={globalStyles.screen}>
      <View style={styles.container}>
        <View style={styles.imageWrapper}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=900",
            }}
            style={styles.image}
          />
        </View>

        <View style={styles.content}>
          <Text style={styles.badge}>Fast • Fresh • Delicious</Text>

          <Text style={styles.title}>Fresh Food Delivered Fast</Text>

          <Text style={styles.subtitle}>
            Order meals from your favorite restaurants and track everything from
            one simple app.
          </Text>

          <CustomButton
            title="Get Started"
            onPress={handleGetStarted}
            style={styles.button}
          />
        </View>
      </View>
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 22,
    justifyContent: "space-between",
  },
  imageWrapper: {
    flex: 1,
    borderRadius: 32,
    overflow: "hidden",
    marginTop: 34,
    backgroundColor: COLORS.border,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  content: {
    paddingTop: 28,
    paddingBottom: 28,
  },
  badge: {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.primary,
    fontWeight: "800",
    marginBottom: 12,
  },
  title: {
    ...TYPOGRAPHY.h1,
    color: COLORS.text,
  },
  subtitle: {
    ...TYPOGRAPHY.body,
    color: COLORS.textLight,
    marginTop: 12,
  },
  button: {
    marginTop: 28,
  },
});
