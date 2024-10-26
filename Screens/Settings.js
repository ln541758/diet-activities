import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Style from "../Components/Style";
import { Pressable, TouchableOpacity } from "react-native-gesture-handler";
import { useContext } from "react";
import { ThemeContext } from "../Components/ThemeContext";
import colors from "../Components/Color";

/**
 * Settings component - Provides settings options for the user, including the ability to toggle the theme.
 *
 * Context:
 * - ThemeContext: Provides the current theme state, such as background color, and a function to toggle between themes.
 */
export default function Settings() {
  // Destructure backgroundColor and toggleBackgroundColor from ThemeContext
  const { backgroundColor, toggleBackgroundColor } = useContext(ThemeContext);

  return (
    // Container for settings screen, applying the current theme background color
    <View style={[Style.container, { backgroundColor }]}>
      {/* Button to toggle between themes */}
      <Pressable
        onPress={toggleBackgroundColor}
        style={({pressed})=>[Style.settingButton, {backgroundColor: pressed ? colors.orange : colors.darkPurple}]}
      >
        <Text style={Style.settingText}> Toggle Theme</Text>
      </Pressable>
    </View>
  );
}
