import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button, Alert } from "react-native";

export default function AddButton({
  type,
  navigation,
  activity,
  date,
  duration,
  description,
  calories,
}) {
  function getWarning(warning) {
    if (type === "Activities") {
      if ((activity === "Running" || activity === "Weights") && duration > 60) {
        warning = true;
      }
    } else {
      if (calories > 800) {
        warning = true;
      }
    }
    return warning;
  }

  function handleSave() {
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
    } else {
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
    if (date === null) {
      Alert.alert("Invalid Input", "Please select a date.");
      return;
    }

    let warning = false;
    warning = getWarning(warning);

    const newActivityItem = {
      activity: activity,
      date: date.toDateString(),
      duration: duration,
      warning: warning,
    };

    const newDietItem = {
      description: description,
      date: date.toDateString(),
      calories: calories,
      warning: warning,
    };
    {
      type === "Activities"
        ? navigation.navigate("Activities", {
            type: "Activities",
            newActivityItem,
          })
        : navigation.navigate("Diet", {
            type: "Diet",
            newDietItem,
          });
    }
  }

  function handleCancel() {
    navigation.goBack();
  }

  return (
    <View style={styles.button}>
      <Button title="Cancel" onPress={handleCancel} />
      <Button title="Save" onPress={handleSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "90%",
    alignSelf: "center",
    marginTop: 150,
  },
});
