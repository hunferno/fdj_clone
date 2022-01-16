import React from "react";
import styled from "styled-components";
import { Divider } from "react-native-elements";
import { Dimensions } from "react-native";
import { COLORS } from "../../Colors";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Container = styled.View``;
const TitleContainer = styled.View`
  padding-top: 20;
  padding-left: 15;
  padding-right: 15;
  padding-bottom: 15;
`;
const Title = styled.Text`
  color: white;
  padding-bottom: 10;
  font-size: 28;
  font-weight: 700;
`;
const SubTitle = styled.Text`
  color: ${({ color }) => color};
  padding-bottom: 10;
  font-size: 14;
  font-weight: bold;
`;
const SliderContainer = styled.ScrollView`
  margin-bottom: 15;
  width: ${({ width }) => width};
  height: ${({ height }) => height * 0.2};
`;
const Slide = styled.View`
  width: ${({ width }) => width * 0.8};
  height: ${({ height }) => height * 0.2};
  margin-left: 10;
`;
const SlideImg = styled.Image`
  height: ${({ height }) => height * 0.2};
  border-radius: 18;
`;
const SlideInfo = styled.View`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding-left: 10;
  padding-right: 10;
  padding-bottom: 15;
`;
const SlidePriceContainer = styled.View`
  flex-direction: row;
`;
const SlideMaxWin = styled.Text`
  color: white;
`;
const MaxWinPrice = styled.Text`
  font-size: 16;
  font-weight: bold;
`;
const SlidePriceGame = styled.View`
  background-color: ${({ color }) => color};
  border-radius: 14;
  padding-top: 4;
  padding-bottom: 4;
  padding-left: 13;
  padding-right: 13;
`;
const PriceGame = styled.Text`
  font-weight: bold;
  font-size: 16;
  color: ${({ color }) => color};
`;

export default function SectionItemNew({ title, subTitle, aLaUne }) {
  return (
    <Container>
      <TitleContainer>
        <Title>{title}</Title>
        <SubTitle color={COLORS.lightGray}>{subTitle}</SubTitle>
        <Divider width={0.5} inset={true} insetType="right" />
      </TitleContainer>

      <SliderContainer
        width={windowWidth}
        height={windowHeight}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {aLaUne &&
          aLaUne.map((item, index) => (
            <Slide width={windowWidth} height={windowHeight} key={index}>
              <SlideImg
                height={windowHeight}
                source={{
                  uri: item.image,
                }}
              />
              <SlideInfo>
                <SlidePriceContainer>
                  <SlideMaxWin>
                    Jusqu'à <MaxWinPrice>{item.maxWin} €</MaxWinPrice>
                  </SlideMaxWin>
                </SlidePriceContainer>
                <SlidePriceGame color={COLORS.lighterGray}>
                  <PriceGame color={COLORS.blue}>{item.price} €</PriceGame>
                </SlidePriceGame>
              </SlideInfo>
            </Slide>
          ))}
      </SliderContainer>
    </Container>
  );
}
