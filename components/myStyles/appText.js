import React from "react";
import { Text, Platform, StyleSheet } from "react-native";

function AppText({ children, style, ...props }) {
  return (
    <Text style={[styles.apptext, style]} {...props}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  apptext: {
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    fontSize: 16,
  },
});

export default AppText;
