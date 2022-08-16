import { useState } from "react";
import { TextInput, TextInputProps, StyleSheet } from "react-native";
import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

type InputProps = {
  inputProps: TextInputProps;
};

const Input = (props: TextInputProps) => {
  const [value, setValue] = useState<string | undefined>(undefined);
  return (
    <Container>
      <Feather name="search" size={24} color="#D1D1D1" />
      <CustomInput
        value={value}
        onChangeText={setValue}
        placeholderTextColor="#222B32"
        placeholder="Search something..."
        maxLength={28}
        returnKeyType="search"
        {...props}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    shadowColor: "rgba(34, 43, 50, 0.1)",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 40,
    elevation: 2,
  },
});

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
  padding-left: 8px;
  font-size: 16px;
  font-weight: 400;
`;

export default Input;
