import { ReactElement } from "react";
import { Pressable, PressableProps, StyleProp, ViewStyle } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  ZoomIn,
} from "react-native-reanimated";

interface Props extends PressableProps {
  Icon?: ReactElement<unknown, string>;
  style?: StyleProp<ViewStyle>;
  enableEnterAnimation?: boolean;
  enterAnimationDelay?: number;
}

const ReanimatedPressable = Animated.createAnimatedComponent(Pressable);

const AnimatedPressable = ({
  Icon = undefined,
  style = {},
  enableEnterAnimation = false,
  enterAnimationDelay = 0,
  ...restProps
}: Props) => {
  const scale = useSharedValue(1);

  const animatedButtonStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <ReanimatedPressable
      entering={
        enableEnterAnimation
          ? ZoomIn.delay(enterAnimationDelay).duration(500)
          : undefined
      }
      onPressIn={() => {
        scale.value = withTiming(0.92);
      }}
      onPressOut={() => {
        scale.value = withTiming(1);
      }}
      style={[style, animatedButtonStyle]}
      {...restProps}
    >
      {Icon && Icon}
    </ReanimatedPressable>
  );
};

export default AnimatedPressable;
