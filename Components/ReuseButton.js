import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Pressable } from "react-native-gesture-handler";

export default function ReuseButton({
  onPress,
  pressStyle,
  unpressStyle,
  children,
}) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => (pressed ? pressStyle : unpressStyle)}
      android_ripple={{ color: "red", radius: 20 }}
    >
      {children}
    </Pressable>
  );
}
