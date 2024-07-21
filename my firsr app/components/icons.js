import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { View } from "react-native";

function Icons({
  name,
  size = 40,
  backgroundColor = "#000",
  iconColor = "#fff",
}) {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <FontAwesome name={name} color={iconColor} size={size * 0.5} />
    </View>
  );
}

export default Icons;
