import React, {useRef} from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import ImageInput from "./ImageInput";

function ImageInputList({ imageUris = [], onRemoveImage, onAddImage }) {
  const scrollview = useRef();

  return (
    <View>
    <ScrollView
      horizontal
      ref={scrollview}
      onContentSizeChange={() => scrollview.current.scrollToEnd()}
    >
      <View style={styles.container}>
        {imageUris.map((uri) => (
          <View style={styles.image} key={uri}>
            <ImageInput
              imageUri={uri}
              key={uri}
              onchangeImage={() => onRemoveImage(uri)}
            />
          </View>
        ))}
        <ImageInput onchangeImage={(uri) => onAddImage(uri)} />
      </View>
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    marginRight: 10,
  },
});

export default ImageInputList;
