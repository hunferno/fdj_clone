import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Home from "./screens/Home";

const Container = styled.View`
  flex: 1;
`;

export default function App() {
  return (
    <Container>
      <Navbar />
      <Home />
      <Menu />
      <StatusBar style="light" />
    </Container>
  );
}
