import React from "react";
import styled from "styled-components";
import { COLORS } from "../../Colors";

const Container = styled.View`
  border-radius: 5;
  background-color: ${({ color }) => color};
  padding-top: 10;
  padding-bottom: 10;
  padding-left: 10;
  padding-right: 10;
  margin-top: 10;
  margin-bottom: 10;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Image = styled.Image`
  width: 15;
  height: 15;
`;
const IvjTextContainer = styled.View`
  align-items: center;
`;
const IvjText = styled.Text`
  color: white;
  font-size: 10;
`;
const IvjPhoneText = styled.Text`
  color: white;
`;

export default function SectionGameRisks() {
  return (
    <Container color={COLORS.gray}>
      <Image
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/5181/5181956.png",
        }}
      />
      <IvjTextContainer>
        <IvjText>
          JOUER COMPORTE DES RISQUES : ISOLEMENT, ENDETTEMENT...
        </IvjText>
        <IvjText>
          APPELEZ LE 09 74 75 13 13
          <IvjPhoneText>(appel non surtaxé)</IvjPhoneText>...
        </IvjText>
      </IvjTextContainer>
    </Container>
  );
}
