import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function BouleNum({ numero, color }) {
  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <Text style={styles.text}>{numero}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: 33,
    height: 33,
    borderRadius: 33,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 5,
    marginHorizontal: 5,
  },
  text: {
    fontWeight: "bold",
    color: "white",
  },
});
