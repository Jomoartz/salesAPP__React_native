import React from "react";
import { FlatList, View } from "react-native";
import reStyles from "./myStyles/styles";
import ListItem from "./ListItem";

function CustomFlatList({ Data = [], style, backgroundColor }) {
  return (
    <View style={[reStyles.flatListContainer, style]}>
      <FlatList
        data={Data}
        keyExtractor={(item) => item.id.toString()} // Assuming id is a number or string
        renderItem={({ item }) => (
          <ListItem
            icon={item.image}
            title={item.title}
            description={item.description}
            backgroundColor={backgroundColor || 'red'}
          />
        )}
      />
    </View>
  );
}

export default CustomFlatList;
