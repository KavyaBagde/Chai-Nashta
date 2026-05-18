import React, { useMemo, useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { COLORS } from "../../constants/colors";
import { ROUTES } from "../../constants/routes";
import { categories, restaurants } from "../../constants/data";
import { FoodCategory, RestaurantStackParamList } from "../../types/navigation";
import { TYPOGRAPHY } from "../../styles/typography";
import { globalStyles } from "../../styles/globalStyles";

import CategoryCard from "../../components/CategoryCard";
import RestaurantCard from "../../components/RestaurantCard";

type Props = NativeStackScreenProps<
  RestaurantStackParamList,
  "AllRestaurants"
>;

const AllRestaurantsScreen = ({ route, navigation }: Props) => {
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<
    FoodCategory | undefined
  >(route.params?.selectedCategory);

  const filteredRestaurants = useMemo(() => {
    return restaurants.filter((restaurant) => {
      const matchesSearch = restaurant.name
        .toLowerCase()
        .includes(searchText.toLowerCase());

      const matchesCategory = selectedCategory
        ? restaurant.category === selectedCategory
        : true;

      return matchesSearch && matchesCategory;
    });
  }, [searchText, selectedCategory]);

  return (
    <View style={globalStyles.screen}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <Text style={styles.title}>All Restaurants</Text>
        <Text style={styles.subtitle}>
          Explore restaurants by category and search.
        </Text>

        <View style={styles.searchBox}>
          <Ionicons name="search" size={20} color={COLORS.textMuted} />
          <TextInput
            value={searchText}
            onChangeText={setSearchText}
            placeholder="Search restaurants"
            placeholderTextColor={COLORS.textMuted}
            style={styles.searchInput}
          />
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categoryRow}
        >
          <CategoryCard
            name="All"
            icon="grid-outline"
            onPress={() => setSelectedCategory(undefined)}
          />

          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              name={category.name}
              icon={category.icon as keyof typeof Ionicons.glyphMap}
              onPress={() => setSelectedCategory(category.name as FoodCategory)}
            />
          ))}
        </ScrollView>

        <Text style={styles.sectionTitle}>
          {selectedCategory ? `${selectedCategory} Restaurants` : "Restaurants"}
        </Text>

        {filteredRestaurants.map((restaurant) => (
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
        ))}

        {filteredRestaurants.length === 0 && (
          <View style={styles.emptyBox}>
            <Ionicons name="storefront-outline" size={44} color={COLORS.textMuted} />
            <Text style={styles.emptyTitle}>No restaurants found</Text>
            <Text style={styles.emptyText}>Try another search or category.</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default AllRestaurantsScreen;

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
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    color: COLORS.text,
  },
  categoryRow: {
    marginBottom: 24,
  },
  sectionTitle: {
    ...TYPOGRAPHY.h3,
    color: COLORS.text,
    marginBottom: 14,
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