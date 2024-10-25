import React from "react";
import { createContext, useState } from "react";

/**
 * DataContext - This context is used to manage the state for activities and diet entries across the application.
 * By using this context, we can share data and functions related to activities and diet among all components.
 */
export const DataContext = createContext();

/**
 * DataProvider component - This component is responsible for providing the data context to all child components.
 * It includes the state for activities and diet, and functions to add new entries to those states.
 *
 * Props:
 * - children: ReactNode - The child components that will be able to consume the context.
 */
export const DataProvider = ({ children }) => {
  // State to store activity entries
  const [activities, setActivities] = useState([]);

  // State to store diet entries
  const [diet, setDiet] = useState([]);

  /**
   * addActivity - Adds a new activity to the activities state.
   *
   * @param {object} newActivity - The new activity object to be added.
   */
  function addActivity(newActivity) {
    setActivities((prevActivities) => [newActivity, ...prevActivities]);
  }

  /**
   * addDiet - Adds a new diet entry to the diet state.
   *
   * @param {object} newDiet - The new diet object to be added.
   */
  function addDiet(newDiet) {
    // console.log("Adding activity:", newActivity);
    setDiet((prevDiet) => [newDiet, ...prevDiet]);
  }

  function setActivitiesData(newActivities) {
    setActivities(newActivities);
  }

  function setDietData(newDiet) {
    setDiet(newDiet);
  }

  // Providing activities, diet, and the add functions to all child components
  return (
    <DataContext.Provider value={{ activities, diet, addActivity, addDiet, setActivitiesData, setDietData }}>
      {children}
    </DataContext.Provider>
  );
};
