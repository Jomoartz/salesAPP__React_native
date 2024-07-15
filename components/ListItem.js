import React from "react";
import { View, Image, StyleSheet } from "react-native";
import AppText from "./myStyles/appText";
import Icons from './icons'

import Styles from "./config";

//can take props for images or icons
//props
// title, description, style
//image ='require/uri(/path)'
//icon = 'email'

function ListItem(
  {title='Title', 
  description,
  image,
  icon,
  style,
    ...props
 }) {
  return (
    <View style={styles.container}>
     {image && <Image
        source={image} {...props}
        style={[styles.profilePicture, style]}
      />}

      {icon && <Icons name={icon} {...props} />}

      <View style={styles.textContainer}>
        <AppText style={styles.textTitle}>{title}</AppText>
        <AppText style={styles.textDescription}>{description}</AppText>
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
