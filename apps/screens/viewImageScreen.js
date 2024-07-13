import React from "react";
import { View, Image, StyleSheet, Dimensions, StatusBar } from "react-native";
import Icons from "../../components/icons";

export default function ViewImageScreen() {
  return (
    <>
        <View style={styles.container}>
        <View style={styles.childOneContainer}>
          <View style={styles.closeBox}><Icons name='close'   size= "50" /></View>
          <View style={styles.deleteBox}><Icons name='delete' size= "50" /></View>
        </View>
        <Image
          source={require("../assets/chair.jpg")}
          style={styles.image}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    flexDirection: "column",
  },
  childOneContainer: {
    flex:1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  closeBox: {
    width: 30,
    height: 30,
    marginLeft: 20,
  },
  deleteBox: {
    width: 30,
    height: 30,
    marginRight: 20,
  },
  image: {
    height: Dimensions.get("window").height * 0.8,
    width: '100%',
    resizeMode: "contain",
    alignItems: "center",
  }
});
