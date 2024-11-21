import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Add from "./Screens/Add";
import Home from "./Screens/Home";
import { ThemeProvider } from "./Components/ThemeContext";
import { DataProvider } from "./Components/DataContext";
import AntDesign from "@expo/vector-icons/AntDesign";
import colors from "./Components/Color";
import { deleteFromDatabase } from "./Firebase/FirebaseHelper";
import { Alert } from "react-native";
import ReuseButton from "./Components/ReuseButton";

/**
 * App component - Root component of the application.
 * Sets up the navigation and provides global contexts (Theme and Data).
 */
export default function App() {
  // Create a Stack Navigator to handle screen transitions within the app
  const Stack = createStackNavigator();

  // Function to handle deletion of an item from the database
  function handleDelete(collectionName, itemID, navigation) {
    if (itemID) {
      deleteFromDatabase(collectionName, itemID);
      navigation.navigate("Home");
    } else {
      console.log("No itemID provided for deletion.");
    }
  }

  // Function to confirm deletion of an item
  function deleteItem(collectionName, itemID, navigation) {
    Alert.alert("Delete", "Are you sure you want to delete this item?", [
      {
        text: "No",
        onPress: () => console.log("Cancel Delete"),
      },
      {
        text: "Yes",
        onPress: () => handleDelete(collectionName, itemID, navigation),
      },
    ]);
  }

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
              options={({ route, navigation }) => ({
                // Dynamically set the title based on the type of item to be added (Activities or Diet)
                title: route.params.itemID
                  ? "Edit"
                  : route.params?.type === "Activities"
                  ? "Add An Activity"
                  : "Add A Diet Entry",
                // Hide the back button title
                headerBackTitleVisible: false,
                // Set the icon and pressable area for the delete button
                headerRight: () =>
                  route.params.itemID ? (
                    <ReuseButton
                      onPress={() =>
                        deleteItem(
                          route.params?.type,
                          route.params?.itemID,
                          navigation
                        )
                      }
                      pressStyle={{ backgroundColor: colors.blue }}
                      unpressStyle={{ backgroundColor: colors.darkPurple }}
                    >
                      <AntDesign
                        name="delete"
                        size={24}
                        color={colors.white}
                        style={{ marginRight: 20 }}
                      />
                    </ReuseButton>
                  ) : null,
              })}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </DataProvider>
    </ThemeProvider>
  );
}
