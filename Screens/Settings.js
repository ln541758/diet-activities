import { View, Text } from "react-native";
import React from "react";
import Style from "../Components/Style";
import { useContext } from "react";
import { ThemeContext } from "../Components/ThemeContext";
import colors from "../Components/Color";
import ReuseButton from "../Components/ReuseButton";

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
      <ReuseButton
        onPress={toggleBackgroundColor}
        pressStyle={[Style.settingButton, { backgroundColor: colors.blue }]}
        unpressStyle={[
          Style.settingButton,
          { backgroundColor: colors.darkPurple },
        ]}
      >
        <Text style={Style.settingText}>Toggle Theme</Text>
      </ReuseButton>
    </View>
  );
}
