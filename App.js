import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Add from "./Screens/Add";
import Home from "./Screens/Home";
import { ThemeProvider } from "./Components/ThemeContext";
import { DataProvider } from "./Components/DataContext";

/**
 * App component - Root component of the application.
 * Sets up the navigation and provides global contexts (Theme and Data).
 */
export default function App() {
  // Create a Stack Navigator to handle screen transitions within the app
  const Stack = createStackNavigator();

  return (
    // ThemeProvider provides theme-related values and functions to all child components
    <ThemeProvider>
      {/* DataProvider provides activities and diet data along with relevant functions */}
      <DataProvider>
        {/* NavigationContainer manages navigation state, linking, and the navigation tree */}
        <NavigationContainer>
          {/* Stack Navigator for managing stack-based navigation within the app */}
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                // Set the background color for all headers
                backgroundColor: "#3D348B",
              },
              // Set the text color of header elements
              headerTintColor: "white",
            }}
          >
            {/* Home Screen - Main screen with bottom tab navigation */}
            <Stack.Screen
              name="Home"
              component={Home}
              // Hide the header for the Home screen
              options={{ headerShown: false }}
            />

            {/* Add Screen - Allows the user to add activities or diet entries */}
            <Stack.Screen
              name="Add"
              component={Add}
              options={({ route }) => ({
                // Dynamically set the title based on the type of item to be added (Activities or Diet)
                title:
                  route.params?.type === "Activities"
                    ? "Add An Activity"
                    : "Add A Diet Entry",
                // Hide the back button title
                headerBackTitleVisible: false,
              })}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </DataProvider>
    </ThemeProvider>
  );
}
