import { StyleSheet } from "react-native";
import colors from "./Color";

/**
 * styles - Contains the common styles used across the application.
 * This file is used to ensure consistent styling and reduce code duplication.
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightPurple,
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: colors.darkPurple,
    fontWeight: "bold",
    alignSelf: "flex-start",
    marginLeft: 20,
  },
  dropdown: {
    marginBottom: 35,
    width: "90%",
    alignSelf: "center",
    borderWidth: 2,
    borderColor: colors.darkPurple,
  },
  input: {
    borderWidth: 2,
    borderColor: colors.darkPurple,
    padding: 10,
    marginBottom: 35,
    borderRadius: 5,
    width: "90%",
    color: colors.darkPurple,
    marginLeft: 20,
  },
  inputGray: {
    backgroundColor: colors.darkGray,
  },
  button: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    alignSelf: "center",
    marginTop: 20,
  },
  itemContainer: {
    flex: 1,
    marginTop: 20,
    alignItems: "center",
  },
  card: {
    flexDirection: "row",
    backgroundColor: colors.darkPurple,
    borderRadius: 6,
    padding: 10,
    margin: 5,
    width: "90%",
  },
  title: {
    color: colors.white,
    alignSelf: "center",
    fontWeight: "bold",
  },
  icon: {
    color: colors.orange,
    size: 20,
    alignSelf: "center",
    marginRight: 5,
  },
  text: {
    backgroundColor: colors.white,
    padding: 5,
    paddingHorizontal: 20,
  },
  detailsContainer: {
    flex: 4,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  settingButton: {
    backgroundColor: colors.darkPurple,
    padding: 10,
    borderRadius: 5,
  },
  settingText: {
    color: colors.white,
  },
  buttonEdit: {
    padding: 10,
    borderRadius: 5,
    width: 150,
    alignItems: "center",
  },
});

export default styles;
