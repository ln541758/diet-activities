import React from "react";
import DateTimePicker from "@react-native-community/datetimepicker";

/**
 * DatePicker component - A wrapper for the DateTimePicker to select a date.
 * This component provides an inline date picker with the ability to handle date selection and interact with the parent component.
 *
 * Props:
 * - date: Date - The currently selected date. If no date is provided, it defaults to the current date.
 * - setDate: function - Callback function to update the selected date in the parent component.
 * - setShowDatePicker: function - Callback function to toggle the visibility of the date picker in the parent component.
 */
export default function DatePicker({ date, setDate, setShowDatePicker }) {
  return (
    <DateTimePicker
      value={date || new Date()}
      mode="date"
      display="inline"
      onChange={(event, selectedDate) => {
        // Close the date picker when the user selects a date or cancels the picker
        setShowDatePicker(false);
        // If a valid date is selected, set the new date
        if (selectedDate) {
          setDate(selectedDate);
        }
        // If the user cancels without a date being selected, default to the current date
        else if (!date) {
          setDate(new Date());
        }
      }}
    />
  );
}
