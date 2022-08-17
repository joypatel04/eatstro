import { TouchableOpacity, Text, View } from "react-native";
import styled from "styled-components/native";

import { IFilterTypeProps } from "~/types";

const FilterType = ({
  isActive,
  type,
  onPress,
  filters,
  filterKey,
}: IFilterTypeProps) => {
  return (
    <Container isActive={isActive} onPress={onPress}>
      <BorderIndicatorView isActive={isActive} />
      <AppliedFilterDot isActive={Boolean(filters?.[filterKey])} />
      <FilterText isActive={isActive}>{type}</FilterText>
    </Container>
  );
};

const Container = styled(TouchableOpacity)<{ isActive: boolean }>`
  height: 50px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-color: ${(props) =>
    props.isActive
      ? props.theme.COLORS["PRIMARY_COLOR"]
      : props.theme.COLORS["WHITE"]};
`;

const BorderIndicatorView = styled(View)<{ isActive: boolean }>`
  width: 5px;
  height: 100%;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  background-color: ${(props) =>
    props.isActive
      ? props.theme.COLORS["PRIMARY_COLOR"]
      : props.theme.COLORS["WHITE"]};
`;

const AppliedFilterDot = styled(View)<{ isActive: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  margin-left: 5px;
  background-color: ${(props) =>
    props.isActive
      ? props.theme.COLORS["PRIMARY_COLOR"]
      : props.theme.COLORS["WHITE"]};
`;

const FilterText = styled(Text)<{ isActive: boolean }>`
  margin-left: 10px;
  font-weight: 500;
  font-size: 16px;
  color: ${(props) =>
    props.isActive
      ? props.theme.COLORS["PRIMARY_COLOR"]
      : props.theme.COLORS["TITLE_COLOR"]};
`;

export default FilterType;
