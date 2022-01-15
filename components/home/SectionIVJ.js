import React from "react";
import styled from "styled-components";

const Container = styled.View`
  border-radius: 5;
  background-color: #2c2c2e;
  padding-top: 10;
  padding-bottom: 5;
  padding-left: 10;
  padding-right: 10;
`;
const IvjTitle = styled.Text`
  color: white;
  font-weight: bold;
  margin-bottom: 5;
`;
const IvjText = styled.Text`
  color: #9c9c9c;
  margin-top: 5;
  margin-bottom: 5;
`;

export default function SectionIVJ() {
  return (
    <Container>
      <IvjTitle>INTERDICTION VOLONTAIRE DE JEUX</IvjTitle>
      <IvjText>
        Toute personne peut demander à être interdite de jeux. Cette demande est
        formée auprès de l'Autorité nationale des jeux.
      </IvjText>
      <IvjText>
        Cette interdiction est applicable dans les casinos, dans les clubs de
        jeux, sur les sites de jeux et de paris en ligne exploités par les
        opérateurs de jeux agréés en France, sur le site de jeux de loterie en
        ligne exploité par La Française des jeux ainsi que sur les bornes de
        jeux accessibles avec un compte joueur exploitées par les opérateurs
        titulaires de droits exclusifs, notamment La Française des jeux et le
        Pari mutuel urbain.
      </IvjText>
      <IvjText>
        Cette interdiction est prononcée pour une durée qui ne peut être
        inférieure à trois ans. Elle est renouvelable tacitement.
      </IvjText>
    </Container>
  );
}
