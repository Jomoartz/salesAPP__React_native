import React from "react";
import { View, Button, TouchableOpacity, } from "react-native";

import Styles from "../../components/config";

function Login(props) {
  return (
    <View style={style.container}>
      <TouchableOpacity style={style.button}>
        <Button
          onPress={() => {
            console.log("press");
          }}
          title="Login"
          color="#910417"
          accessibilityLabel="Login with this button"
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
    flexDirection: "column",
    justifyContent: "center",
  },
  button: {
    borderRadius: 25,
    overflow: "hidden",
  },
};

export default Login;
