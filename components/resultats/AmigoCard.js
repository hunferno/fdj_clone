import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Dimensions } from "react-native";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { COLORS } from "../../Colors";
import BouleNum from "./BouleNum";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const numeros = [1, 4, 10, 12, 19, 20, 25];
const numJaune = [3, 11, 14, 16, 28];

export default function AmigoCard({ data }) {
  return (
    <TouchableOpacity style={styles.container}>
      <LinearGradient
        colors={["#c40322", "#f62f4e"]}
        style={[styles.card, styles.cardHeader]}
      >
        <Image
          resizeMode="contain"
          style={styles.cardImg}
          source={require("../../assets/img/amigo.png")}
        />
        <Text style={styles.headerText}>{data.date}</Text>
      </LinearGradient>
      <View style={styles.cardBody}>
        <Text style={styles.bodyText}>Numéros bleus</Text>
        <View style={styles.wrapper}>
          {data.numeros.map((num, index) => (
            <BouleNum key={index} numero={num} color={COLORS.lotoNum} />
          ))}
        </View>
        <Text style={styles.bodyText}>Numéros jaunes</Text>
        <View style={styles.wrapper}>
          {data.numJaune.map((num, index) => (
            <BouleNum key={index} numero={num} color={COLORS.amigoJaune} />
          ))}
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    borderRadius: 15,
    marginHorizontal: 5,
    marginBottom: 20,
    height: windowHeight * 0.3,
    width: windowWidth * 0.88,
  },

  card: {
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
  },

  cardHeader: {
    height: windowHeight * 0.06,
    backgroundColor: "blue",
    justifyContent: "space-between",
  },
  headerText: { color: "white" },
  cardImg: {
    width: "30%",
    height: "100%",
  },

  cardBody: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: COLORS.gray,
  },
  wrapper: {
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  bodyText: { fontWeight: "bold", color: "white", marginBottom: 8 },
});
