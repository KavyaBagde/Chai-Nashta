import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { COLORS } from "../../constants/colors";
import { TYPOGRAPHY } from "../../styles/typography";
import { globalStyles } from "../../styles/globalStyles";
import CustomButton from "../../components/CustomButton";

const PersonalInfoScreen = () => {
  return (
    <View style={globalStyles.screen}>
      <View style={styles.container}>
        <Text style={styles.title}>Personal Information</Text>
        <Text style={styles.subtitle}>Manage your basic profile details.</Text>

        <View style={styles.avatar}>
          <Text style={styles.avatarText}>K</Text>
        </View>

        <Text style={styles.label}>Full Name</Text>
        <TextInput value="Kavya Bagde" style={styles.input} />

        <Text style={styles.label}>Email</Text>
        <TextInput value="kavyabagde0606@gmail.com" style={styles.input} />

        <Text style={styles.label}>Phone Number</Text>
        <TextInput value="+91 9876543210" style={styles.input} />

        <CustomButton title="Save Changes" style={styles.button} />
      </View>
    </View>
  );
};

export default PersonalInfoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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
    marginBottom: 24,
  },
  avatar: {
    width: 94,
    height: 94,
    borderRadius: 47,
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: 28,
  },
  avatarText: {
    color: COLORS.surface,
    fontSize: 32,
    fontWeight: "900",
  },
  label: {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.text,
    fontWeight: "800",
    marginBottom: 8,
  },
  input: {
    height: 52,
    borderRadius: 14,
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.border,
    paddingHorizontal: 14,
    marginBottom: 16,
    color: COLORS.text,
  },
  button: {
    marginTop: 12,
  },
});