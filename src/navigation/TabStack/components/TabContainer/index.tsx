import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Canvas, Path } from "@shopify/react-native-skia";
import { line, curveBasis } from "d3-shape";
import React, { useMemo } from "react";
import { useWindowDimensions, View, StyleSheet } from "react-native";
import styled from "styled-components/native";

import TabBar from "../TabBar";

import { NAVIGATION_BOTTOM_TABS_HEIGHT } from "~/constants";
import { ILine } from "~/types";

const TabContainer = (props: BottomTabBarProps) => {
  const { width } = useWindowDimensions();

  const tabWidth = width / 5;
  const ratio = width / NAVIGATION_BOTTOM_TABS_HEIGHT;

  const d = useMemo(() => {
    const fixShape = line<ILine>()
      .x(({ x }) => x)
      .y(({ y }) => y)
      .curve(curveBasis)([
      { x: 0, y: 0 },
      { x: width, y: 0 },
      { x: width, y: 0 },
      { x: width, y: NAVIGATION_BOTTOM_TABS_HEIGHT * 3 },
      { x: 0, y: width },
      { x: 0, y: 0 },
      { x: 0, y: 15 },
      { x: 0, y: 30 },
      { x: 0, y: 5 },
      { x: 20, y: 0 },
    ]);

    const centerCurve = line<ILine>()
      .x(({ x }) => x)
      .y(({ y }) => y)
      .curve(curveBasis)([
      { x: tabWidth * 1.5, y: 0 },
      { x: tabWidth * 1.5 + 12, y: 0 },
      { x: tabWidth * 1.5 + 24, y: 8 },
      { x: tabWidth * 1.5 + 48, y: NAVIGATION_BOTTOM_TABS_HEIGHT * 0.5 },
      { x: tabWidth * 3.5 - 48, y: NAVIGATION_BOTTOM_TABS_HEIGHT * 0.5 },
      { x: tabWidth * 3.5 - 24, y: 8 },
      { x: tabWidth * 3.5 - 12, y: 0 },
      { x: tabWidth * 3.5, y: 0 },
    ]);

    return `${centerCurve} ${fixShape}`;
  }, []);

  return (
    <>
      <View>
        <Canvas
          style={{
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 10,
            shadowColor: "rgba(0,0,0,0.1)",
            shadowRadius: 12,
            elevation: 10,
            aspectRatio: ratio,
          }}
        >
          <Path color="white" path={d} />
        </Canvas>
        <View style={[StyleSheet.absoluteFill]}>
          <TabBar {...props} />
        </View>
      </View>
      {props?.insets?.bottom > 0 && <BottomSpace />}
    </>
  );
};

export default TabContainer;

const BottomSpace = styled.View`
  height: 15px;
  background-color: ${(props) => props.theme.COLORS["WHITE"]};
`;
