import { Feather } from "@expo/vector-icons";
import { TextInput, TextInputProps } from "react-native";
import styled from "styled-components/native";

import { defaultTheme } from "~/utils/theme";

const Input = (props: TextInputProps) => (
  <Container>
    <Feather name="search" size={24} color={defaultTheme.COLORS.ICON_COLOR} />
    <CustomInput
      placeholderTextColor={defaultTheme.COLORS.L_TITLE_COLOR}
      placeholder="Search something..."
      maxLength={28}
      returnKeyType="search"
      {...props}
    />
  </Container>
);

const Container = styled.View`
  min-width: 83%;
  height: 56px;
  flex-direction: row;
  align-items: center;
  background-color: ${(props) => props.theme.COLORS["WHITE"]};
  padding: 12px;
  border-radius: 16px;
  overflow: hidden;
`;

const CustomInput = styled(TextInput)`
  min-width: 70%;
  padding-left: 8px;
  font-size: 16px;
  font-weight: 400;
  font-family: ${(props) => props.theme.FONTS["DMSans_M"]};
`;

export default Input;
