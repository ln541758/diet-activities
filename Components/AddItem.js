import { StyleSheet, Text, View } from "react-native";
import React from "react";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import ReuseButton from "./ReuseButton";
import colors from "./Color";

/**
 * AddItem - A reusable component that renders a button for adding items.
 *
 * This component uses the `ReuseButton` to render a button that allows
 * navigation to an "Add" screen, where users can add either an activity or
 * a diet entry. The button visually changes style when pressed.
 *
 * Props:
 * - navigation: object - The navigation object used for navigating between screens.
 * - type: string - The type of item ("Activities" or "Diet") that determines
 *   the appropriate icon to display on the button.
 */
export default function AddItem({ navigation, type }) {
  return (
    <ReuseButton
      // Navigate to the "Add" screen with the specified type as a parameter
      onPress={() => navigation.navigate("Add", { type: type })}

      // Style for the button when it is pressed
      pressStyle={[
        { flexDirection: "row", alignItems: "center", marginRight: 10 },
        { backgroundColor: colors.blue },
      ]}

      // Style for the button when it is not pressed
      unpressStyle={[
        { flexDirection: "row", alignItems: "center", marginRight: 10 },
        { backgroundColor: colors.darkPurple },
      ]}
    >
      {/* Icon for adding an item */}
      <FontAwesome6 name="add" size={24} style={{ marginRight: 5 }} color={colors.white} />

      {/* Conditional icon based on the type of item (Activities or Diet) */}
      {type === "Activities" ? (
        <MaterialCommunityIcons name="run" size={24} color={colors.white} />
      ) : (
        <MaterialCommunityIcons name="food" size={24} color={colors.white} />
      )}
    </ReuseButton>
  );
}

