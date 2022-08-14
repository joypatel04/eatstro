import styled from "styled-components/native";

const Orders = () => (
  <Container>
    <Title>🦄 We are excited to see what you build!</Title>
    <SubTitle>Orders Tab</SubTitle>
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

const SubTitle = styled.Text`
  font-size: 32px;
  font-weight: 500;
  color: palevioletred;
  margin-top: 20px;
`;

export default Orders;
