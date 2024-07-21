import React from "react";
import { SafeAreaView, StatusBar, Platform, StyleSheet } from "react-native";

function Screen({ children }) {
  const paddingTop = Platform.OS === "android" ? StatusBar.currentHeight : 0;
  console.log(paddingTop);

  return (
    <SafeAreaView style={[styles.screen, { paddingTop }]}>
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default Screen;
