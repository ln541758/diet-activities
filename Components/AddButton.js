import { View, Text } from "react-native";
import React, { useContext } from "react";
import { Alert } from "react-native";
import Style from "./Style";
import colors from "./Color";
import ReuseButton from "./ReuseButton";
import getWarning from "./Warning";
import { DataContext } from "./DataContext";

/**
 * AddButton component is responsible for handling the save and cancel actions
 * for adding an activity or a diet entry.
 *
 * Props:
 * - type: string - Represents the type of item ("Activities" or "Diet")
 * - navigation: object - React Navigation object to navigate between screens
 * - activity: string - Activity type (e.g., "Running", "Swimming")
 * - date: Date - Date selected for the activity/diet
 * - duration: string - Duration of the activity in minutes
 * - description: string - Description of the diet item
 * - calories: string - Calories for the diet item
 *
 * Context:
 * - addActivity: function - Adds a new activity to the context state
 * - addDiet: function - Adds a new diet item to the context state
 */
export default function AddButton({
  type,
  navigation,
  activity,
  date,
  duration,
  description,
  calories,
  itemID,
  warning,
  isChecked,
}) {
  const { addActivity, addDiet, editActivity, editDiet } =
    useContext(DataContext);

  /**
   * handleSave - Handles the "Save" button press event.
   * Validates the input data and saves the new activity or diet entry to the context.
   */
  function handleSave() {
    // Input validation for activities
    if (type === "Activities") {
      if (activity === "") {
        Alert.alert("Invalid Input", "Please select an activity type.");
        return;
      }
      if (duration === "") {
        Alert.alert("Invalid Input", "Please type a number.");
        return;
      }
      if (isNaN(duration) || duration <= 0) {
        Alert.alert("Invalid Input", "Duration must be a positive number.");
        return;
      }
    }
    // Input validation for diet entries
    else {
      if (description === "") {
        Alert.alert("Invalid Input", "Please type a description.");
        return;
      }
      if (calories === "") {
        Alert.alert("Invalid Input", "Please type a number.");
        return;
      }
      if (isNaN(calories) || calories <= 0) {
        Alert.alert("Invalid Input", "Calories must be a positive number.");
        return;
      }
    }

    // Validate date
    if (date === null) {
      Alert.alert("Invalid Input", "Please select a date.");
      return;
    }

    // Set warning if necessary
    let warning = getWarning({ type, activity, duration, calories });

    // Create new activity or diet item
    const newActivityItem = {
      activity: activity,
      date: date.toDateString(),
      duration: duration,
      warning: warning && !isChecked,
    };

    const newDietItem = {
      description: description,
      date: date.toDateString(),
      calories: calories,
      warning: warning && !isChecked,
    };

    // Add the new item to the context and navigate back to the list
    if (itemID) {
      type === "Activities"
        ? (editActivity(itemID, newActivityItem),
          navigation.navigate("Activities", { type: "Activities" }))
        : (editDiet(itemID, newDietItem),
          navigation.navigate("Diet", { type: "Diet" }));
    } else {
      type === "Activities"
        ? (addActivity(newActivityItem),
          navigation.navigate("Activities", { type: "Activities" }))
        : (addDiet(newDietItem), navigation.navigate("Diet", { type: "Diet" }));
    }
  }

  /**
   * saveData - Function to prompt the user for confirmation before saving data.
   *
   * This function shows an alert with a message, asking the user if they are sure
   * they want to proceed with saving the changes. It provides two options:
   * - "No": Cancels the save operation.
   * - "Yes": Proceeds with saving the changes by calling the `handleSave` function.
   */
  function saveData() {
    Alert.alert("Important", "Are you sure you want to save these changes?", [
      {
        text: "No",
        onPress: () => console.log("Cancel Save"),
      },
      { text: "Yes", onPress: () => handleSave() },
    ]);
  }

  /**
   * handleCancel - Handles the "Cancel" button press event.
   * Navigates back to the previous screen.
   */
  function handleCancel() {
    navigation.goBack();
  }

  return (
    <View style={warning ? Style.button : [Style.button, { marginTop: 180 }]}>
      {/* Cancel button */}
      <ReuseButton
        onPress={handleCancel}
        pressStyle={[Style.buttonEdit, { backgroundColor: colors.orange }]}
        unpressStyle={[Style.buttonEdit, { backgroundColor: colors.pink }]}
      >
        <Text style={{ color: colors.white }}>Cancel</Text>
      </ReuseButton>
      {/* Save button */}
      <ReuseButton
        onPress={saveData}
        pressStyle={[Style.buttonEdit, { backgroundColor: colors.blue }]}
        unpressStyle={[
          Style.buttonEdit,
          { backgroundColor: colors.darkPurple },
        ]}
      >
        <Text style={{ color: colors.white }}>Save</Text>
      </ReuseButton>
    </View>
  );
}
