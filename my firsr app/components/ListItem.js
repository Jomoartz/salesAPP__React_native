import React from "react";
import { View, Image, StyleSheet } from "react-native";
import AppText from "./myStyles/appText";
import Icons from './icons';
import Styles from "./config";

//can take props for images or icons
//props: title, description, style, image, icon, showChevrons

function ListItem({
  title = 'Title',
  description,
  image,
  icon,
  showChevrons,
  style,
  appTextProps,
  ...props
}) {
  return (
    <View style={[styles.container, style]}>
      {image && (
        <Image
          source={image}
          style={styles.profilePicture}
          {...props}
        />
      )}

      {icon && <Icons name={icon} {...props} />}

      <View style={styles.textContainer}>
        <AppText style={styles.textTitle}>{title}</AppText>
        <AppText style={styles.textDescription} {...appTextProps}>
          {description}
        </AppText>
      </View>

      {showChevrons && (
        <Icons 
          name='chevron-right' 
          backgroundColor={Styles.colors.ligthWhiteBg} 
          iconColor="black" 
        />
      )}
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
    flex: 1,
  },
  textTitle: {
    fontWeight: "bold",
    width: '100%',
  },
  textDescription: {
    fontWeight: '200',
    color: "grey",
  },
});

export default ListItem;
