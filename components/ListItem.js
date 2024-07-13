import React from "react";
import { View, Image, StyleSheet } from "react-native";
import AppText from "./myStyles/appText";

import Styles from "./config";
function ListItem() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../apps/assets/mosh.jpg")}
        style={styles.profilePicture}
      />
      <View style={styles.textContainer}>
        <AppText style={styles.textTitle}>Mosh Hamigigi</AppText>
        <AppText style={styles.textDescription}>Mosh Hamigigi</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: Styles.colors.ligthWhiteBg,
  },
  profilePicture: {
    borderRadius: 50,
    width: 80,
    height: 80,
    margin: 5,
  },
  textContainer: {
    padding: 10,
  },
  textTitle: {
    fontWeight: "bold",
  },
  textDescription: {
    fontWeight: 200,
    color: "grey",
  },
});
export default ListItem;
