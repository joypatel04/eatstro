import { useState } from "react";
import { TouchableWithoutFeedback, Keyboard, View } from "react-native";
import styled from "styled-components/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { FlashList } from "@shopify/flash-list";
import { AnimatedAccordion, Header, SearchSuggestions } from "~/components";
import FoodItem from "./components/FoodItem";

import { DATA } from "./data";

const Home = () => {
  // Note: I'd have used SafeAreaView instead but FlashList is not working with SafeAreaView
  const insets = useSafeAreaInsets();
  const [headerHeight, setTopHeaderHeight] = useState<number>(0);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);

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
            <AnimatedAccordion
              onFocusSearch={() => {
                setShowSuggestions(true);
              }}
              onBlurSearch={() => {
                setShowSuggestions(false);
              }}
            />
          </View>
          <FlashList
            data={DATA}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => <FoodItem item={item} />}
            estimatedItemSize={200}
            ListHeaderComponent={
              <>
                <ListHeader>Search results for ...</ListHeader>
              </>
            }
          />
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