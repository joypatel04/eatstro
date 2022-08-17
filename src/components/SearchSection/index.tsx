import { Ionicons } from "@expo/vector-icons";
import { Keyboard, View, StyleSheet } from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";
import styled from "styled-components/native";

import AnimatedPressable from "../AnimatedPressable";
import Input from "../Input";

import { ISearchSectionProps } from "~/types";

const AnimatedView = Animated.createAnimatedComponent(View);

const SearchSection = ({
  inputProps,
  onPressFilterButton,
}: ISearchSectionProps) => {
  const onPress = () => {
    Keyboard.dismiss();
    onPressFilterButton();
  };

  const Icon = <Ionicons name="ios-options-outline" size={24} color="#fff" />;

  return (
    <View style={{ marginBottom: 10 }}>
      <Header entering={FadeIn.delay(200).duration(1000)}>
        <Input {...inputProps} />
        <FilterButton
          style={styles.filterButton}
          Icon={Icon}
          onPress={onPress}
        />
      </Header>
    </View>
  );
};

export default SearchSection;

const styles = StyleSheet.create({
  filterButton: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 2,
  },
});

const Header = styled(AnimatedView)`
  /* width: 90%; */
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const FilterButton = styled(AnimatedPressable)`
  width: 52px;
  height: 52px;
  border-radius: 26px;
  background-color: #f16b59;
  justify-content: center;
  align-items: center;
  margin-left: 12px;
`;
