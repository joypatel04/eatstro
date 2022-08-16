import { useState, useMemo } from "react";
import {
  TouchableWithoutFeedback,
  Keyboard,
  View,
  FlatList,
  Platform,
} from "react-native";
import styled from "styled-components/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { FlashList } from "@shopify/flash-list";
import { SearchSection, Header, SearchSuggestions } from "~/components";
import FoodItem from "./components/FoodItem";

import { DATA } from "./data";

const Home = () => {
  // Note: I'd have used SafeAreaView instead but FlashList is not working with SafeAreaView
  const insets = useSafeAreaInsets();
  const [searchValue, setSearchValue] = useState<string>("");
  const [headerHeight, setTopHeaderHeight] = useState<number>(0);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);

  const onFocusSearch = () => {
    setShowSuggestions(true);
  };

  const onBlurSearch = () => {
    setShowSuggestions(false);
  };

  const listContainerStyle = useMemo(
    () => ({
      paddingBottom: headerHeight + 52, // Value 52 is header height
    }),
    []
  );

  return (
    <>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <Container paddingTop={insets.top}>
          <View
            onLayout={({ nativeEvent }) => {
              setTopHeaderHeight(nativeEvent?.layout?.height);
            }}
          >
            <Header />
            <SearchSection
              value={searchValue}
              onChangeText={setSearchValue}
              onFocus={onFocusSearch}
              onBlur={onBlurSearch}
            />
          </View>
          <ListHeader>Search results for ...</ListHeader>
          {Platform.OS === "ios" ? (
            <FlashList
              contentContainerStyle={listContainerStyle}
              data={DATA}
              // horizontal // Uncommenting flag will turn list into horizontally
              showsVerticalScrollIndicator={false}
              estimatedItemSize={200}
              renderItem={({ item }) => <FoodItem item={item} />}
            />
          ) : (
            <FlatList
              contentContainerStyle={listContainerStyle}
              data={DATA}
              // horizontal // Uncommenting flag will turn list into horizontally
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => <FoodItem item={item} />}
            />
          )}
        </Container>
      </TouchableWithoutFeedback>
      {showSuggestions && (
        <SearchSuggestions insets={insets} headerHeight={headerHeight} />
      )}
    </>
  );
};

const Container = styled.View`
  padding: 16px;
  padding-bottom: 8px;
  flex-grow: 1;
  padding-top: ${({ paddingTop }: { paddingTop: number }) => paddingTop}px;
`;

const ListHeader = styled.Text`
  padding-top: 12px;
  padding-bottom: 12px;
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  color: #222b32;
`;

export default Home;
