import { Pressable } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  ZoomIn,
} from "react-native-reanimated";

import { AnimatedPressableProps } from "~/types";

const ReanimatedPressable = Animated.createAnimatedComponent(Pressable);

const AnimatedPressable = ({
  Icon = undefined,
  style = {},
  enableEnterAnimation = false,
  enterAnimationDelay = 0,
  ...restProps
}: AnimatedPressableProps) => {
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
