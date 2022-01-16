import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Dimensions } from "react-native";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import { COLORS } from "../../Colors";
import BouleNum from "./BouleNum";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const numeros = [
  7, 9, 10, 12, 16, 26, 31, 32, 34, 38, 40, 42, 46, 51, 53, 60, 62, 65, 67, 68,
];

export default function KenoCard({ data }) {
  return (
    <TouchableOpacity style={styles.container}>
      <LinearGradient
        colors={["#ff8f23", "#ffb919"]}
        style={[styles.card, styles.cardHeader]}
      >
        <Image
          resizeMode="contain"
          style={styles.cardImg}
          source={{
            uri: "https://media.fdj.fr/static/contrib/images/2020-10/Logo_KENO_GAV_2020_contour.png",
          }}
        />
        <Text style={styles.headerText}>{data.date}</Text>
      </LinearGradient>
      <View style={styles.cardBody}>
        <Text
          style={[
            styles.bodyText,
            { color: "white", marginBottom: 8, marginLeft: 5 },
          ]}
        >
          Multiplicateur
          <Text style={[styles.bodyText, { color: COLORS.kenoNum }]}>
            {" "}
            x{data.multiplicateur}
          </Text>
        </Text>
        <View style={styles.wrapper}>
          {data.numeros.map((num, index) => (
            <BouleNum key={index} numero={num} color={COLORS.kenoNum} />
          ))}
        </View>
      </View>
      <View style={[styles.card, styles.cardFooter]}>
        <Image
          resizeMode="contain"
          style={styles.cardImg}
          source={require("../../assets/img/joker.png")}
        />
        <View style={styles.footerTextContainer}>
          <Text style={styles.footerText}>{data.joker}</Text>
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
    height: windowHeight * 0.35,
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
  },
  bodyText: { fontWeight: "bold" },

  cardFooter: {
    height: windowHeight * 0.07,
    backgroundColor: COLORS.gray,
    paddingBottom: 8,
  },
  footerTextContainer: {
    marginLeft: 15,
    borderWidth: 3,
    borderColor: COLORS.greenJoker,
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 20,
  },
  footerText: { color: "white", fontWeight: "700" },
});
