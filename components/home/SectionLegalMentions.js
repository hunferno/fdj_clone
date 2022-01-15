import React from "react";
import styled from "styled-components";

const Container = styled.View`
  margin-top: 10;
  margin-bottom: 10;
`;
const MentionsText = styled.Text`
  color: #9b9b9b;
  font-size: 10;
`;

export default function SectionLegalMentions() {
  return (
    <Container>
      <MentionsText>
        (6b) Montant minimum à partager entre les gagnants du jackpot. Voir
        règlement. {"\n"}
        (6l) Formule Bingo Live "CLASSIC" limitée dans le temps (06/01/2022 au
        23/01/2022)
      </MentionsText>
      <MentionsText>
        (11) Jackpot progressif incrémenté tant qu'il n'est pas remporté.{"\n"}
        (a1) Gain pour une mise unitaire de 1€. Voir règlement.{"\n"}
        (c3) soit 4 695 051 unités gagnantes sur 18 000 000 unités de jeu{"\n"}
      </MentionsText>
      <MentionsText>
        ♣ Opération promotionnelle « Séjour étoilé » organisée par La Française
        des Jeux, du lundi 10 janvier 2022 00h00 au dimanche 16 janvier 2022
        23h59 sur le site Internet et mobile fdj.fr et sur l’application
        associée. La participation à l’opération implique l’adhésion au
        règlement de l’opération disponible sur le site fdj.fr. Les personnes
        physiques majeures effectuant une ou plusieurs prises de jeu d’un
        montant total minimum de 10 euros cumulés entre le 10 et 16 janvier 2022
        inclus, à un ou plusieurs jeux disponibles sur l’un des supports visés
        ci-dessus, dans la limite de 10 participations par personne pendant la
        durée de l’opération, participent au tirage au sort qui aura lieu en
        principe le mardi 18 janvier 2022.{"\n"}À gagner : 3 voyages à la
        montagne dans un hôtel étoilé pour 2 personnes d’une valeur de 7 350€
        par voyage (Le voyage comprend : le trajet en train entre Paris/
        Lyon/Paris en 1ère classe + les transferts privés Gare /hôtel/Gare + le
        séjour de 4 nuits en pension complète hors boissons dans l’hôtel 5
        étoiles les Airelles Val d’Isère + la location de matériel de ski dans
        le salon Bernard Orcel + les forfaits de ski + 1 activité par jour à
        choisir par personne) et 1 000 e-crédits d’une valeur unitaire de 20€ à
        créditer sur le compte joueur FDJ® des gagnants, valable sur le site
        Internet et mobile fdj.fr et sur l’application associée, pendant 30
        jours après réception par email du code promotionnel. Voir conditions et
        modalités de participation dans le règlement publié sur le site fdj.fr.
        {"\n"}
      </MentionsText>
      <MentionsText>
        (1a) Montant à partager entre les gagnants du 1er rang. Voir règlement.
        {"\n"}
        (1b) Parmi les codes LOTO® attribués pour chaque combinaison simple
        enregistrée. Voir règlement.{"\n"}
        (2a) Montant non garanti (sauf avis contraire publié sur fdj.fr) à
        partager au rang 1 dans les pays participants. Voir règlement de l'offre
        de jeux EuroMillions - My Million et du jeu Etoile+.{"\n"}
        (2b) Soit 1 gagnant d'1 M € en République française ou Principauté de
        Monaco.{"\n"}
        (2c) Tirage exceptionnel parmi tous les pays participants. Participation
        par l'attribution de codes EuroMillions. Voir règlement de l'offre
        EuroMillions - My Million et du jeu Etoile +.{"\n"}
      </MentionsText>
    </Container>
  );
}
