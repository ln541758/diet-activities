import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function AddItem({ navigation, type }) {
  return (
    <TouchableOpacity
      style={{ flexDirection: "row", alignItems: "center", marginRight: 10 }}
      onPress={() => navigation.navigate("Add", { type: type })}
    >
      <FontAwesome6
        name="add"
        size={24}
        color="white"
        style={{ marginRight: 5 }}
      />
      { (type === "Activities") ? (
        <MaterialCommunityIcons name="run" size={24} color="white" />
      ) : (
        <MaterialCommunityIcons name="food" size={24} color="white" />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
