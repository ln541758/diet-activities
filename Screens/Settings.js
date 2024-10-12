import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import Style from "../Components/Style";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useContext } from "react";
import { ThemeContext } from "../Components/ThemeContext";

export default function Settings() {
  const { backgroundColor, toggleBackgroundColor } = useContext(ThemeContext);

  return (
    <View style={[Style, {backgroundColor}]}>
      <TouchableOpacity onPress={toggleBackgroundColor} style={styles.button}>
        <Text style={styles.text}> Toggle Theme</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#3D348B",
    padding: 10,
    borderRadius: 5,
  },
  text: {
    color: "white",
  },
});
