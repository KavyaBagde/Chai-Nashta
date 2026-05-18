import { NavigatorScreenParams } from "@react-navigation/native";

export type FoodCategory = "Pizza" | "Burger" | "Biryani" | "Dessert";

export type FoodItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  rating: number;
  category: FoodCategory;
  restaurantId: string;
};

export type Restaurant = {
  id: string;
  name: string;
  image: string;
  rating: number;
  time: string;
  price: number;
  cuisine: string;
  category: FoodCategory;
  address: string;
};

export type CartItem = FoodItem & {
  quantity: number;
  restaurantName: string;
};

export type Order = {
  id: string;
  restaurantName: string;
  items: CartItem[];
  totalAmount: number;
  status: "Preparing" | "Delivered" | "Cancelled";
  date: string;
};

export type RestaurantStackParamList = {
  Home: undefined;

  AllRestaurants: {
    selectedCategory?: FoodCategory;
  };

  RestaurantDetail: {
    restaurantId: string;
    restaurantName: string;
    price: number;
  };

  ItemDetail: {
    itemId: string;
  };

  Cart: undefined;
};

export type TabParamList = {
  HomeStack: NavigatorScreenParams<RestaurantStackParamList>;
  Search: undefined;
  Orders: undefined;
  Profile: undefined;
};

export type DrawerParamList = {
  MainTabs: NavigatorScreenParams<TabParamList>;
  MyOrders: undefined;
  Settings: undefined;
  Help: undefined;
  PersonalInfo: undefined;
  Addresses: undefined;
  PaymentMethods: undefined;
};

export type AuthStackParamList = {
  Login: undefined;
  Onboarding: undefined;
};
