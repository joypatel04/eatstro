import { useRef, useState } from "react";
import { Keyboard, View, StyleSheet } from "react-native";
import Animated, {
  FadeIn,
  Transition,
  Transitioning,
  useDerivedValue,
  Easing,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components/native";
import AnimatedPressable from "../AnimatedPressable";
import Input from "../Input";

type AnimatedAccordionProps = {
  onFocusSearch: () => void;
  onBlurSearch: () => void;
};

const AnimatedView = Animated.createAnimatedComponent(View);

const transition = (
  <Transition.Together>
    <Transition.In type="fade" durationMs={200} />
    <Transition.Change />
    <Transition.Out type="fade" durationMs={200} />
  </Transition.Together>
);

const AnimatedAccordion = ({
  onFocusSearch,
  onBlurSearch,
}: AnimatedAccordionProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const ref = useRef<any>(null);

  const onPressHandler = () => {
    Keyboard.dismiss();
    ref?.current?.animateNextTransition();
    setOpen(!open);
  };

  const rotateZ = useDerivedValue(
    () =>
      withTiming(open ? 90 : 0, {
        duration: 200,
        easing: Easing.linear,
      }),
    [open]
  );

  const animatedLoaderStyle = useAnimatedStyle(() => ({
    transform: [{ rotateZ: `${rotateZ.value}deg` }],
  }));

  const Icon = (
    <Animated.View style={animatedLoaderStyle}>
      {open ? (
        <Ionicons name="close" size={24} color="#fff" />
      ) : (
        <Ionicons name="ios-options-outline" size={24} color="#fff" />
      )}
    </Animated.View>
  );

  return (
    <Transitioning.View
      ref={ref}
      transition={transition}
      style={{ marginBottom: 10 }}
    >
      <Header entering={FadeIn.delay(200).duration(1000)}>
        <Input onBlur={onBlurSearch} onFocus={onFocusSearch} />
        <FilterButton
          style={styles.filterButton}
          Icon={Icon}
          onPress={onPressHandler}
        />
      </Header>
      {open && <FiltersSection>{/* $$$ Filter goes here  */}</FiltersSection>}
    </Transitioning.View>
  );
};

const styles = StyleSheet.create({
  filterButton: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 2,
  },
});

const Header = styled(AnimatedView)`
  /* width: 90%; */
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const FiltersSection = styled(AnimatedView)`
  padding-top: 12px;
`;

const FilterButton = styled(AnimatedPressable)`
  width: 52px;
  height: 52px;
  border-radius: 26px;
  background-color: #f16b59;
  justify-content: center;
  align-items: center;
  margin-left: 12px;
`;

export default AnimatedAccordion;
