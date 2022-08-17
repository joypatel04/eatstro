import { TextInput, TextInputProps } from "react-native";
import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

const Input = (props: TextInputProps) => (
  <Container>
    <Feather name="search" size={24} color="#D1D1D1" />
    <CustomInput
      placeholderTextColor="#222B32"
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
  background-color: #fff;
  padding: 12px;
  border-radius: 16px;
  overflow: hidden;
`;

const CustomInput = styled(TextInput)`
  min-width: 70%;
  padding-left: 8px;
  font-size: 16px;
  font-weight: 400;
`;

export default Input;
