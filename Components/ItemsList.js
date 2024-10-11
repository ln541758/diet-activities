import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Style from "./Style";

const dietData = [
  {
    title: "Breakfast",
    date: "Tue Sep 17 2024",
    amount: 500,
    warning: false,
  },
  {
    title: "Lunch",
    date: "Wed Sep 25 2024",
    amount: 900,
    warning: true,
  },
];

const activitiesData = [
  {
    title: "Yoga",
    date: "Mon Sep 16 2024",
    amount: 60,
    warning: false,
  },
  {
    title: "Weights",
    date: "Mon Jul 15 2024",
    amount: 120,
    warning: true,
  },
];

export default function ItemsList({ route }) {
  const { type } = route.params;
  const [data, setData] = useState([]);
  useEffect(() => {
    if (type === "Diet") {
      setData(dietData);
    } else if (type === "Activities") {
      setData(activitiesData);
    }
  }, [type]);

  return (
    <ScrollView contentContainerStyle={Style}>
      <View style={styles.container}>
        {data.map((item, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.title}>{item.title}</Text>
            <View style={styles.detailsContainer}>
              {item.warning && (
                <FontAwesome name="warning" style={styles.icon} />
              )}
              <Text style={styles.text}>{item.date}</Text>
              <Text style={[styles.text, { marginLeft: 5 }]}>
                {type === "Diet" ? item.amount : item.amount + " min"}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    alignItems: "center",
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#3D348B",
    borderRadius: 6,
    padding: 10,
    margin: 5,
    width: "90%",
  },
  title: {
    color: "white",
    alignSelf: "center",
    fontWeight: "bold",
  },
  icon: {
    color: "orange",
    size: 20,
    alignSelf: "center",
    marginRight: 5,
  },
  text: {
    backgroundColor: "white",
    padding: 5,
    paddingHorizontal: 20,
  },
  detailsContainer: {
    flex: 4,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});
