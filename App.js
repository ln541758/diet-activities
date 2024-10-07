import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Activities from "./Screens/Activities";
import Diet from "./Screens/Diet";
import Settings from "./Screens/Settings";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function App() {
  const Stack = createBottomTabNavigator();
  function Add() {
    console.log("Add");
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
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
              <MaterialCommunityIcons
                name={iconName}
                size={size}
                color={color}
              />
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
        <Stack.Screen
          name="Activities"
          component={Activities}
          options={{
            headerRight: () => {
              return <Button title="Add" onPress={Add} />;
            },
          }}
        />
        <Stack.Screen
          name="Diet"
          component={Diet}
          options={{
            headerRight: () => {
              return <Button title="Add" onPress={Add} />;
            },
          }}
        />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
