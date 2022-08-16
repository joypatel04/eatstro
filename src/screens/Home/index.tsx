import { useState, useMemo, useRef } from "react";
import { View, FlatList, Platform } from "react-native";
import styled from "styled-components/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { BottomSheetMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import { FlashList } from "@shopify/flash-list";
import { Portal } from "@gorhom/portal";
import {
  SearchSection,
  Header,
  SearchSuggestions,
  FilterBottomSheet,
} from "~/components";
import FoodItem from "./components/FoodItem";

import { DATA } from "./data";
import { useStore } from "~/store";

const Home = () => {
  // Note: I'd have used SafeAreaView instead but FlashList is not working with SafeAreaView
  const insets = useSafeAreaInsets();
  const bottomSheetRef = useRef<BottomSheetMethods>(null!);

  const addToSuggestions = useStore((state) => state.addToSuggestions);
  const [searchValue, setSearchValue] = useState<string>("");
  const [headerHeight, setTopHeaderHeight] = useState<number>(0);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);

  const onFocusSearch = () => {
    setShowSuggestions(true);
  };

  const onCloseSuggestions = () => {
    setSearchValue("");
    setShowSuggestions(false);
  };

  const onSelectFromSuggestions = (value: string) => {
    setSearchValue(value);
    setShowSuggestions(false);
  };

  const onSubmitEditing = () => {
    if (searchValue.length) {
      addToSuggestions(searchValue);
    }
    setShowSuggestions(false);
  };

  const onPressFilterButton = () => {
    bottomSheetRef?.current?.expand();
  };

  const listContainerStyle = useMemo(
    () => ({
      paddingBottom: headerHeight + 52, // Value 52 is header height
    }),
    []
  );

  return (
    <>
      <Container paddingTop={insets.top}>
        <View
          onLayout={({ nativeEvent }) => {
            setTopHeaderHeight(nativeEvent?.layout?.height);
          }}
        >
          <Header />
          <SearchSection
            inputProps={{
              value: searchValue,
              onChangeText: setSearchValue,
              onFocus: onFocusSearch,
              onSubmitEditing: onSubmitEditing,
            }}
            onPressFilterButton={onPressFilterButton}
          />
        </View>
        <ListHeader>Search results for ...</ListHeader>
        {Platform.OS === "ios" ? (
          <FlashList
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
      {showSuggestions && (
        <SearchSuggestions
          onCloseSuggestions={onCloseSuggestions}
          onSelectSuggestions={onSelectFromSuggestions}
          insets={insets}
          headerHeight={headerHeight}
        />
      )}
      <Portal hostName="filterBottomSheet">
        <FilterBottomSheet ref={bottomSheetRef} />
      </Portal>
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
