import styled from "styled-components/native";

const Header = () => (
  <>
    <HeaderTitle>Hi, User! 👋</HeaderTitle>
    <HeaderSubTitle>What would you like to eat today?</HeaderSubTitle>
  </>
);

export default Header;

const HeaderTitle = styled.Text`
  color: ${(props) => props.theme.COLORS["TITLE_COLOR"]};
  font-family: ${(props) => props.theme.FONTS["Able"]};
  font-size: 32px;
  line-height: 40px;
  font-weight: 400;
  margin-bottom: 8px;
  padding-left: 9px;
`;

const HeaderSubTitle = styled.Text`
  color: ${(props) => props.theme.COLORS["TITLE_COLOR"]};
  font-family: ${(props) => props.theme.FONTS["DMSans_M"]};
  font-size: 16px;
  line-height: 24px;
  opacity: 0.5;
  font-weight: 500;
  margin-bottom: 8px;
  padding-left: 4px;
`;
