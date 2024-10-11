import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Style from "../Components/Style";
import DropDownPicker from "react-native-dropdown-picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import container from "../Components/Style";

export default function Activities() {
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
        <TextInput
          value={date ? date.toDateString() : ""}
          onChangeText={setDate}
          pointerEvents="none"
        />
      </TouchableOpacity>
      {showDatePicker && <DateTimePicker
        value={date || new Date()}
        mode="date"
        display="inline"
        onChange={(event, selectedDate) => {
          setShowDatePicker(false);
          if (selectedDate) {
            return setDate(selectedDate);
          }
        }}
      />}
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
});
