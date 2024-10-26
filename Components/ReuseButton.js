import React from "react";
import { Pressable } from "react-native-gesture-handler";

/**
 * ReuseButton - A reusable button component with styles for both pressed and unpressed states.
 *
 * Props:
 * - onPress: function - The function to call when the button is pressed.
 * - pressStyle: object - The style to apply when the button is pressed.
 * - unpressStyle: object - The style to apply when the button is not pressed.
 * - children: ReactNode - The content to display inside the button, such as icons or text.
 *
 * Usage:
 * This component is a versatile button that changes its appearance based on user interaction.
 * When the button is pressed, it applies the `pressStyle`, and when it's not pressed, it applies `unpressStyle`.
 * It also uses the `android_ripple` property to provide a ripple animation effect for Android devices.
 */

export default function ReuseButton({
  onPress,
  pressStyle,
  unpressStyle,
  children,
}) {
  return (
    <Pressable
      // Trigger the onPress function when the button is clicked
      onPress={onPress}
      // Apply different styles depending on whether the button is pressed
      style={({ pressed }) => (pressed ? pressStyle : unpressStyle)}
      // Provide a ripple effect for Android with a red color and radius of 20
      android_ripple={{ color: "red", radius: 20 }}
    >
      {/* Render the children content, such as icons or text */}
      {children}
    </Pressable>
  );
}
