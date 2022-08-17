import { Ionicons } from "@expo/vector-icons";
import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import { BottomSheetMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import React, { useCallback, useMemo, forwardRef } from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

interface IFilterBottomSheet {
  onCloseBottomSheet: () => void;
}

const FilterBottomSheet = forwardRef<BottomSheetMethods, IFilterBottomSheet>(
  (props, ref) => {
    const snapPoints = useMemo(() => ["50%"], []);

    // TO-DO: Handle directly through hook
    const onApplyFilter = () => {};
    const onClearFilter = () => {};

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
            <CloseIcon onPress={props.onCloseBottomSheet}>
              <Ionicons name="close-circle" size={32} color="#D1D1D1" />
            </CloseIcon>
          </HeaderContainer>
          <FooterContainer>
            <ClearButton onPress={onClearFilter}>
              <ClearTitle>Clear Filters</ClearTitle>
            </ClearButton>
            <ApplyButton onPress={onApplyFilter}>
              <ApplyTitle>Apply</ApplyTitle>
            </ApplyButton>
          </FooterContainer>
        </Container>
      </BottomSheet>
    );
  }
);

const Container = styled.View`
  flex: 1;
`;

const HeaderContainer = styled.View`
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 20px;
  padding-bottom: 20px;
  flex-direction: row;
  justify-content: space-between;
`;

const HeaderTitle = styled.Text`
  font-size: 24px;
  line-height: 30px;
  color: #222b32;
  font-weight: 700;
`;

const CloseIcon = styled(TouchableOpacity)`
  justify-content: center;
  align-items: center;
`;

const FooterContainer = styled.View`
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 20px;
  padding-bottom: 20px;
  flex-direction: row;
  justify-content: space-around;
`;

const ClearButton = styled(TouchableOpacity)`
  width: 30%;
  height: 50px;
  background-color: #fff;
  justify-content: center;
  align-items: center;
`;

const ClearTitle = styled.Text`
  font-size: 18px;
  line-height: 22px;
  color: #f16b59;
  font-weight: 500;
`;

const ApplyButton = styled(TouchableOpacity)`
  width: 50%;
  height: 50px;
  background-color: #f16b59;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
`;

const ApplyTitle = styled.Text`
  font-size: 18px;
  line-height: 22px;
  color: #fff;
  font-weight: 600;
`;

export default FilterBottomSheet;
