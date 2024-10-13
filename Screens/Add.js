import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useState, useContext } from "react";
import Style from "../Components/Style";
import DropDownPicker from "react-native-dropdown-picker";
import DatePicker from "../Components/DatePicker";
import AddButton from "../Components/AddButton";
import { ThemeContext } from "../Components/ThemeContext";

export default function Add({ navigation, route }) {
  const { type } = route.params;
  const [openDropdown, setOpenDropdown] = useState(false);
  const [activity, setActivity] = useState("");
  const [date, setDate] = useState(null);
  const [duration, setDuration] = useState("");
  const [description, setDescription] = useState("");
  const [calories, setCalories] = useState("");
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
  const { backgroundColor} = useContext(ThemeContext);


  return (
      
      <View style={[Style, {justifyContent: "flex-start", backgroundColor} ]}>
        {type === "Activities" ? (
          <Text style={[styles.label, { marginTop: 60 }]}>Activity *</Text>
        ) : (
          <Text style={[styles.label, { marginTop: 60 }]}>Description *</Text>
        )}

        {type === "Activities" ? (
          <DropDownPicker
            open={openDropdown}
            value={activity}
            items={options}
            setOpen={setOpenDropdown}
            setValue={setActivity}
            style={[styles.dropdown, styles.inputGray]}
            dropDownContainerStyle={{ width: "90%", alignSelf: "center" }}
            placeholder="Select An Activity"
            placeholderStyle={{ color: "#3D348B" }}
            textStyle={{ color: "#3D348B" }}
          />
        ) : (
          <TextInput
            style={[styles.input, styles.inputGray, { height: 100 }]}
            value={description}
            onChangeText={setDescription}
          />
        )}

        {type === "Activities" ? (
          <Text style={styles.label}>Duration (min) *</Text>
        ) : (
          <Text style={styles.label}>Calories *</Text>
        )}

        {type === "Activities" ? (
          <TextInput
            style={[styles.input, styles.inputGray]}
            keyboardType="number-pad"
            value={duration}
            onChangeText={setDuration}
          />
        ) : (
          <TextInput
            style={[styles.input, styles.inputGray]}
            keyboardType="number-pad"
            value={calories}
            onChangeText={setCalories}
          />
        )}

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
        {showDatePicker && DatePicker({ date, setDate, setShowDatePicker })}

        <AddButton
          type={type}
          navigation={navigation}
          activity={activity}
          date={date}
          duration={duration}
          description={description}
          calories={calories}
        />
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
