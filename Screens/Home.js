import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import Settings from "./Settings";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ItemsList from "../Components/ItemsList";
import colors from "../Components/Color";
import AddItem from "../Components/AddItem";

/**
 * Home component - Defines a bottom tab navigation for the app, with tabs for Activities, Diet, and Settings.
 *
 * Props:
 * - navigation: object - React Navigation prop to handle navigation between screens.
 */
export default function Home({ navigation }) {
  // Create the Bottom Tab Navigator
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      // Set the screen options for the bottom tab navigator
      screenOptions={({ route }) => ({
        // Define the icons to use for each tab based on the route name
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
        // Set the color for active and inactive tabs
        tabBarActiveTintColor: colors.orange,
        tabBarInactiveTintColor: colors.darkGray,

        // Set the style for the bottom tab bar
        tabBarStyle: {
          backgroundColor: colors.darkPurple,
        },

        // Set the header style for the screens in the tab navigator
        headerStyle: {
          backgroundColor: colors.darkPurple,
        },
        headerTintColor: colors.white,
      })}
    >
      {/* Activities Tab Screen */}
      <Tab.Screen
        name="Activities"
        component={ItemsList}
        // Pass the "type" prop to indicate that this is the Activities list
        initialParams={{ type: "Activities" }}
        options={{
          // Add a button to the header for adding a new activity
          headerRight: () => {
            return (
              AddItem({ navigation: navigation, type: "Activities" })
            );
          },
        }}
      />

      {/* Diet Tab Screen */}
      <Tab.Screen
        name="Diet"
        component={ItemsList}
        // Pass the "type" prop to indicate that this is the Diet list
        initialParams={{ type: "Diet" }}
        options={{
          // Add a button to the header for adding a new diet entry
          headerRight: () => {
            return (
              AddItem({ navigation: navigation, type: "Diet" })
            );
          },
        }}
      />

      {/* Settings Tab Screen */}
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}
