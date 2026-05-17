import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "expo-status-bar";
import RootNavigator from "./src/navigation/RootNavigator";

const App = () => {
  return (
    <>
      <StatusBar style="dark" />
      <RootNavigator />
    </>
  );
};

export default App;