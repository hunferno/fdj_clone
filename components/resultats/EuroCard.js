import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Dimensions } from "react-native";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import { COLORS } from "../../Colors";
import BouleNum from "./BouleNum";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function EuroCard({ data }) {
  return (
    <TouchableOpacity style={styles.container}>
      <LinearGradient
        colors={["#002286", "#0156cd"]}
        style={[styles.card, styles.cardHeader]}
      >
        <Image
          resizeMode="contain"
          style={styles.cardImg}
          source={{
            uri: "https://static.wikia.nocookie.net/logopedia/images/3/38/EuroMillions_My_MIllion_2020_logo.svg/revision/latest/scale-to-width-down/300?cb=20200715004039",
          }}
        />
        <Text style={styles.headerText}>{data.date}</Text>
      </LinearGradient>
      <View style={styles.cardBody}>
        <View style={styles.wrapper}>
          {data.numeros.map((num, index) => (
            <BouleNum key={index} numero={num} color={COLORS.euroNum} />
          ))}
          <Icon
            size={32}
            name="star"
            type="font-awesome"
            color="#eebc05"
            style={styles.icon}
          />
          <Icon
            size={32}
            name="star"
            type="font-awesome"
            color="#eebc05"
            style={styles.icon}
          />
          <View style={[styles.starTextContainer, { left: 220 }]}>
            <Text style={styles.starText}>{data.etoiles[0]}</Text>
          </View>
          <View style={[styles.starTextContainer, { left: 260 }]}>
            <Text style={styles.starText}>{data.etoiles[1]}</Text>
          </View>
        </View>
      </View>
      <View style={[styles.card, styles.cardFooter]}>
        <Text style={styles.footerTextMillion}>MY MILLION</Text>
        <View style={styles.footerTextContainer}>
          <Text style={styles.footerText}>{data.myMillion}</Text>
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
    height: windowHeight * 0.2,
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
  icon: {
    marginHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  starTextContainer: {
    flexDirection: "row",
    position: "absolute",
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  starText: { color: "white", fontSize: 10, fontWeight: "bold" },

  cardFooter: {
    height: windowHeight * 0.07,
    backgroundColor: COLORS.gray,
    paddingBottom: 8,
  },
  footerTextContainer: {
    marginLeft: 15,
    borderWidth: 3,
    borderColor: COLORS.blue,
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 20,
  },
  footerTextMillion: { color: "#eebc05", fontWeight: "700" },
  footerText: { color: "white", fontWeight: "700" },
});
