import React from "react";
import Constant from "expo-constants";
import { TouchableOpacity } from "react-native";
import styled from "styled-components";
import { Icon } from "react-native-elements";
import { COLORS } from "../Colors";

const Container = styled.View`
  background-color: ${({ color }) => color};
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
`;
const KycContainer = styled.View`
  background-color: ${({ color }) => color};
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
  color: ${({ color }) => color};
`;

export default function Navbar() {
  return (
    <Container height={Constant.statusBarHeight} color={COLORS.gray}>
      <Img resizeMode="contain" source={require("../assets/img/logo.png")} />
      <ProfileContainer>
        <TouchableOpacity
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <Icon size={32} name="qrcode" type="font-awesome" color="#1084d1" />
        </TouchableOpacity>
        <TouchableOpacity style={{ marginLeft: 32 }}>
          <KycContainer color={COLORS.blue}>
            <Icon size={24} name="check" type="font-awesome" color="#2c2c2e" />
            <KycText color={COLORS.gray}>KYC</KycText>
          </KycContainer>
        </TouchableOpacity>
      </ProfileContainer>
    </Container>
  );
}
