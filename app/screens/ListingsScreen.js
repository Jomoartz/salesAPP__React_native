import React, { useEffect } from "react";
import { FlatList, StyleSheet } from "react-native";

import ActivityIndicator from "../components/ActivityIndicator";
import Card from "../components/Card";
import colors from "../config/colors";
import routes from "../navigation/routes";
import listingsApi from '../api/listings';
import Screen from "../components/Screen";
import AppText from "../components/Text";
import Button from "../components/Button";
import useApi from "../hooks/useApi";



function ListingsScreen({ navigation }) {
  const getListingApi = useApi(listingsApi)

 useEffect(() => {
  getListingApi.request();
  }, []);


  return (
    <Screen style={styles.screen}>

    <ActivityIndicator visible ={getListingApi.loading} />

      {getListingApi.error && <>
      <AppText>Server connection error</AppText>
      <Button title='retry' onPress={fetchData}/>
      </>}
   <FlatList 
        data={getListingApi.data}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            image={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      /> 
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
