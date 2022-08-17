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
      <RadioButton isSelected={isSelected}>
        <RadioButtonFill isSelected={isSelected} />
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

const RadioButton = styled(View)<{ isSelected: boolean }>`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: white;
  justify-content: center;
  align-items: center;
  border-width: 1px;
  border-color: ${(props) =>
    props.isSelected
      ? props.theme.COLORS["PRIMARY_COLOR"]
      : props.theme.COLORS["ICON_COLOR"]}; ;
`;

const RadioButtonFill = styled(View)<{ isSelected: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: ${(props) =>
    props.isSelected
      ? props.theme.COLORS["PRIMARY_COLOR"]
      : props.theme.COLORS["WHITE"]};
`;

export default ChoiceType;
