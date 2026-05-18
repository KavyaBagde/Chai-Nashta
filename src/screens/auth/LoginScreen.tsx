import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants/colors";
import { TYPOGRAPHY } from "../../styles/typography";
import { globalStyles } from "../../styles/globalStyles";
import CustomButton from "../../components/CustomButton";
import { useAuth } from "../../context/AuthContext";

const LoginScreen = () => {
  const [email, setEmail] = useState("demo@foodapp.com");
  const [password, setPassword] = useState("123456");
  const { login } = useAuth();

  const handleLogin = async () => {
  await login();
};

  return (
    <KeyboardAvoidingView
      style={globalStyles.screen}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.container}>
        <View style={styles.logoWrapper}>
          <View style={styles.logoCircle}>
            <Ionicons name="fast-food" size={42} color={COLORS.surface} />
          </View>
          <Text style={styles.appName}>Chai Nashta</Text>
          <Text style={styles.subtitle}>
            Login to order your favorite meals faster.
          </Text>
        </View>

        <View style={[globalStyles.card, styles.formCard]}>
          <Text style={styles.label}>Email Address</Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="Enter email"
            keyboardType="email-address"
            autoCapitalize="none"
            style={styles.input}
            placeholderTextColor={COLORS.textMuted}
          />

          <Text style={styles.label}>Password</Text>
          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="Enter password"
            secureTextEntry
            style={styles.input}
            placeholderTextColor={COLORS.textMuted}
          />

          <CustomButton title="Login" onPress={handleLogin} style={styles.btn} />

          <Pressable onPress={handleLogin}>
            <Text style={styles.demoText}>Continue as demo user</Text>
          </Pressable>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 22,
    justifyContent: "center",
  },
  logoWrapper: {
    alignItems: "center",
    marginBottom: 34,
  },
  logoCircle: {
    width: 88,
    height: 88,
    borderRadius: 44,
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 18,
  },
  appName: {
    ...TYPOGRAPHY.h1,
    color: COLORS.text,
  },
  subtitle: {
    ...TYPOGRAPHY.body,
    color: COLORS.textLight,
    textAlign: "center",
    marginTop: 8,
    width: "80%",
  },
  formCard: {
    padding: 20,
  },
  label: {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.text,
    fontWeight: "700",
    marginBottom: 8,
  },
  input: {
    height: 52,
    borderRadius: 14,
    backgroundColor: COLORS.inputBg,
    borderWidth: 1,
    borderColor: COLORS.border,
    paddingHorizontal: 14,
    marginBottom: 16,
    color: COLORS.text,
  },
  btn: {
    marginTop: 6,
  },
  demoText: {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.primary,
    fontWeight: "800",
    textAlign: "center",
    marginTop: 16,
  },
});