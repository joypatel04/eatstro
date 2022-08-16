import Animated, { FadeInDown, FadeOutDown } from "react-native-reanimated";
import styled from "styled-components/native";
import { Platform, useWindowDimensions } from "react-native";
import { NAVIGATION_BOTTOM_TABS_HEIGHT } from "~/constants";
import { EdgeInsets } from "react-native-safe-area-context";

type SearchSuggestions = {
  headerHeight: number;
  insets: EdgeInsets;
};

const SearchSuggestions = ({ headerHeight, insets }: SearchSuggestions) => {
  const { height: fullHeight } = useWindowDimensions();

  // TO-DO: Need to find a better way to deal with it.
  const additionalSpace =
    Platform.OS === "android"
      ? 0
      : Platform.OS === "ios" && insets.top > 20
      ? insets.top + 15
      : insets.top;

  const height = fullHeight - headerHeight - additionalSpace;
  return (
    <Container
      style={{ height, bottom: -NAVIGATION_BOTTOM_TABS_HEIGHT }}
      entering={FadeInDown.duration(500)}
      exiting={FadeOutDown.duration(200)}
    ></Container>
  );
};

export default SearchSuggestions;

const Container = styled(Animated.ScrollView)`
  width: 100%;
  background-color: white;
  position: absolute;
`;
