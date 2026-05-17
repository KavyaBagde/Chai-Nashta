import { NavigatorScreenParams } from "@react-navigation/native";

export type RestaurantStackParamList = {
  Home: undefined;
  RestaurantDetail: {
    restaurantId: string;
    restaurantName: string;
    price: number;
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
};

export type AuthStackParamList = {
  Login: undefined;
  Onboarding: undefined;
};
