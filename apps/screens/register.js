import React from "react";
import { View } from "react-native";
import TextInputComp from "../../components/TextInputComp";
import { StyleSheet } from "react-native";
import RedButton from "../../components/RedButton";

function Register(props) {
  return (
    <View style={styles.container}>
      <View style={styles.textinput}>
        <TextInputComp icon="user" placeholder="Name" />
      </View>
      <View style={styles.textinput}>
        <TextInputComp icon="email" placeholder="Email" />
      </View>
      <View style={styles.textinput}>
        <TextInputComp icon="lock" placeholder="Password" />
      </View>
      <View style={styles.textinput}>
        <RedButton placeholder={'REGISTER'}/>
      </View>
    </View>
  );
}


styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  textinput: {
    marginTop:15,
  }
});

export default Register;
