import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./stack/HomeScreen";
import SearchRecipient from "./stack/SearchRecipient";

const DashboardStacks = () => {
  const DashboardStack = createNativeStackNavigator();

  return (
    <DashboardStack.Navigator
      screenOptions={{ headerShown: false, animation: "slide_from_right" }}
    >
      <DashboardStack.Screen name="LocationScreen" component={HomeScreen} />
      <DashboardStack.Screen
        name="SearchRecipient"
        component={SearchRecipient}
      />
    </DashboardStack.Navigator>
  );
};

export default DashboardStacks;
