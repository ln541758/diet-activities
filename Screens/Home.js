import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import Diet from "./Diet";
import Settings from "./Settings";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ItemsList from "../Components/ItemsList";
import Activities from "./Activities";
import Item from "./Item";

export default function Home({navigation}) {
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
        component={Item}
        options={{
          headerRight: () => {
            return (
              <Button
                title="Add"
                onPress={() => navigation.navigate("Add An Activities")}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Diet"
        component={Item}
        options={{
          headerRight: () => {
            return <Button title="Add" onPress={()=>navigation.navigate("Add A Diet Entry")} />;
          },
        }}
      />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
