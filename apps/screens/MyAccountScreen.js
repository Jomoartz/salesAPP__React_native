import React from "react";
import ListItem from "../../components/ListItem";
import { StyleSheet, View, FlatList, StatusBar } from "react-native";

import Styles from "../../components/config";
import reStyles from "../../components/myStyles/styles";

const DATA = [
  {
    title: "My Listing",
    image: 'format-list-bulleted'
  },
  {
    title: "My Messages",
    image: 'email'
  },
];

function MyAccountScreen(props) {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Styles.colors.darkWhiteBg} barStyle="dark-content" />
      <View style={styles.imageContainer}>
        <ListItem
          image={require("../assets/mosh.jpg")}
          title="Mosh Hamedani"
          description="programmingwithmosh@mosh.com"
          style={styles.image}
        />
      </View>
      <View style={reStyles.flatListContainer}>
        <FlatList
          data={DATA}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <ListItem title={item.title} icon={item.image} backgroundColor={'red'} />
          )}
        />
      </View>
      <View style={reStyles.flatListContainer}>
        <ListItem
          title='Log Out'
          icon='logout'
          backgroundColor='#ffe66d'
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Styles.colors.darkWhiteBg,
    flex:1,
  },
  imageContainer: {
    marginBottom: 10,
    paddingLeft: 20,
    backgroundColor: Styles.colors.ligthWhiteBg,
  },
  image: {
    width: 80,
    height: 80,
  },
});

export default MyAccountScreen;
