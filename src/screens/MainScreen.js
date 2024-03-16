import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnboardingScreen from "./onboarding/OnboardingScreen";
import SignInScreen from "./auth/SignInScreen";
import SignUpScreen from "./auth/SignUpScreen";
import DashboardStacks from "./dashboard";

const Stack = createNativeStackNavigator();

const MainScreen = () => {
  return (
    <View style={{ flex: 1, position: "relative" }} className="bg-red-400">
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="Onboarding"
            options={{
              statusBarTranslucent: true,
              animation: "fade",
              statusBarStyle: "light",
              statusBarColor: "transparent",
            }}
            component={OnboardingScreen}
          />
          <Stack.Screen
            name="SignIn"
            options={{
              animation: "ios",
              statusBarColor: "transparent",
              statusBarTranslucent: true,
            }}
            component={SignInScreen}
          />
          <Stack.Screen
            name="SignUp"
            options={{
              animation: "ios",
              statusBarColor: "transparent",
              statusBarTranslucent: true,
            }}
            component={SignUpScreen}
          />
          <Stack.Screen
            name="Dashboard"
            options={{
              animation: "ios",
              statusBarColor: "transparent",
              statusBarTranslucent: true,
            }}
            component={DashboardStacks}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default MainScreen;
