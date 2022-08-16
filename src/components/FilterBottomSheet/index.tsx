import React, { useCallback, useMemo, forwardRef } from "react";
import { View, Text, StyleSheet } from "react-native";
import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import { BottomSheetMethods } from "@gorhom/bottom-sheet/lib/typescript/types";

const FilterBottomSheet = forwardRef<BottomSheetMethods>((props, ref) => {
  const snapPoints = useMemo(() => ["50%"], []);

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
      {...props}
    >
      <View style={styles.contentContainer}>
        <Text>Awesome 🎉</Text>
      </View>
    </BottomSheet>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "grey",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
});

export default FilterBottomSheet;
