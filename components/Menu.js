import React, { useState } from "react";
import styled from "styled-components";

const bottomTabIcons = [
  {
    name: "Accueil",
    active: "https://img.icons8.com/fluency-systems-filled/144/1084d1/home.png",
    inactive:
      "https://img.icons8.com/fluency-systems-filled/144/ffffff/home.png",
  },
  {
    name: "Catalogue",
    active: "https://img.icons8.com/ios-filled/344/1084d1/clover.png",
    inactive: "https://img.icons8.com/ios-filled/344/ffffff/clover.png",
  },
  {
    name: "Résultats",
    active: "https://img.icons8.com/ios-filled/72/1084d1/indoor-bowls.png",
    inactive: "https://img.icons8.com/ios-filled/72/ffffff/indoor-bowls.png",
  },
  {
    name: "Mon espace",
    active: "https://img.icons8.com/fluency-systems-filled/48/1084d1/user.png",
    inactive:
      "https://img.icons8.com/fluency-systems-filled/48/ffffff/user.png",
  },
];

const Container = styled.View`
  height: 8%;
  background-color: #2c2c2e;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;
const TouchableIcon = styled.TouchableOpacity`
  align-items: center;
`;
const IconImage = styled.Image`
  width: 30;
  height: 30;
`;
const IconText = styled.Text`
  font-size: 14;
  font-weight: 700;
  color: ${({ activeTab, iconName }) =>
    activeTab === iconName ? "#1084d1" : "#b2b2b2"};
`;

export default function Menu() {
  const [activeTab, setActivetab] = useState("Accueil");
  return (
    <Container>
      {bottomTabIcons.map((icon, index) => (
        <TouchableIcon key={index} onPress={() => setActivetab(icon.name)}>
          <IconImage
            source={{
              uri: activeTab === icon.name ? icon.active : icon.inactive,
            }}
          />
          <IconText activeTab={activeTab} iconName={icon.name}>
            {icon.name}
          </IconText>
        </TouchableIcon>
      ))}
    </Container>
  );
}
