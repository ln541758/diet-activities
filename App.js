import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Activities from "./Screens/Activities";
import Home from "./Screens/Home";
import Diet from "./Screens/Diet";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#3D348B",
          },
          headerTintColor: "white",
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Add An Activities"
          component={Activities}
          options={{ headerBackTitleVisible: false }}
        />
        <Stack.Screen
          name="Add A Diet Entry"
          component={Diet}
          options={{ headerBackTitleVisible: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
