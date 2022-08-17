import styled from "styled-components/native";

import { IEmptyListProps } from "~/types";

const EmptyList = ({ searchName }: IEmptyListProps) => (
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
  color: ${(props) => props.theme.COLORS["PRIMARY_COLOR"]};
  margin-top: 20px;
`;

export default EmptyList;
