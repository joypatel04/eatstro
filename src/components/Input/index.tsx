import { useState } from "react";
import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { TextInput, TextInputProps } from "react-native";

type InputProps = {
  inputProps: TextInputProps;
};

const Input = ({ ...inputProps }: InputProps) => {
  const [value, setValue] = useState<string | undefined>(undefined);
  return (
    <Container>
      <Feather name="search" size={24} color="#D1D1D1" />
      <CustomInput value={value} onChangeText={setValue} {...inputProps} />
    </Container>
  );
};

const Container = styled.View`
  min-width: 85%;
  height: 56px;
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  padding: 12px;
  border-radius: 16px;
  overflow: hidden;
  shadow-color: rgba(34, 43, 50, 0.1);
  shadow-offset: {width: 0, height: 4};
  shadow-opacity: 1;
  shadow-radius: 40;
  elevation: 2;
`;

const CustomInput = styled(TextInput).attrs({
  placeholderTextColor: "#222B32",
  placeholder: "Search something...",
  maxLength: 28,
})`
  padding-left: 8px;
  font-size: 16px;
  font-weight: 400;
`;

export default Input;
