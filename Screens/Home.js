import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import Settings from "./Settings";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ItemsList from "../Components/ItemsList";

export default function Home({ navigation }) {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === "Activities") {
            iconName = "run";
          } else if (route.name === "Diet") {
            iconName = "food";
          } else if (route.name === "Settings") {
            iconName = "cog";
          }
          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
        tabBarActiveTintColor: "orange",
        tabBarInactiveTintColor: "darkgray",
        tabBarStyle: {
          backgroundColor: "#3D348B",
        },
        headerStyle: {
          backgroundColor: "#3D348B",
        },
        headerTintColor: "white",
      })}
    >
        <Tab.Screen
          name="Activities"
          component={ItemsList}
          initialParams={{ type: "Activities" }}
          options={{
            headerRight: () => {
              return (
                <Button
                  title="Add"
                  onPress={() => navigation.navigate("Add", { type: "Activities" })}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Diet"
          component={ItemsList}
          initialParams={{ type: "Diet" }}
          options={{
            headerRight: () => {
              return (
                <Button
                  title="Add"
                  onPress={() => navigation.navigate("Add",{ type: "Diet" })}
                />
              );
            },
          }}
        />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
