import { BottomSheetMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import { Portal } from "@gorhom/portal";
import { FlashList } from "@shopify/flash-list";
import { useState, useMemo, useRef } from "react";
import { View, FlatList as List, Platform } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import styled from "styled-components/native";

import EmptyList from "./components/EmptyList";
import FoodItem from "./components/FoodItem";

import {
  SearchSection,
  Header,
  SearchSuggestions,
  FilterBottomSheet,
  LoadingIndicator,
} from "~/components";
import { Item } from "~/generated/graphql";
import { useGetFoodItems } from "~/hooks/useGetFoodItems";
import { IFilters, IFoodListItemProps } from "~/types";

const FlatList = Platform.OS === "ios" ? FlashList : List;

const Home = () => {
  // Note: I'd have used SafeAreaView instead but FlashList is not working with SafeAreaView
  const insets = useSafeAreaInsets();
  const bottomSheetRef = useRef<BottomSheetMethods>(null!);

  const [headerHeight, setTopHeaderHeight] = useState<number>(0);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const { searchName, setSearchName, items, isFetching, setAdditionalFilters } =
    useGetFoodItems();

  const onFocusSearch = () => {
    setShowSuggestions(true);
  };

  const onCloseSuggestions = () => {
    setShowSuggestions(false);
  };

  const onSelectFromSuggestions = (value: string) => {
    setSearchName(value);
    onCloseSuggestions();
  };

  const onPressFilterButton = () => {
    bottomSheetRef?.current?.expand();
  };

  const onCloseBottomSheet = () => {
    bottomSheetRef?.current?.close();
  };

  const onApplyFilter = (filter: IFilters) => {
    setAdditionalFilters({
      costRange: filter?.cost?.value || null,
      dietaryChoice: filter?.dietary?.value || null,
      cuisineType: filter?.cuisines?.value || null,
    });
    onCloseBottomSheet();
  };

  const listContainerStyle = useMemo(
    () => ({
      paddingBottom: Platform.OS === "android" ? headerHeight + 52 : 0, // Value 52 is header height: ;
    }),
    []
  );

  const renderItem = ({ item }: IFoodListItemProps) => <FoodItem item={item} />;

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
              value: searchName,
              onChangeText: setSearchName,
              onFocus: onFocusSearch,
              onSubmitEditing: onCloseSuggestions,
            }}
            onPressFilterButton={onPressFilterButton}
          />
        </View>
        {searchName !== "" && (
          <ListHeader>{`Search results for "${searchName}"`}</ListHeader>
        )}

        {isFetching ? (
          <LoadingIndicator />
        ) : (
          <FlatList
            contentContainerStyle={listContainerStyle}
            data={items}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            {...(Platform.OS === "ios" && {
              estimatedItemSize: 200,
            })}
            // horizontal // Uncommenting flag will turn list into horizontally
            renderItem={renderItem}
            ListEmptyComponent={<EmptyList searchName={searchName} />}
            keyExtractor={({ id }: Item) => id?.toString() as string}
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
        <FilterBottomSheet
          ref={bottomSheetRef}
          onApplyFilter={onApplyFilter}
          onCloseBottomSheet={onCloseBottomSheet}
        />
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
  /* padding-top: 12px; */
  padding-bottom: 12px;
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  color: #222b32;
`;

export default Home;
