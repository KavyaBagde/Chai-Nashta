import React, { useState } from "react";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constants/colors";
import { categories, restaurants } from "../../constants/data";
import { TYPOGRAPHY } from "../../styles/typography";
import { globalStyles } from "../../styles/globalStyles";
import CategoryCard from "../../components/CategoryCard";
import RestaurantCard from "../../components/RestaurantCard";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RestaurantStackParamList } from "../../types/navigation";
import { ROUTES } from "../../constants/routes";

type SearchNavigationProp = NativeStackNavigationProp<RestaurantStackParamList>;

const SearchScreen = () => {
  const [searchText, setSearchText] = useState("");
  const navigation = useNavigation<SearchNavigationProp>();

  const filteredRestaurants = restaurants.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(searchText.toLowerCase()),
  );

  return (
    <View style={globalStyles.screen}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <Text style={styles.title}>Search</Text>
        <Text style={styles.subtitle}>
          Find restaurants and dishes near you.
        </Text>

        <View style={styles.searchBox}>
          <Ionicons name="search" size={20} color={COLORS.textMuted} />
          <TextInput
            value={searchText}
            onChangeText={setSearchText}
            placeholder="Search pizza, burger, biryani..."
            placeholderTextColor={COLORS.textMuted}
            style={styles.searchInput}
          />
        </View>

        <Text style={styles.sectionTitle}>Popular Categories</Text>

        <FlatList
          data={categories}
          horizontal
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <CategoryCard
              name={item.name}
              icon={item.icon as keyof typeof Ionicons.glyphMap}
            />
          )}
          style={styles.categoryList}
        />

        <Text style={styles.sectionTitle}>Results</Text>

        {filteredRestaurants.length > 0 ? (
          filteredRestaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              name={restaurant.name}
              image={restaurant.image}
              rating={restaurant.rating}
              time={restaurant.time}
              price={restaurant.price}
              cuisine={restaurant.cuisine}
              onPress={() =>
                navigation.navigate(ROUTES.RESTAURANT_DETAIL, {
                  restaurantId: restaurant.id,
                  restaurantName: restaurant.name,
                  price: restaurant.price,
                })
              }
            />
          ))
        ) : (
          <View style={styles.emptyBox}>
            <Ionicons
              name="search-outline"
              size={42}
              color={COLORS.textMuted}
            />
            <Text style={styles.emptyTitle}>No restaurants found</Text>
            <Text style={styles.emptyText}>
              Try searching another food item.
            </Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 54,
    paddingBottom: 28,
  },
  title: {
    ...TYPOGRAPHY.h2,
    color: COLORS.text,
  },
  subtitle: {
    ...TYPOGRAPHY.body,
    color: COLORS.textLight,
    marginTop: 6,
  },
  searchBox: {
    height: 54,
    borderRadius: 16,
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.border,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    marginTop: 24,
    marginBottom: 24,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    color: COLORS.text,
  },
  sectionTitle: {
    ...TYPOGRAPHY.h3,
    color: COLORS.text,
    marginBottom: 14,
  },
  categoryList: {
    marginBottom: 28,
  },
  emptyBox: {
    backgroundColor: COLORS.surface,
    borderRadius: 20,
    padding: 28,
    alignItems: "center",
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  emptyTitle: {
    ...TYPOGRAPHY.body,
    color: COLORS.text,
    fontWeight: "800",
    marginTop: 12,
  },
  emptyText: {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.textLight,
    marginTop: 4,
  },
});
