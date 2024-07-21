import Screen from "./app/components/Screen";
import {
  Button,
  View,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import Icon from "./app/components/Icon";
import colors from "./app/config/colors";
import React, { useEffect, Alert, useState } from "react";
import * as imagePicker from "expo-image-picker";


let list = [];

export default function App() {
  let [imageUri, setImageUri] = useState();
  let [image_id, setImage_id] = useState(1);

  const imageLib = async () => {
    const lib = await imagePicker.launchImageLibraryAsync();

    if (lib.canceled) {
      console.log("image selection cancelled");
    } else {
      setImageUri(lib.assets[0].uri);
      list.push({
        uri: imageUri,
        id: image_id,
      });
    }
    setImage_id(image_id + 1);
    console.log(list);
  };


  return (
    <Screen style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.imageListContainer}>
        {list.map((item) => (
          <Image
            key={item.id}
            source={{ uri: item.uri }}
            style={styles.image}
            resizeMode="contain"
          />
        ))}
      
      <TouchableWithoutFeedback onPress={imageLib}>
        <View style={styles.container}>
          <Icon name="camera" iconColor={colors.light} />
        </View>
      </TouchableWithoutFeedback>
      </ScrollView>
    </Screen>
    
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    width:'100%',
  },
  container: {
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.light,
    flexDirection: "row",
  },
  image: {
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.black,
    margin: 5,
  },
  imageListContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
});
