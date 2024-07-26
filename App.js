import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Formik, Form, Field } from 'formik';

import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";


{}
export default function App() {
  return(
    <NavigationContainer theme={navigationTheme}>
    <AppNavigator />
    </NavigationContainer>
  );
}
