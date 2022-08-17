import styled from "styled-components/native";

interface IEmptyList {
  searchName: string;
}

const EmptyList = ({ searchName }: IEmptyList) => (
  <Container>
    <SubTitle>{`We couldn't find any results for "${searchName}"`} </SubTitle>
  </Container>
);

const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  padding: 16px;
`;

const SubTitle = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: #f16b59;
  margin-top: 20px;
`;

export default EmptyList;
