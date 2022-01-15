import React from "react";
import Constant from "expo-constants";
import { TouchableOpacity } from "react-native";
import styled from "styled-components";
import { Icon } from "react-native-elements";

const Container = styled.View`
  background-color: #2c2c2e;
  padding-top: ${({ height }) => height};
  padding-right: 15;
  padding-left: 15;
  height: 12%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const ProfileContainer = styled.View`
  flex-direction: row;
`;

const Img = styled.Image`
  width: 92;
  /* background-color: lightblue; */
`;
const KycContainer = styled.View`
  background-color: #1084d1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 10;
  padding-bottom: 10;
  padding-left: 10;
  padding-right: 10;
  border-radius: 50;
`;
const KycText = styled.Text`
  font-size: 18;
  font-weight: bold;
  color: #2c2c2e;
`;

export default function Navbar() {
  return (
    <Container height={Constant.statusBarHeight}>
      <Img resizeMode="contain" source={require("../assets/img/logo.png")} />
      <ProfileContainer>
        <TouchableOpacity
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <Icon size={32} name="qrcode" type="font-awesome" color="#1084d1" />
        </TouchableOpacity>
        <TouchableOpacity style={{ marginLeft: 32 }}>
          <KycContainer>
            <Icon size={24} name="check" type="font-awesome" color="#2c2c2e" />
            {/* <Icon size={24} name="times" type="font-awesome" color="#2c2c2e" /> */}
            <KycText>KYC</KycText>
          </KycContainer>
        </TouchableOpacity>
      </ProfileContainer>
    </Container>
  );
}
