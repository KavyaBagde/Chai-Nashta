import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants/colors";
import { TYPOGRAPHY } from "../../styles/typography";
import { globalStyles } from "../../styles/globalStyles";
import CustomButton from "../../components/CustomButton";

const AddressesScreen = () => {
  const addresses = [
    {
      id: "1",
      type: "Home",
      address: "CIDCO, Aurangabad, Maharashtra",
    },
    {
      id: "2",
      type: "College",
      address: "Engineering College Campus, Maharashtra",
    },
  ];

  return (
    <View style={globalStyles.screen}>
      <View style={styles.container}>
        <Text style={styles.title}>Addresses</Text>
        <Text style={styles.subtitle}>Manage your delivery locations.</Text>

        {addresses.map((item) => (
          <Pressable key={item.id} style={[globalStyles.card, styles.card]}>
            <View style={styles.iconBox}>
              <Ionicons name="location-outline" size={22} color={COLORS.primary} />
            </View>

            <View style={styles.info}>
              <Text style={styles.type}>{item.type}</Text>
              <Text style={styles.address}>{item.address}</Text>
            </View>

            <Ionicons name="create-outline" size={20} color={COLORS.textMuted} />
          </Pressable>
        ))}

        <CustomButton title="Add New Address" style={styles.button} />
      </View>
    </View>
  );
};

export default AddressesScreen;

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
  card: {
    padding: 16,
    marginBottom: 14,
    flexDirection: "row",
    alignItems: "center",
  },
  iconBox: {
    width: 46,
    height: 46,
    borderRadius: 15,
    backgroundColor: "#FFE8DD",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  type: {
    ...TYPOGRAPHY.body,
    color: COLORS.text,
    fontWeight: "900",
  },
  address: {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.textLight,
    marginTop: 4,
  },
  button: {
    marginTop: 16,
  },
});