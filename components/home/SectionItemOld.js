import React, { useState } from "react";
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
  height: ${({ height }) => height * 0.3};
`;
const Slide = styled.View`
  width: ${({ width }) => width * 0.6};
  height: ${({ height }) => height * 0.3};
  margin-left: 10;
`;
const SlideImg = styled.Image`
  height: ${({ height }) => height * 0.2};
  border-top-left-radius: 18;
  border-top-right-radius: 18;
`;
const SlideInfo = styled.View`
  height: ${({ height }) => height * 0.1};
  background-color: ${({ color }) => color};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 10;
  padding-right: 10;
  border-bottom-right-radius: 18;
  border-bottom-left-radius: 18;
`;
const SlidePriceContainer = styled.View`
  height: ${({ height }) => height * 0.1};
  justify-content: center;
`;
const SlideMaxWin = styled.Text`
  color: white;
`;
const MaxWinPrice = styled.Text`
  color: white;
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
  justify-content: center;
`;
const PriceGame = styled.Text`
  font-weight: bold;
  font-size: 16;
  color: ${({ color }) => color};
`;

export default function SectionItemOld({ title, subTitle, datas }) {
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
        {datas &&
          datas.map((item, index) => (
            <Slide width={windowWidth} height={windowHeight} key={index}>
              <SlideImg
                height={windowHeight}
                source={{
                  uri: item.image,
                }}
              />
              <SlideInfo height={windowHeight} color={COLORS.gray}>
                <SlidePriceContainer height={windowHeight}>
                  {item.isLotery ? (
                    <SlideMaxWin>Près de </SlideMaxWin>
                  ) : (
                    <SlideMaxWin>Jusqu'à </SlideMaxWin>
                  )}
                  {item.isLotery ? (
                    <MaxWinPrice>{item.maxWin} Millions €</MaxWinPrice>
                  ) : (
                    <MaxWinPrice>{item.maxWin} €</MaxWinPrice>
                  )}
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
