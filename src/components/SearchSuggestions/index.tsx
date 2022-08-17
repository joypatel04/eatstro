import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, Platform, useWindowDimensions } from "react-native";
import Animated, { FadeInDown, FadeOutDown } from "react-native-reanimated";
import styled from "styled-components/native";

import { NAVIGATION_BOTTOM_TABS_HEIGHT } from "~/constants";
import { useStore } from "~/store";
import { ISearchSuggestionsProps } from "~/types";

const SearchSuggestions = ({
  headerHeight,
  insets,
  onCloseSuggestions,
  onSelectSuggestions,
}: ISearchSuggestionsProps) => {
  const { height: fullHeight } = useWindowDimensions();
  const suggestions = useStore((state) => state.suggestions);
  const removeFromSuggestions = useStore(
    (state) => state.removeFromSuggestions
  );
  const clearSuggestions = useStore((state) => state.clearSuggestions);

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
      data={suggestions}
      ListHeaderComponent={
        <ClearAllContainer>
          {suggestions.length > 0 && (
            <ActionButton onPress={() => clearSuggestions()}>
              <ButtonText>Clear all</ButtonText>
            </ActionButton>
          )}
          <ActionButton onPress={() => onCloseSuggestions()}>
            <ButtonText>Close</ButtonText>
          </ActionButton>
        </ClearAllContainer>
      }
      renderItem={({ item }: { item: string | any }) => (
        <SuggestionView>
          <SuggestionButton onPress={() => onSelectSuggestions(item)}>
            <Suggestion>{item}</Suggestion>
          </SuggestionButton>
          <Pressable onPress={() => removeFromSuggestions(item)}>
            <Ionicons name="close" size={24} color="#222b32" />
          </Pressable>
        </SuggestionView>
      )}
    />
  );
};

const Container = styled(Animated.FlatList)`
  width: 100%;
  background-color: white;
  position: absolute;
`;

const SuggestionView = styled.View`
  width: 100%;
  height: 30px;
  padding-left: 24px;
  padding-right: 24px;
  margin-top: 8px;
  margin-bottom: 8px;
  flex-direction: row;
  justify-content: space-between;
`;

const SuggestionButton = styled(Pressable)`
  min-width: 70%;
`;

const Suggestion = styled(Text)`
  color: #222b32;
  font-size: 18px;
  line-height: 24px;
  font-weight: 500;
`;

const ClearAllContainer = styled.View`
  width: 100%;
  height: 30px;
  margin-top: 10px;
  padding-right: 16px;
  flex-direction: row;
  justify-content: flex-end;
`;

const ButtonText = styled.Text`
  color: #222b32;
  font-size: 16px;
  line-height: 22px;
  font-weight: 600;
`;

const ActionButton = styled.Pressable`
  margin-left: 20px;
`;

export default SearchSuggestions;
