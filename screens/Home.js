import React from "react";
import styled from "styled-components";
import { COLORS } from "../Colors";
import SectionGameRisks from "../components/home/SectionGameRisks";
import SectionItemNew from "../components/home/SectionItemNew";
import SectionItemOld from "../components/home/SectionItemOld";
import SectionIVJ from "../components/home/SectionIVJ";
import SectionLegalMentions from "../components/home/SectionLegalMentions";
import { AlaUne, Incontournables, JeuxFavoris } from "../datas/gameDatas";
import { SectionsInfo } from "../datas/sectionsInfo";

const Container = styled.ScrollView`
  background-color: ${({ bg }) => bg};
  flex: 1;
`;
const InfosContainer = styled.View`
  padding-right: 10;
  padding-left: 10;
  margin-bottom: 10;
`;

export default function Home() {
  return (
    <Container bg={COLORS.black}>
      <SectionItemNew
        title={SectionsInfo[0].title}
        subTitle={SectionsInfo[0].subTitle}
        aLaUne={AlaUne}
      />
      <SectionItemOld
        title={SectionsInfo[1].title}
        subTitle={SectionsInfo[1].subTitle}
        datas={JeuxFavoris}
      />
      <SectionItemOld
        title={SectionsInfo[2].title}
        subTitle={SectionsInfo[2].subTitle}
        datas={Incontournables}
      />
      <InfosContainer>
        <SectionLegalMentions />
        <SectionIVJ />
        <SectionGameRisks />
      </InfosContainer>
    </Container>
  );
}
