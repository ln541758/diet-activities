import { StyleSheet, Text, View } from "react-native";
import React from "react";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function DatePicker({date, setDate, setShowDatePicker}) {
  return (
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
  );
}

const styles = StyleSheet.create({});
