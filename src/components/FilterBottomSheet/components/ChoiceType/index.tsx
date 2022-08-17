import { TouchableOpacity, Text, View } from "react-native";
import styled from "styled-components/native";

import { IChoiceTypeProps } from "~/types";

const ChoiceType = ({
  choice,
  activeFilter,
  filters,
  onPress,
}: IChoiceTypeProps) => {
  const isSelected =
    activeFilter && filters?.[activeFilter]?.displayText === choice.displayText;
  return (
    <Container onPress={onPress}>
      <RadioButton
        style={{
          borderWidth: 1,
          borderColor: isSelected ? "#f16b59" : "#d1d1d1",
        }}
      >
        <RadioButtonFill
          style={{ backgroundColor: isSelected ? "#f16b59" : "#fff" }}
        />
      </RadioButton>
      <FilterText>{choice.displayText}</FilterText>
    </Container>
  );
};

const Container = styled(TouchableOpacity)`
  height: 50px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-left: 20px;
`;

const FilterText = styled(Text)`
  margin-left: 16px;
  font-weight: 500;
  font-size: 16px;
`;

const RadioButton = styled(View)`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: white;
  justify-content: center;
  align-items: center;
`;

const RadioButtonFill = styled(View)`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: white;
`;

export default ChoiceType;
