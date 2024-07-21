import React from "react";
import CardComponent from "../../components/cardComponent";
import { View, StyleSheet, StatusBar } from "react-native";

import Styles from "../../components/config";

function ListingScreen(props) {
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={Styles.colors.darkWhiteBg}
        barStyle={"dark-content"}
      />
      <View style={styles.cardComponents}>
        <CardComponent
          title={"Red jacket for sale"}
          subtitle={"$100"}
          image={require("../assets/jacket.jpg")}
        />
      </View>
      <View style={styles.cardComponents}>
        <CardComponent
          title={"Red jacket for sale"}
          subtitle={"$100"}
          image={require("../assets/jacket.jpg")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Styles.colors.darkWhiteBg,
  },
  cardComponents: {
    paddingTop: 10,
  },
});

export default ListingScreen;
