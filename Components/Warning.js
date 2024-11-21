import { StyleSheet, Text, View } from "react-native";
import React from "react";

/**
 * getWarning - Determines if the new entry should have a warning flag.
 *
 * @param {boolean} warning - Initial warning value.
 * @returns {boolean} - Whether the entry should be flagged with a warning.
 */
export default function getWarning({ type, activity, duration, calories }) {
  let warning = false;
  if (type === "Activities") {
    if ((activity === "Running" || activity === "Weights") && duration > 60) {
      warning = true; // Flag activities as warning if they exceed 60 minutes
    }
  } else {
    if (calories > 800) {
      warning = true; // Flag diet entries as warning if calories exceed 800
    }
  }
  return warning;
}
const styles = StyleSheet.create({});
