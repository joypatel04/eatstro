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
    <Container
      style={{ borderColor: isActive ? "#f16b59" : "#FFF" }}
      onPress={onPress}
    >
      <View
        style={{
          backgroundColor: isActive ? "#f16b59" : "#FFF",
          width: 5,
          height: "100%",
          borderTopRightRadius: 20,
          borderBottomRightRadius: 20,
        }}
      />
      <AppliedFilterDot color={filters?.[filterKey] ? "#f16b59" : "#fff"} />

      <FilterText
        style={{
          color: isActive ? "#f16b59" : "#222b32",
        }}
      >
        {type}
      </FilterText>
    </Container>
  );
};

const Container = styled(TouchableOpacity)`
  height: 50px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const AppliedFilterDot = styled(View)`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  margin-left: 5px;
  background-color: ${(props: { color: string }) => props.color};
`;

const FilterText = styled(Text)`
  margin-left: 10px;
  font-weight: 500;
  font-size: 16px;
`;

export default FilterType;
