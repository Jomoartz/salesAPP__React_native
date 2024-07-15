import React from "react";
import { View, Button, TouchableOpacity, } from "react-native";

import Styles from "./config";

function RedButton({placeholder}) {
  return (
    <View style={style.container}>
      <TouchableOpacity style={style.button}>
        <Button
          onPress={() => {
            console.log("press");
          }}
          title={placeholder}
          color="#910417"
          accessibilityLabel='button'
        />
      </TouchableOpacity>
    </View>
  );
}

const style = {
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: Styles.colors.primary,
  },
  button: {
    borderRadius: 25,
    overflow: "hidden",
  },
};

export default RedButton;
