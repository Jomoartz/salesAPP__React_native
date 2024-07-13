import {
  ImageBackground,
  Text,
  View,
  Image,
  StyleSheet,
  Button,
} from "react-native";
import backgroundimage from "../assets/background.jpg";

import Styles from "../../components/config";


export default function WelcomeScreen() {
  console.log("app loaded");

  return (
    <View style={style.container}>
      <ImageBackground source={backgroundimage} style={style.ImageBackground}>

          <View style={style.logoContainer}>
            <Image source={require("../assets/logo-red.png")} style={style.logo}/>
            <Text style ={{fontWeight:700, }}>sell what you dont need</Text>
          </View>
        
        <View style={style.login}>
          <Button
            onPress={() => {
              console.log("pressed login");
            }}
            title="Login"
            color="#910417"
            accessibilityLabel="Login with this button"/>
        </View>

        <View style={style.register}>
          <Button
            onPress={() => {
              console.log("pressed register");
            }}
            title="Register"
            color="#4ECDC4"
            accessibilityLabel="Register with this button"/>
           </View>
      </ImageBackground>

    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  ImageBackground: {
    flex: 1,
    justifyContent: "flex-end",
    blurRadius:7,
  },
  login: {
    backgroundColor: Styles.colors.secondary,
    borderRadius: 25,
    overflow: "hidden",
    marginBottom:20,
  },
  register:{
    backgroundColor: Styles.colors.secondary,
    borderRadius: 25,
    overflow: "hidden",
    marginBottom:20,
  },
  logoContainer: {
    alignSelf: "center",
    position: "relative",
    bottom: 450,
  },
  logo: {
    alignSelf: "center",
    width: 50,
    height: 50,
  },
});
