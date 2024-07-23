import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListingDetailsScreen from "../screens/ListingDetailsScreen";
import ListingsScreen from "../screens/ListingsScreen";

const Stack = createNativeStackNavigator();

function FeedNavigation(props) {
  return (
      <Stack.Navigator initialRouteName="List" mode='modal' screenOptions={{headerShown:false}}>
        <Stack.Screen name="Listing" component={ListingsScreen} />
        <Stack.Screen name="Details" component={ListingDetailsScreen} />
      </Stack.Navigator>
  );
}

export default FeedNavigation;
