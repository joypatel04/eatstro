import styled from "styled-components/native";

const Header = () => (
  <>
    <HeaderTitle>Hi, User! 👋</HeaderTitle>
    <HeaderSubTitle>What would you like to eat today?</HeaderSubTitle>
  </>
);

export default Header;

const HeaderTitle = styled.Text`
  color: #222b32;
  font-size: 32px;
  line-height: 40px;
  font-weight: 400;
  margin-bottom: 9px;
  padding-left: 9px;
`;

const HeaderSubTitle = styled.Text`
  color: #222b32;
  font-size: 16px;
  line-height: 24px;
  opacity: 0.5;
  font-weight: 500;
  margin-bottom: 8px;
  padding-left: 4px;
`;
