import React from "react";
import styled from "styled-components/native";
import LottieView from "lottie-react-native";

const LoadingIndicator = ({ customLoaderStyles = {} }) => (
  <Container>
    <Lottie loop autoPlay source={require("./LottieFiles/prepare-food.json")} />
  </Container>
);

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
`;

const Lottie = styled(LottieView)`
  height: 280px;
`;

export default LoadingIndicator;
