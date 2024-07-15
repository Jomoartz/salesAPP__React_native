import React, { useState } from "react";
import { TextInput, View, StyleSheet, TextInputComponent } from "react-native";
import Icons from "./icons";
import Styles from "./config";

//props:
//icon='icon name'--- placeholder='phonenumber'
//all input props
//

function TextInputComp({ icon, placeholder, ...props }) {
  let [name, setName] = useState("");
  console.log(name);
  return (
    <View>
       <View style={styles.container}>
      {icon &&  <Icons
          name={icon}
          backgroundColor={Styles.colors.darkWhiteBg}
          iconColor="#121212"
        />}
        <TextInput
          placeholder={placeholder}
          onChangeText={(text) => setName(text)}
          style={styles.textInput}
          {...props}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: Styles.colors.darkWhiteBg,
    borderRadius: 50,
  },
  textInput: {
    paddingLeft:5,
  },
});
export default TextInputComp;
