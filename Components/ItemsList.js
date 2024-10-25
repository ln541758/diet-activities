import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Style from "./Style";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import { DataContext } from "./DataContext";
import { TouchableOpacity } from "react-native-gesture-handler";

/**
 * ItemsList component - Displays a list of either activities or diet items.
 *
 * Props:
 * - route: object - Navigation prop to access route parameters.
 *   - type: string - Represents the type of items to display ("Activities" or "Diet").
 *
 * Contexts:
 * - DataContext: Provides the data for activities and diet entries.
 * - ThemeContext: Provides theme-related values, such as background color.
 */
export default function ItemsList({ navigation, route }) {
  // Destructure activities and diet data from DataContext
  const { activities, diet } = useContext(DataContext);

  // Destructure background color from ThemeContext for consistent theming
  const { backgroundColor } = useContext(ThemeContext);

  // Destructure type from route params to determine whether to display activities or diet items
  const { type } = route.params;

  // Determine which dataset to use based on the type ("Activities" or "Diet")
  const data = type === "Activities" ? activities : diet;

  return (
    // Scrollable container to show the list of items
    <ScrollView contentContainerStyle={[Style.container, { backgroundColor }]}>
      <View style={Style.itemContainer}>
        {data.map((item, index) => (
          <TouchableOpacity key={index} style={Style.card} onPress={() => navigation.navigate("Add", { type: type })}>
            <Text style={Style.title}>
              {type === "Activities" ? item.activity : item.description}
            </Text>
            <View style={Style.detailsContainer}>
              {item.warning && (
                <FontAwesome name="warning" style={Style.icon} />
              )}
              <Text style={Style.text}>{item.date}</Text>
              <Text style={[Style.text, { marginLeft: 5 }]}>
                {type === "Activities" ? item.duration + " min" : item.calories}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

/* 
Sample Data (For testing purposes)

const dietData = [
  {
    description: "Breakfast",
    date: "Tue Sep 17 2024",
    calories: 500,
    warning: false,
  },
  {
    description: "Lunch",
    date: "Wed Sep 25 2024",
    calories: 900,
    warning: true,
  },
];

const activitiesData = [
  {
    activity: "Yoga",
    date: "Mon Sep 16 2024",
    duration: 60,
    warning: false,
  },
  {
    activity: "Weights",
    date: "Mon Jul 15 2024",
    duration: 120,
    warning: true,
  },
]; 
*/
