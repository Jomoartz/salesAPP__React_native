import React from "react";
import { View } from "react-native";
import TextInputComp from "../../components/TextInputComp";
import { StyleSheet } from "react-native";
import RedButton from "../../components/RedButton";

function Products(props) {
  return (
    <View style={styles.container}>
      <View style={styles.textinput}>
        <TextInputComp placeholder="Title" />
      </View>
      <View style={styles.textinput}>
        <TextInputComp placeholder="Price" />
      </View>
      <View style={styles.textinput}>
        <TextInputComp placeholder="Category" />
      </View>
      <View style={styles.textinput}>
        <TextInputComp placeholder="Description" />
      </View>

      <View style={styles.textinput}>
        <RedButton placeholder={"Post"} />
      </View>
      
    </View>
  );
}

styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  textinput: {
    marginTop: 15,
  },
});

export default Products;
