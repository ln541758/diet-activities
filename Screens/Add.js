import {
  Text,
  TextInput,
  View,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import Checkbox from "expo-checkbox";
import React, { useState, useContext, useEffect } from "react";
import Style from "../Components/Style";
import DropDownPicker from "react-native-dropdown-picker";
import DatePicker from "../Components/DatePicker";
import AddButton from "../Components/AddButton";
import { ThemeContext } from "../Components/ThemeContext";
import colors from "../Components/Color";
import { subscribeToDatabase } from "../Firebase/FirebaseHelper";
import ReuseButton from "../Components/ReuseButton";

/**
 * Add component - Allows users to add new activity or diet entries.
 * The form changes dynamically based on the type of entry ("Activities" or "Diet").
 *
 * Props:
 * - navigation: object - React Navigation prop to handle navigation.
 * - route: object - Provides parameters passed to this screen.
 *   - type: string - The type of item to add ("Activities" or "Diet").
 *
 * Context:
 * - ThemeContext: Provides theme-related values, such as the background color.
 */
export default function Add({ navigation, route }) {
  // Destructure the type from route parameters to determine whether to add an activity or diet entry
  const { type, itemID } = route.params;

  // State hooks for managing form input values
  const [openDropdown, setOpenDropdown] = useState(false);
  const [activity, setActivity] = useState("");
  const [date, setDate] = useState(null);
  const [duration, setDuration] = useState("");
  const [description, setDescription] = useState("");
  const [calories, setCalories] = useState("");
  const [showDatePicker, setShowDatePicker] = useState("");
  const [warning, setWarning] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  // Options for activities dropdown
  const options = [
    { label: "Walking", value: "Walking" },
    { label: "Running", value: "Running" },
    { label: "Swimming", value: "Swimming" },
    { label: "Weights", value: "Weights" },
    { label: "Yoga", value: "Yoga" },
    { label: "Cycling", value: "Cycling" },
    { label: "Hiking", value: "Hiking" },
  ];

  // Get the current background color from ThemeContext to apply the current theme
  const { backgroundColor } = useContext(ThemeContext);

  // Subscribe to the database to get the item details when editing an existing item
  useEffect(() => {
    if (itemID) {
      const unsubscribe = subscribeToDatabase(type, (items) => {
        const item = items.find((item) => item.id === itemID);
        // console.log("Items from database:", item);
        if (item) {
          if (type === "Activities") {
            setActivity(item.activity);
            setDuration(item.duration);
          } else {
            setDescription(item.description);
            setCalories(item.calories);
          }
          if (item.date && typeof item.date === "string") {
            setDate(new Date(item.date));
          }
          setWarning(item.warning);
        }
      });
      return () => unsubscribe();
    }
  }, [type, itemID]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View
        style={[
          Style.container,
          { justifyContent: "flex-start", backgroundColor },
        ]}
      >
        <View style={{ width: "100%", zIndex: 1000 }}>
          {/* Dynamic label for activity or diet description */}
          {type === "Activities" ? (
            <Text style={[Style.label, { marginTop: 60 }]}>Activity *</Text>
          ) : (
            <Text style={[Style.label, { marginTop: 60 }]}>Description *</Text>
          )}

          {/* DropDownPicker for selecting an activity, shown if type is "Activities" */}
          {type === "Activities" ? (
            <DropDownPicker
              open={openDropdown}
              value={activity}
              items={options}
              setOpen={setOpenDropdown}
              setValue={setActivity}
              style={[Style.dropdown, Style.inputGray]}
              dropDownContainerStyle={{ width: "90%", alignSelf: "center" }}
              placeholder="Select An Activity"
              placeholderStyle={{ color: colors.darkPurple }}
              textStyle={{ color: colors.darkPurple }}
            />
          ) : (
            // TextInput for diet description, shown if type is "Diet"
            <TextInput
              style={[Style.input, Style.inputGray, { height: 100 }]}
              value={description}
              onChangeText={setDescription}
            />
          )}
        </View>

        <View style={{ width: "100%" }}>
          {/* Label for duration or calories depending on the type */}
          {type === "Activities" ? (
            <Text style={Style.label}>Duration (min) *</Text>
          ) : (
            <Text style={Style.label}>Calories *</Text>
          )}

          {/* Input for duration or calories depending on the type */}
          {type === "Activities" ? (
            <TextInput
              style={[Style.input, Style.inputGray]}
              keyboardType="number-pad"
              value={duration}
              onChangeText={setDuration}
            />
          ) : (
            <TextInput
              style={[Style.input, Style.inputGray]}
              keyboardType="number-pad"
              value={calories}
              onChangeText={setCalories}
            />
          )}
        </View>

        <View style={{ width: "100%" }}>
          {/* Label and date picker for selecting a date */}
          <Text style={Style.label}>Date *</Text>
          <ReuseButton
            onPress={() => {
              setShowDatePicker(!showDatePicker);
              if (showDatePicker && !date) {
                setDate(new Date());
              }
            }}
            pressStyle={[
              Style.input,
              Style.inputGray,
              { backgroundColor: colors.white },
            ]}
            unpressStyle={[Style.input, Style.inputGray]}
          >
            {/* Display the selected date or an empty string if no date is selected */}
            <Text style={{ color: colors.darkPurple }}>
              {date ? date.toDateString() : ""}
            </Text>
          </ReuseButton>
          {/* Display DatePicker component if showDatePicker is true */}
          {showDatePicker && DatePicker({ date, setDate, setShowDatePicker })}

          {/* Warning message for special items */}
          {warning && (
            <View style={{ flexDirection: "row", marginTop: 100 }}>
              <Text style={Style.label}>
                This item is marked as special. Select the checkbox if you would
                like to approve it.
              </Text>
              <Checkbox
                value={isChecked}
                onValueChange={() => {
                  setIsChecked(!isChecked);
                }}
                style={{ margin: 10 }}
              />
            </View>
          )}

          {/* AddButton component to handle saving the new entry */}
          <AddButton
            type={type}
            navigation={navigation}
            activity={activity}
            date={date}
            duration={duration}
            description={description}
            calories={calories}
            itemID={itemID}
            warning={warning}
            isChecked={isChecked}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
