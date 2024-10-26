import { StyleSheet, Text, View } from "react-native";
import React from "react";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import ReuseButton from "./ReuseButton";
import colors from "./Color";

export default function AddItem({ navigation, type }) {
  return (
    <ReuseButton
      onPress={() => navigation.navigate("Add", { type: type })}
      pressStyle={[
        { flexDirection: "row", alignItems: "center", marginRight: 10 },
        { backgroundColor: colors.blue },
      ]}
      unpressStyle={[
        { flexDirection: "row", alignItems: "center", marginRight: 10 },
        { backgroundColor: colors.darkPurple },
      ]}
    >
      <FontAwesome6 name="add" size={24} style={{ marginRight: 5 }} color={colors.white}/>
      {type === "Activities" ? (
        <MaterialCommunityIcons name="run" size={24} color={colors.white}/>
      ) : (
        <MaterialCommunityIcons name="food" size={24} color={colors.white}/>
      )}
    </ReuseButton>
  );
}

const styles = StyleSheet.create({});
