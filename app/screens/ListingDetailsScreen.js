import React from "react";
import { View, Image, StyleSheet } from "react-native"
import { GestureHandlerRootView } from "react-native-gesture-handler";

import colors from "../config/colors";
import ListItem from "../components/lists/ListItem";
import Text from "../components/Text";

function ListingDetailsScreen({route}) {
  const listings = route.params;
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <View>
      <Image style={styles.image} source={listings.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{listings.title}</Text>
        <Text style={styles.price}>{listings.price}</Text>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/mosh.jpg")}
            title="Mosh Hamedani"
            subTitle="5 Listings"
          />
        </View>
      </View>
    </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;
