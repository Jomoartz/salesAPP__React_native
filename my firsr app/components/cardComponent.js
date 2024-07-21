import React from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";
import AppText from "./myStyles/appText";

import Styles from "./config";
//this component takes in image source: require(/path)
// title = '', subtitle = ''. props for text.

export default function CardComponent({ image, title, subtitle, appTextTitle, appTextSubtitle, ...props }) {
  const screen = Dimensions.get("window");

  return (
    <View style={styles.container}>
      <View style={styles.boxContainer}>
        <Image
          source={image}
          style={[
            styles.image,
            { width: screen.width * 0.9, height: screen.height * 0.3 },
          ]}
          resizeMode="contain"
        />
        <View style={styles.textContainer}>
          <AppText style={styles.title} {...appTextTitle}>{title}</AppText>
          <AppText style={styles.subtitle} {...appTextSubtitle}>{subtitle} </AppText>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: Styles.colors.darkWhiteBg,
    paddingTop: 5,
  },
  boxContainer: {
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: Styles.colors.ligthWhiteBg,
  },
  image: {},

  textContainer: {
    margin: 20,
  },
  title: {
    fontWeight: "bold",
  },
  subtitle: {
    color: Styles.colors.textSubtitle,
    fontWeight: "bold",
  },
});
