import React from "react";
import styled from "styled-components";
import { Divider } from "react-native-elements";
import { Dimensions } from "react-native";

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
  color: #b2b2b2;
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
  background-color: #e3f0ff;
  border-radius: 14;
  padding-top: 4;
  padding-bottom: 4;
  padding-left: 13;
  padding-right: 13;
`;
const PriceGame = styled.Text`
  font-weight: bold;
  font-size: 16;
  color: #2e80ba;
`;

export default function SectionItemNew({ title, subTitle, aLaUne }) {
  return (
    <Container>
      <TitleContainer>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
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
                <SlidePriceGame>
                  <PriceGame>{item.price} €</PriceGame>
                </SlidePriceGame>
              </SlideInfo>
            </Slide>
          ))}
      </SliderContainer>
    </Container>
  );
}
