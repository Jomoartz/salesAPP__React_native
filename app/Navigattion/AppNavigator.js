import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Screen from "../components/Screen";
import ListingEditScreen from "../screens/ListingEditScreen";
import ListingsScreen from "../screens/ListingsScreen";
import AccountScreen from "../screens/AccountScreen";
import FeedNavigation from "./FeedNavigation";
import AccountNavigator from "./AccountNavigator";

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Feed"
          screenOptions={{ headerShown: false }}
        >
          <Tab.Screen name="Feed" component={FeedNavigation} />
          <Tab.Screen name="List" component={ListingEditScreen} />
          <Tab.Screen name="Account" component={AccountNavigator} />
        </Tab.Navigator>
      </NavigationContainer>
  );
}
