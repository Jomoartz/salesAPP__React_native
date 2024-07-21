import React, { useState } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Button,
} from "react-native";
import Icons from "./icons";
import Styles from "./config";
import CustomFlatList from "./flatList";

function TextInputComp({ icon, placeholder, dropicon, Data, ...props }) {
  const [name, setName] = useState("");
  const [visible, setVisible] = useState(false); // Correct state for modal visibility

  return (
    <View>
      <View style={styles.container}>
        {icon && (
          <Icons
            name={icon}
            backgroundColor={Styles.colors.darkWhiteBg}
            iconColor="#121212"
          />
        )}

        <TextInput
          placeholder={placeholder}
          onChangeText={(text) => setName(text)}
          style={styles.textInput}
          placeholderTextColor={Styles.colors.placeholderColor} // Assuming you have a placeholder color defined in Styles.colors
          {...props}
        />

        {dropicon && (
          <>
            <TouchableOpacity
              onPress={() => {
                setVisible(true);
              }}
            >
              <Icons
                name={dropicon}
                backgroundColor={Styles.colors.darkWhiteBg}
                iconColor="#121212"
              />
            </TouchableOpacity>
            <Modal
              visible={visible}
              animationType="slide"
              transparent={false}
            >
              <View style={styles.modalContainer}>
                <Button title='Close' onPress={() => setVisible(false)} />
                <CustomFlatList Data={Data}/>
              </View>
            </Modal>
          </>
        )}
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
    padding: 10, // Added padding for better visuals
    alignItems: "center", // Align items center vertically
  },
  textInput: {
    paddingLeft: 5,
    flex: 1,
    color: "#121212", // Added text color for better readability
  },
  modalContainer: {
    flex: 1,
  },
  flatListContainer: {
    flex: 1,
    width: '100%',
    backgroundColor: Styles.colors.ligthWhiteBg,
    padding: 20,
  },
});

export default TextInputComp;
