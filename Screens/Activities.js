import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  View,
  TouchableOpacity,
  Button,
  Alert,
} from "react-native";
import React, { useState } from "react";
import Style from "../Components/Style";
import DropDownPicker from "react-native-dropdown-picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import container from "../Components/Style";

export default function Activities({ navigation }) {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(null);
  const [amount, setAmount] = useState("");
  const [warning, setWarning] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const options = [
    { label: "Walking", value: "Walking" },
    { label: "Running", value: "Running" },
    { label: "Swimming", value: "Swimming" },
    { label: "Weights", value: "Weights" },
    { label: "Yoga", value: "Yoga" },
    { label: "Cycling", value: "Cycling" },
    { label: "Hiking", value: "Hiking" },
  ];

  function setSpecial() {
    if ((title === "Running" || title === "Weights") && amount > 60) {
      setWarning(true);
    }
  }

  function handleSave() {
    if (title==="") {
      Alert.alert("Invalid Input", "Please select an activity type.");
      return;
    }
    if (amount==="") {
      Alert.alert("Invalid Input", "Please type a number.");
      return;
    }
    if (isNaN(amount) || amount <= 0) {
      Alert.alert("Invalid Input", "Duration must be a positive number.");
      return;
    }
    if (date===null) {
      Alert.alert("Invalid Input", "Please select a date.");
      return;
    }

    setSpecial();

    const newItem = {
      title,
      date: date.toDateString(),
      amount,
      warning,
    };
    navigation.navigate("Activities", { type: "Activities", newItem });
    navigation.goBack();
  }

  function handleCancel() {
    navigation.goBack();
  }

  return (
    <View style={[Style, { justifyContent: "flex-start" }]}>
      <Text style={[styles.label, { marginTop: 60 }]}>Activity *</Text>
      <DropDownPicker
        open={openDropdown}
        value={title}
        items={options}
        setOpen={setOpenDropdown}
        setValue={setTitle}
        style={[styles.dropdown, styles.inputGray]}
        dropDownContainerStyle={{ width: "90%", alignSelf: "center" }}
        placeholder="Select An Activity"
        placeholderStyle={{ color: "#3D348B" }}
        textStyle={{ color: "#3D348B" }}
      />

      <Text style={styles.label}>Duration (min) *</Text>
      <TextInput
        style={[styles.input, styles.inputGray]}
        keyboardType="number-pad"
        value={amount}
        onChangeText={setAmount}
      />

      <Text style={styles.label}>Date *</Text>
      <TouchableOpacity
        onPress={() => {
          setShowDatePicker(!showDatePicker);
          if (showDatePicker && !date) {
            setDate(new Date());
          }
        }}
        style={[styles.input, styles.inputGray]}
      >
        <Text>{date ? date.toDateString() : ""}</Text>
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          value={date || new Date()}
          mode="date"
          display="inline"
          onChange={(event, selectedDate) => {
            setShowDatePicker(false);
            if (selectedDate) {
              setDate(selectedDate);
            } else if (!date) {
              setDate(new Date());
            }
          }}
        />
      )}

      <View style={styles.button}>
        <Button title="Cancel" onPress={handleCancel} />
        <Button title="Save" onPress={handleSave} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    marginBottom: 280,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: "#3D348B",
    fontWeight: "bold",
    alignSelf: "flex-start",
    marginLeft: 20,
  },
  dropdown: {
    marginBottom: 35,
    width: "90%",
    alignSelf: "center",
  },
  input: {
    borderWidth: 2,
    borderColor: "#3D348B",
    padding: 10,
    marginBottom: 35,
    borderRadius: 5,
    width: "90%",
    color: "#3D348B",
  },
  inputGray: {
    backgroundColor: "darkgray",
  },
  button: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "90%",
    alignSelf: "center",
    marginTop: 150,
  },
});
