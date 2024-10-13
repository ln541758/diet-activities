import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [activities, setActivities] = useState([]);
  const [diet, setDiet] = useState([]);

  function addActivity (newActivity) {
    setActivities((prevActivities) => [newActivity, ...prevActivities]);
  };

  function addDiet (newDiet) {
    // console.log("Adding activity:", newActivity);
    setDiet((prevDiet) => [newDiet, ...prevDiet]);
  };

  return (
    <DataContext.Provider value={{ activities, diet, addActivity, addDiet }}>
      {children}
    </DataContext.Provider>
  );
};

const styles = StyleSheet.create({});
