import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Dimensions } from "react-native";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { COLORS } from "../../Colors";
import BouleNum from "./BouleNum";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function LotoCard({ data }) {
  return (
    <TouchableOpacity style={styles.container}>
      <LinearGradient
        colors={["#00a3da", "#00ceee"]}
        style={[styles.card, styles.cardHeader]}
      >
        <Image
          resizeMode="contain"
          style={styles.cardImg}
          source={{
            uri: "https://photos.tf1.fr/450/225/logo-programme-loto-eb522b-f34dc1-0@1x.png",
          }}
        />
        <Text style={styles.headerText}>{data.date}</Text>
      </LinearGradient>
      <View style={styles.cardBody}>
        <View style={styles.wrapper}>
          {data.numeros.map((num, index) => (
            <BouleNum key={index} numero={num} color={COLORS.lotoNum} />
          ))}
          <Text style={styles.bodyTextChance}>n° CHANCE</Text>
          <BouleNum numero={data.chance} color={COLORS.lotoChance} />
        </View>
        <View>
          <Text style={[styles.bodyText, { fontWeight: "bold" }]}>
            + Option 2nd tirage
          </Text>
          <Text style={styles.bodyText}>+ Codes gagnants LOTO®*</Text>
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
    height: windowHeight * 0.28,
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
  bodyTextChance: { color: COLORS.blue, fontWeight: "bold", fontSize: 8 },
  bodyText: { color: "white", marginTop: 5 },

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
