import { Ionicons } from "@expo/vector-icons";
import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import { BottomSheetMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import React, { useCallback, useMemo, forwardRef, useState } from "react";
import { TouchableOpacity, ScrollView, Pressable } from "react-native";
import styled from "styled-components/native";

import ChoiceType from "./components/ChoiceType";
import FilterType from "./components/FilterType";

import { PARENT_FILTERS, CHOICES_MAPPING } from "~/constants";
import {
  IActiveFilter,
  IFilters,
  IChoices,
  ICost,
  IFilterBottomSheetProps,
} from "~/types";
import { defaultTheme } from "~/utils/theme";

const FilterBottomSheet = forwardRef<
  BottomSheetMethods,
  IFilterBottomSheetProps
>(({ onApplyFilter, onCloseBottomSheet, ...props }, ref) => {
  const snapPoints = useMemo(() => ["80%"], []);

  const [activeFilter, setActiveFilter] = useState<IActiveFilter>("cost");
  const [filters, setFilters] = useState<IFilters>({
    cost: undefined,
    cuisines: undefined,
    dietary: undefined,
  });

  const onClearFilter = () => {
    setFilters({
      cost: undefined,
      cuisines: undefined,
      dietary: undefined,
    });
  };

  const onSelectParentFilter = (key: IActiveFilter) => {
    setActiveFilter(key);
  };

  const onPressSelectChoice = (choice: IChoices | ICost) => {
    const data = {
      ...filters,
      [activeFilter]: choice,
    };
    setFilters(data);
  };

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={1}
      />
    ),
    []
  );

  return (
    <BottomSheet
      ref={ref}
      index={-1}
      snapPoints={snapPoints}
      backdropComponent={renderBackdrop}
      enablePanDownToClose
      handleComponent={null}
      {...props}
    >
      <Container>
        <HeaderContainer>
          <HeaderTitle>Filter</HeaderTitle>
          <CloseIcon onPress={onCloseBottomSheet}>
            <Ionicons
              name="close-circle"
              size={32}
              color={defaultTheme.COLORS.ICON_COLOR}
            />
          </CloseIcon>
        </HeaderContainer>
        <CenterContainer>
          <LeftSideScrollView>
            {PARENT_FILTERS.map((p) => (
              <FilterType
                key={p.id}
                isActive={p.key === activeFilter}
                filters={filters}
                onPress={() => onSelectParentFilter(p.key)}
                filterKey={p.key}
                type={p.displayText}
              />
            ))}
          </LeftSideScrollView>
          <RightSideScrollView>
            {CHOICES_MAPPING[activeFilter].map((choice) => (
              <ChoiceType
                key={choice.id}
                activeFilter={activeFilter}
                choice={choice}
                filters={filters}
                onPress={() => onPressSelectChoice(choice)}
              />
            ))}
          </RightSideScrollView>
        </CenterContainer>
        <FooterContainer>
          <ClearButton onPress={onClearFilter}>
            <ClearTitle>Clear Filters</ClearTitle>
          </ClearButton>
          <ApplyButton onPress={() => onApplyFilter(filters)}>
            <ApplyTitle>Apply</ApplyTitle>
          </ApplyButton>
        </FooterContainer>
      </Container>
    </BottomSheet>
  );
});

const Container = styled.View`
  flex: 1;
`;

const HeaderContainer = styled.View`
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 20px;
  padding-bottom: 10px;
  flex-direction: row;
  justify-content: space-between;
  border-bottom-width: 1.5px;
  border-color: ${(props) => props.theme.COLORS["BORDER_COLOR"]};
`;

const HeaderTitle = styled.Text`
  font-size: 24px;
  line-height: 30px;
  color: ${(props) => props.theme.COLORS["TITLE_COLOR"]};
  font-weight: 700;
`;

const CloseIcon = styled(TouchableOpacity)`
  justify-content: center;
  align-items: center;
`;

const CenterContainer = styled.View`
  flex-direction: row;
  width: 100%;
  height: 65%;
`;

const FooterContainer = styled.View`
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 20px;
  padding-bottom: 20px;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 5px;
  border-top-width: 1.5px;
  border-color: ${(props) => props.theme.COLORS["BORDER_COLOR"]};
`;

const ClearButton = styled(TouchableOpacity)`
  width: 30%;
  height: 50px;
  background-color: ${(props) => props.theme.COLORS["WHITE"]};
  justify-content: center;
  align-items: center;
`;

const ClearTitle = styled.Text`
  font-size: 18px;
  line-height: 22px;
  color: ${(props) => props.theme.COLORS["PRIMARY_COLOR"]};
  font-weight: 500;
`;

const ApplyButton = styled(Pressable)`
  width: 50%;
  height: 50px;
  background-color: ${(props) => props.theme.COLORS["PRIMARY_COLOR"]};
  border-radius: 12px;
  justify-content: center;
  align-items: center;
`;

const ApplyTitle = styled.Text`
  font-size: 18px;
  line-height: 22px;
  color: ${(props) => props.theme.COLORS["WHITE"]};
  font-weight: 600;
`;

const LeftSideScrollView = styled(ScrollView)`
  flex: 0.4;
  margin-top: 5px;
  border-right-width: 1.5px;
  border-color: ${(props) => props.theme.COLORS["BORDER_COLOR"]};
`;

const RightSideScrollView = styled(ScrollView)`
  flex: 0.5;
`;

export default FilterBottomSheet;
