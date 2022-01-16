import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { COLORS } from "../Colors";
import AmigoCard from "../components/resultats/AmigoCard";
import EuroCard from "../components/resultats/EuroCard";
import KenoCard from "../components/resultats/KenoCard";
import LotoCard from "../components/resultats/LotoCard";
import { amigo, euromillions, keno, loto } from "../datas/resultatsData";

export default function Resultats() {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.section}
      >
        {loto.map((result, index) => (
          <LotoCard key={index} data={result} />
        ))}
      </ScrollView>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.section}
      >
        {euromillions.map((result, index) => (
          <EuroCard key={index} data={result} />
        ))}
      </ScrollView>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.section}
      >
        {keno.map((result, index) => (
          <KenoCard key={index} data={result} />
        ))}
      </ScrollView>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.section}
      >
        {amigo.map((result, index) => (
          <AmigoCard key={index} data={result} />
        ))}
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
    paddingVertical: 20,
  },

  section: { paddingBottom: 20 },
});
