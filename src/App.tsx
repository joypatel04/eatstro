import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components/native";

export default function App() {
  return (
    <NavigationContainer>
      <Container>
        <Title>🦄 We are excited to see what you build!</Title>
        <StatusBar style="auto" />
      </Container>
    </NavigationContainer>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
  padding: 16px;
`;

const Title = styled.Text`
  font-size: 40px;
  font-weight: 500;
  color: palevioletred;
`;
