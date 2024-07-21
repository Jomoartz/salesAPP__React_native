import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import Icon from "./Icon";
import * as imagePicker from "expo-image-picker";


import colors from "../config/colors";
//props:imageUri, onchangeImage



function ImageInput({ imageUri, onchangeImage }) {
  
  
  const requestImagePermission = async () =>{
    useEffect(() => {requestImagePermission()}, [])

    const permission = await imagePicker.requestMediaLibraryPermissionsAsync();
    if (! permission.granted) alert('Bro, you\'ve gotta gettcha camera permission ')
  };
  
  
  
    handlePress = () => {
    console.log('handle press touched------line 31' );
    if (!imageUri) selectImage();
    else Alert.alert('Delete image', 'Are you sure?', [
        {text: 'yes', onPress:() => onchangeImage(null)},
        {text: 'no'},
    ]);
  }
    
     
      const selectImage = async () => {
        const lib = await imagePicker.launchImageLibraryAsync({
          mediaTypes: imagePicker.MediaTypeOptions.Images,
          quality: 0.5,
        });

        if (lib.canceled) {
          console.log("image selection cancelled");
        } else {
          onchangeImage(lib.assets[0].uri);
        }
      
    
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!imageUri && (
          <Icon
            name="camera"
            size={40}
            iconColor={colors.medium}
            backgroundColor={colors.light}
          />
        )}
        {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      </View>
      
    </TouchableWithoutFeedback>
  );
}

export default ImageInput;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.light,
    borderRadius: 15,
    height: 100,
    justifyContent: "center",
    width: 100,
    overflow: "hidden",
  },
  image: {
    height: "100%",
    width: "100%",
  },
});
