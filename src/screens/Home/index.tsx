import styled from "styled-components/native";

const Home = () => (
  <Container>
    <Title>🦄 We are excited to see what you build!</Title>
  </Container>
);

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

export default Home;
