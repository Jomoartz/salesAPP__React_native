import React from "react";
import { Text} from "react-native";


function AppText({ children }) {
  return (<Text style={style.apptext}>{children}</Text>);
}

style = {
  apptext: {
    fontFamily: "Courrier",
    fontSize: 20,
    color: "lightblue",
    fontStyle: "italic",
  }, }


export default AppText;
