import React, { useMemo, useState } from "react";
import {
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
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

type Props = NativeStackScreenProps<RestaurantStackParamList, "Home">;

const HomeScreen = ({ navigation }: Props) => {
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<
    FoodCategory | undefined
  >();

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

  const visibleRestaurants = filteredRestaurants.slice(0, 4);

  return (
    <View style={globalStyles.screen}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.header}>
          <View>
            <Text style={styles.location}>📍 Pune, Maharashtra</Text>
            <Text style={styles.greeting}>Good Morning 👋</Text>
            <Text style={styles.title}>What would you like to eat?</Text>
          </View>

          <View style={styles.avatar}>
            <Text style={styles.avatarText}>K</Text>
          </View>
        </View>

        <View style={styles.searchBox}>
          <Ionicons name="search" size={20} color={COLORS.textMuted} />
          <TextInput
            value={searchText}
            onChangeText={setSearchText}
            placeholder="Search food or restaurant"
            placeholderTextColor={COLORS.textMuted}
            style={styles.searchInput}
          />
        </View>

        <View style={globalStyles.rowBetween}>
          <Text style={styles.sectionTitle}>Categories</Text>

          {selectedCategory && (
            <Pressable onPress={() => setSelectedCategory(undefined)}>
              <Text style={styles.clearText}>Clear</Text>
            </Pressable>
          )}
        </View>

        <FlatList
          data={categories}
          horizontal
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <CategoryCard
              name={item.name}
              icon={item.icon as keyof typeof Ionicons.glyphMap}
              onPress={() => setSelectedCategory(item.name as FoodCategory)}
            />
          )}
          style={styles.categoryList}
        />

        <View style={globalStyles.rowBetween}>
          <Text style={styles.sectionTitle}>
            {selectedCategory ? `${selectedCategory} Restaurants` : "Popular Restaurants"}
          </Text>

          <Pressable
            onPress={() =>
              navigation.navigate(ROUTES.ALL_RESTAURANTS, {
                selectedCategory,
              })
            }
          >
            <Text style={styles.seeAll}>See all</Text>
          </Pressable>
        </View>

        <View style={styles.restaurantList}>
          {visibleRestaurants.map((restaurant) => (
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

          {visibleRestaurants.length === 0 && (
            <View style={styles.emptyBox}>
              <Ionicons
                name="storefront-outline"
                size={42}
                color={COLORS.textMuted}
              />
              <Text style={styles.emptyTitle}>No restaurants found</Text>
              <Text style={styles.emptyText}>
                Try another search or category.
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 54,
    paddingBottom: 28,
  },
  header: {
    ...globalStyles.rowBetween,
    marginBottom: 24,
  },
  location: {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.primary,
    fontWeight: "800",
    marginBottom: 8,
  },
  greeting: {
    ...TYPOGRAPHY.body,
    color: COLORS.textLight,
  },
  title: {
    ...TYPOGRAPHY.h2,
    color: COLORS.text,
    marginTop: 4,
    maxWidth: 260,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  avatarText: {
    color: COLORS.surface,
    fontWeight: "900",
    fontSize: 18,
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
  clearText: {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.primary,
    fontWeight: "800",
    marginBottom: 14,
  },
  categoryList: {
    marginBottom: 28,
  },
  seeAll: {
    ...TYPOGRAPHY.bodySmall,
    color: COLORS.primary,
    fontWeight: "800",
    marginBottom: 14,
  },
  restaurantList: {
    marginTop: 2,
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