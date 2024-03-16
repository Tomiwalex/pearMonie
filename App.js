import { StatusBar } from "expo-status-bar";
import { useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import MainScreen from "./src/screens/MainScreen";

export default function App() {
  // Ensuring the fonts are loaded before loading the app
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  // importing the font family
  const [fontsLoaded] = useFonts({
    "HelveticaNeueCyr-Bold": require("./assets/fonts/HelveticaNeueCyr Bold.ttf"),
    "HelveticaNeueCyr-Medium": require("./assets/fonts/HelveticaNeueCyr Medium.ttf"),
    "HelveticaNeueCyr-Light": require("./assets/fonts/HelveticaNeueCyr Light.ttf"),
    "HelveticaNeueCyr-Thin": require("./assets/fonts/HelveticaNeueCyr Thin.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View className="flex-1">
      <MainScreen />
    </View>
  );
}
